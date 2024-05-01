// // SellerProfile.js
// import React, { useEffect, useState } from 'react';
// import './SellerProfile.css';
// import axios from 'axios';

// const SellerProfile = () => {
//   const [isEditMode, setIsEditMode] = useState(false);
//   const [sellerDTO, setSellerData] = useState({
    
//     gstNo: '',
//     username: '',
//     companyName: '',
//     bankAccount: {
//       accNo: '',
//       bankName: '',
//       ifscCode: '',
//     },
//   });
//   // Fetch seller data on component mount
//   useEffect(() => {
//     fetchSellerData();
//   }, []);
  
//   const handleEditClick = () => {
//     setIsEditMode(!isEditMode);
//   };

//   const handleSaveClick = async () => {
//     try {
//       // Save data using axios
//       const response = await axios.put( `http://localhost:8065/api/sellers/${sellerDTO.id} `, sellerDTO);

//       if (response.status === 200) {
//         console.log('Seller data saved successfully!');
//       } else {
//         console.error('Failed to save seller data:', response.statusText);
//       }

//       // Toggle back to view mode after saving
//       setIsEditMode(false);
//     } catch (error) {
//       console.error('Error saving seller data:', error);
//     }
//   };

   

//   // Fetch seller data function
//   const fetchSellerData = async () => {
//     try {
//       const response = await axios.get('http://localhost:8065/api/sellers');
//       setSellerData(response.data);
//     } catch (error) {
//       console.error('Error fetching seller data:', error);
//     }
//   };


//   return (
//     <div className="SellerProfile">
//       <h2>Seller Profile</h2>
//       <form>
       
//         <div className="mb-3">
//           <label htmlFor="gstNo" className="form-label">
//             GST No
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="gstNo"
//             readOnly={!isEditMode}
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="username" className="form-label">
//             Username
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="username"
//             readOnly={!isEditMode}
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="companyName" className="form-label">
//             Company Name
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="companyName"
//             readOnly={!isEditMode}
//           />
//         </div>
//         {/* ... (other input fields) */}
//         <h3>Bank Account Details</h3>
//         <div className="mb-3">
//           <label htmlFor="accNo" className="form-label">
//             Account No
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="accNo"
//             readOnly={!isEditMode}
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="bankName" className="form-label">
//             Bank Name
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="bankName"
//             readOnly={!isEditMode}
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="ifscCode" className="form-label">
//             IFSC Code
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="ifscCode"
//             readOnly={!isEditMode}
//           />
//         </div>
//        {/* Save/Edit Button */}
//        <button
//           type="button"
//           className={`btn ${isEditMode ? 'btn-danger' : 'btn-primary'}`}
//           onClick={isEditMode ? handleSaveClick : handleEditClick}
//         >
//           {isEditMode ? 'Save' : 'Edit'}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default SellerProfile;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Layout from '../../Layout/Layout';

const SellerProfile = () => {
  const [sellerData, setSellerData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const params = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:8065/api/sellers/${params.id}`);
      setSellerData(response.data);
    } catch (error) {
      setError('Error fetching user data');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
    <div className="container mt-4">
      <h1 className="mb-4">Seller Profile</h1>
      {loading && <p>Loading seller data...</p>}
      {error && <p className="text-danger">{error}</p>}
      {sellerData && (
        <div className="card">
          <div className="card-body">
            <p className="card-text"><strong>GST no</strong> {sellerData.gstNo}</p>
            <p className="card-text"><strong>Username:</strong> {sellerData.username}</p>
            <p className="card-text"><strong>Company Name:</strong> {sellerData.companyName}</p>
            <p className="card-text"><strong>Owner Name</strong> {sellerData.ownerName}</p>
            <p className="card-text"><strong>Bank Name</strong> {sellerData.bankName}</p>
            <p className="card-text"><strong>IFSC Code</strong> {sellerData.ifscCode}</p>
            <p className="card-text"><strong>Account No.</strong> {sellerData.accountNo}</p>
          </div>
        </div>
      )}
    </div>
    </Layout>
  );
};

export default SellerProfile;