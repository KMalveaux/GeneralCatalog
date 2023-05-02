import React from 'react';
import "../../css/ProductPage.css";

const handleAddToCart = () => {
    // TODO: Implement cart functionality
  }

export default function ProductPage() {
  return (
    <div className="container">
      <div className="product">
        <div className="product-image">
        <img 
          src={require('../images/potion.png')} 
          alt="product" 
        />
        </div>
        <div className="product-details">
          <h1 className="product-name">Pink Potion</h1>
          <div className="product-rating">
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9733;</span>
            <span className="star">&#9734;</span>
            <span className="product-rating-text">(4.0)</span>
          </div>
          <p className="product-description">
            A magical healing potion
          </p>
          <div className="product-price">
            <span className="currency">$</span>
            <span className="price">9.99</span> 
            <span className="price-label"> / each</span>
          </div>
          <div className="product-add-to-cart">
          <button className="add-to-cart-button" onClick={handleAddToCart}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}