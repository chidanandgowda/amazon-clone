require('dotenv').config();
const express = require('express');
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');
const connectDB = require('./config/db');
const productRoutes = require('./routes/products');
const cartRoutes = require('./routes/cart');
const authRoutes = require('./routes/auth');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:5173', credentials: true }));
app.use(express.json());

// Session (required by Passport even with JWT strategy for OAuth flow)
app.use(
  session({
    secret: process.env.SESSION_SECRET || 'procommerce-session-secret',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, httpOnly: true, maxAge: 24 * 60 * 60 * 1000 },
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/api/auth', authRoutes);
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
    console.log(`   Auth:     http://localhost:${PORT}/api/auth`);
    console.log(`   Products: http://localhost:${PORT}/api/products`);
    console.log(`   Cart:     http://localhost:${PORT}/api/cart`);
  });
});
