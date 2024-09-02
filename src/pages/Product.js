// src/Product.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const Product = ({ filteredData }) => {
  const dispatch = useDispatch();
  // Initialize state with messages for each product
  const [messages, setMessages] = useState(
    filteredData.reduce((acc, product) => {
      acc[product.id] = null;
      return acc;
    }, {})
  );

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    setMessages(prevMessages => ({
      ...prevMessages,
      [product.id]: 'Product added to cart!'
    }));
    // Optionally, clear the message after some time
    setTimeout(() => {
      setMessages(prevMessages => ({
        ...prevMessages,
        [product.id]: null
      }));
    }, 3000); // Clear message after 3 seconds
  };

  return (
    <>
      {filteredData.map((product) => (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            margin: 'auto',
            border: '1px solid #ddd',
            padding: '20px',
            paddingLeft: '5px',
            borderRadius: '8px',
            width: '218px',
            height: '550px',
          }}
          key={product.id}
        >
          <h2>{product.title}</h2>
          <img
            src={product.thumbnail}
            alt={product.title}
            style={{ width: '100%', height: '120px' }}
          />
          <p><strong>Brand:</strong> {product.brand}</p>
          <p><strong>Category:</strong> {product.category}</p>
          <p><strong>Description:</strong> {product.description}</p>
          <p><strong>Price:</strong> ${product.price.toFixed(2)}</p>
          <p><strong>Discount:</strong> {product.discountPercentage}%</p>
          <p><strong>Stock:</strong> {product.stock}</p>
          <p><strong>Availability Status:</strong> {product.availabilityStatus}</p>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              height: '100%',
              margin: 'auto',
            }}
          >
            {messages[product.id] && (
              <p style={{ color: 'green', marginTop: '10px' }}>
                {messages[product.id]}
              </p>
            )}
            <button
              style={{
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: 'blue',
                padding: '8px',
                color: 'white',
                width: '80px',
                borderRadius: '10px',
                cursor: 'pointer',
              }}
              onClick={() => handleAddToCart(product)}
            >
              AddToCart
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Product;


// // ----------------------------------------
// {/* <p><strong>Return Policy:</strong> {product.returnPolicy}</p>
//       <p><strong>Shipping Information:</strong> {product.shippingInformation}</p>
//       <p><strong>SKU:</strong> {product.sku}</p>
//       <p><strong>Warranty Information:</strong> {product.warrantyInformation}</p>
//       <p><strong>Dimensions:</strong> {product.dimensions.width} x {product.dimensions.height} x {product.dimensions.depth} cm</p>
//       <p><strong>Weight:</strong> {product.weight} kg</p>
//       <p><strong>Rating:</strong> {product.rating} / 5</p> */}

//         {/* <h3>Tags</h3>
//       <ul>
//         {product.tags.map(tag => <li key={tag}>{tag}</li>)}
//       </ul>

//       <h3>Reviews</h3>
//       <ul>
//         {product.reviews.map((review, index) => (
//           <li key={index}>
//             <p><strong>Reviewer:</strong> {review.reviewerName}</p>
//             <p><strong>Rating:</strong> {review.rating} / 5</p>
//             <p><strong>Comment:</strong> {review.comment}</p>
//             <p><strong>Date:</strong> {new Date(review.date).toLocaleDateString()}</p>
//           </li>
//         ))}
//       </ul>

//       <h3>QR Code</h3>
//       <img src={product.meta.qrCode} alt="QR Code" style={{ width: '100px', height: 'auto' }} /> */}