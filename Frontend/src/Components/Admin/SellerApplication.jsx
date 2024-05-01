// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom'; // Import Link for navigation

// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Button,
// } from '@mui/material';
// import AdminMenu from './AdminMenu';
// import Layout from '../../Layout/Layout';


// const SellerApplication = () => {
//   // State to store seller data
//   const [sellerData, setSellerData] = useState([]);

//   // Function to fetch seller data from the database
//   const fetchSellerData = async () => {
//     try {
//       const response = await axios.get('http://localhost:8065/api/seller-forms');
//       setSellerData(response.data);
//     } catch (error) {
//       console.error('Error fetching seller data:', error);
//     }
//   };

//   // Fetch seller data when component mounts
//   useEffect(() => {
//     fetchSellerData();
//   }, []);

//   return (
//     <Layout>
//     <div>
   
//     <TableContainer component={Paper}>
//       <Table>
//         <TableHead>
//           <TableRow>
//             <TableCell>ID</TableCell>
//             <TableCell>GST Number</TableCell>
//             <TableCell>Username</TableCell>
//             <TableCell>Password</TableCell>
//             <TableCell>Company Name</TableCell>
//             <TableCell>Owner Name</TableCell>
            
//             <TableCell>Action</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {sellerData.map((seller) => (
//             <TableRow key={seller.formId}>
//               <TableCell>{seller.formId}</TableCell>
//               <TableCell>{seller.gstNo}</TableCell>
//               <TableCell>{seller.username}</TableCell>
//               <TableCell>{seller.password}</TableCell>
//               <TableCell>{seller.companyName}</TableCell>
//               <TableCell>{seller.ownerName}</TableCell>
             
//               <TableCell>
//                 <Button component={Link} to={`/seller/view/${seller.formId}`} variant="contained">
//                   View
//                 </Button>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//     </div>
//     </Layout>
//   );
// };

// export default SellerApplication;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom'; // Import Link for navigation

// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Button,
// } from '@mui/material';
// import AdminMenu from './AdminMenu';
// import Layout from '../../Layout/Layout';

// const SellerApplication = () => {
//   // State to store seller data
//   const [sellerData, setSellerData] = useState([]);

//   // Function to fetch seller data from the database
//   const fetchSellerData = async () => {
//     try {
//       const response = await axios.get('http://localhost:8065/api/seller-forms');
//       setSellerData(response.data);
//     } catch (error) {
//       console.error('Error fetching seller data:', error);
//     }
//   };

//   // Fetch seller data when component mounts
//   useEffect(() => {
//     fetchSellerData();
//   }, []);

//   return (
//     <Layout>
//       <div style={{ padding: '20px', background: 'linear-gradient(to right, #FFEAC7, #ffffff, #D1FFC7)' }}>
//         <TableContainer component={Paper}>
//           <Table>
//             <TableHead>
//               <TableRow>
//                 <TableCell>ID</TableCell>
//                 <TableCell>GST Number</TableCell>
//                 <TableCell>Username</TableCell>
//                 <TableCell>Password</TableCell>
//                 <TableCell>Company Name</TableCell>
//                 <TableCell>Owner Name</TableCell>
//                 <TableCell>Action</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {sellerData.map((seller) => (
//                 <TableRow key={seller.formId}>
//                   <TableCell>{seller.formId}</TableCell>
//                   <TableCell>{seller.gstNo}</TableCell>
//                   <TableCell>{seller.username}</TableCell>
//                   <TableCell>{seller.password}</TableCell>
//                   <TableCell>{seller.companyName}</TableCell>
//                   <TableCell>{seller.ownerName}</TableCell>
//                   <TableCell>
//                     <Button component={Link} to={`/seller/view/${seller.formId}`} variant="contained">
//                       View
//                     </Button>
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </div>
//     </Layout>
//   );
// };

// export default SellerApplication;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link for navigation

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from '@mui/material';
import AdminMenu from './AdminMenu';
import Layout from '../../Layout/Layout';

const SellerApplication = () => {
  // State to store seller data
  const [sellerData, setSellerData] = useState([]);

  // Function to fetch seller data from the database
  const fetchSellerData = async () => {
    try {
      const response = await axios.get('http://localhost:8065/api/seller-forms');
      setSellerData(response.data);
    } catch (error) {
      console.error('Error fetching seller data:', error);
    }
  };

  // Fetch seller data when component mounts
  useEffect(() => {
    fetchSellerData();
  }, []);

  return (
    <Layout>
      <div style={{ padding: '20px', background: 'linear-gradient(to right, #FFEAC7, #ffffff, #D1FFC7)' }}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>GST Number</TableCell>
                <TableCell>Username</TableCell>
                <TableCell>Password</TableCell>
                <TableCell>Company Name</TableCell>
                <TableCell>Owner Name</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sellerData.map((seller) => (
                <TableRow key={seller.formId}>
                  <TableCell>{seller.formId}</TableCell>
                  <TableCell>{seller.gstNo}</TableCell>
                  <TableCell>{seller.username}</TableCell>
                  <TableCell>{seller.password}</TableCell>
                  <TableCell>{seller.companyName}</TableCell>
                  <TableCell>{seller.ownerName}</TableCell>
                  <TableCell>
                    <Button component={Link} to={`/seller/view/${seller.formId}`} variant="contained">
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </Layout>
  );
};

export default SellerApplication;
