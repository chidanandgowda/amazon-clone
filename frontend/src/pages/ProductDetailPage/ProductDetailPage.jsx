import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';
import { useCart } from '../../context/CartContext';
import Breadcrumbs from '../../components/Breadcrumbs';
import ImageGallery from '../../components/ProductDetails/ImageGallery';
import ProductInfo from '../../components/ProductDetails/ProductInfo';
import BuyBox from '../../components/ProductDetails/BuyBox';
import AboutItem from '../../components/ProductDetails/AboutItem';
import './ProductDetailPage.css';

function ProductDetailPage() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const data = await api.getProduct(id);
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <main className="pdp" id="product-detail-page">
        <div className="pdp__loading">
          <div className="pdp__spinner" />
          <p>Loading product details...</p>
        </div>
      </main>
    );
  }

  if (error || !product) {
    return (
      <main className="pdp" id="product-detail-page">
        <div className="pdp__error">
          <span className="material-symbols-outlined pdp__error-icon">error</span>
          <p>Failed to load product. Make sure the backend server is running.</p>
          <p className="pdp__error-detail">{error}</p>
        </div>
      </main>
    );
  }

  return (
    <main className="pdp" id="product-detail-page">
      {/* Breadcrumbs */}
      {product.breadcrumbs && product.breadcrumbs.length > 0 && (
        <Breadcrumbs items={product.breadcrumbs} />
      )}

      {/* Product Content Grid */}
      <div className="pdp__grid">
        {/* Left Column: Image Gallery */}
        <div className="pdp__gallery-col">
          <ImageGallery
            images={product.thumbnails || []}
            mainImage={product.mainImage}
            mainAlt={product.mainImageAlt}
          />
        </div>

        {/* Right Column: Product Details & Action */}
        <div className="pdp__details-col">
          <ProductInfo product={product} />
          <BuyBox product={product} onAddToCart={addToCart} />
          {product.features && product.features.length > 0 && (
            <AboutItem features={product.features} />
          )}
        </div>
      </div>
    </main>
  );
}

export default ProductDetailPage;
