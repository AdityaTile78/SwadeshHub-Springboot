import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Layout from '../../Layout/Layout';

export const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const params = useParams();
  const navigate = useNavigate();
  
  const getAllCartItems = async () => {
    try {
      console.log(params.username)
      const { data } = await axios.get(`http://localhost:8065/api/carts/${params.username}`);
      setCartItems(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCartItems();
  }, []);

  const handleBuyNow = (productId) => {
    // Logic to handle buying the product
    console.log(`Buying product with ID ${productId}`);
  };

  const handleRemoveFromCart = async (cartId) => {
    // Logic to remove the product from the cart
    try {
      await axios.delete(`http://localhost:8065/api/carts/${cartId}`);
      getAllCartItems(); // Refresh the cart after removing the item
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
    <div> <h1>Cart</h1>
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {cartItems.map((cartItem) => (
        <div
          className="card m-3"
          style={{ width: '21rem', cursor: 'pointer', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
          key={cartItem.cartId}
        >
          <div style={{ height: '200px', overflow: 'hidden', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}>
            {cartItem.product && (
              <img
                src={`data:image/png;base64,${cartItem.product.image}`}
                className="card-img-top"
                alt={cartItem.product.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            )}
          </div>
          <div style={{ padding: '1rem' }}>
            <h5 className="card-title">{cartItem.product.name}</h5>
            <p className="card-text">{cartItem.product.description?.substring(0, 200)}</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <button  className="btn btn-success"  onClick={() => navigate(`/buy/${cartItem.product.id}`)}>Buy Now</button>
              <button className="btn btn-danger" onClick={() => handleRemoveFromCart(cartItem.cartId)}>Remove</button>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
    </Layout>
  );
};

export default Cart;
