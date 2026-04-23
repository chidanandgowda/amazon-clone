import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { CartProvider } from './context/CartContext';
import AuthCallbackPage from './pages/AuthCallbackPage/AuthCallbackPage';
import InfoPage from './pages/InfoPage/InfoPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ProductListingPage from './pages/ProductListingPage';
import ShoppingCartPage from './pages/ShoppingCartPage';
import SignInPage from './pages/SignInPage/SignInPage';

function App() {
  return (
    <Router>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductListingPage />} />
          <Route
            path="/best-sellers"
            element={
              <ProductListingPage
                title="Best Sellers"
                subtitle="The most-loved items based on customer orders."
                badgeType="bestseller"
              />
            }
          />
          <Route
            path="/deals"
            element={
              <ProductListingPage
                title="Deals"
                subtitle="Limited-time savings across top categories."
                badgeType="deal"
              />
            }
          />
          <Route
            path="/customer-service"
            element={
              <InfoPage
                title="Customer Service"
                subtitle="How can we help?"
                body="Browse orders, manage returns, and get quick answers to common questions."
                ctaLabel="Visit Help Center"
                ctaHref="#"
              />
            }
          />
          <Route
            path="/registry"
            element={
              <InfoPage
                title="Registry"
                subtitle="Create and share your perfect wish list."
                body="Start a registry for weddings, babies, birthdays, or any milestone."
                ctaLabel="Start a Registry"
                ctaHref="#"
              />
            }
          />
          <Route
            path="/gift-cards"
            element={
              <InfoPage
                title="Gift Cards"
                subtitle="Give the gift of choice."
                body="Send digital cards instantly or schedule them for later."
                ctaLabel="Shop Gift Cards"
                ctaHref="#"
              />
            }
          />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignInPage defaultTab="signup" />} />
          <Route path="/auth/callback" element={<AuthCallbackPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/cart" element={<ShoppingCartPage />} />
        </Routes>
        <Footer />
      </CartProvider>
    </Router>
  );
}

export default App;

