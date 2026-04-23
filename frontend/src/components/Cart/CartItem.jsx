import { useEffect, useState } from 'react';
import './CartItem.css';

function CartItem({ item, onQuantityChange, onDelete }) {
  const [qty, setQty] = useState(item.quantity);

  useEffect(() => {
    setQty(item.quantity);
  }, [item.quantity]);

  const handleDecrease = () => {
    if (qty > 1) {
      const newQty = qty - 1;
      setQty(newQty);
      onQuantityChange && onQuantityChange(item.id, newQty);
    }
  };

  const handleIncrease = () => {
    const newQty = qty + 1;
    setQty(newQty);
    onQuantityChange && onQuantityChange(item.id, newQty);
  };

  const handleInputChange = (e) => {
    const val = Math.max(1, parseInt(e.target.value) || 1);
    setQty(val);
    onQuantityChange && onQuantityChange(item.id, val);
  };

  return (
    <div className="cart-item" id={`cart-item-${item.id}`}>
      {/* Image */}
      <div className="cart-item__image-wrapper">
        <img src={item.image} alt={item.imageAlt} className="cart-item__image" />
      </div>

      {/* Details */}
      <div className="cart-item__details">
        <div className="cart-item__header">
          <div className="cart-item__info">
            <h2 className="cart-item__title">{item.title}</h2>
            {item.inStock && <p className="cart-item__stock">In Stock</p>}
            {item.freeReturns && (
              <p className="cart-item__returns">Eligible for FREE Returns</p>
            )}
          </div>
          <span className="cart-item__price">${item.price.toFixed(2)}</span>
        </div>

        {/* Actions Row */}
        <div className="cart-item__actions">
          {/* Quantity Control */}
          <div className="cart-item__quantity">
            <button
              className="cart-item__qty-btn cart-item__qty-btn--left"
              onClick={handleDecrease}
              aria-label="Decrease quantity"
              id={`qty-decrease-${item.id}`}
            >
              <span className="material-symbols-outlined cart-item__qty-icon">remove</span>
            </button>
            <input
              type="number"
              className="cart-item__qty-input"
              value={qty}
              min="1"
              onChange={handleInputChange}
              aria-label="Quantity"
              id={`qty-input-${item.id}`}
            />
            <button
              className="cart-item__qty-btn cart-item__qty-btn--right"
              onClick={handleIncrease}
              aria-label="Increase quantity"
              id={`qty-increase-${item.id}`}
            >
              <span className="material-symbols-outlined cart-item__qty-icon">add</span>
            </button>
          </div>

          <div className="cart-item__divider" />
          <button
            className="cart-item__action-link"
            onClick={() => onDelete && onDelete(item.id)}
            id={`delete-${item.id}`}
          >
            Delete
          </button>
          <div className="cart-item__divider" />
          <button className="cart-item__action-link" id={`save-later-${item.id}`}>
            Save for later
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
