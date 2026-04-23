/**
 * Cart data matching the design reference.
 * In production this would come from the backend API: GET /api/cart
 */

const cartData = {
  items: [
    {
      id: 'cart-item-1',
      productId: 'sony-wh1000xm5',
      title: 'Sony WH-1000XM5 Wireless Noise Canceling Headphones, Black',
      price: 348.0,
      quantity: 1,
      inStock: true,
      freeReturns: true,
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBp--NgJp2hnvN59lMb_Z0X2ZhqZI9Cek0LcZdgFxKo6546F7RoVUT9tIwMgyaXxlOO47U4l0112s7OYB5utfFUKDPzVEITUUjU_MQy13F6CPV6MfMcKdVLDjxsHNct2lEFAM2oS0E05vYrgsn7qUokfKwiknxvOlkvAcd58BiyHpyNnrNp0xYnOQD_Zmu_vKixAeELDkf0FMQpVEC0VZ2HMho-KAOi65366p4COxVlBNDrMcYtfaCbcYGoXcIFQ_ZqyDHHmEHUzR8',
      imageAlt: 'Premium wireless over-ear headphones in sleek black finish',
    },
    {
      id: 'cart-item-2',
      productId: 'smart-watch-series8',
      title: 'Minimalist Smart Watch Series 8, GPS, 41mm Silver Aluminum Case',
      price: 399.0,
      quantity: 2,
      inStock: true,
      freeReturns: true,
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuB7Gphjv7qdSFjQY2JDbcKw52KEOZRlkNZ8V5RPfhFE9b-Kz9cjfd0IWksxb43PgsI6HVRbnC_qbkuWwFs6vQbYmY4NMaxAmmtCHC8bawIw8rz-8eXHqYR2WlklLeb8TbCLUZ_KGvEEiCu2c9wtsG8decQDU4kF-LqphU68q4z8IIMwIZjGThh3U4Zu3GYvJUw4CRi_4ZcXuXs1ooqgGZcoQqobDPBXbz4uWF0m-zX-3MD2RtZNfVikhrgdvTI5X9fNeN005cgSIrI',
      imageAlt: 'Minimalist smart watch with clean white face',
    },
  ],
  summary: {
    itemCount: 3,
    subtotal: 1146.0,
    shipping: 0.0,
    totalBeforeTax: 1146.0,
    estimatedTax: 80.22,
    orderTotal: 1226.22,
  },
};

export default cartData;
