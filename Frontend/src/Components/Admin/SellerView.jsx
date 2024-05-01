// // // import React, { useState, useEffect } from 'react';
// // import axios from 'axios';
// // import { useParams } from 'react-router-dom';
// // import { Typography, Paper, Button, TextField } from '@mui/material';
// // import { useEffect, useState } from 'react';
// // import Layout from '../../Layout/Layout';

// // const SellerView = () => {
// //   const { formId } = useParams();
// //   const [sellerData, setSellerData] = useState({});
// //   const [isAccepted, setIsAccepted] = useState(false);

// //   useEffect(() => {
// //     const fetchSellerData = async () => {
// //       try {
// //         const response = await axios.get(`http://localhost:8065/api/seller-forms/${formId}`);
// //         console.log('Response:', response.data); // Log the response
// //         setSellerData(response.data);
// //       } catch (error) {
// //         console.error('Error fetching seller data:', error);
// //       }
// //     };

// //     if (formId) {
// //       fetchSellerData();
// //     }
// //   }, [formId]);

// //   if (!formId) {
// //     // Optionally, you can handle the case where formId is not available, for example, redirect to another page
// //     return (
// //       <Paper elevation={3} style={{ padding: '20px' }}>
// //         <Typography variant="h5" gutterBottom>
// //           Invalid Form ID
// //         </Typography>
// //       </Paper>
// //     );
// //   }

// //   const textFieldStyle = { color: 'black' }; // Define the style for text fields

// //   const handleAccept = async () => {
// //     try {
// //       // Your API endpoint for accepting a seller
// //       await axios.post("http://localhost:8065/api/sellers", sellerData);

// //       setIsAccepted(true);
// //     } catch (error) {
// //       console.error('Error accepting seller:', error);
// //     }
// //   };

// //   const handleReject = async () => {
// //     try {
// //       // Your API endpoint for rejecting a seller
// //       await axios.delete(`http://localhost:8065/api/seller-forms/${formId}`);
// //       // Redirect or handle rejection as needed
// //     } catch (error) {
// //       console.error('Error rejecting seller:', error);
// //     }
// //   };

// //   return (
// //     <Layout>
// //     <Paper elevation={3} style={{ padding: '20px',maxWidth: '400px', margin: 'auto', marginTop: '20px' }}>
// //       <Typography variant="h5" gutterBottom  style={{ color: 'dark' }}>
// //         Seller Details
// //       </Typography>

// //       <TextField
// //         style={textFieldStyle}
// //         label="GST Number"
// //         fullWidth
// //         value={sellerData?.gstNo || ''}
        
// //       />
// //       <br /><br />
// //       <TextField
// //         style={textFieldStyle}
// //         label="Username"
// //         fullWidth
// //         value={sellerData?.username || ''}
        
// //       />
// //       <br /><br />
// //       <TextField
// //         style={textFieldStyle}
// //         label="Password"
// //         fullWidth
// //         value={sellerData?.password || ''}
        
// //       />
// //       <br /><br />
// //       <TextField
// //         style={textFieldStyle}
// //         label="Company Name"
// //         fullWidth
// //         value={sellerData?.companyName || ''}
       
// //       />
// //       <br /><br />
// //       <TextField
// //         style={textFieldStyle}
// //         label="Owner Name"
// //         fullWidth
// //         value={sellerData?.ownerName || ''}
        
// //       />
// //       <br /><br />
// //       <TextField
// //         style={textFieldStyle}
// //         label="City"
// //         fullWidth
// //         value={sellerData?.city || ''}
        
// //       />
// //       <br /><br />
// //       <TextField
// //         style={textFieldStyle}
// //         label="State"
// //         fullWidth
// //         value={sellerData?.state || ''}
        
// //       />
// //       <br /><br />
// //       <TextField
// //         style={textFieldStyle}
// //         label="Category"
// //         fullWidth
// //         value={sellerData?.category || ''}
        
// //       />
// //       <br /><br />
// //       <TextField
// //         style={textFieldStyle}
// //         label="Account Number"
// //         fullWidth
// //         value={sellerData?.accountNo || ''}
        
// //       />
// //       <br /><br />
// //       <TextField
// //         style={textFieldStyle}
// //         label="Bank Name"
// //         fullWidth
// //         value={sellerData?.bankName || ''}
        
