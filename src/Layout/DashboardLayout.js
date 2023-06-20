import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import useSeller from "../hooks/useSeller";
import Header from "../Pages/Shared/Header";
import { RiShoppingBasketLine, RiAddCircleLine, RiShoppingBagLine, RiUserStarLine, RiShieldStarLine, RiAlertLine } from 'react-icons/ri';

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const [isSeller] = useSeller(user?.email);

  return (
    <div>
      <Header></Header>
      <div className="drawer drawer-mobile drawer-end">
        <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 text-black bg-primary font-semibold">
            {!isSeller && !isAdmin && (
              <li>
                <Link to='/dashboard/myorders'>
                  <RiShoppingBasketLine className="icon" /> My Orders
                </Link>
              </li>
            )}
            {isSeller && !isAdmin && (
              <>
                <li>
                  <Link to='/dashboard/addproduct'>
                    <RiAddCircleLine className="icon" /> Add a Product
                  </Link>
                </li>
                <li>
                  <Link to='/dashboard/myproducts'>
                    <RiShoppingBagLine className="icon" /> My Products
                  </Link>
                </li>
              </>
            )}
            {isAdmin && !isSeller && (
              <>
                <li>
                  <Link to='/dashboard/allbuyers'>
                    <RiUserStarLine className="icon" /> All Buyers
                  </Link>
                </li>
                <li>
                  <Link to='/dashboard/allsellers'>
                    <RiShieldStarLine className="icon" /> All Sellers
                  </Link>
                </li>
                <li>
                  <Link to='/dashboard/reporteditems'>
                    <RiAlertLine className="icon" /> Reported Items
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
