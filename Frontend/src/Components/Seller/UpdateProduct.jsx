import React, { useState, useEffect } from "react";
import Layout from "../../Layout/Layout";
import SellerMenu from "../Seller/SellerMenu";
import toast from "react-hot-toast";
import axios from "axios";
import { Select } from "antd";
import { useParams } from "react-router-dom";
const { Option } = Select;

const UpdateProduct = () => {
  const { id } = useParams(); // Assuming the id is obtained from the URL params
  const [categories, setCategories] = useState([]);
  const [states, setStates] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [quantity, setQuantity] = useState("");
  const [discount, setDiscount] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [stateName, setStateName] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");

  useEffect(() => {
    getAllCategory();
    getAllStates();
    getProductDetails();
  }, []);

  const getAllCategory = async () => {
    try {
      const { data } = await axios.get("http://localhost:8065/api/category");
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

  const getAllStates = async () => {
    try {
      const { data } = await axios.get("http://localhost:8065/api/States");
      if (data) {
        setStates(data);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong in getting states");
    }
  };

  const getProductDetails = async () => {
    try {
      const { data } = await axios.get(`http://localhost:8065/api/products/${id}`);
      if (data) {
        setName(data.name);
        setPrice(data.price);
        setDescription(data.description);
        setQuantity(data.quantity);
        setDiscount(data.discount);
        setCategoryName(data.categoryName);
        setStateName(data.stateName);
        setBrand(data.brand);
        setSize(data.size);
        setColor(data.color);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong in getting product details");
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const productData = new FormData();
      productData.append("name", name);
      productData.append("price", price);
      productData.append("description", description);
      productData.append("file", file);
      productData.append("quantity", quantity);
      productData.append("discount", discount);
      productData.append("categoryName", categoryName);
      productData.append("stateName", stateName);
      productData.append("brand", brand);
      productData.append("size", size);
      productData.append("color", color);

      await axios.put(`http://localhost:8065/api/products/${id}`, productData);
      toast.success("Product updated successfully");
    } catch (error) {
      console.log(error);
      toast.error("Failed to update product");
    }
  };

  return (
    <Layout title={"Dashboard - Update Product"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <SellerMenu />
          </div>
          <div className="col-md-9">
            <h1>Update Product</h1>
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
                  value={description}
                  placeholder="Enter product description"
                  className="form-control"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <Select
                placeholder="Select State"
                size="large"
                showSearch
                className="form-select mb-3"
                onChange={(value) => setStateName(value)}
              >
                {states.map((state) => (
                  <Option key={state.id} value={state.stateName}>
                    {state.stateName}
                  </Option>
                ))}
              </Select>
              <Select
                placeholder="Select a category"
                size="large"
                showSearch
                className="form-select mb-3"
                onChange={(value) => setCategoryName(value)}
              >
                {categories.map((category) => (
                  <Option key={category.id} value={category.catName}>
                    {category.catName}
                  </Option>
                ))}
              </Select>
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
                <button className="btn btn-primary" onClick={handleUpdate}>
                  UPDATE PRODUCT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UpdateProduct;