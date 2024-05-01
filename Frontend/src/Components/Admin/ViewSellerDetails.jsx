// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import { Typography, Paper, Button, TextField } from '@mui/material';
// import Layout from '../../Layout/Layout';

// const ViewSellerDetails = () => {
//   const { sId } = useParams();
//   const [sellerData, setSellerData] = useState({});

//   useEffect(() => {
//     const fetchSellerData = async () => {
//       try {
//         const response = await axios.get(`http://localhost:8065/api/sellers/${sId}`);
//         console.log('Response:', response.data);
//         setSellerData(response.data);
//       } catch (error) {
//         console.error('Error fetching seller data:', error);
//       }
//     };

//     if (sId) {
//       fetchSellerData();
//     }
//   }, [sId]);

//   if (!sId) {
//     return (
//       <Paper elevation={3} style={{ padding: '20px' }}>
//         <Typography variant="h5" gutterBottom>
//           Invalid Seller ID
//         </Typography>
//       </Paper>
//     );
//   }

//   const handleReject = async () => {
//     try {
//       await axios.delete(`http://localhost:8065/api/sellers/${sId}`);
//       // Redirect or handle rejection as needed
//     } catch (error) {
//       console.error('Error rejecting seller:', error);
//     }
//   };

//   return (
//     <Layout>
//       <Paper elevation={3} style={{ padding: '20px', maxWidth: '600px', margin: 'auto', marginTop: '20px', background: 'linear-gradient(to right, #FFEAC7, #ffffff, #D1FFC7)' }}>
//         <Typography variant="h5" gutterBottom style={{ color: 'dark', textAlign: 'center' }}>
//           Seller Details
//         </Typography>

//         <table className="table" style={{ padding: '20px', maxWidth: '600px', margin: 'auto', marginTop: '20px', background: 'linear-gradient(to right, #FFEAC7, #ffffff, #D1FFC7)' }}>
//           <tbody>
//             <tr>
//               <th>GST Number</th>
//               <td>{sellerData?.gstNo}</td>
//             </tr>
//             <tr>
//               <th>Username</th>
//               <td>{sellerData?.username}</td>
//             </tr>
//             <tr>
//               <th>Password</th>
//               <td>{sellerData?.password}</td>
//             </tr>
//             <tr>
//               <th>Company Name</th>
//               <td>{sellerData?.companyName}</td>
//             </tr>
//             <tr>
//               <th>Owner Name</th>
//               <td>{sellerData?.ownerName}</td>
//             </tr>
//             <tr>
//               <th>City</th>
//               <td>{sellerData?.city}</td>
//             </tr>
//             <tr>
//               <th>State</th>
//               <td>{sellerData?.state}</td>
//             </tr>
//             <tr>
//               <th>Category</th>
//               <td>{sellerData?.category}</td>
//             </tr>
//             <tr>
//               <th>Account Number</th>
//               <td>{sellerData?.accountNo}</td>
//             </tr>
//             <tr>
//               <th>Bank Name</th>
//               <td>{sellerData?.bankName}</td>
//             </tr>
//             <tr>
//               <th>IFSC Code</th>
//               <td>{sellerData?.ifscCode}</td>
//             </tr>
//           </tbody>
//         </table>

//         <Button
//           variant="contained"
//           color="secondary"
//           style={{ marginTop: '20px', width: '100%', display: 'block' }}
//           onClick={handleReject}
//         >
//           Delete
//         </Button>
//       </Paper>
//     </Layout>
//   );
// };

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Typography, Paper, Button, TextField } from '@mui/material';
import Layout from '../../Layout/Layout';

const ViewSellerDetails = () => {
  const { sId } = useParams();
  const [sellerData, setSellerData] = useState({});

  useEffect(() => {
    const fetchSellerData = async () => {
      try {
        const response = await axios.get(`http://localhost:8065/api/sellers/${sId}`);
        console.log('Response:', response.data);
        setSellerData(response.data);
      } catch (error) {
        console.error('Error fetching seller data:', error);
      }
    };

    if (sId) {
      fetchSellerData();
    }
  }, [sId]);

  if (!sId) {
    return (
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Typography variant="h5" gutterBottom>
          Invalid Seller ID
        </Typography>
      </Paper>
    );
  }

  const handleReject = async () => {
    try {
      await axios.delete(`http://localhost:8065/api/sellers/${sId}`);
      // Redirect or handle rejection as needed
    } catch (error) {
      console.error('Error rejecting seller:', error);
    }
  };

  return (
    <Layout>
      <Paper elevation={3} style={{ padding: '20px', maxWidth: '600px', margin: 'auto', marginTop: '20px', background: 'linear-gradient(to right, #FFEAC7, #ffffff, #D1FFC7)' }}>
        <Typography variant="h5" gutterBottom style={{ color: 'dark', textAlign: 'center' }}>
          Seller Details
        </Typography>

        <table className="table" style={{ padding: '20px', maxWidth: '600px', margin: 'auto', marginTop: '20px', background: 'linear-gradient(to right, #FFEAC7, #ffffff, #D1FFC7)' }}>
          <tbody>
            <tr>
              <th>GST Number</th>
              <td>{sellerData?.gstNo}</td>
            </tr>
            <tr>
              <th>Username</th>
              <td>{sellerData?.username}</td>
            </tr>
            <tr>
              <th>Password</th>
              <td>{sellerData?.password}</td>
            </tr>
            <tr>
              <th>Company Name</th>
              <td>{sellerData?.companyName}</td>
            </tr>
            <tr>
              <th>Owner Name</th>
              <td>{sellerData?.ownerName}</td>
            </tr>
            <tr>
              <th>City</th>
              <td>{sellerData?.city}</td>
            </tr>
            <tr>
              <th>State</th>
              <td>{sellerData?.state}</td>
            </tr>
            <tr>
              <th>Category</th>
              <td>{sellerData?.category}</td>
            </tr>
            <tr>
              <th>Account Number</th>
              <td>{sellerData?.accountNo}</td>
            </tr>
            <tr>
              <th>Bank Name</th>
              <td>{sellerData?.bankName}</td>
            </tr>
            <tr>
              <th>IFSC Code</th>
              <td>{sellerData?.ifscCode}</td>
            </tr>
          </tbody>
        </table>

        <Button
          variant="contained"
          color="secondary"
          style={{ marginTop: '20px', width: '100%', display: 'block' }}
          onClick={handleReject}
        >
          Delete
        </Button>
      </Paper>
    </Layout>
  );
};

export default ViewSellerDetails;
