import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Product from '../Products/Product';
import Loader from '../Shared/Loader';

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(6);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

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
  const currentProducts = searchResults.slice(indexOfFirstProduct, indexOfLastProduct);

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  // Handle voice search
  const handleVoiceSearch = () => {
    if ('webkitSpeechRecognition' in window) {
      const recognition = new window.webkitSpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'en-US';

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setSearchTerm(transcript);
      };

      recognition.start();
    } else {
      console.log('Web Speech API is not supported in this browser.');
    }
  };

  // Perform search
  useEffect(() => {
    const filteredProducts = products.filter((product) =>
      product.product_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredProducts);
  }, [products, searchTerm]);

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
    const lastPage = Math.ceil(searchResults.length / productsPerPage);
    if (currentPage < lastPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className='my-20'>
      <h1 className='text-3xl md:text-3xl font-semibold text-center text-accent mb-4'>
        Total {products.length} Products Available 💻
      </h1>
      <div className='flex justify-center my-12'>
        <input
          type='text'
          placeholder='Search by product name...'
          value={searchTerm}
          onChange={handleSearchChange}
          className='px-4 py-2 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary text-neutral text-lg font-semibold'
        />
        <button
          onClick={handleVoiceSearch}
          className='ml-2 px-3 py-1 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary bg-rose-500 text-blue-500 font-bold'
        >
          🎤
        </button>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {currentProducts.length > 0 ? (
              currentProducts.map((product) => (
                <Product key={product._id} product={product} />
              ))
            ) : (
              <p className='text-center mt-6'>No products found.</p>
            )}
          </div>
          <div className='flex justify-center mt-8'>
            <button
              className={`px-4 py-2 rounded-lg border-2 ${
                currentPage === 1 ? 'bg-gray-300 text-gray-600 cursor-not-allowed' : 'bg-blue-500 text-white'
              }`}
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            {Array.from({ length: Math.ceil(searchResults.length / productsPerPage) }, (_, i) => (
              <button
                key={i + 1}
                className={`mx-2 px-4 py-2 rounded-lg border-2 ${
                  currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'
                }`}
                onClick={() => paginate(i + 1)}
              >
                {i + 1}
              </button>
            ))}
            <button
              className={`px-4 py-2 rounded-lg border-2 ${
                currentPage === Math.ceil(searchResults.length / productsPerPage)
                  ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                  : 'bg-blue-500 text-white'
              }`}
              onClick={goToNextPage}
              disabled={currentPage === Math.ceil(searchResults.length / productsPerPage)}
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
