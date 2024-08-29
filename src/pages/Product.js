// src/Product.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const Product = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  }

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", margin: "auto", border: '1px solid #ddd', padding: '20px', paddingLeft: "5px", borderRadius: '8px', width: '218px', height: "550px" }}>
        <h2>{product.title}</h2>
        <img src={product.thumbnail} alt={product.title} style={{ width: '100%', height: '120px' }} />
        <p><strong>Brand:</strong> {product.brand}</p>
        <p><strong>Category:</strong> {product.category}</p>
        <p><strong>Description:</strong> {product.description}</p>
        <p><strong>Price:</strong> ${product.price.toFixed(2)}</p>
        <p><strong>Discount:</strong> {product.discountPercentage}%</p>
        <p><strong>Stock:</strong> {product.stock}</p>
        <p><strong>Availability Status:</strong> {product.availabilityStatus}</p>
        {/* <p><strong>Return Policy:</strong> {product.returnPolicy}</p>
      <p><strong>Shipping Information:</strong> {product.shippingInformation}</p>
      <p><strong>SKU:</strong> {product.sku}</p>
      <p><strong>Warranty Information:</strong> {product.warrantyInformation}</p>
      <p><strong>Dimensions:</strong> {product.dimensions.width} x {product.dimensions.height} x {product.dimensions.depth} cm</p>
      <p><strong>Weight:</strong> {product.weight} kg</p>
      <p><strong>Rating:</strong> {product.rating} / 5</p> */}

        {/* <h3>Tags</h3>
      <ul>
        {product.tags.map(tag => <li key={tag}>{tag}</li>)}
      </ul>

      <h3>Reviews</h3>
      <ul>
        {product.reviews.map((review, index) => (
          <li key={index}>
            <p><strong>Reviewer:</strong> {review.reviewerName}</p>
            <p><strong>Rating:</strong> {review.rating} / 5</p>
            <p><strong>Comment:</strong> {review.comment}</p>
            <p><strong>Date:</strong> {new Date(review.date).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>

      <h3>QR Code</h3>
      <img src={product.meta.qrCode} alt="QR Code" style={{ width: '100px', height: 'auto' }} /> */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end", height: "100%",margin: "auto", }}>
          <button style={{ display: "flex", justifyContent: "center",  backgroundColor: "blue", padding: "8px", color: "white", width: "80px", borderRadius: "10px", cursor: "pointer" }} onClick={handleAddToCart}>
            AddToCart
          </button>
        </div>


      </div>
    </>
  );
};

export default Product;
