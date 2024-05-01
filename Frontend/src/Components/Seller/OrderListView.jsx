import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '../../Layout/Layout';
import { useNavigate } from 'react-router-dom';

const OrderListView = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrders = async () => {
      const user = JSON.parse(localStorage.getItem("auth"));
      try {
        const response = await axios.get(`http://localhost:8065/api/orders/orderBySellerId?sellerId=${user.username}`);
        setOrders(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

 
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Layout>
      <div className="row">
        {orders.map(order => (
          <div key={order.id} className="col-12 mb-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{order.product.name}</h5>
                <p className="card-text">Order Status: {order.orderStatus}</p>
                <p className="card-text">Customer Name: {order.firstName} {order.lastName}</p>
                <p className="card-text">Email: {order.email}</p>
                <p className="card-text">Address: {order.address}, {order.city}, {order.pinCode}</p>
                {/* Call handleViewDetails on button click */}
                <button class="btn btn-secondary ms-1" onClick={() => navigate(`/order/${order.ordId}`)}>View Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default OrderListView;