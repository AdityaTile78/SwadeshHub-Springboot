// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import { Typography, Paper, Button, Table, TableContainer, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
// import Layout from '../../Layout/Layout';

// const SellerList = () => {
//   const [sellerList, setSellerList] = useState([]);

//   useEffect(() => {
//     const fetchSellerList = async () => {
//       try {
//         const response = await axios.get('http://localhost:8065/api/sellers');
//         console.log('Seller List:', response.data); // Log the response
//         setSellerList(response.data);
//       } catch (error) {
//         console.error('Error fetching seller list:', error);
//       }
//     };

//     fetchSellerList();
//   }, []);

//   return (
//     <Layout>
//     <Paper elevation={3} style={{ padding: '20px' }}>
//       <Typography variant="h5" gutterBottom>
//         Seller List
//       </Typography>

//       {sellerList.length === 0 ? (
//         <Typography variant="body1">No sellers available.</Typography>
//       ) : (
//         <TableContainer>
//           <Table>
//             <TableHead>
//               <TableRow>
//               <TableCell>Seller Id</TableCell>
//                 <TableCell>GST Number</TableCell>
//                 <TableCell>Company Name</TableCell>
//                 <TableCell>Owner Name</TableCell>
//                 <TableCell>Username</TableCell>
//                 <TableCell>Details</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {sellerList.map((seller) => (
//                 <TableRow key={seller.sId}>
//                     <TableCell>{seller.sId}</TableCell>
//                   <TableCell>{seller.gstNo}</TableCell>
//                   <TableCell>{seller.companyName}</TableCell>
//                   <TableCell>{seller.ownerName}</TableCell>
//                   <TableCell>{seller.username}</TableCell>
//                   <TableCell>
//                     <Button
//                       component={Link}
//                       to={`/sellerDetails/view/${seller.sId}`}
//                       variant="contained"
//                       color="primary"
//                     >
//                       View Details
//                     </Button>
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       )}
//     </Paper>
//     </Layout>
//   );
// };

// export default SellerList;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Typography, Paper, Button, Table, TableContainer, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import Layout from '../../Layout/Layout';

const SellerList = () => {
  const [sellerList, setSellerList] = useState([]);

  useEffect(() => {
    const fetchSellerList = async () => {
      try {
        const response = await axios.get('http://localhost:8065/api/sellers');
        console.log('Seller List:', response.data); // Log the response
        setSellerList(response.data);
      } catch (error) {
        console.error('Error fetching seller list:', error);
      }
    };

    fetchSellerList();
  }, []);

  return (
    <Layout>
      <Paper elevation={3} style={{ padding: '20px', background: 'linear-gradient(to right, #FFEAC7, #ffffff, #D1FFC7)' }}>
        <Typography variant="h5" gutterBottom style={{ color: 'dark', textAlign: 'center' }}>
          Seller List
        </Typography>

        {sellerList.length === 0 ? (
          <Typography variant="body1" style={{ color: 'dark' }}>No sellers available.</Typography>
        ) : (
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Seller Id</TableCell>
                  <TableCell>GST Number</TableCell>
                  <TableCell>Company Name</TableCell>
                  <TableCell>Owner Name</TableCell>
                  <TableCell>Username</TableCell>
                  <TableCell>Details</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {sellerList.map((seller) => (
                  <TableRow key={seller.sId}>
                    <TableCell>{seller.sId}</TableCell>
                    <TableCell>{seller.gstNo}</TableCell>
                    <TableCell>{seller.companyName}</TableCell>
                    <TableCell>{seller.ownerName}</TableCell>
                    <TableCell>{seller.username}</TableCell>
                    <TableCell>
                      <Button
                        component={Link}
                        to={`/sellerDetails/view/${seller.sId}`}
                        variant="contained"
                        color="primary"
                      >
                        View Details
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Paper>
    </Layout>
  );
};

export default SellerList;
