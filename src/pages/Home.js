import React, { useEffect, useState } from 'react';
import Product from "./Product"; // Import the Product component
import Pages from './Pages';
import Cart from './Cart'

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

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
      <div style={{ margin: "auto", paddingTop: "10px", }}>
        <div style={{ display: 'flex', margin: "auto", flexWrap: 'wrap', gap: '20px' }}>
          {filteredData.map(product => (
            <Product key={product.id} product={product} />

          ))}
        </div>
        <Pages totalPages={totalPages} setCurrentPage={setCurrentPage} />
      </div>
      <hr></hr>
      <div style={{ marginTop: "10px"}}>
        <Cart />
      </div>

    </>
  );
};

export default Home;
