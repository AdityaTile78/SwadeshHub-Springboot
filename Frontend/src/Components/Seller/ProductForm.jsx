// // import axios from 'axios';
// import './ProductForm.css';
// import { useState } from 'react';
// import Layout from '../../Layout/Layout';

// const ProductForm = () => {
//   const [productName, setProductName] = useState('');
//   const [categoryId, setCategoryId] = useState('category');
//   const [subcategoryId, setSubcategoryId] = useState('subcategory1');
//   const [productPrice, setProductPrice] = useState('');
//   const [productDescription, setProductDescription] = useState('');
//   const [productImage, setProductImage] = useState(null);
//   const [quantity, setQuantity] = useState('');
//   const [discount, setDiscount] = useState('');
//  { /*const [State, setState] = useState('');
// const [SellerId, setSellerId] = useState('');*/}

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const formData = new FormData();
//       formData.append('name', productName);
//       formData.append('categoryName', categoryId);
//       formData.append('subCategoryName', subcategoryId);
//       formData.append('price', productPrice);
//       formData.append('description', productDescription);
//       formData.append('image', productImage);
//       formData.append('quantity', quantity);
//       formData.append('discount', discount);
//      {/* formData.append('State', State);
//     formData.append('SellerId', SellerId);*/}


//       const response = await axios.post('http://localhost:8065/api/products', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       console.log('Product Form Submitted:', response.data);

//       alert('Product added successfully!');

//       // Reset the form after successful submission
//       setProductName('');
//       setCategoryId('category');
//       setSubcategoryId('subcategory1');
//       setProductPrice('');
//       setProductDescription('');
//       setProductImage(null);
//       setQuantity('');
//       setDiscount('');
//      // setState('');
//     //  setSellerId('');
//     } catch (error) {
//       console.error('Error submitting form:', error);

//       alert(Error adding product. Please try again.${error.message});
//     }
//   };

//   return (
//     <Layout>
//     <div className="product-form">
//       <h2>Add Product</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="productName">Product Name</label>
//           <input
//             type="text"
//             id="productName"
//             name="productName"
//             value={productName}
//             onChange={(e) => setProductName(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="categoryId">Category</label>

//           <input
//             type="text"
//             id="categoryId"
//             name="productName"
//             value={categoryId}
//             onChange={(e) => setCategoryId(e.target.value)}
//             required
//           />

//         </div>
//         <div className="form-group">
//           <label htmlFor="subcategoryId">Subcategory</label>

//           <label htmlFor="categoryId">Category</label>

//            <input
//              type="text"
//              id="subcategoryId"
//              name="subcategoryId"
//              value={subcategoryId}
//              onChange={(e) => setSubcategoryId(e.target.value)}
//              required
//            />
//         </div>
//         <div className="form-group">
//           <label htmlFor="productPrice">Product Price</label>
//           <input
//             type="text"
//             id="productPrice"
//             name="productPrice"
//             value={productPrice}
//             onChange={(e) => setProductPrice(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="productDescription">Product Description</label>
//           <textarea
//             id="productDescription"
//             name="productDescription"
//             value={productDescription}
//             onChange={(e) => setProductDescription(e.target.value)}
//             required
//           ></textarea>
//         </div>
//         <div className="form-group">
//           <label htmlFor="productImage">Product Image</label>
//           <input
//             type="file"
//             id="productImage"
//             name="productImage"
//             onChange={(e) => setProductImage(e.target.files[0])}
//             accept="image/*"
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="quantity">Quantity</label>
//           <input
//             type="number"
//             id="quantity"
//             name="quantity"
//             value={quantity}
//             onChange={(e) => setQuantity(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="discount">Discount</label>
//           <input
//             type="text"
//             id="discount"
//             name="discount"
//             value={discount}
//             onChange={(e) => setDiscount(e.target.value)}
//           />
//         </div>
//      { /*  <div className="form-group">
//           <label htmlFor="productPrice">State</label>
//           <input
//             type="text"
//             id="State"
//             name="State"
//             value={State}
//             onChange={(e) => setState(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="productPrice">Seller Id</label>
//           <input
//             type="text"
//             id="SellerId"
//             name="SellerId"
//             value={SellerId}
//             onChange={(e) => setSellerId(e.target.value)}
//             required
//           />
//         </div>*/}
//         <button type="submit">Add</button>
//       </form>
//     </div>
//     </Layout>
//   );
// };

// export default ProductForm;
import React, { useState, useEffect } from "react";
import Layout from "../../Layout/Layout";
import SellerMenu from "../Seller/SellerMenu";
import toast from "react-hot-toast";
import axios from "axios";
import { Select } from "antd";
import { useNavigate } from "react-router-dom";
const { Option } = Select;

