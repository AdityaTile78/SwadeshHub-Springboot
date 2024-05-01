import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Layout from '../../Layout/Layout';
import PdfTemplate from '../Invoice/Template';

const ViewOrder = () => {
    const [order, setOrder] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const params = useParams();
    const [Dates, setDates] = useState('');

    const [view, setView] = useState(true);
  
    let newDate = new Date()
    let date = newDate.getDate();

    const Create = () => {
      setView(false)
    }

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {

        const current = new Date();
        const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
        console.log(`Date is ${date}`);
        setDates(date)
    
    },[])

    const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:8065/api/orders/${params.id}`);
            setOrder(response.data);
        } catch (error) {
            setError('Error fetching order data');
        } finally {
            setLoading(false);
        }
    };

    const handleInvoiceClick = () => {
        // Handle the action when the "Invoice" button is clicked
        // For example, you can navigate the user to the invoice page
    };

    return (
        <Layout>
        <>
        {
        view?
        <div className="container mt-4">
            <h1 className="mb-4">Order Details</h1>
            {loading && <p>Loading order data...</p>}
            {error && <p className="text-danger">{error}</p>}
            {order && (
                <div className="card mb-4">
                    <div className="card-body">
                        <h5 className="card-title">Order Information</h5>
                        <p className="card-text"><strong>Order Id:</strong> {order.ordId}</p>
                        <p className="card-text"><strong>User Id:</strong> {order.userId}</p>
                        <p className="card-text"><strong>First Name:</strong> {order.firstName}</p>
                        <p className="card-text"><strong>Last Name:</strong> {order.lastName}</p>
                        <p className="card-text"><strong>Email:</strong> {order.email}</p>
                        <p className="card-text"><strong>Mobile:</strong> {order.mobile}</p>
                        <p className="card-text"><strong>Order Status:</strong> {order.orderStatus}</p>
                        <p className="card-text"><strong>Order Date:</strong> {order.orderDate.join('/')}</p>
                        <p className="card-text"><strong>Address:</strong> {order.address}</p>
                        <p className="card-text"><strong>City:</strong> {order.city}</p>
                        <p className="card-text"><strong>Pincode:</strong> {order.pincode}</p>
                        <p className="card-text"><strong>Payment Mode:</strong> {order.paymentMode}</p>
                        <p className="card-text"><strong>Total Amount:</strong> {order.totalAmount}</p>
                        <h5 className="card-title mt-3">Product Information</h5>
                        <p className="card-text"><strong>Product Id:</strong> {order.product.id}</p>
                        <p className="card-text"><strong>Product Name:</strong> {order.product.name}</p>
                        <p className="card-text"><strong>Product Price:</strong> {order.product.price}</p>
                        <p className="card-text"><strong>Product Quantity:</strong> {order.product.quantity}</p>
                        <p className="card-text"><strong>Product Description:</strong> {order.product.description}</p>
                        <p className="card-text"><strong>Product Category:</strong> {order.product.categoryName}</p>
                        <p className="card-text"><strong>Product Brand:</strong> {order.product.brand}</p>
                        <p className="card-text"><strong>Product Size:</strong> {order.product.size}</p>
                        <p className="card-text"><strong>Product Color:</strong> {order.product.color}</p>
                        <button className="btn btn-primary mt-3" onClick={Create}>Invoice</button>
                    </div>
                </div>
                
            )}
        </div>
         :
         <PdfTemplate order={order} date={Dates}  />
        
         }
         </>
         </Layout>
    );
};

export default ViewOrder;
