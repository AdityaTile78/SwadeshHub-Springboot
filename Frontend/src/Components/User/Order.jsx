import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import Layout from '../../Layout/Layout';

const Orders = () => {
    const [orders, setOrders] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const params = useParams();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:8065/api/orders/orderByUserId?userId=${params.id}`);
            setOrders(response.data);
        } catch (error) {
            setError('Error fetching order data');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Layout>
            <div className="container mt-4">
                <h1 className="mb-4">Orders</h1>
                {loading && <p>Loading user Order data...</p>}
                {error && <p className="text-danger">{error}</p>}
                {orders && orders.map(order => (
                    <div key={order.ordId} className="card mb-4">
                        <div className="card-body">
                            <h5 className="card-title">Order Details</h5>
                            <p className="card-text"><strong>Order Id:</strong> {order.ordId}</p>
                            <p className="card-text"><strong>Order Status:</strong> {order.orderStatus}</p>
                            <p className="card-text"><strong>Order Date:</strong> {order.orderDate.join('/')}</p>
                            <p className="card-text"><strong>Product Name:</strong> {order.product.name}</p>
                            <p className="card-text"><strong>Total Amount:</strong> {order.totalAmount}</p>
                            <Link to={`/vieworder/${order.ordId}`} className="btn btn-primary">View</Link>
                        </div>
                    </div>
                ))}
            </div>
        </Layout>
    );
};

export default Orders;
