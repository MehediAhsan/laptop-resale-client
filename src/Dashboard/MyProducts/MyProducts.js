import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider';

const MyProducts = () => {
    const {user} = useContext(AuthContext);

    const {data: products = [], refetch} = useQuery({
        queryKey: ['products'],
        queryFn: async() => {
            const res = await fetch(`http://localhost:5000/products?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    })

    
    const handleDeleteProduct = product => {
        fetch(`http://localhost:5000/products/${product._id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                refetch();
                toast.success('Product deleted successfully')
            }
        })
    }


    return (
        <div className="px-10">
      <h1 className="text-3xl font-semibold my-10">My Products</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Sales status</th>
              <th>Seller Name</th>
              <th>Price</th>
              <th>Delete</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
                products?.map((product) => <tr key={product._id}>
                    <td>
                       <img className='w-24' src={product.picture} alt="" /> 
                    </td>
                    <td>Available</td>
                    <td>{product.seller_name}</td>
                    <td>${product.resale_price}</td>
                    <td>
                        <button onClick={() => handleDeleteProduct(product)} className="btn btn-xs btn-error">Delete</button>
                    </td>
                    <td>
                        <button className="btn btn-xs btn-secondary">Advertise</button>
                    </td>
                  </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default MyProducts;