// //       />
// //       <br /><br />
// //       <TextField
// //         style={textFieldStyle}
// //         label="IFSC Code"
// //         fullWidth
// //         value={sellerData?.ifscCode || ''}
        
// //       />
// //       <br /><br />

// //       <Button
// //         variant="contained"
// //         color="primary"
// //         style={{ marginTop: '20px', marginRight: '10px' }}
// //         disabled={isAccepted}
// //         onClick={handleAccept}
// //       >
// //         Accept
// //       </Button>
// //       <Button
// //         variant="contained"
// //         color="secondary"
// //         style={{ marginTop: '20px' }}
// //         onClick={handleReject}
// //       >
// //         Reject
// //       </Button>
// //     </Paper>
// //     </Layout>
// //   );
// // };

// // export default SellerView;

// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';
// // import { useParams, useNavigate } from 'react-router-dom';
// // import { Typography, Paper, Button, TextField } from '@mui/material';
// // import Layout from '../../Layout/Layout';

// // const SellerView = () => {
// //   const { formId } = useParams();
// //   const [sellerData, setSellerData] = useState({});
// //   const [isAccepted, setIsAccepted] = useState(false);
// //   const [isRejected, setIsRejected] = useState(false);
// //   const navigate = useNavigate();

// //   useEffect(() => {
// //     const fetchSellerData = async () => {
// //       try {
// //         const response = await axios.get(`http://localhost:8065/api/seller-forms/${formId}`);
// //         setSellerData(response.data);
// //       } catch (error) {
// //         console.error('Error fetching seller data:', error);
// //       }
// //     };

// //     if (formId) {
// //       fetchSellerData();
// //     }
// //   }, [formId]);

// //   const textFieldStyle = { color: 'black' };

// //   const handleAccept = async () => {
// //     try {
// //       await axios.post("http://localhost:8065/api/sellers", sellerData);
// //       await axios.delete(`http://localhost:8065/api/seller-forms/${formId}`);
// //       setIsAccepted(true);
// //     } catch (error) {
// //       console.error('Error accepting seller:', error);
// //     }
// //   };

// //   const handleReject = async () => {
// //     try {
// //       await axios.delete(`http://localhost:8065/api/seller-forms/${formId}`);
// //       setIsRejected(true);
// //     } catch (error) {
// //       console.error('Error rejecting seller:', error);
// //     }
// //   };

// //   const handleAcceptAlertClose = () => {
// //     setIsAccepted(false);
// //     // Navigate to the home page or another route after accepting
// //     navigate('/');
// //   };

// //   const handleRejectAlertClose = () => {
// //     setIsRejected(false);
// //     // Navigate to the home page or another route after rejecting
// //     navigate('/');
// //   };

// //   return (
// //     <Layout>
// //       <Paper elevation={3} style={{ padding: '20px', maxWidth: '400px', margin: 'auto', marginTop: '20px' }}>
// //         <Typography variant="h5" gutterBottom style={{ color: 'dark' }}>
// //           Seller Details
// //         </Typography>

// //         <TextField
// //           style={textFieldStyle}
// //           label="GST Number"
// //           fullWidth
// //           value={sellerData?.gstNo || ''}
// //         />
// //         <br /><br />
// //         <TextField
// //           style={textFieldStyle}
// //           label="Username"
// //           fullWidth
// //           value={sellerData?.username || ''}
// //         />
// //         <br /><br />
// //         <TextField
// //           style={textFieldStyle}
// //           label="Password"
// //           fullWidth
// //           value={sellerData?.password || ''}
// //         />
// //         <br /><br />
// //         <TextField
// //           style={textFieldStyle}
// //           label="Company Name"
// //           fullWidth
// //           value={sellerData?.companyName || ''}
// //         />
// //         <br /><br />
// //         <TextField
// //           style={textFieldStyle}
// //           label="Owner Name"
// //           fullWidth
// //           value={sellerData?.ownerName || ''}
// //         />
// //         <br /><br />
// //         <TextField
// //           style={textFieldStyle}
// //           label="City"
// //           fullWidth
// //           value={sellerData?.city || ''}
// //         />
// //         <br /><br />
// //         <TextField
// //           style={textFieldStyle}
// //           label="State"
// //           fullWidth
// //           value={sellerData?.state || ''}
// //         />
// //         <br /><br />
// //         <TextField
// //           style={textFieldStyle}
// //           label="Category"
// //           fullWidth
// //           value={sellerData?.category || ''}
// //         />
// //         <br /><br />
// //         <TextField
// //           style={textFieldStyle}
// //           label="Account Number"
// //           fullWidth
// //           value={sellerData?.accountNo || ''}
// //         />
// //         <br /><br />
// //         <TextField
// //           style={textFieldStyle}
// //           label="Bank Name"
// //           fullWidth
// //           value={sellerData?.bankName || ''}
// //         />
// //         <br /><br />
// //         <TextField
// //           style={textFieldStyle}
// //           label="IFSC Code"
// //           fullWidth
// //           value={sellerData?.ifscCode || ''}
// //         />
// //         <br /><br />

