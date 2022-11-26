import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllSellers = () => {

    const {data: sellers = [], refetch} = useQuery({
        queryKey: ['sellers'],
        queryFn: async() => {
            const res = await fetch(`http://localhost:5000/sellers`);
            const data = await res.json();
            return data;
        }
    })

    const handleDeleteSeller = seller => {
        fetch(`http://localhost:5000/users/${seller._id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                refetch();
                toast.success('Seller deleted successfully')
            }
        })
    }

    return (
        <div className="px-10">
      <h1 className="text-3xl font-semibold my-10">All Sellers</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Delete</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
                sellers?.map((seller) => <tr key={seller._id}>
                    <td>{seller.name}</td>
                    <td>{seller.email}</td>
                    <td>
                        <button onClick={() => handleDeleteSeller(seller)} className="btn btn-xs btn-error">Delete</button>
                    </td>
                    <td>
                        <button className="btn btn-xs btn-secondary">verify</button>
                    </td>
                  </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default AllSellers;