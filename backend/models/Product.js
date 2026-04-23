const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    brand: { type: String, default: '' },
    price: { type: Number, required: true },
    listPrice: { type: Number, default: null },
    rating: { type: Number, default: 0 },
    ratingsCount: { type: Number, default: 0 },
    answeredQuestions: { type: Number, default: 0 },
    badge: { type: String, default: null },
    badgeType: { type: String, enum: ['deal', 'bestseller', null], default: null },
    badgeCategory: { type: String, default: null },
    inStock: { type: Boolean, default: true },
    category: { type: String, default: 'General' },
    description: { type: String, default: '' },
    selectedColor: { type: String, default: null },
    colors: [
      {
        name: { type: String },
        hex: { type: String },
      },
    ],
    mainImage: { type: String, required: true },
    mainImageAlt: { type: String, default: '' },
    thumbnails: [
      {
        src: { type: String },
        alt: { type: String },
        type: { type: String, enum: ['image', 'video'], default: 'image' },
      },
    ],
    features: [
      {
        title: { type: String },
        description: { type: String },
      },
    ],
    breadcrumbs: [
      {
        label: { type: String },
        href: { type: String, default: null },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model('Product', productSchema);
