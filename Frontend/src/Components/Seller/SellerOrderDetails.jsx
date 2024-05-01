// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Layout from '../../Layout/Layout';
// import { useParams } from 'react-router-dom';


// const SellerOrderDetails = () => {
//   const [orders, setOrders] = useState();
 
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [showDeliveredButton, setShowDeliveredButton] = useState(false);

//   const params = useParams();
//   useEffect(() => {
//     const fetchOrder = async () => {
//         const user = JSON.parse(localStorage.getItem("auth")); 
//       try {
//         const response = await axios.get(http://localhost:8065/api/orders/${params.ordId});
//         setOrders(response.data);
//         setLoading(false);
//       } catch (error) {
//         setError(error.message);
//         setLoading(false);
//       }
//     };

//     fetchOrder();
//   }, []);



  

// //   const handleShipped = async (orderId) => {
// //     try {
// //       const currentDate = new Date().toISOString();
// //       // Update order status and shipped date
// //       await axios.put("http://localhost:8065/api/orders/updateOrder", {
// //         orderStatus: 'Shipped',
// //         id : orderId
// //       });
// //       setorders(prevOrder => ({ ...prevOrder, orderStatus: 'Shipped', shippedDate: currentDate }));
// //       setShowDeliveredButton(true);
// //     } catch (error) {
// //       console.error('Error updating order status:', error);
// //       // Handle error gracefully
// //     }
// //   };


// const handleShipped = async (orderId) => {
//   try {
//     const currentDate = new Date().toISOString();
//     // Get the authentication token from wherever it's stored (e.g., localStorage)
//     const token = JSON.parse(localStorage.getItem("auth"));
//     console.log(token.jwtToken);
//     // Set up headers with Authorization token
//     const headers = {
//       'Authorization': Bearer ${token.jwtToken},
//       'Content-Type': 'application/json'
//     };

//     // Update order status and shipped date
//     await axios.put(http://localhost:8065/api/orders/updateOrder?id=${orderId}&orderStatus=Shipped, 
       
//        { headers });

//     setOrders(prevOrder => ({ ...prevOrder, orderStatus: 'Shipped', shippedDate: currentDate }));
//     setShowDeliveredButton(true);
//   } catch (error) {
//     console.error('Error updating order status:', error);
//     // Handle error gracefully
//   }
// };

//   const handleDelivered = async (orderId) => {
//     try {
//         const currentDate = new Date().toISOString();
//         // Get the authentication token from wherever it's stored (e.g., localStorage)
//         const token = JSON.parse(localStorage.getItem("auth"));
//         console.log(token.jwtToken);
//         // Set up headers with Authorization token
//         const headers = {
//           'Authorization': Bearer ${token.jwtToken},
//           'Content-Type': 'application/json'
//         };
    
//         // Update order status and shipped date
//         await axios.put(http://localhost:8065/api/orders/updateOrder?id=${orderId}&orderStatus=Delivered, 
           
//            { headers });
    
//         setOrders(prevOrder => ({ ...prevOrder, orderStatus: 'Delivered', deliveredDate: currentDate }));
//         setShowDeliveredButton(true);
//       } catch (error) {
//         console.error('Error updating order status:', error);
//         // Handle error gracefully
//       }
//   };

//   const handleBack = () => {
//     window.history.back(); // Go back to previous page
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <Layout>
 
//       { (
//         <div className="col-12">
//           <div className="card">
//             <div className="card-body">
//               <div className="row">
//                 <div className="col-md-6">
//                   <h5 className="card-title">Order Details</h5>
//                   <p>Order Status: {orders.orderStatus}</p>
//                   <p>Shipped Date: {orders.shippedDate}</p>
//                   <p>Delivered Date: {orders.deliveredDate}</p>
//                   <p>Customer Name: {orders.firstName} {orders.lastName}</p>
//                   <p>Email: {orders.email}</p>
//                   <p>Address: {orders.address}, {orders.city}, {orders.pinCode}</p>
//                   {orders.orderStatus !== 'Delivered' &&
//                     <button onClick={() => handleShipped(orders.ordId)}  className="btn btn-success mr-2">Shipped</button>
//                   }
//                   <button onClick={handleBack} className="btn btn-secondary">Back</button>
//                   {showDeliveredButton &&
//                     <button onClick={() => handleDelivered(orders.ordId)} className="btn btn-info ml-2">Delivered</button>
//                   }
//                 </div>
//                 <div className="col-md-6">
//                   <div className="product-details">
//                     <h5>Product Details</h5>
//                     <img src={data:image/png;base64,${orders.product.image}} alt={orders.product.name} className="img-fluid mb-3" />
//                     <p>Product Name: {orders.product.name}</p>
//                     <p>Price: Rs.{orders.product.price}</p>
                   
