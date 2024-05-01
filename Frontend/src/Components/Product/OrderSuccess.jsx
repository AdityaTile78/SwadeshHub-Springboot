import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography, Button } from '@mui/material';
import './OrderSuccess.css'; // Import custom CSS file for styling
import Layout from '../../Layout/Layout';
import Template from '../Invoice/Template';
const OrderSuccess = () => {
  const [order, setOrder] = useState(null); // Initialize order state with null
  const [Dates, setDates] = useState('');

  const [view, setView] = useState(true);

  let newDate = new Date()
  let date = newDate.getDate();
  const Create = () => {
    setView(false)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Check if order has already been fetched to prevent multiple API calls
        if (order === null) {
          const urlParams = new URLSearchParams(window.location.search);
          const paymentId = urlParams.get('razorpay_payment_id');
          const paymentLinkId = urlParams.get('razorpay_payment_link_id');
          const paymentLinkReferenceId = urlParams.get('razorpay_payment_link_reference_id');
          const paymentLinkStatus = urlParams.get('razorpay_payment_link_status');
          const signature = urlParams.get('razorpay_signature');
          
          const paymentMode = "Online"; // Set paymentMode here

          const orderData = JSON.parse(localStorage.getItem("orderData"));
          const user = JSON.parse(localStorage.getItem("auth"));
          const email = user.email;

          const updatedOrderData = {
            firstName: orderData.firstName,
            lastName: orderData.lastName,
            email: email,
            totalAmount: orderData.totalAmount,
            address: orderData.address,
            city: orderData.city,
            pincode: orderData.pincode,
            userId: orderData.userId,
            productId: orderData.productId,
            paymentId: paymentId || '',
            paymentMode: paymentMode
          };

          const { data } = await axios.post(`http://localhost:8065/api/orders`, updatedOrderData);
          console.log('Order created successfully:', data);
          setOrder(data);
        }
      } catch (error) {
        console.error('Error creating order:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to mimic componentDidMount behavior

  useEffect(() => {

    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
    console.log(`Date is ${date}`);
    setDates(date)

},[])

  // Render loading state while order is being fetched
  if (order === null) {
    return <div>Loading...</div>;
  }

  // Function to format date
  const formatDate = (dateArray) => {
    const [year, month, day] = dateArray;
    return `${day}/${month}/${year}`;
  };
  


  const handleInvoiceCreation = () => {
    // Implement invoice creation logic here
    console.log('Invoice created successfully!');
  };

  // Render the order details using Material-UI cards
  return (
    <Layout>
      <>
      {
          view ?      
    <div className="order-container">
      <h1>Order Details</h1>
      <Card className="order-card">
        <CardContent>
          <Typography variant="h5" component="div" className="card-title">
            Order Information
          </Typography>
          <div className="card-item">
            <Typography variant="body1" className="card-label">
              Order ID:
            </Typography>
            <Typography variant="body1" className="card-value">
              {order.ordId}
            </Typography>
          </div>
          <div className="card-item">
            <Typography variant="body1" className="card-label">
              User ID:
            </Typography>
            <Typography variant="body1" className="card-value">
              {order.userId}
            </Typography>
          </div>
          <div className="card-item">
            <Typography variant="body1" className="card-label">
              Seller ID:
            </Typography>
            <Typography variant="body1" className="card-value">
              {order.sellerId}
            </Typography>
          </div>
          {/* Add more attributes here */}
          <div className="card-item">
            <Typography variant="body1" className="card-label">
              First Name:
            </Typography>
            <Typography variant="body1" className="card-value">
              {order.firstName}
            </Typography>
          </div>
          <div className="card-item">
            <Typography variant="body1" className="card-label">
              Last Name:
            </Typography>
            <Typography variant="body1" className="card-value">
              {order.lastName}
            </Typography>
          </div>
          <div className="card-item">
            <Typography variant="body1" className="card-label">
              Total Amount:
            </Typography>
            <Typography variant="body1" className="card-value">
              {order.totalAmount}
            </Typography>
          </div>
          {/* Add more attributes here */}
        </CardContent>
      </Card>
    
      <Card className="order-card">
        <CardContent>
          <Typography variant="h5" component="div" className="card-title">
            Product Information
          </Typography>
          <div className="card-item">
            <Typography variant="body1" className="card-label">
              Product ID:
            </Typography>
            <Typography variant="body1" className="card-value">
              {order.product.id}
            </Typography>
          </div>
          <div className="card-item">
            <Typography variant="body1" className="card-label">
              Product Name:
            </Typography>
            <Typography variant="body1" className="card-value">
              {order.product.name}
            </Typography>
          </div>
          <div className="card-item">
            <Typography variant="body1" className="card-label">
              Price:
            </Typography>
            <Typography variant="body1" className="card-value">
              ${order.product.price}
            </Typography>
          </div>
          {/* Add more attributes here */}
          <div className="card-item">
            <Typography variant="body1" className="card-label">
              Description:
            </Typography>
            <Typography variant="body1" className="card-value">
              {order.product.description}
            </Typography>
          </div>
          <div className="card-item">
            <Typography variant="body1" className="card-label">
              Quantity:
            </Typography>
            <Typography variant="body1" className="card-value">
              {order.product.quantity}
            </Typography>
          </div>
          {/* Add more attributes here */}
        </CardContent>
      </Card>
      <Button variant="contained" color="primary" onClick={Create}>
        Create Invoice
      </Button>
      {/* Add more cards for different sections */}
      </div>
      :
      <Template order={order} date={Dates}  />
     
      }
      </>
   
   
    </Layout>
  );
};

export default OrderSuccess;
