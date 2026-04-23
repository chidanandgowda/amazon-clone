const express = require('express');
const router = express.Router();
const Cart = require('../models/Cart');
const Product = require('../models/Product');

// Helper: get or create cart by sessionId
async function getOrCreateCart(sessionId) {
  let cart = await Cart.findOne({ sessionId });
  if (!cart) {
    cart = new Cart({ sessionId, items: [] });
    await cart.save();
  }
  return cart;
}

// GET /api/cart — get cart for session
router.get('/', async (req, res) => {
  try {
    const sessionId = req.headers['x-session-id'] || 'demo-session';
    const cart = await getOrCreateCart(sessionId);
    res.json(cart);
  } catch (error) {
    console.error('Error fetching cart:', error);
    res.status(500).json({ message: 'Server error fetching cart' });
  }
});

// POST /api/cart — add item to cart
router.post('/', async (req, res) => {
  try {
    const sessionId = req.headers['x-session-id'] || 'demo-session';
    const { productId, quantity = 1 } = req.body;

    if (!productId) {
      return res.status(400).json({ message: 'productId is required' });
    }

    // Find the product to get its details
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    const cart = await getOrCreateCart(sessionId);

    // Check if product already in cart
    const existingItem = cart.items.find(
      (item) => item.productId.toString() === productId
    );

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.items.push({
        productId: product._id,
        title: product.title,
        price: product.price,
        quantity,
        image: product.mainImage,
        imageAlt: product.mainImageAlt,
        inStock: product.inStock,
        freeReturns: true,
      });
    }

    await cart.save();
    res.json(cart);
  } catch (error) {
    console.error('Error adding to cart:', error);
    res.status(500).json({ message: 'Server error adding to cart' });
  }
});

// PUT /api/cart/:itemId — update item quantity
router.put('/:itemId', async (req, res) => {
  try {
    const sessionId = req.headers['x-session-id'] || 'demo-session';
    const { quantity } = req.body;

    if (!quantity || quantity < 1) {
      return res.status(400).json({ message: 'quantity must be >= 1' });
    }

    const cart = await getOrCreateCart(sessionId);
    const item = cart.items.id(req.params.itemId);

    if (!item) {
      return res.status(404).json({ message: 'Cart item not found' });
    }

    item.quantity = quantity;
    await cart.save();
    res.json(cart);
  } catch (error) {
    console.error('Error updating cart item:', error);
    res.status(500).json({ message: 'Server error updating cart item' });
  }
});

// DELETE /api/cart/:itemId — remove item from cart
router.delete('/:itemId', async (req, res) => {
  try {
    const sessionId = req.headers['x-session-id'] || 'demo-session';
    const cart = await getOrCreateCart(sessionId);

    const item = cart.items.id(req.params.itemId);
    if (!item) {
      return res.status(404).json({ message: 'Cart item not found' });
    }

    cart.items.pull(req.params.itemId);
    await cart.save();
    res.json(cart);
  } catch (error) {
    console.error('Error deleting cart item:', error);
    res.status(500).json({ message: 'Server error deleting cart item' });
  }
});

module.exports = router;
