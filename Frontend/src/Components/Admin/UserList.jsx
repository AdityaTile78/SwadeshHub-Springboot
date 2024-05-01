// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import { Typography, Paper, Button, Table, TableContainer, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
// import Layout from '../../Layout/Layout';
// const UserList = () => {
//   const [userList, setUserList] = useState([]);

//   useEffect(() => {
//     const fetchSellerList = async () => {
//       try {
//         const response = await axios.get('http://localhost:8065/api/user');
//         console.log('Users List:', response.data); // Log the response
//         setUserList(response.data);
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
//         User List
//       </Typography>

//       {userList.length === 0 ? (
//         <Typography variant="body1">No Users available.</Typography>
//       ) : (
//         <TableContainer>
//           <Table>
//             <TableHead>
//               <TableRow>
//               <TableCell>User Id</TableCell>
//                 <TableCell>First Name</TableCell>
//                 <TableCell>Last Name</TableCell>
//                 <TableCell>Email</TableCell>
               
//                 <TableCell>Mobile No</TableCell>
               
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {userList.map((user) => (
//                 <TableRow key={user.id}>
//                     <TableCell>{user.id}</TableCell>
//                   <TableCell>{user.firstName}</TableCell>
//                   <TableCell>{user.lastName}</TableCell>
//                   <TableCell>{user.email}</TableCell>
                 
//                   <TableCell>{user.mobile}</TableCell>
                 
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

// export default UserList;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Typography, Paper, Button, Table, TableContainer, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import Layout from '../../Layout/Layout';

const UserList = () => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const fetchUserList = async () => {
      try {
        const response = await axios.get('http://localhost:8065/api/user');
        setUserList(response.data);
      } catch (error) {
        console.error('Error fetching user list:', error);
      }
    };

    fetchUserList();
  }, []);

  return (
    <Layout>
      <div style={{ padding: '20px', background: 'linear-gradient(to right, #FFEAC7, #ffffff, #D1FFC7)' }}>
        <Paper elevation={3} style={{ padding: '20px' }}>
          <Typography variant="h5" gutterBottom>
            User List
          </Typography>

          {userList.length === 0 ? (
            <Typography variant="body1">No Users available.</Typography>
          ) : (
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>User Id</TableCell>
                    <TableCell>First Name</TableCell>
                    <TableCell>Last Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Mobile No</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {userList.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell>{user.id}</TableCell>
                      <TableCell>{user.firstName}</TableCell>
                      <TableCell>{user.lastName}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>{user.mobile}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </Paper>
      </div>
    </Layout>
  );
};

export default UserList;