// //         <Button
// //           variant="contained"
// //           color="primary"
// //           style={{ marginTop: '20px', marginRight: '10px' }}
// //           disabled={isAccepted || isRejected}
// //           onClick={handleAccept}
// //         >
// //           Accept
// //         </Button>
// //         <Button
// //           variant="contained"
// //           color="secondary"
// //           style={{ marginTop: '20px' }}
// //           disabled={isAccepted || isRejected}
// //           onClick={handleReject}
// //         >
// //           Reject
// //         </Button>

// //         {/* Seller Accepted Alert */}
// //         {isAccepted && (
// //           <div>
// //             <Typography variant="body1" style={{ color: 'green', marginTop: '10px' }}>
// //               Seller Profile Accepted Successfully
// //             </Typography>
// //             <Button color="primary" onClick={handleAcceptAlertClose}>
// //               Close
// //             </Button>
// //           </div>
// //         )}

// //         {/* Seller Rejected Alert */}
// //         {isRejected && (
// //           <div>
// //             <Typography variant="body1" style={{ color: 'red', marginTop: '10px' }}>
// //               Seller Profile Rejected Successfully
// //             </Typography>
// //             <Button color="primary" onClick={handleRejectAlertClose}>
// //               Close
// //             </Button>
// //           </div>
// //         )}
// //       </Paper>
// //     </Layout>
// //   );
// // };

// // export default SellerView;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams, useNavigate } from 'react-router-dom';
// import { Typography, Paper, Button, TextField } from '@mui/material';
// import Layout from '../../Layout/Layout';

// const SellerView = () => {
//   const { formId } = useParams();
//   const [sellerData, setSellerData] = useState({});
//   const [isAccepted, setIsAccepted] = useState(false);
//   const [isRejected, setIsRejected] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchSellerData = async () => {
//       try {
//         const response = await axios.get(`http://localhost:8065/api/seller-forms/${formId}`);
//         setSellerData(response.data);
//       } catch (error) {
//         console.error('Error fetching seller data:', error);
//       }
//     };

//     if (formId) {
//       fetchSellerData();
//     }
//   }, [formId]);

//   const textFieldStyle = { color: 'black' };

//   const handleAccept = async () => {
//     try {
//       await axios.post("http://localhost:8065/api/sellers", sellerData);
//       await axios.delete(`http://localhost:8065/api/seller-forms/${formId}`);
//       setIsAccepted(true);
//     } catch (error) {
//       console.error('Error accepting seller:', error);
//     }
//   };

//   const handleReject = async () => {
//     try {
//       await axios.delete(`http://localhost:8065/api/seller-forms/${formId}`);
//       setIsRejected(true);
//     } catch (error) {
//       console.error('Error rejecting seller:', error);
//     }
//   };

//   const handleAcceptAlertClose = () => {
//     setIsAccepted(false);
//     // Navigate to the home page or another route after accepting
//     navigate('/');
//   };

//   const handleRejectAlertClose = () => {
//     setIsRejected(false);
//     // Navigate to the home page or another route after rejecting
//     navigate('/');
//   };

//   return (
//     <Layout>
//       <Paper elevation={3} style={{ padding: '20px', maxWidth: '600px', margin: 'auto', marginTop: '20px', background: 'linear-gradient(to right, #FFEAC7, #ffffff, #D1FFC7)' }}>
//         <Typography variant="h5" gutterBottom style={{ color: 'dark', textAlign: 'center' }}>
//           Seller Details
//         </Typography>

