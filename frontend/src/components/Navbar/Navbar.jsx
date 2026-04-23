import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useCart } from '../../context/CartContext';
import './Navbar.css';

const navLinks = [
  { label: 'All', path: '/' },
  { label: 'Best Sellers', path: '/best-sellers' },
  { label: 'Deals', path: '/deals' },
  { label: 'Customer Service', path: '/customer-service' },
  { label: 'Registry', path: '/registry' },
  { label: 'Gift Cards', path: '/gift-cards' },
];

function Navbar() {
  const location = useLocation();
  const { cartCount } = useCart();
  const { user, signOut } = useAuth();

  return (
    <nav className="navbar" id="navbar">
      {/* Main Top Row */}
      <div className="navbar__top">
        <Link className="navbar__brand" to="/">
          ProCommerce
        </Link>

        {/* Search Bar */}
        <div className="navbar__search">
          <div className="navbar__search-container">
            <select className="navbar__search-select" id="search-department">
              <option>All Departments</option>
            </select>
            <input
              className="navbar__search-input"
              type="text"
              placeholder="Search ProCommerce"
              id="search-input"
            />
            <button className="navbar__search-btn" id="search-button">
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                search
              </span>
            </button>
          </div>
        </div>

        {/* Actions */}
        <div className="navbar__actions">
          {user ? (
            <button
              className="navbar__action-link navbar__action-button"
              onClick={signOut}
              id="account-link"
              type="button"
            >
              <span className="navbar__action-label">Hello, {user.name}</span>
              <span className="navbar__action-text">Sign Out</span>
            </button>
          ) : (
            <Link className="navbar__action-link" to="/signin" id="account-link">
              <span className="navbar__action-label">Hello, Sign in</span>
              <span className="navbar__action-text">Account</span>
            </Link>
          )}
          <Link
            className={`navbar__action-link navbar__cart-link ${location.pathname === '/cart' ? 'navbar__cart-link--active' : ''}`}
            to="/cart"
            id="cart-link"
          >
            <div className="navbar__cart-icon">
              <span
                className="material-symbols-outlined navbar__cart-symbol"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                shopping_cart
              </span>
              <span className="navbar__cart-badge">{cartCount}</span>
            </div>
            <span className="navbar__cart-text">Cart</span>
          </Link>
        </div>
      </div>

      {/* Secondary Navigation Row */}
      <div className="navbar__secondary">
        <div className="navbar__secondary-inner hide-scrollbar">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              className={`navbar__nav-link ${location.pathname === link.path ? 'navbar__nav-link--active' : ''}`}
              to={link.path}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
