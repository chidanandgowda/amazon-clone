import './ProductInfo.css';

function StarRating({ rating, totalStars = 5 }) {
  const stars = [];
  for (let i = 1; i <= totalStars; i++) {
    if (i <= Math.floor(rating)) {
      stars.push(
        <span
          key={i}
          className="material-symbols-outlined star-rating__star star-rating__star--filled"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          star
        </span>
      );
    } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
      stars.push(
        <span key={i} className="material-symbols-outlined star-rating__star star-rating__star--half">
          star_half
        </span>
      );
    } else {
      stars.push(
        <span key={i} className="material-symbols-outlined star-rating__star star-rating__star--empty">
          star
        </span>
      );
    }
  }
  return <div className="star-rating">{stars}</div>;
}

function ProductInfo({ product }) {
  const priceDollars = Math.floor(product.price);
  const priceCents = String(Math.round((product.price % 1) * 100)).padStart(2, '0');

  return (
    <div className="product-info" id="product-info">
      {/* Title & Rating */}
      <div className="product-info__header">
        <h1 className="product-info__title" id="product-title">
          {product.title}
        </h1>
        <a className="product-info__store-link" href="#" id="store-link">
          Visit the {product.brand} Store
        </a>
        <div className="product-info__rating-row">
          <StarRating rating={product.rating} />
          <span className="product-info__rating-count">{product.ratingsCount.toLocaleString()} ratings</span>
          <span className="product-info__divider">|</span>
          <span className="product-info__questions">{product.answeredQuestions} answered questions</span>
        </div>
        {product.badge && (
          <div className="product-info__badge-row">
            <span className="product-info__badge">{product.badge}</span>
            <span className="product-info__badge-category">in {product.badgeCategory}</span>
          </div>
        )}
      </div>

      {/* Price Area */}
      <div className="product-info__price-area">
        <div className="product-info__price">
          <span className="product-info__price-symbol">$</span>
          <span className="product-info__price-dollars">{priceDollars}</span>
          <span className="product-info__price-cents">{priceCents}</span>
        </div>
        {product.listPrice && (
          <div className="product-info__list-price">
            List Price: <span className="product-info__list-price-val">${product.listPrice.toFixed(2)}</span>
          </div>
        )}
        <div className="product-info__free-returns">FREE Returns</div>
      </div>

      {/* Variants */}
      {product.colors && product.colors.length > 0 && (
        <div className="product-info__variants">
          <span className="product-info__variant-label">
            Color: <span className="product-info__variant-value">{product.selectedColor}</span>
          </span>
          <div className="product-info__color-swatches">
            {product.colors.map((color) => (
              <button
                key={color.name}
                className={`product-info__color-swatch ${
                  color.name === product.selectedColor ? 'product-info__color-swatch--active' : ''
                }`}
                style={{ backgroundColor: color.hex }}
                aria-label={`Select color ${color.name}`}
                id={`color-swatch-${color.name.toLowerCase().replace(/\s/g, '-')}`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductInfo;
