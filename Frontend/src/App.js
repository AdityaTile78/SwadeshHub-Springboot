// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Pages/Register';
import Login from './Pages/Login';

import CardComponent from './Components/CardComponent';
import CarouselComponent from './Components/CarouselComponent';
import Dropdowns from './Components/Dropdowns';
import StateProductsComponent from './Components/StateProductsComponent';
import Home from './Components/Home';
import Allproducts from './Components/Allproducts';
import SellerRegistration from './Components/SellerRegistration';
import SellerDashboard from './Components/SellerDashboard';
import AdminDashboard from './Components/AdminDashboard';
import CreateCategory from './Components/Admin/CreateCategory';
import SellerList from "./Components/Admin/SellerList.jsx"
import AddSeller from "./Components/Admin/AddSeller.jsx"
import SellerView from "./Components/Admin/SellerView.jsx"
import ViewSellerDetails from "./Components/Admin/ViewSellerDetails.jsx"
import UserList from "./Components/Admin/UserList.jsx"
import SellerApplication from "./Components/Admin/SellerApplication.jsx"
import UserDashboard from "./Components/UserDashboard.jsx"
import Cart from './Components/User/Cart.jsx';
import AboutUs from "./Pages/AboutUs.jsx"
import ContactUs from './Pages/ContactUs';
import ProductForm from './Components/Seller/ProductForm';
import SellerViewProduct from './Components/Seller/SellerViewProduct';
import SellerOrders from './Components/Seller/SellerOrders';
import SellerProfile from './Components/Seller/SellerProfile.jsx'
import UserProfile from './Components/User/UserProfile.jsx';
import ProductView from './Components/Product/ProductView.jsx';
import ProductBuy from './Components/Product/ProductBuy.jsx';
import OrderSuccess from './Components/Product/OrderSuccess.jsx';
import Order from './Components/User/Order.jsx';
import DeliveredOrder from './Components/User/DeliveredOrder.jsx';
import ViewOrder from './Components/User/ViewOrder.jsx';
import OrderList from './Components/Seller/OrderList.jsx';
import ViewAllProducts from './Components/Admin/ViewAllProducts.jsx';
import OrderListView from './Components/Seller/OrderListView.jsx';
import SellerOrderDetails from './Components/Seller/SellerOrderDetails.jsx';
import UpdateProduct from './Components/Seller/UpdateProduct.jsx';
import StateComponent from './Components/Admin/StateComponent.jsx';

const App = () => {
  return (


    <Router>
      <div className="d-flex justify-content-center align-items-center">

      </div>

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/cards" element={<CardComponent />} /> */}
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/state/:name" element={<Allproducts />} />
          <Route path="/dashboard/Seller/OrderList" element={<OrderListView/>} />
          <Route path="/sellerregistration" element={< SellerRegistration />} />
          <Route path="/SellerDashboard" element={<SellerDashboard />} />
          <Route path="/AdminDashboard" element={<AdminDashboard />} />
          <Route path="/UserDashboard" element={<UserDashboard/>} />
       
          <Route path="/dashboard/admin/Add-Category" element={<CreateCategory />} />
          <Route path="/dashboard/admin/Products" element={<ViewAllProducts/>} />
          <Route path="/dashboard/User/Profile/:id" element={<UserProfile />} />
          <Route path="/dashboard/User/Cart/:username" element={<Cart/>} />
          <Route path="/dashboard/User/Orders/:id" element={<Order/>} />
          <Route path="/dashboard/User/DeliveredOrder/:id" element={<DeliveredOrder/>} />
          <Route path="/vieworder/:id" element={<ViewOrder/>} />
          <Route path="/dashboard/admin/Seller-list" element={<SellerList />} />
          <Route path="/dashboard/admin/Add-Seller" element={<AddSeller />} />
          <Route path="/seller/view/:formId" element={<SellerView />} />
          <Route path="/sellerDetails/view/:sId" element={<ViewSellerDetails />} />
          {/* Add other routes as needed */}
          <Route path="/dashboard/admin/User-list" element={<UserList />} />
          <Route path="/dashboard/admin/Seller-applications" element={<SellerApplication />} />
          <Route path="/About" element={<AboutUs />} />
          <Route path="/Contact" element={<ContactUs />} />
          <Route path="/SellerDashboard" element={<SellerDashboard />} />
          <Route path="/dashboard/Seller/OrderList" element={<OrderListView/>} />
          <Route path="/order/:ordId" element={<SellerOrderDetails/>} />
            <Route path="/dashboard/Seller/addproduct" element={<ProductForm />} />
            <Route path="/dashboard/Seller/Products" element={<SellerViewProduct/>} />
            <Route path="/dashboard/Seller/Profile/:id" element={<SellerProfile />} />
            <Route path="/dashboard/Seller/addproduct/:id" element={<ProductForm/>} />
            <Route path="/dashboard/Seller/Orders" element={<SellerOrders/>} />
            {/* <Route path="/dashboard/Seller/OrderList" element={<OrderList/>} /> */}
            <Route path="/product/:productId" element={<ProductView />} />
            <Route path="/buy/:productId" element={<ProductBuy />} />
            <Route path="/ordersuccess" element={<OrderSuccess />} />
            <Route path="/seller/productUpdate/:id" element={<UpdateProduct />} />
            <Route path="/dashboard/admin/States" element={<StateComponent/>} />
        </Routes>
      </div>
      <br></br>
      <br></br>


    </Router>
  );
};

export default App;
