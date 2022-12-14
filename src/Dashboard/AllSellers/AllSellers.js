import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllSellers = () => {

    const {data: sellers = [], refetch} = useQuery({
        queryKey: ['sellers'],
        queryFn: async() => {
            const res = await fetch('https://laptop-resale-server.vercel.app/sellers', {
              headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
              }
            });
            const data = await res.json();
            return data;
        }
    })

    const handleDeleteSeller = seller => {
        fetch(`https://laptop-resale-server.vercel.app/users/${seller._id}`, {
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

    const handleUpdateStatus = seller => {
      fetch(`https://laptop-resale-server.vercel.app/users/${seller._id}`, {
          method: 'PATCH', 
          headers: {
              'content-type': 'application/json',
          },
          body: JSON.stringify({verified: true})
      })
      .then(res => res.json())
      .then(data => {
          if(data.modifiedCount > 0) {
            refetch();
            toast.success('Seller verified successfully')
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
              <th>Seller's Status</th>
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
                        <button onClick={() => handleUpdateStatus(seller)} className="btn btn-xs btn-secondary">{seller.verified ? 'verified' : 'verify'}</button>
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