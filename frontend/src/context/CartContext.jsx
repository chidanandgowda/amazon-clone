import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import api from '../services/api';

const CartContext = createContext();

const computeCartSummary = (items = []) => {
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 0;
  const totalBeforeTax = subtotal + shipping;
  const estimatedTax = parseFloat((totalBeforeTax * 0.07).toFixed(2));
  const orderTotal = parseFloat((totalBeforeTax + estimatedTax).toFixed(2));

  return {
    itemCount,
    subtotal,
    shipping,
    totalBeforeTax,
    estimatedTax,
    orderTotal,
  };
};

const normalizeCart = (data = {}) => {
  const items = Array.isArray(data.items) ? data.items : [];
  return {
    ...data,
    items,
    summary: data.summary || computeCartSummary(items),
  };
};

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => normalizeCart({ items: [] }));
  const [loading, setLoading] = useState(true);

  const fetchCart = useCallback(async () => {
    try {
      const data = await api.getCart();
      setCart(normalizeCart(data));
    } catch (err) {
      console.error('Error fetching cart:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  const addToCart = async (productId, quantity = 1) => {
    try {
      const data = await api.addToCart(productId, quantity);
      setCart(normalizeCart(data));
      return data;
    } catch (err) {
      console.error('Error adding to cart:', err);
      throw err;
    }
  };

  const updateQuantity = async (itemId, quantity) => {
    try {
      const data = await api.updateCartItem(itemId, quantity);
      setCart(normalizeCart(data));
      return data;
    } catch (err) {
      console.error('Error updating cart:', err);
      throw err;
    }
  };

  const removeItem = async (itemId) => {
    try {
      const data = await api.deleteCartItem(itemId);
      setCart(normalizeCart(data));
      return data;
    } catch (err) {
      console.error('Error removing from cart:', err);
      throw err;
    }
  };

  const cartCount = cart.summary?.itemCount || 0;

  return (
    <CartContext.Provider value={{ cart, cartCount, loading, addToCart, updateQuantity, removeItem, fetchCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
