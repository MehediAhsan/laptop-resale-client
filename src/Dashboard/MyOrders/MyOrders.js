import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const MyOrders = () => {
  const { user } = useContext(AuthContext);

  const url = `https://laptop-resale-server.vercel.app/bookings?email=${user?.email}`;

  const { data: bookings = [] } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem('accessToken')}`
        }
      });
      const data = await res.json();
      return data;
    },
  });

  console.log(bookings);

  return (
    <div className="px-10">
      <h1 className="text-3xl font-semibold my-10">My Orders</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {
                bookings?.map((booking,i) => <tr key={booking?._id}>
                    <th>{i+1}</th>
                    <td><img className="w-20" src={booking?.picture} alt="" /></td>
                    <td>{booking?.product}</td>
                    <td>${booking?.price}</td>
                    <td>
                      {
                        booking?.price && !booking?.paid && <Link to={`/dashboard/payment/${booking?._id}`}>
                        <button
                        className="btn btn-primary btn-sm"
                        >Pay</button>
                        </Link>
                      }
                      {
                        booking?.price && booking?.paid && <span className="text-primary">Paid</span>
                      }
                    </td>
                  </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;