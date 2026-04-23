/**
 * Product data matching the design reference (SonicPro Ultra headphones).
 * In production this would come from the backend API: GET /api/products/:id
 */

const productData = {
  id: 'sonicpro-ultra-001',
  title: 'SonicPro Ultra - Premium Active Noise Canceling Wireless Headphones',
  brand: 'SonicPro',
  price: 299.99,
  listPrice: 349.99,
  rating: 4.5,
  ratingsCount: 4821,
  answeredQuestions: 152,
  badge: '#1 Best Seller',
  badgeCategory: 'Over-Ear Headphones',
  inStock: true,
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
    {
      src: null,
      alt: 'Product video',
      type: 'video',
    },
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
    { label: 'Premium Noise-Canceling' },
  ],
};

export default productData;
