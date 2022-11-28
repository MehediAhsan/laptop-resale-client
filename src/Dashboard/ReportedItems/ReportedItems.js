import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const ReportedItems = () => {

    const {data: products = [], refetch} = useQuery({
        queryKey: ['products'],
        queryFn: async() => {
            const res = await fetch('https://laptop-resale-server.vercel.app/reports');
            const data = await res.json();
            return data;
        }
    })

    
    const handleDeleteProduct = product => {
        fetch(`https://laptop-resale-server.vercel.app/products/${product._id}`, {
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
      <h1 className="text-3xl font-semibold my-10">Reported Items</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Product Name</th>
              <th>Seller Name</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
                products?.map((product) => <tr key={product._id}>
                    <td>
                       <img className='w-24' src={product.picture} alt="" /> 
                    </td>
                    <td>{product.product_name}</td>
                    <td>{product.seller_name}</td>
                    <td>
                        <button onClick={() => handleDeleteProduct(product)} className="btn btn-xs btn-error">Delete</button>
                    </td>
                  </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default ReportedItems;