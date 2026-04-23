import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import './Recommendations.css';

const Recommendations = ({ title = "Recommended For You" }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/products/recommendations/list');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Failed to fetch recommendations:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecommendations();
  }, []);

  if (loading) {
    return <div className="recommendations-loading">Loading recommendations...</div>;
  }

  if (products.length === 0) {
    return null;
  }

  return (
    <section className="recommendations-section">
      <div className="recommendations-container">
        <h2>{title}</h2>
        <div className="recommendations-grid">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recommendations;
