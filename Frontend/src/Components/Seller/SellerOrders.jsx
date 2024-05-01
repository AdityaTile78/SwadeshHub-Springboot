// Orders.js
import React, { useEffect, useState } from 'react';
import './SellerOrders.css'; // Add your CSS file for styling
import axios from 'axios';
import Layout from '../../Layout/Layout';

const Orders = () => {
  // State to store seller data
  const [orders, setOrders] = useState([]);

  // Function to fetch seller data from the database
  const fetchOrderData = async () => {
    const user = JSON.parse(localStorage.getItem("auth")); 
    try {
      const response = await axios.get( `http://localhost:8065/api/orders/orderBySellerId/${user.username}`);
      setOrders(response.data);
    } catch (error) {
      console.error('Error fetching seller orders:', error);
    }
  };

  useEffect(() => {
    fetchOrderData();
  }, []);


  return (
    <Layout>
    <div className="orders">
      <h2>Orders</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>User ID</th>
            <th>Order Date</th>
            <th>Quantity</th>
            <th>Order Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.ordId}>
              <td>{order.ordId}</td>
              <td>{order.userId}</td>
              <td>{order.orderDate}</td>
              <td>{order.quantity}</td>
              <td>{order.orderStatus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </Layout>
  );
};

export default Orders;
