import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '../../Layout/Layout';


const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showDeliveredButton, setShowDeliveredButton] = useState(false);

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

  const handleViewDetails = async (orderId) => {
    try {
      const response = await axios.get(`http://localhost:8065/api/orders/${orderId}`);
      setSelectedOrder(response.data);
    } catch (error) {
      console.error('Error fetching product details:', error);
      // Handle error gracefully
    }
  };

  

//   const handleShipped = async (orderId) => {
//     try {
//       const currentDate = new Date().toISOString();
//       // Update order status and shipped date
//       await axios.put("http://localhost:8065/api/orders/updateOrder", {
//         orderStatus: 'Shipped',
//         id : orderId
//       });
//       setSelectedOrder(prevOrder => ({ ...prevOrder, orderStatus: 'Shipped', shippedDate: currentDate }));
//       setShowDeliveredButton(true);
//     } catch (error) {
//       console.error('Error updating order status:', error);
//       // Handle error gracefully
//     }
//   };


const handleShipped = async (orderId) => {
  try {
    const currentDate = new Date().toISOString();
    // Get the authentication token from wherever it's stored (e.g., localStorage)
    const token = JSON.parse(localStorage.getItem("auth"));
    console.log(token.jwtToken);
    // Set up headers with Authorization token
    const headers = {
      'Authorization': `Bearer ${token.jwtToken}`,
      'Content-Type': 'application/json'
    };

    // Update order status and shipped date
    await axios.put(`http://localhost:8065/api/orders/updateOrder?id=${orderId}&orderStatus=Shipped`, 
       
       { headers });

    setSelectedOrder(prevOrder => ({ ...prevOrder, orderStatus: 'Shipped', shippedDate: currentDate }));
    setShowDeliveredButton(true);
  } catch (error) {
    console.error('Error updating order status:', error);
    // Handle error gracefully
  }
};

  const handleDelivered = async (orderId) => {
    try {
        const currentDate = new Date().toISOString();
        // Get the authentication token from wherever it's stored (e.g., localStorage)
        const token = JSON.parse(localStorage.getItem("auth"));
        console.log(token.jwtToken);
        // Set up headers with Authorization token
        const headers = {
          'Authorization': `Bearer ${token.jwtToken}`,
          'Content-Type': 'application/json'
        };
    
        // Update order status and shipped date
        await axios.put(`http://localhost:8065/api/orders/updateOrder?id=${orderId}&orderStatus=Delivered`, 
           
           { headers });
    
        setSelectedOrder(prevOrder => ({ ...prevOrder, orderStatus: 'Delivered', deliveredDate: currentDate }));
        setShowDeliveredButton(true);
      } catch (error) {
        console.error('Error updating order status:', error);
        // Handle error gracefully
      }
  };

  const handleBack = () => {
    window.history.back(); // Go back to previous page
  };

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
              <button onClick={() => handleViewDetails(order.ordId)} className="btn btn-primary">View Details</button>
            </div>
          </div>
        </div>
      ))}

      {selectedOrder && (
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <h5 className="card-title">Order Details</h5>
                  <p>Order Status: {selectedOrder.orderStatus}</p>
                  <p>Shipped Date: {selectedOrder.shippedDate}</p>
                  <p>Delivered Date: {selectedOrder.deliveredDate}</p>
                  <p>Customer Name: {selectedOrder.firstName} {selectedOrder.lastName}</p>
                  <p>Email: {selectedOrder.email}</p>
                  <p>Address: {selectedOrder.address}, {selectedOrder.city}, {selectedOrder.pinCode}</p>
                  {selectedOrder.orderStatus !== 'Delivered' &&
                    <button onClick={() => handleShipped(selectedOrder.ordId)}  className="btn btn-success mr-2">Shipped</button>
                  }
                  <button onClick={handleBack} className="btn btn-secondary">Back</button>
                  {showDeliveredButton &&
                    <button onClick={() => handleDelivered(selectedOrder.ordId)} className="btn btn-info ml-2">Delivered</button>
                  }
                </div>
                <div className="col-md-6">
                  <div className="product-details">
                    <img src={`data:image/png;base64,${selectedOrder.product.image}`} alt={selectedOrder.product.name} className="img-fluid mb-3" />
                    <p>Price: ${selectedOrder.product.price}</p>
                    <p>Total Amount: ${selectedOrder.product.totalAmount}</p>
                    <p>Category: {selectedOrder.product.category}</p>
                    <p>Subcategory: {selectedOrder.product.subcategory}</p>
                    <p>State: {selectedOrder.product.state}</p>
                    <p>Description: {selectedOrder.product.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    </Layout>
  );
};

export default OrderList;
