// SellerViewProduct.jsx

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './SellerViewProduct.css';
import ProductForm from './ProductForm';
import axios from 'axios';
import Layout from '../../Layout/Layout';

const SellerViewProduct = () => {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showProductForm, setShowProductForm] = useState(false);
  const [formMode, setFormMode] = useState('Add');

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const user = JSON.parse(localStorage.getItem("auth"));
    try {
      const response = await axios.get(`http://localhost:8065/api/products/seller/${user.username}`);
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleEditClick = (product) => {
    setSelectedProduct(product);
    setFormMode('Update');
    setShowProductForm(true);
  };

  const handleDeleteClick = async (productId) => {
    try {
      await axios.delete(`http://localhost:8065/api/products/${productId}`);
      setProducts((prevProducts) => prevProducts.filter((product) => product.id !== productId));
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };
  
  const handleUpdateClick = (updatedProduct) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) => (product.id === updatedProduct.id ? updatedProduct : product))
    );
    console.log("Hello");
    setSelectedProduct(null);
    setFormMode('Add');
    setShowProductForm(false);
    navigate('/dashboard/Seller/Products');
  };

  const handleProductFormToggle = () => {
    setShowProductForm((prev) => !prev);
  };

  return (
    <Layout>
    <div className="seller-view-product">
      <h2>View Products</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Category</th>
            {/* <th>Subcategory</th> */}
            <th>Product Price</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.categoryName}</td>
              {/* <td>{product.subCategoryName}</td> */}
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td>
                <div className="btn-group">
                <button className="btn btn-primary" onClick={() => navigate(`/seller/productUpdate/${product.id}`)}>
                   Update
                </button>
                  <button className="btn btn-danger" onClick={() => handleDeleteClick(product.id)}>
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showProductForm && (
        <ProductForm
          product={selectedProduct}
          onUpdate={handleUpdateClick}
          onClose={handleProductFormToggle}
          formMode={formMode}
        />
      )}
    </div>
    </Layout>
  );
};

export default SellerViewProduct;