const ProductForm = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubCategories] = useState([]);
  const [states, setStates] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [quantity, setQuantity] = useState("");
  const [discount, setDiscount] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [subCategoryName, setSubCategoryName] = useState("");
  const [stateName, setStateName] = useState("");
  const [sellerId, setSellerId] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");


  const getAllCategory = async () => {
    try {
      const {data} = await axios.get("http://localhost:8065/api/category");
      
      if (data) {
        setCategories(data);
      } else {
        console.error("Error fetching categories:", data?.message);
      }
    } catch (error) {
      console.error("Error fetching categories:", error.message);
      toast.error("Something went wrong in getting categories");
    }
  };
  const getAllSubCategory = async () => {
    const user = JSON.parse(localStorage.getItem("auth"));
      setSellerId(user.username);
    try {
      const { data } = await axios.get("http://localhost:8065/api/subcategory");
      
      console.log(data);
      if (data) {
        setSubCategories(data);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong in getting category");
    }
  };
  const getAllStates = async () => {
    try {
      const { data } = await axios.get("http://localhost:8065/api/States");
      if (data) {
        setStates(data);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong in getting category");
    }
  };

  useEffect(() => {
    getAllCategory();
    getAllSubCategory();
    getAllStates();
  }, []);
  console.log("hello");
  console.log("hello error")
  console.log("Categories:", categories);
  
  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      // const user = JSON.parse(localStorage.getItem("auth"));
      // setSellerId(user.username);
     
      const productData = new FormData();
      productData.append("name", name);
      productData.append("price", price);
      productData.append("description", description);
      productData.append("file", file);
      productData.append("quantity", quantity);
      productData.append("discount", discount);
      productData.append("categoryName", categoryName);
      productData.append("subCategoryName", subCategoryName);
      productData.append("stateName", stateName);
      productData.append("sellerId", sellerId);
      productData.append("brand", brand); 
      productData.append("size", size);
      productData.append("color", color);

      const res = await axios.post(
        "http://localhost:8065/api/products",
        productData
      );
      console.log(res);
      if (res.data.status==true) {
        console.log(res.data);
        
        //toast.error(data?.message);
      } else {
        console.log(res.data);
        //navigate("/dashboard/admin/products");
      }
    } catch (error) {
      console.log(error);
      //toast.error("Something went wrong");
    }
    navigate("/dashboard/Seller/Products");
  };

  return (
    <Layout title={"Dashboard - Create Product"}>
      <div className="container-fluid m-3 p-3 ">
        <div className="row">
          <div className="col-md-3">
            <SellerMenu />
          </div>
          <div className="col-md-9">
            <h1>Add Product</h1>
            <div className="m-1 w-75">
              <div className="mb-3">
                <input
                  type="text"
                  value={name}
                  placeholder="Enter product name"
                  className="form-control"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <textarea
                  type="text"
                  value={description}
                  placeholder="Enter product description"
                  className="form-control"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <Select
                bordered={false}
                placeholder="Select State"
                size="large"
                showSearch
                className="form-select mb-3"
                onChange={(value) => {
                  setStateName(value);
                }}
              >
                {states?.map((c) => (
                  <Option value={c.stateName}>
                    {c.stateName}
                  </Option>
                ))}
              </Select>
              <Select
                bordered={false}
                placeholder="Select a category"
                size="large"
                showSearch
                className="form-select mb-3"
                onChange={(value) => {
                  setCategoryName(value);
                }}
              >
                {categories?.map((c) => (
                  <Option value={c.catName}>
                    {c.catName}
                  </Option>
                ))}
              </Select>
              {/* { <Select
                bordered={false}
                placeholder="Select a Subcategory"
                size="large"
                showSearch
                className="form-select mb-3"
                onChange={(value) => {
                  setSubCategoryName(value);
                }}
              >
                {subcategories?.map((c) => (
                  <Option 
                   value={c.sctr_name
                  }>
                    {c.sctr_name}
                  </Option>
                ))} }
              </Select> */}
              <div className="mb-3">
                <label className="btn btn-outline-secondary col-md-12">
                  {file ? file.name : "Upload Image"}
                  <input
                    type="file"
                    name="file"
                    accept="image/*"
                    onChange={(e) => setFile(e.target.files[0])}
                    hidden
                  />
                </label>
              </div>
              <div className="mb-3">
                {file && (
                  <div className="text-center">
                    <img
                      src={URL.createObjectURL(file)}
                      alt="product_image"
                      height={"200px"}
                      className="img img-responsive"
                    />
                  </div>
                )}
              </div>
              <div className="mb-3">
                <input
                  type="number"
                  value={price}
                  placeholder="Enter product price"
                  className="form-control"
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="number"
                  value={quantity}
                  placeholder="Enter product quantity"
                  className="form-control"
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="number"
                  value={discount}
                  placeholder="Enter product discount"
                  className="form-control"
                  onChange={(e) => setDiscount(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  value={brand}
                  placeholder="Enter product brand"
                  className="form-control"
                  onChange={(e) => setBrand(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  value={size}
                  placeholder="Enter product size"
                  className="form-control"
                  onChange={(e) => setSize(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  value={color}
                  placeholder="Enter product color"
                  className="form-control"
                  onChange={(e) => setColor(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <button className="btn btn-primary" onClick={handleCreate}>
                  ADD PRODUCT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductForm;