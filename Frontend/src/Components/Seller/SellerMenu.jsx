import React from 'react'
import { NavLink } from 'react-router-dom'
import Layout from '../../Layout/Layout'
import './SellerMenu.css';
const SellerMenu = () => {
  const user = JSON.parse(localStorage.getItem("auth")); // Assuming auth is a JSON string
  console.log(user);
  return (
    <div className="seller-menu-container">
    <h1>SellerMenu</h1>
    <ul className="list-group mt-3">
                <NavLink to={`/dashboard/Seller/Profile/${user.Id}`} className="list-group-item active" aria-current="true">View Profile</NavLink>
                <NavLink to="/dashboard/Seller/Products" className="list-group-item"> Products</NavLink>
                <NavLink to="/dashboard/Seller/addproduct" className="list-group-item">Add Products </NavLink>
                <NavLink to="/dashboard/Seller/OrderList" className="list-group-item">Orders</NavLink>
            </ul>
    </div>

  )

}

export default SellerMenu