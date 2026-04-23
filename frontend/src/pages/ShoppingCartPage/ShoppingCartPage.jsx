import { useCart } from '../../context/CartContext';
import CartItem from '../../components/Cart/CartItem';
import OrderSummary from '../../components/Cart/OrderSummary';
import Recommendations from '../../components/Recommendations';
import './ShoppingCartPage.css';

function ShoppingCartPage() {
  const { cart, loading, updateQuantity, removeItem } = useCart();

  const handleQuantityChange = async (itemId, newQty) => {
    try {
      await updateQuantity(itemId, newQty);
    } catch (err) {
      console.error('Failed to update quantity:', err);
    }
  };

  const handleDelete = async (itemId) => {
    try {
      await removeItem(itemId);
    } catch (err) {
      console.error('Failed to delete item:', err);
    }
  };

  if (loading) {
    return (
      <main className="cart-page" id="shopping-cart-page">
        <div className="cart-page__loading">
          <div className="cart-page__spinner" />
          <p>Loading cart...</p>
        </div>
      </main>
    );
  }

  const hasItems = cart.items && cart.items.length > 0;

  return (
    <main className="cart-page" id="shopping-cart-page">
      <h1 className="cart-page__title">Shopping Cart</h1>

      {!hasItems ? (
        <div className="cart-page__empty">
          <span className="material-symbols-outlined cart-page__empty-icon">shopping_cart</span>
          <p className="cart-page__empty-text">Your cart is empty.</p>
          <a href="/" className="cart-page__empty-link">Continue Shopping</a>
        </div>
      ) : (
        <div className="cart-page__layout">
          {/* Cart Items Column */}
          <div className="cart-page__items-col">
            {cart.items.map((item) => (
              <CartItem
                key={item._id}
                item={{ ...item, id: item._id }}
                onQuantityChange={handleQuantityChange}
                onDelete={handleDelete}
              />
            ))}

            {/* Subtotal */}
            <div className="cart-page__subtotal">
              <p className="cart-page__subtotal-text">
                Subtotal ({cart.summary.itemCount} items):{' '}
                <span className="cart-page__subtotal-amount">
                  ${cart.summary.subtotal.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                </span>
              </p>
            </div>
          </div>

          {/* Order Summary Sidebar */}
          <div className="cart-page__summary-col">
            <OrderSummary summary={cart.summary} />
          </div>
        </div>
      )}

      {/* Recommendations Section */}
      <Recommendations title="You might also like" />
    </main>
  );
}

export default ShoppingCartPage;