//                     <p>Category: {orders.product.categoryName}</p>
                  
//                     <p>State: {orders.product.stateName}</p>
//                     <p>Description: {orders.product.description}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
  
    
//  )}
//     </Layout>
//   );
// };

// export default SellerOrderDetails;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '../../Layout/Layout';
import { useParams } from 'react-router-dom';

const SellerOrderDetails = () => {
  const [orders, setOrders] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showDeliveredButton, setShowDeliveredButton] = useState(false);
  const params = useParams();

  useEffect(() => {
    const fetchOrder = async () => {
      const user = JSON.parse(localStorage.getItem("auth")); 
      try {
        const response = await axios.get(`http://localhost:8065/api/orders/${params.ordId}`);
        setOrders(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchOrder();
  }, [params.ordId]);

  const handleShipped = async (orderId) => {
    try {
      const currentDate = new Date().toISOString();
      const token = JSON.parse(localStorage.getItem("auth"));
      const headers = {
        'Authorization': `Bearer ${token.jwtToken}`,
        'Content-Type': 'application/json'
      };

      await axios.put(`http://localhost:8065/api/orders/updateOrder?id=${orderId}&orderStatus=Shipped`, {}, { headers });

      setOrders(prevOrder => ({ ...prevOrder, orderStatus: 'Shipped', shippedDate: currentDate }));
      setShowDeliveredButton(true);
    } catch (error) {
      console.error('Error updating order status:', error);
    }
  };

  const handleDelivered = async (orderId) => {
    try {
      const currentDate = new Date().toISOString();
      const token = JSON.parse(localStorage.getItem("auth"));
      const headers = {
        'Authorization': `Bearer ${token.jwtToken}`,
        'Content-Type': 'application/json'
      };

      await axios.put(`http://localhost:8065/api/orders/updateOrder?id=${orderId}&orderStatus=Delivered`, {}, { headers });

      setOrders(prevOrder => ({ ...prevOrder, orderStatus: 'Delivered', deliveredDate: currentDate }));
      setShowDeliveredButton(false);
    } catch (error) {
      console.error('Error updating order status:', error);
    }
  };

  const handleBack = () => {
    window.history.back(); // Go back to the previous page
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Layout>
      <div className="col-12">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
                <h5 className="card-title">Order Details</h5>
                <p>Order Status: {orders.orderStatus}</p>
                <p>Shipped Date: {orders.shippedDate}</p>
                <p>Delivered Date: {orders.deliveredDate}</p>
                <p>Customer Name: {orders.firstName} {orders.lastName}</p>
                <p>Email: {orders.email}</p>
                <p>Address: {orders.address}, {orders.city}, {orders.pinCode}</p>
                {orders.orderStatus !== 'Delivered' && (
                  <>
                    <button onClick={() => handleShipped(orders.ordId)} className="btn btn-success mr-2" disabled={showDeliveredButton}>Shipped</button>
                    <button onClick={handleBack} className="btn btn-secondary">Back</button>
                  </>
                )}
                {showDeliveredButton && (
                  <button onClick={() => handleDelivered(orders.ordId)} className="btn btn-info ml-2">Delivered</button>
                )}
              </div>
              <div className="col-md-6">
                <div className="product-details">
                  <h5>Product Details</h5>
                  <img src={`data:image/png;base64,${orders.product.image}`} alt={orders.product.name} className="img-fluid mb-3" />
                  <p>Product Name: {orders.product.name}</p>
                  <p>Price: Rs.{orders.product.price}</p>
                  <p>Category: {orders.product.categoryName}</p>
                  <p>State: {orders.product.stateName}</p>
                  <p>Description: {orders.product.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SellerOrderDetails;