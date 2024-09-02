import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeAllAddCarts, removeItem } from '../redux/cartSlice';

const Cart = () => {
  const data = useSelector((state) => state.cart.userData);
  // console.log("--data-----", data)
  const productData = data.flat();
  // console.log("productData----", productData.flat())
  // console.log("productDataof cart----", productData)
  const dispatch = useDispatch();
  // console.log(productData.map(data => (data.title)))
  const handleRemoveAllAddedCartData = () => {
    dispatch(removeAllAddCarts(productData));
  }
  const handleRemoveItem = (data) => {
    dispatch(removeItem(data))
  }
  return (
    <div>
      {productData.length > 0 ?
        (<>
          <ul style={{ display: "flex", justifyContent: "center", border: "2px solid red", padding: "5px", flexWrap: "wrap", width: "auto", margin: "auto", gap: "5px" }}>
            {productData.map((data, index) => (
              <li style={{ display: "flex", flexDirection: "column", paddingLeft: "10px", border: "2px solid green", overflow: "auto", width: "150px", flexWrap: "wrap" }} key={index}>
                <h2>{data.title}</h2>
                <img src={data.thumbnail} alt={data.title} style={{ width: '100%', height: '120px' }} />
                <p><strong>Brand:</strong> {data.brand}</p>
                <p><strong>Category:</strong> {data.category}</p>
                <button style={{
                  display: "flex", justifyContent: "center", backgroundColor: "red", color: "white", padding: "5px", width: "70px", borderRadius: "10px", margin: "auto",
                  marginTop: "10px", marginBottom: "10px", cursor: 'pointer'
                }} onClick={() => handleRemoveItem(data)}>Remove</button>
              </li>
            ))}
          </ul>
          <button style={{ display: "flex", justifyContent: "center", margin: "auto", marginTop: "20px", marginBottom: "20px", backgroundColor: "red", color: 'white', padding: "5px", fontSize: "20px", cursor: "pointer" }} onClick={handleRemoveAllAddedCartData}>RemoveAll added carts</button>
        </>) : <p style={{ display: "flex", justifyContent: "center", padding: "5px", margin: "auto", backgroundColor: "gray", marginTop: "30px", marginBottom: "50px", width: "350px", fontSize: "25px" }}>"Add product into cart for buy"</p>
      }
    </div>
  )
}

export default Cart
