import React, { useEffect, useState } from 'react';
import Product from "./Product"; // Import the Product component
import Pages from './Pages';
import Modal from '../components/Modal'; // Import the custom Modal component
import Login from './Login'; // Import the Login component

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const [isLoginOpen, setIsLoginOpen] = useState(true);

  // const handleOpenLogin = () => setIsLoginOpen(true);
  const handleCloseLogin = () => setIsLoginOpen(false);


  let productPerPage = 5;

  let totalPages = products.length / productPerPage;
  // console.log("total pages:---",totalPages);
  let lastIndex = productPerPage * currentPage;
  // console.log("lastIndex: --", lastIndex);
  let firstIndex = lastIndex - productPerPage;
  // console.log("firstIndex:--", firstIndex)
  let filteredData = products.slice(firstIndex, lastIndex);
  // console.log("filterData: --", filteredData);
  // console.log("filterData: --", currentPage, firstIndex, lastIndex);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(result => {
        setProducts(result.products); // Set the products array
      })
      .catch(error => setError(error.message))
      .finally(() => setLoading(false));
  }, []);



  // Render loading and error states
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <div>
      {/* <h1>Dashboard</h1>
      <button onClick={handleOpenLogin}>Open Login Popup</button> */}

      {/* Use the Modal component */}
      <Modal isOpen={isLoginOpen} onClose={handleCloseLogin}>
        <Login />
      </Modal>
    </div>
      <div style={{ margin: "auto", paddingTop: "10px", }}>
        <div style={{ display: 'flex', margin: "auto", flexWrap: 'wrap', gap: '20px' }}>
          
            <Product filteredData={filteredData} />

        </div>
        <Pages totalPages={totalPages} setCurrentPage={setCurrentPage} />
      </div>
      <hr></hr>
      {/* <div style={{ marginTop: "10px"}}>
        <Cart />
      </div> */}

    </>
  );
};

export default Home;
