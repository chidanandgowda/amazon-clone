import { Link } from 'react-router-dom';
import './ProductCard.css';

function StarRating({ rating, totalStars = 5 }) {
  const stars = [];
  for (let i = 1; i <= totalStars; i++) {
    if (i <= Math.floor(rating)) {
      stars.push(
        <span
          key={i}
          className="material-symbols-outlined product-card__star product-card__star--filled"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          star
        </span>
      );
    } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
      stars.push(
        <span key={i} className="material-symbols-outlined product-card__star product-card__star--half"
          style={{ fontVariationSettings: "'FILL' 0" }}
        >
          star_half
        </span>
      );
    } else {
      stars.push(
        <span key={i} className="material-symbols-outlined product-card__star product-card__star--empty"
          style={{ fontVariationSettings: "'FILL' 0" }}
        >
          star_border
        </span>
      );
    }
  }
  return <div className="product-card__stars">{stars}</div>;
}

function ProductCard({ product }) {
  // Support both MongoDB _id and custom id
  const productId = product._id || product.id;

  return (
    <div className="product-card" id={`product-card-${productId}`}>
      {/* Badge */}
      {product.badge && (
        <div
          className={`product-card__badge ${
            product.badgeType === 'deal'
              ? 'product-card__badge--deal'
              : 'product-card__badge--bestseller'
          }`}
        >
          {product.badge}
        </div>
      )}

      {/* Image */}
      <div className="product-card__image-wrapper">
        <img
          src={product.image || product.mainImage}
          alt={product.imageAlt || product.mainImageAlt}
          className="product-card__image"
        />
      </div>

      {/* Content */}
      <div className="product-card__content">
        <h2 className="product-card__title">{product.title}</h2>

        <div className="product-card__rating">
          <StarRating rating={product.rating} />
          <span className="product-card__rating-count">({(product.ratingsCount || 0).toLocaleString()})</span>
        </div>

        <div className="product-card__price">${product.price.toFixed(2)}</div>

        <Link to={`/product/${productId}`} className="product-card__btn" id={`view-details-${productId}`}>
          View Details
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
