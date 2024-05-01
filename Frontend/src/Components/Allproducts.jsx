// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import StateProductsComponent from "./StateProductsComponent"
// import { useNavigate, useParams } from "react-router-dom";
// import Layout from '../Layout/Layout';

// const Allproducts = () => {

//   const [products, setProducts] = useState([]);
//   const [productId, setProductId] = useState(null); // State to store productId
//   const params = useParams();
//   const navigate = useNavigate();

//   const getAllProducts = async () => {
//     try {
//       const { data } = await axios.get(`http://localhost:8065/api/products/productsByState?state=${params.name}`);
//       setProducts(data);
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   const addToCart = async () => {
//     try {
//       const user = JSON.parse(localStorage.getItem("auth"));
//       const user_Id = user.username;
//       if (productId) { // Ensure productId is defined before adding to cart
        
//         await axios.post('http://localhost:8065/api/carts', { user_Id,product: { productId } });
//         // navigate('/cart');
//       } else {
//         console.log("productId is undefined");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   useEffect(() => {
//     getAllProducts();
//   }, []);

//   return (
//     <Layout>
//       <div>
//         <StateProductsComponent state={params.name} />
//         <div className="d-flex flex-wrap">
//           {products?.map((p) => (
//             <div className="card m-3" style={{ width: "21rem" }} key={p.productId}>
//               <img
//                 src={`data:image/png;base64,${p.image}`}
//                 className="card-img-top"
//                 alt={p.name}
//                 style={{ width: '100%', height: '100%', objectFit: 'cover' }}
//               />
//               <div className="card-body">
//                 <h5 className="card-title">{p.name}</h5>
//                 <p className="card-text">
//                   {p.description.substring(0, 200)}...
//                 </p>
//                 <p className="card-text"> Rs. {p.price}</p>
//                 <button className="btn btn-danger" onClick={() => {setProductId(p.id);addToCart()}}>
//                   ADD TO CART
//                 </button>
//                 <button class="btn btn-secondary ms-1">BUYNOW</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </Layout>
//   )
// }

// export default Allproducts;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StateProductsComponent from "./StateProductsComponent"
import { useNavigate, useParams } from "react-router-dom";
import Layout from '../Layout/Layout';

const Allproducts = () => {

  const [products, setProducts] = useState([]);
  const [productId, setProductId] = useState(null); // State to store productId
  const params = useParams();
  const navigate = useNavigate();

  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(`http://localhost:8065/api/products/productsByState?state=${params.name}`);
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  }

  const addToCart = async (userId) => { // Pass userId as argument
    try {
      if (productId && userId) { // Ensure both productId and userId are defined before adding to cart
        await axios.post('http://localhost:8065/api/carts', {  userId,  productId } );
        // navigate('/cart');
      } else {
        console.log("productId or userId is undefined");
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllProducts();
  }, []);
  const handleAddToCart = (id) => {
    const auth = JSON.parse(localStorage.getItem("auth"));

    if(!auth){
      navigate("/login");
    }
    else {
      setProductId(id)
     addToCart(auth.username);
    }
  }

  return (
    <Layout>
      <div>
        <StateProductsComponent state={params.name} />
        <div className="d-flex flex-wrap">
          {products?.map((p) => (
            <div className="card m-3" style={{ width: "21rem",height:"20rem" }} key={p.productId}>
              <img
                src={`data:image/png;base64,${p.image}`}
                className="card-img-top"
                alt={p.name}
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
              <div className="card-body">
                <h5 className="card-title">{p.name}</h5>
                <p className="card-text">
                  {p.description.substring(0, 200)}...
                </p>
                <p className="card-text"> Rs. {p.price}</p>
                <button className="btn btn-danger" onClick={() => handleAddToCart(p.id)}>
                  ADD TO CART
                </button>
                <button class="btn btn-secondary ms-1" onClick={() => navigate(`/product/${p.id}`)}>BUYNOW</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Allproducts;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import StateProductsComponent from "./StateProductsComponent"
// import { useNavigate, useParams } from "react-router-dom";
// import Layout from '../Layout/Layout';

// const Allproducts = () => {

//   const [products, setProducts] = useState([]);
//   const [productId, setProductId] = useState(null); // State to store productId
//   const params = useParams();
//   const navigate = useNavigate();

//   const getAllProducts = async () => {
//     try {
//       const { data } = await axios.get(`http://localhost:8065/api/products/productsByState?state=${params.name}`);
//       setProducts(data);
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   const addToCart = async () => {
//     try {
//       const user = JSON.parse(localStorage.getItem("auth"));
//       const userId = user.username; // Corrected variable name
//       if (productId) { // Ensure productId is defined before adding to cart
//         await axios.post('http://localhost:8065/api/carts', { userId, product: { productId } });
//         // Optionally navigate to cart page after adding to cart
//         // navigate('/cart');
//       } else {
//         console.log("productId is undefined");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   useEffect(() => {
//     getAllProducts();
//   }, []);

//   return (
//     <Layout>
//       <div>
//         <StateProductsComponent state={params.name} />
//         <div className="d-flex flex-wrap">
//           {products?.map((p) => (
//             <div className="card m-3" style={{ width: "21rem" }} key={p.productId}>
//               <img
//                 src={`data:image/png;base64,${p.image}`}
//                 className="card-img-top"
//                 alt={p.name}
//                 style={{ width: '100%', height: '100%', objectFit: 'cover' }}
//               />
//               <div className="card-body">
//                 <h5 className="card-title">{p.name}</h5>
//                 <p className="card-text">
//                   {p.description.substring(0, 200)}...
//                 </p>
//                 <p className="card-text"> Rs. {p.price}</p>
//                 <button className="btn btn-danger" onClick={() => {setProductId(p.id); addToCart()}}>
//                   ADD TO CART
//                 </button>
//                 <button class="btn btn-secondary ms-1">BUYNOW</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </Layout>
//   )
// }

// export default Allproducts;

