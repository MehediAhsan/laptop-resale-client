import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllBuyers = () => {

    const {data: buyers = [], refetch} = useQuery({
        queryKey: ['buyers'],
        queryFn: async() => {
            const res = await fetch(`http://localhost:5000/buyers`);
            const data = await res.json();
            return data;
        }
    })

    const handleDeleteBuyer = buyer => {
        fetch(`http://localhost:5000/users/${buyer._id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                refetch();
                toast.success('Buyer deleted successfully')
            }
        })
    }

    return (
        <div className="px-10">
      <h1 className="text-3xl font-semibold my-10">All Buyers</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
                buyers?.map((buyer) => <tr key={buyer._id}>
                    <td>{buyer.name}</td>
                    <td>{buyer.email}</td>
                    <td>
                        <button onClick={() => handleDeleteBuyer(buyer)} className="btn btn-xs btn-error">Delete</button>
                    </td>
                  </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default AllBuyers;