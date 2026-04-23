import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BuyBox.css';

function BuyBox({ product, onAddToCart }) {
  const [quantity, setQuantity] = useState(1);
  const [adding, setAdding] = useState(false);
  const [added, setAdded] = useState(false);
  const navigate = useNavigate();

  const handleAddToCart = async () => {
    if (!onAddToCart) return;
    setAdding(true);
    try {
      await onAddToCart(product._id, quantity);
      setAdded(true);
      setTimeout(() => setAdded(false), 2000);
    } catch (err) {
      console.error('Add to cart failed:', err);
    } finally {
      setAdding(false);
    }
  };

  const handleBuyNow = async () => {
    if (!onAddToCart) return;
    setAdding(true);
    try {
      await onAddToCart(product._id, quantity);
      navigate('/cart');
    } catch (err) {
      console.error('Buy now failed:', err);
    } finally {
      setAdding(false);
    }
  };

  return (
    <div className="buy-box" id="buy-box">
      <div className="buy-box__price">${product.price.toFixed(2)}</div>

      <div className="buy-box__delivery">
        <span className="buy-box__delivery-link">FREE delivery</span>{' '}
        <strong>Tomorrow, Oct 25</strong>. Order within{' '}
        <span className="buy-box__delivery-countdown">2 hrs 30 mins</span>
      </div>

      <div className="buy-box__location">
        <span className="material-symbols-outlined buy-box__location-icon">location_on</span>
        <span className="buy-box__location-text">Deliver to New York 10001</span>
      </div>

      <div className="buy-box__stock">{product.inStock ? 'In Stock' : 'Out of Stock'}</div>

      <div className="buy-box__quantity">
        <label className="sr-only" htmlFor="quantity-select">
          Quantity
        </label>
        <select
          className="buy-box__quantity-select"
          id="quantity-select"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {[1, 2, 3, 4, 5].map((q) => (
            <option key={q} value={q}>
              Qty: {q}
            </option>
          ))}
        </select>
      </div>

      <div className="buy-box__actions">
        <button
          className={`buy-box__btn buy-box__btn--cart ${added ? 'buy-box__btn--added' : ''}`}
          onClick={handleAddToCart}
          disabled={adding || !product.inStock}
          id="add-to-cart-btn"
        >
          {adding ? 'Adding...' : added ? '✓ Added to Cart' : 'Add to Cart'}
        </button>
        <button
          className="buy-box__btn buy-box__btn--buy"
          onClick={handleBuyNow}
          disabled={adding || !product.inStock}
          id="buy-now-btn"
        >
          Buy Now
        </button>
      </div>

      <div className="buy-box__secure">
        <span className="material-symbols-outlined buy-box__secure-icon">lock</span>
        <span>Secure transaction</span>
      </div>

      <div className="buy-box__meta">
        <span className="buy-box__meta-label">Ships from</span>
        <span className="buy-box__meta-value">ProCommerce</span>

        <span className="buy-box__meta-label">Sold by</span>
        <span className="buy-box__meta-value">ProCommerce</span>

        <span className="buy-box__meta-label">Returns</span>
        <span className="buy-box__meta-value buy-box__meta-value--link">Returnable until Jan 31</span>
      </div>
    </div>
  );
}

export default BuyBox;
