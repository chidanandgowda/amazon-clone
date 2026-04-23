import './OrderSummary.css';

function OrderSummary({ summary }) {
  return (
    <div className="order-summary" id="order-summary">
      <h2 className="order-summary__title">Order Summary</h2>

      <div className="order-summary__rows">
        <div className="order-summary__row">
          <span>Items ({summary.itemCount}):</span>
          <span>${summary.subtotal.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
        </div>
        <div className="order-summary__row">
          <span>Shipping &amp; handling:</span>
          <span>${summary.shipping.toFixed(2)}</span>
        </div>
        <div className="order-summary__row order-summary__row--bordered">
          <span>Total before tax:</span>
          <span>${summary.totalBeforeTax.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
        </div>
        <div className="order-summary__row">
          <span>Estimated tax to be collected:</span>
          <span>${summary.estimatedTax.toFixed(2)}</span>
        </div>
      </div>

      <div className="order-summary__total">
        <span>Order total:</span>
        <span>${summary.orderTotal.toLocaleString('en-US', { minimumFractionDigits: 2 })}</span>
      </div>

      <button className="order-summary__checkout-btn" id="checkout-btn">
        Proceed to Checkout
      </button>

      <p className="order-summary__legal">
        By placing your order, you agree to ProCommerce's{' '}
        <a href="#" className="order-summary__legal-link">privacy notice</a> and{' '}
        <a href="#" className="order-summary__legal-link">conditions of use</a>.
      </p>
    </div>
  );
}

export default OrderSummary;