//         <TextField
//           style={textFieldStyle}
//           label="GST Number"
//           fullWidth
//           value={sellerData?.gstNo || ''}
//           disabled
//         />
//         <br /><br />
//         <TextField
//           style={textFieldStyle}
//           label="Username"
//           fullWidth
//           value={sellerData?.username || ''}
//           disabled
//         />
//         <br /><br />
//         <TextField
//           style={textFieldStyle}
//           label="Password"
//           fullWidth
//           value={sellerData?.password || ''}
//           disabled
//         />
//         <br /><br />
//         <TextField
//           style={textFieldStyle}
//           label="Company Name"
//           fullWidth
//           value={sellerData?.companyName || ''}
//           disabled
//         />
//         <br /><br />
//         <TextField
//           style={textFieldStyle}
//           label="Owner Name"
//           fullWidth
//           value={sellerData?.ownerName || ''}
//           disabled
//         />
//         <br /><br />
//         <TextField
//           style={textFieldStyle}
//           label="City"
//           fullWidth
//           value={sellerData?.city || ''}
//           disabled
//         />
//         <br /><br />
//         <TextField
//           style={textFieldStyle}
//           label="State"
//           fullWidth
//           value={sellerData?.state || ''}
//           disabled
//         />
//         <br /><br />
//         <TextField
//           style={textFieldStyle}
//           label="Category"
//           fullWidth
//           value={sellerData?.category || ''}
//           disabled
//         />
//         <br /><br />
//         <TextField
//           style={textFieldStyle}
//           label="Account Number"
//           fullWidth
//           value={sellerData?.accountNo || ''}
//           disabled
//         />
//         <br /><br />
//         <TextField
//           style={textFieldStyle}
//           label="Bank Name"
//           fullWidth
//           value={sellerData?.bankName || ''}
//           disabled
//         />
//         <br /><br />
//         <TextField
//           style={textFieldStyle}
//           label="IFSC Code"
//           fullWidth
//           value={sellerData?.ifscCode || ''}
//           disabled
//         />
//         <br /><br />

//         <Button
//           variant="contained"
//           color="primary"
//           style={{ marginTop: '20px', marginRight: '10px' }}
//           disabled={isAccepted || isRejected}
//           onClick={handleAccept}
//         >
//           Accept
//         </Button>
//         <Button
//           variant="contained"
//           color="secondary"
//           style={{ marginTop: '20px' }}
//           disabled={isAccepted || isRejected}
//           onClick={handleReject}
//         >
//           Reject
//         </Button>

//         {/* Seller Accepted Alert */}
//         {isAccepted && (
//           <div>
//             <Typography variant="body1" style={{ color: 'green', marginTop: '10px', textAlign: 'center' }}>
//               Seller Profile Accepted Successfully
//             </Typography>
//             <Button color="primary" onClick={handleAcceptAlertClose} style={{ display: 'block', margin: 'auto', marginTop: '10px' }}>
//               Close
//             </Button>
//           </div>
//         )}

//         {/* Seller Rejected Alert */}
//         {isRejected && (
//           <div>
//             <Typography variant="body1" style={{ color: 'red', marginTop: '10px', textAlign: 'center' }}>
//               Seller Profile Rejected Successfully
//             </Typography>
//             <Button color="primary" onClick={handleRejectAlertClose} style={{ display: 'block', margin: 'auto', marginTop: '10px' }}>
//               Close
//             </Button>
//           </div>
//         )}
//       </Paper>
//     </Layout>
//   );
// };

// export default SellerView;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { Typography, Paper, Button, TextField } from '@mui/material';
import Layout from '../../Layout/Layout';

