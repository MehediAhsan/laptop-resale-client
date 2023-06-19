import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Product from '../Products/Product';
import Loader from '../Shared/Loader';

const AllProducts = () => {
    const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(6);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://laptop-resale-server.vercel.app/allproducts');
      setProducts(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching products:', error);
      setLoading(false);
    }
  };

  // Calculate indexes of the first and last products of the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Go to previous page
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Go to next page
  const goToNextPage = () => {
    const lastPage = Math.ceil(products.length / productsPerPage);
    if (currentPage < lastPage) {
      setCurrentPage(currentPage + 1);
    }
  };

    return (
        <div data-aos="fade-up" data-aos-duration="1000" className='my-20'>
      {loading ? (
        <Loader />
      ) : (
        <>
          <h1 className='text-3xl md:text-3xl font-semibold text-center text-accent mb-20'>
            Total {products.length} Products Available 💻
          </h1>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {currentProducts.map((product) => (
              <Product key={product._id} product={product} />
            ))}
          </div>
          <div className='flex justify-center mt-10'>
            <button
              className={`mx-2 px-3 py-2 rounded-lg border-2 ${
                currentPage === 1 ? 'bg-gray-300 text-gray-600 cursor-not-allowed' : 'bg-blue-500 text-white'
              }`}
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            {Array.from({ length: Math.ceil(products.length / productsPerPage) }, (_, i) => (
              <button
                key={i + 1}
                className={`mx-2 px-3 py-2 rounded-lg border-2 ${
                  currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'
                }`}
                onClick={() => paginate(i + 1)}
              >
                {i + 1}
              </button>
            ))}
            <button
              className={`mx-2 px-3 py-2 rounded-lg border-2 ${
                currentPage === Math.ceil(products.length / productsPerPage)
                  ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                  : 'bg-blue-500 text-white'
              }`}
              onClick={goToNextPage}
              disabled={currentPage === Math.ceil(products.length / productsPerPage)}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
    );
};

export default AllProducts;