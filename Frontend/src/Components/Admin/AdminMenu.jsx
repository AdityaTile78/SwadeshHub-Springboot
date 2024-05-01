// import React from 'react'
// import { NavLink } from 'react-router-dom'
// import Layout from '../../Layout/Layout'

// const AdminMenu = () => {
//   return (
    
//     <div><h1>AdminMenu</h1>
//         <ul className="list-group mt-3">
//                 <NavLink to="/dashboard/admin/Add-Category" className="list-group-item " aria-current="true">Create Category</NavLink>
//                 {/* <NavLink to="/dashboard/admin/Add-SubCategory" className="list-group-item " aria-current="true">Create Sub Category</NavLink> */}
//                 <NavLink to="/dashboard/admin/Add-Seller" className="list-group-item">Add Seller</NavLink>
//                 <NavLink to="/dashboard/admin/Seller-applications" className="list-group-item">Seller Applications</NavLink>
//                 <NavLink to="/dashboard/admin/Seller-list" className="list-group-item">Sellers</NavLink>
//                 <NavLink to="/dashboard/admin/User-list" className="list-group-item">Users</NavLink>
//                 <NavLink to="/dashboard/admin/Products" className="list-group-item"> Products</NavLink>
//             </ul>
//     </div>
  
//   )
// }

// export default AdminMenu

import React from 'react';
import { NavLink } from 'react-router-dom';
import { Typography, Paper } from '@mui/material';
import Layout from '../../Layout/Layout';

const AdminMenu = () => {
  return (
   
      <Paper elevation={3} style={{ padding: '20px', background: 'linear-gradient(to right, #FFEAC7, #ffffff, #D1FFC7)' }}>
        <Typography variant="h5" gutterBottom style={{ color: 'dark', textAlign: 'center' }}>
          Admin Menu
        </Typography>
        <ul className="list-group mt-3">
          <NavLink to="/dashboard/admin/Add-Category" className="list-group-item" style={{ color: 'dark' }}>Create Category</NavLink>
           {/* <NavLink to="/dashboard/admin/Add-SubCategory" className="list-group-item " aria-current="true">Create Sub Category</NavLink>  */}
          <NavLink to="/dashboard/admin/Add-Seller" className="list-group-item" style={{ color: 'dark' }}>Add Seller</NavLink>
          <NavLink to="/dashboard/admin/Seller-applications" className="list-group-item" style={{ color: 'dark' }}>Seller Applications</NavLink>
          <NavLink to="/dashboard/admin/Seller-list" className="list-group-item" style={{ color: 'dark' }}>Sellers</NavLink>
          <NavLink to="/dashboard/admin/User-list" className="list-group-item" style={{ color: 'dark' }}>Users</NavLink>
          <NavLink to="/dashboard/admin/Products" className="list-group-item" style={{ color: 'dark' }}>Products</NavLink>
          <NavLink to="/dashboard/admin/States" className="list-group-item"> States</NavLink>
        </ul>
      </Paper>
  
  );
};

export default AdminMenu;
