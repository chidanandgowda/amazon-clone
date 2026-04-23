const API_BASE = 'http://localhost:5000/api';
const SESSION_ID = 'demo-session';

const headers = {
  'Content-Type': 'application/json',
  'x-session-id': SESSION_ID,
};

const api = {
  // ---- Products ----
  async getProducts(options = {}) {
    const params = new URLSearchParams();
    if (options.badgeType) params.set('badgeType', options.badgeType);
    const query = params.toString();
    const url = query ? `${API_BASE}/products?${query}` : `${API_BASE}/products`;
    const res = await fetch(url, { headers });
    if (!res.ok) throw new Error('Failed to fetch products');
    return res.json();
  },

  async getProduct(id) {
    const res = await fetch(`${API_BASE}/products/${id}`, { headers });
    if (!res.ok) throw new Error('Failed to fetch product');
    return res.json();
  },

  // ---- Cart ----
  async getCart() {
    const res = await fetch(`${API_BASE}/cart`, { headers });
    if (!res.ok) throw new Error('Failed to fetch cart');
    return res.json();
  },

  async addToCart(productId, quantity = 1) {
    const res = await fetch(`${API_BASE}/cart`, {
      method: 'POST',
      headers,
      body: JSON.stringify({ productId, quantity }),
    });
    if (!res.ok) throw new Error('Failed to add to cart');
    return res.json();
  },

  async updateCartItem(itemId, quantity) {
    const res = await fetch(`${API_BASE}/cart/${itemId}`, {
      method: 'PUT',
      headers,
      body: JSON.stringify({ quantity }),
    });
    if (!res.ok) throw new Error('Failed to update cart item');
    return res.json();
  },

  async deleteCartItem(itemId) {
    const res = await fetch(`${API_BASE}/cart/${itemId}`, {
      method: 'DELETE',
      headers,
    });
    if (!res.ok) throw new Error('Failed to delete cart item');
    return res.json();
  },
};

export default api;