const SellerView = () => {
  const { formId } = useParams();
  const [sellerData, setSellerData] = useState({});
  const [isAccepted, setIsAccepted] = useState(false);
  const [isRejected, setIsRejected] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSellerData = async () => {
      try {
        const response = await axios.get(`http://localhost:8065/api/seller-forms/${formId}`);
        setSellerData(response.data);
      } catch (error) {
        console.error('Error fetching seller data:', error);
      }
    };

    if (formId) {
      fetchSellerData();
    }
  }, [formId]);

  const textFieldStyle = { color: 'black', fontWeight: 'bold' };

  const handleAccept = async () => {
    try {
      await axios.post("http://localhost:8065/api/sellers", sellerData);
      await axios.delete(`http://localhost:8065/api/seller-forms/${formId}`);
      setIsAccepted(true);
    } catch (error) {
      console.error('Error accepting seller:', error);
    }
  };

  const handleReject = async () => {
    try {
      await axios.delete(`http://localhost:8065/api/seller-forms/${formId}`);
      setIsRejected(true);
    } catch (error) {
      console.error('Error rejecting seller:', error);
    }
  };

  const handleAcceptAlertClose = () => {
    setIsAccepted(false);
    // Navigate to the home page or another route after accepting
    navigate('/');
  };

  const handleRejectAlertClose = () => {
    setIsRejected(false);
    // Navigate to the home page or another route after rejecting
    navigate('/');
  };

  return (
    <Layout>
      <Paper elevation={3} style={{ padding: '20px', maxWidth: '600px', margin: 'auto', marginTop: '20px', background: 'linear-gradient(to right, #FFEAC7, #ffffff, #D1FFC7)' }}>
        <Typography variant="h5" gutterBottom style={{ color: 'dark', textAlign: 'center' }}>
          Seller Details
        </Typography>

        <TextField
          style={textFieldStyle}
          label="GST Number"
          fullWidth
          value={sellerData?.gstNo || ''}
          disabled
        />
        <br /><br />
        <TextField
          style={textFieldStyle}
          label="Username"
          fullWidth
          value={sellerData?.username || ''}
          disabled
        />
        <br /><br />
        <TextField
          style={textFieldStyle}
          label="Password"
          fullWidth
          value={sellerData?.password || ''}
          disabled
        />
        <br /><br />
        <TextField
          style={textFieldStyle}
          label="Company Name"
          fullWidth
          value={sellerData?.companyName || ''}
          disabled
        />
        <br /><br />
        <TextField
          style={textFieldStyle}
          label="Owner Name"
          fullWidth
          value={sellerData?.ownerName || ''}
          disabled
        />
        <br /><br />
        <TextField
          style={textFieldStyle}
          label="City"
          fullWidth
          value={sellerData?.city || ''}
          disabled
        />
        <br /><br />
        <TextField
          style={textFieldStyle}
          label="State"
          fullWidth
          value={sellerData?.state || ''}
          disabled
        />
        <br /><br />
        <TextField
          style={textFieldStyle}
          label="Category"
          fullWidth
          value={sellerData?.category || ''}
          disabled
        />
        <br /><br />
        <TextField
          style={textFieldStyle}
          label="Account Number"
          fullWidth
          value={sellerData?.accountNo || ''}
          disabled
        />
        <br /><br />
        <TextField
          style={textFieldStyle}
          label="Bank Name"
          fullWidth
          value={sellerData?.bankName || ''}
          disabled
        />
        <br /><br />
        <TextField
          style={textFieldStyle}
          label="IFSC Code"
          fullWidth
          value={sellerData?.ifscCode || ''}
          disabled
        />
        <br /><br />

        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: '20px', marginRight: '10px' }}
          disabled={isAccepted || isRejected}
          onClick={handleAccept}
        >
          Accept
        </Button>
        <Button
          variant="contained"
          color="secondary"
          style={{ marginTop: '20px' }}
          disabled={isAccepted || isRejected}
          onClick={handleReject}
        >
          Reject
        </Button>

        {/* Seller Accepted Alert */}
        {isAccepted && (
          <div>
            <Typography variant="body1" style={{ color: 'green', marginTop: '10px', textAlign: 'center' }}>
              Seller Profile Accepted Successfully
            </Typography>
            <Button color="primary" onClick={handleAcceptAlertClose} style={{ display: 'block', margin: 'auto', marginTop: '10px' }}>
              Close
            </Button>
          </div>
        )}

        {/* Seller Rejected Alert */}
        {isRejected && (
          <div>
            <Typography variant="body1" style={{ color: 'red', marginTop: '10px', textAlign: 'center' }}>
              Seller Profile Rejected Successfully
            </Typography>
            <Button color="primary" onClick={handleRejectAlertClose} style={{ display: 'block', margin: 'auto', marginTop: '10px' }}>
              Close
            </Button>
          </div>
        )}
      </Paper>
    </Layout>
  );
};

export default SellerView;
