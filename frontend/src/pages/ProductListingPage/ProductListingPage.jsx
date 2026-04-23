import { useEffect, useState } from 'react';
import ProductCard from '../../components/ProductCard';
import api from '../../services/api';
import './ProductListingPage.css';

function ProductListingPage({ title, subtitle, badgeType }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await api.getProducts({ badgeType });
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [badgeType]);

  if (loading) {
    return (
      <main className="plp" id="product-listing-page">
        <div className="plp__loading">
          <div className="plp__spinner" />
          <p>Loading products...</p>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="plp" id="product-listing-page">
        <div className="plp__error">
          <span className="material-symbols-outlined plp__error-icon">error</span>
          <p>Failed to load products. Make sure the backend server is running.</p>
          <p className="plp__error-detail">{error}</p>
        </div>
      </main>
    );
  }

  return (
    <main className="plp" id="product-listing-page">
      {/* Header */}
      <div className="plp__header">
        <h1 className="plp__title">{title || 'Explore All Categories'}</h1>
        <p className="plp__subtitle">
          {subtitle || 'Discover top-rated products across electronics, home, and fashion.'}
        </p>
      </div>

      {/* Product Grid */}
      {products.length === 0 ? (
        <div className="plp__empty">
          <span className="material-symbols-outlined plp__empty-icon">inventory_2</span>
          <p>No products found for this section yet.</p>
        </div>
      ) : (
        <div className="plp__grid">
          {products.map((product) => (
            <ProductCard key={product._id} product={{ ...product, id: product._id, image: product.mainImage, imageAlt: product.mainImageAlt }} />
          ))}
        </div>
      )}
    </main>
  );
}

export default ProductListingPage;
