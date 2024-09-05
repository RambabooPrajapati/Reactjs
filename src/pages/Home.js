import React, { useEffect, useState } from 'react';
import Product from "./Product"; // Import the Product component
import Pages from './Pages';
import Modal from '../components/Modal'; // Import the custom Modal component
import Login from './Login'; // Import the Login component
// import ImageSlider from '../components/ImageSlider';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoginOpen, setIsLoginOpen] = useState(true);
  const [searchedProduct, setSearchedProduct] = useState("");
    // const handleOpenLogin = () => setIsLoginOpen(true);
  const handleCloseLogin = () => setIsLoginOpen(false);
  let productPerPage = 5;
  let totalPages = products.length / productPerPage;
  let lastIndex = productPerPage * currentPage;
  let firstIndex = lastIndex - productPerPage;
  let filteredData = products.slice(firstIndex, lastIndex);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(result => {
        setProducts(result.products); // Set the products array
      })
      .catch(error => setError(error.message))
      .finally(() => setLoading(false));
  }, []);

  const handleSearchProduct = (e)=>{
    
    setSearchedProduct(e.target.value)
  }
  const searchingData = products.filter((item)=> item.title.toLowerCase().includes(searchedProduct.toLowerCase()))

  // console.log("Searched data: --", searchingData)
  const displayedData = searchedProduct ? searchingData : filteredData
  // Render loading and error states
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>

      <div>
        {/* <h1>Dashboard</h1>
      <button onClick={handleOpenLogin}>Open Login Popup</button> */}

        {/* Use the Modal component */}
        <Modal isOpen={isLoginOpen} onClose={handleCloseLogin}>
          <Login />
        </Modal>
        {/* <ImageSlider productData = {products}/> */}
      </div>
      <div style={{ display: "flex", justifyContent: "right",        backgroundColor: "lightblue", padding: "10px" }}>
        <input style={{ marginTop: "10px", height: "50px", fontSize: "20px", padding: "5px", borderRadius: "10px", backgroundColor: "ButtonHighlight", border: "none", boxShadow: "0px 0px 2px 1px black" }} type='text' placeholder='Searching Producs....' onChange={handleSearchProduct}/>
      </div>
      <div style={{ margin: "auto", paddingTop: "10px", }}>
        <div style={{ display: 'flex', margin: "auto", flexWrap: 'wrap', gap: '20px' }}>

          <Product filteredData={displayedData} />

        </div>
        <Pages totalPages={totalPages} setCurrentPage={setCurrentPage} />
      </div>
      {/* <hr></hr> */}
      {/* <div style={{ marginTop: "10px"}}>
        <Cart />
      </div> */}

    </div>
  );
};

export default Home;
