/**
 * Seed script — populates MongoDB with all product data from the design references.
 * Run: npm run seed
 */
require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('./config/db');
const Product = require('./models/Product');
const Cart = require('./models/Cart');

const products = [
  {
    title: 'SonicPro Ultra - Premium Active Noise Canceling Wireless Headphones',
    brand: 'SonicPro',
    price: 299.99,
    listPrice: 349.99,
    rating: 4.5,
    ratingsCount: 4821,
    answeredQuestions: 152,
    badge: '#1 Best Seller',
    badgeType: 'bestseller',
    badgeCategory: 'Over-Ear Headphones',
    inStock: true,
    category: 'Electronics',
    selectedColor: 'Matte Black',
    colors: [
      { name: 'Matte Black', hex: '#000000' },
      { name: 'Silver', hex: '#c0c0c0' },
      { name: 'Lavender', hex: '#e6e6fa' },
    ],
    mainImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDRIbYpb70EI6d1Z7ludWwJA70OBMMXtxOGwzu-gDQJ8eRwdBC71QtrUcjJXNkVFTFkvj8UbKjlj_x8SCFgoW7yh58_tBlo2MQWIavc3ZvhpZRtnSDtbwUOqWh6t3ZWPoGdVW8YJjsdxBgCBjNeeCTB9fh2UI1xcFMrGK06funBsYpL64T5gRxoJ0T49QAiZrkJdPBjbva34v0xa8Ll6jZBAMHvYdOjG2RPAXY_Hy_b7Q_EwTPuTLadnu2-NcVnoJ05SiJdxysC7uM',
    mainImageAlt:
      'Premium over-ear noise-canceling headphones in sleek matte black finish resting on a clean white surface with soft studio lighting',
    thumbnails: [
      {
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBdWB4xyAssRvflsHllRDJyGoh3KU44PvJmaIaIWr0inqTiWsh_mXLbrkWT1uUP1DiNoMgEOyeajaTr1Ed0pQNOJ-on9iQnV64O9t5UPrACC8bvrSfTNq_E4JQA-7I7TFggwxR6t87norVa-D3RmUFOE-jwr3KqXz2q_-ldtR_f2NP9n9LO3rkzSlgAm_7B90zFWdal9ZUVHEPowRgsl7GTPi-mbPWKnkibOhAEf47HEuItosjDVUuO3maH8sX-tRPFon6BWMwTSnc',
        alt: 'Front angle view of headphones',
        type: 'image',
      },
      {
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAKY3ftGao6Y2gMTk4V3J1bbzi4rlA8vXQbXyPuSbPg_9v29BsRrvwyDYKst3ZXHEgHmMaEr2_6Fi56gJ6ZVWiIpmeaHSjtawh4KQ27IohOmY5gkDzggobMS4GtzJb51zOcZzJfdPfsAor0-XyNmLMSot6rIRjXm2MdsnO5WShIiOMPt-ArxkusC9Ka8picm4Ftkl-0cuaLTHXGI_sG0XMOBT9yamhFpKyd0x9Wq89VQEiBzeMyZrrsWEvTjVCBfYzMs78G8eMrRjU',
        alt: 'Side profile view of headphones',
        type: 'image',
      },
      {
        src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCDNovIE4uvEKWNGJpMKPbou0nqRURC2gb7IWN9pGl5FLMOPbXkG6ga3u8Jm7OYa_AGWhBynXh7m7-8vgiH7QIrxNPmrs5v1ekW_0CU17xHx86-FkZdySXBNvi3mwcocA25ZGfgSLFDphw6o2bSPa__Zw0Fdnb2zhnZOOqL9wXPi2kEy2sQd1nkI1aHBnDYiUN6FVPRTy-4KZ18c3UmNzWw_YsbfVFBW5AqwS5rUBhKXMVF4b-JqymIKhU62q60o2nKyj6Yo7TVflM',
        alt: 'Detail view of ear cushions',
        type: 'image',
      },
      { src: null, alt: 'Product video', type: 'video' },
    ],
    features: [
      {
        title: 'Industry-Leading Noise Cancellation',
        description:
          'Advanced dual-sensor technology blocks out background noise, allowing you to focus completely on your music or calls.',
      },
      {
        title: 'High-Resolution Audio',
        description:
          'Custom 40mm drivers deliver crisp highs, detailed mids, and deep, resonant bass for a premium listening experience.',
      },
      {
        title: 'Long-Lasting Battery',
        description:
          'Enjoy up to 40 hours of continuous playback on a single charge. A quick 10-minute charge provides up to 4 hours of listening time.',
      },
      {
        title: 'All-Day Comfort',
        description:
          'Plush memory foam ear cushions and a lightweight, adjustable headband ensure maximum comfort during extended wear.',
      },
      {
        title: 'Crystal Clear Calls',
        description:
          'Built-in multi-microphone system isolates your voice from surrounding noise for pristine call quality, even in windy conditions.',
      },
    ],
    breadcrumbs: [
      { label: 'Electronics', href: '#' },
      { label: 'Audio', href: '#' },
      { label: 'Headphones', href: '#' },
      { label: 'Premium Noise-Canceling', href: null },
    ],
  },
  {
    title: 'Pro Series Smart Watch 5 - Fitness Tracker with Heart Rate Monitor, White',
    brand: 'ProSeries',
    price: 149.99,
    listPrice: 199.99,
    rating: 4.5,
    ratingsCount: 1245,
    answeredQuestions: 87,
    badge: 'Limited Time Deal',
    badgeType: 'deal',
    badgeCategory: 'Smart Watches',
    inStock: true,
    category: 'Electronics',
    selectedColor: 'White',
    colors: [
      { name: 'White', hex: '#ffffff' },
      { name: 'Black', hex: '#000000' },
    ],
    mainImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCrW4QPExgXsaPcAupsvmmkVloFKHXBao-FYWplAE0kIkQ9GRYb-X5ez37Woo3bGLBHUtaDb1CCkkVCxv8ax_eDEWJrJarB4GGdwydOL12IXiAshpdwYE9dhuU6igJt6cIArSEaIBfT4Jk7CgY7H5f7MhsRgyegjpItKO1OU38zJzZNfSfNsyN05sjV3IA-YQ9LRGAloN6f-9zxsgf4A-gQ7vSiOBOnOvbEL7SiYp-sIQfJFxulvXl005U4Z3y_7BOdnGayprY8cMQ',
    mainImageAlt: 'White smart watch on light gray background',
    thumbnails: [],
    features: [
      { title: 'Heart Rate Monitor', description: 'Continuous 24/7 heart rate tracking with advanced optical sensors.' },
      { title: 'GPS Tracking', description: 'Built-in GPS for accurate distance and pace tracking without your phone.' },
      { title: 'Water Resistant', description: '50m water resistance rating — swim-proof design for any activity.' },
    ],
    breadcrumbs: [
      { label: 'Electronics', href: '#' },
      { label: 'Wearables', href: '#' },
      { label: 'Smart Watches', href: null },
    ],
  },
  {
    title: 'Acoustic Noise Cancelling Over-Ear Wireless Headphones, Matte Black',
    brand: 'AcousticPro',
    price: 299.0,
    listPrice: 349.0,
    rating: 5,
    ratingsCount: 8902,
    answeredQuestions: 320,
    badge: null,
    badgeType: null,
    badgeCategory: null,
    inStock: true,
    category: 'Electronics',
    selectedColor: 'Matte Black',
    colors: [{ name: 'Matte Black', hex: '#000000' }],
    mainImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDr4YWcO0U9zvI-uYaJc115bGIokqSNcX1LzDsZRpBLMktGaNc8rm9lul9dIYi1tasNL_kePnUomWcV8XBdGQfb15Wf5lUMt-s774bbAFTx3XGQXal9n4ETQ76IyWzPx_BHs2lNeUXOGADsjhGPVqR9JUl96lrFTEyEZfi026AfvK90cYAI0WGc6zHckBMqVd8ldCLVvOhX7mU2GNfvR3X4iZFK7CILBB7wwAYFdJWaKE4s4NqROAoe84tiWhqAGBj0tkE_sz3r8kQ',
    mainImageAlt: 'Premium over-ear wireless headphones in matte black',
    thumbnails: [],
    features: [
      { title: 'Noise Cancelling', description: 'Industry-leading noise cancellation blocks all external sound.' },
      { title: 'Hi-Fi Audio', description: 'Hi-Res certified drivers reproduce every detail in your music.' },
    ],
    breadcrumbs: [
      { label: 'Electronics', href: '#' },
      { label: 'Audio', href: '#' },
      { label: 'Headphones', href: null },
    ],
  },
  {
    title: "Men's Swift Run Everyday Performance Sneakers, Cardinal Red",
    brand: 'SwiftRun',
    price: 85.0,
    listPrice: 110.0,
    rating: 4,
    ratingsCount: 452,
    answeredQuestions: 28,
    badge: 'Best Seller',
    badgeType: 'bestseller',
    badgeCategory: 'Running Shoes',
    inStock: true,
    category: 'Fashion',
    selectedColor: 'Cardinal Red',
    colors: [
      { name: 'Cardinal Red', hex: '#c41e3a' },
      { name: 'Black', hex: '#000000' },
      { name: 'White', hex: '#ffffff' },
    ],
    mainImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAkg_r4QdHXRr4PTlgvrW-f5iJvvpVMOQ0_iCVRMYu5WI2PoVnsTO5vY6_wTeU86mUcu0bqW7vsAjNp5yG5Lzq3nArgt_vr8Ey08_R55Lu1KlkXB5AhOGn5ClXmjW72n73XVDe9yYzQouXhquSVT6zZanXhpZYCc271ZTvvBQRyk7fZvXe-wATAJwQaDH2D-SHH6lINmft5hOi8ZelwnxybSqX0lJDL1licWt7iPEC3xULthXolTWOhicjYOhyZDFqx_dhU51nC1fM',
    mainImageAlt: 'Red athletic running shoe on white background',
    thumbnails: [],
    features: [
      { title: 'Lightweight Design', description: 'Ultra-lightweight mesh upper keeps you moving fast and comfortable.' },
      { title: 'Responsive Cushioning', description: 'Energy-return foam sole absorbs impact and propels you forward.' },
    ],
    breadcrumbs: [
      { label: 'Fashion', href: '#' },
      { label: 'Shoes', href: '#' },
      { label: 'Running', href: null },
    ],
  },
  {
    title: 'Modern Brass Desk Lamp with Adjustable Arm, Warm LED',
    brand: 'LuxeHome',
    price: 64.5,
    listPrice: 89.99,
    rating: 3.5,
    ratingsCount: 128,
    answeredQuestions: 12,
    badge: null,
    badgeType: null,
    badgeCategory: null,
    inStock: true,
    category: 'Home',
    selectedColor: 'Brass',
    colors: [{ name: 'Brass', hex: '#b5a642' }],
    mainImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC-qmBLieYT40e_57zkxq_DnNYzPCHrCXOdtJ8rk9ekbt7x6K4hfLoy6BFNX1pnmcTfl8BwgNLzdeWgMx6cJ0Yr6-2A9OJCB0S9gb-_6ldfJZ52zAxiujX0Dm1EmZ1PIkyVHVhpR1kcPhw9jhQ-qRS8N8KKe5FQDCuiEkMBvBCleYMHcEWJ-78fmzFPihzlXgPJECEi9uRs7ztbNnDM0xdnhCttns1IASh8IXOPf5refKm4hZEUan6p0NHMV4_kIfgng9IihqVD244',
    mainImageAlt: 'Modern brass desk lamp with warm light',
    thumbnails: [],
    features: [
      { title: 'Adjustable Design', description: 'Fully adjustable arm and head for directed task lighting.' },
      { title: 'Warm LED', description: '2700K warm white LED bulb included for cozy ambiance.' },
    ],
    breadcrumbs: [
      { label: 'Home', href: '#' },
      { label: 'Lighting', href: '#' },
      { label: 'Desk Lamps', href: null },
    ],
  },
];

async function seed() {
  await connectDB();

  // Clear old data
  await Product.deleteMany({});
  await Cart.deleteMany({});
  console.log('🗑️  Cleared existing data');

  // Insert products
  const inserted = await Product.insertMany(products);
  console.log(`📦 Seeded ${inserted.length} products`);

  // Create a demo cart with 2 items (first two products)
  const demoCart = new Cart({
    sessionId: 'demo-session',
    items: [
      {
        productId: inserted[0]._id,
        title: inserted[0].title,
        price: inserted[0].price,
        quantity: 1,
        image: inserted[0].mainImage,
        imageAlt: inserted[0].mainImageAlt,
        inStock: true,
        freeReturns: true,
      },
      {
        productId: inserted[1]._id,
        title: inserted[1].title,
        price: inserted[1].price,
        quantity: 2,
        image: inserted[1].mainImage,
        imageAlt: inserted[1].mainImageAlt,
        inStock: true,
        freeReturns: true,
      },
    ],
  });
  await demoCart.save();
  console.log('🛒 Seeded demo cart with 2 items');

  console.log('\n✅ Seed complete!');
  process.exit(0);
}

seed().catch((err) => {
  console.error('Seed error:', err);
  process.exit(1);
});
