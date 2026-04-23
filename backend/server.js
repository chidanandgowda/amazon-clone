require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const productRoutes = require('./routes/products');
const cartRoutes = require('./routes/cart');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(express.json());

// Routes
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Connect to DB then start server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`\n🚀 ProCommerce API running on http://localhost:${PORT}`);
    console.log(`   Products: http://localhost:${PORT}/api/products`);
    console.log(`   Cart:     http://localhost:${PORT}/api/cart`);
  });
});
