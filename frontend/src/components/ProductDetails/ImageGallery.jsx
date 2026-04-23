import { useState } from 'react';
import './ImageGallery.css';

function ImageGallery({ images, mainImage, mainAlt }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const normalizedImages = Array.isArray(images)
    ? images.filter((img) => img && (img.src || img.type === 'video'))
    : [];
  const selectedItem = selectedIndex === 0 ? null : normalizedImages[selectedIndex - 1];
  const isVideo = selectedItem?.type === 'video';
  const currentImage = selectedItem && !isVideo && selectedItem.src ? selectedItem.src : mainImage;
  const currentAlt = selectedItem && !isVideo && selectedItem.alt ? selectedItem.alt : mainAlt;

  return (
    <div className="image-gallery" id="image-gallery">
      {/* Main Image */}
      <div className="image-gallery__main">
        <img
          src={currentImage}
          alt={currentAlt}
          className="image-gallery__main-img"
          id="main-product-image"
        />
      </div>

      {/* Thumbnails */}
      <div className="image-gallery__thumbs">
        <button
          className={`image-gallery__thumb ${selectedIndex === 0 ? 'image-gallery__thumb--active' : ''}`}
          onClick={() => setSelectedIndex(0)}
          aria-label="View main image"
          id="thumbnail-0"
        >
          <img src={mainImage} alt="Thumbnail - main view" className="image-gallery__thumb-img" />
        </button>
        {normalizedImages.map((img, index) => (
          <button
            key={index}
            className={`image-gallery__thumb ${selectedIndex === index + 1 ? 'image-gallery__thumb--active' : ''}`}
            onClick={() => setSelectedIndex(index + 1)}
            aria-label={`View image ${index + 2}`}
            id={`thumbnail-${index + 1}`}
          >
            {img.type === 'video' ? (
              <div className="image-gallery__thumb-video">
                <span className="material-symbols-outlined">play_circle</span>
              </div>
            ) : (
              <img src={img.src} alt={img.alt} className="image-gallery__thumb-img" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ImageGallery;
