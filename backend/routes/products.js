const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// GET /api/products — list all products (card-level fields only)
router.get('/', async (req, res) => {
  try {
    const { badgeType } = req.query;
    const query = badgeType ? { badgeType } : {};
    const products = await Product.find(query).select(
      'title price rating ratingsCount badge badgeType mainImage mainImageAlt inStock'
    );
    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ message: 'Server error fetching products' });
  }
});

// GET /api/products/:id — single product full detail
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    console.error('Error fetching product:', error);
    res.status(500).json({ message: 'Server error fetching product' });
  }
});

module.exports = router;
