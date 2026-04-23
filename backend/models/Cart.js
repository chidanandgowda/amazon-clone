const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  },
  title: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true, min: 1, default: 1 },
  image: { type: String, required: true },
  imageAlt: { type: String, default: '' },
  inStock: { type: Boolean, default: true },
  freeReturns: { type: Boolean, default: true },
});

const cartSchema = new mongoose.Schema(
  {
    // Using a simple sessionId for demo (no auth). In production, use userId.
    sessionId: { type: String, required: true, unique: true },
    items: [cartItemSchema],
  },
  { timestamps: true }
);

// Virtual: compute summary on the fly
cartSchema.virtual('summary').get(function () {
  const itemCount = this.items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
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
});

// Ensure virtuals are included in JSON output
cartSchema.set('toJSON', { virtuals: true });
cartSchema.set('toObject', { virtuals: true });

module.exports = mongoose.model('Cart', cartSchema);
