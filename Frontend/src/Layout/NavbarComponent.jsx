import React, { useState } from "react";
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBBtn,
  MDBNavbarNav,
  MDBIcon,
  MDBInputGroup,
} from "mdb-react-ui-kit";
import swadeshilogo from "../Components/Images/swadeshilogo2.jpg";

export default function App() {
  const [openNavNoTogglerThird, setOpenNavNoTogglerThird] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleLogout = () => {
    localStorage.removeItem("auth");
    // Add your logout logic here
  };

  const user = JSON.parse(localStorage.getItem("auth"));

  return (
    <>
      <MDBNavbar expand="lg" style={{background: 'linear-gradient(to right, #ff9933, #ffffff, #138808)',color: '#000000'}}> 
        <MDBContainer fluid>
          <MDBNavbarToggler
            type="button"
            data-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setOpenNavNoTogglerThird(!openNavNoTogglerThird)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>

          <MDBNavbarBrand href="#">
            <img
              style={{ height: "50px", width: "200px", borderRadius:"10px" }}
              // src={swadeshilogo}
              src="https://www.shutterstock.com/image-vector/swadeshi-word-english-calligraphy-by-260nw-2112040853.jpg"
              height="30"
              alt=""
              loading="lazy"
            />
          </MDBNavbarBrand>
          <MDBCollapse navbar open={openNavNoTogglerThird}>
            <MDBNavbarNav className="mr-auto">
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current="page" href="/">
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              {user && user.role === 0 && (
                <MDBNavbarItem>
                  <MDBNavbarLink href="/UserDashboard">
                    My Profile
                  </MDBNavbarLink>
                </MDBNavbarItem>
              )}
              {user && user.role === 1 && (
                <MDBNavbarItem>
                  <MDBNavbarLink href="/SellerDashboard">
                    Dashboard
                  </MDBNavbarLink>
                </MDBNavbarItem>
              )}
               {user && user.role === 2 && (
                <MDBNavbarItem>
                  <MDBNavbarLink href="/AdminDashboard">
                    Dashboard
                  </MDBNavbarLink>
                </MDBNavbarItem>
              )}
              
              <MDBNavbarItem>
                <MDBNavbarLink href="/About">About Us</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="/Contact">Contact</MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBNavbarLink
                  LOGIN
                  href="/sellerregistration"
                  tabIndex={-1}
                  aria-disabled="true"
                >
                  Seller
                </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
            <MDBNavbarNav className="mx-auto">
              {" "}
              {/* Centered */}
              <MDBNavbarItem>
                <MDBInputGroup>
                  <input
                    type="search"
                    className="form-control"
                    placeholder="Search Products"
                    aria-label="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <MDBBtn outline className="text-center">
                    Search
                  </MDBBtn>
                </MDBInputGroup>
              </MDBNavbarItem>
            </MDBNavbarNav>
            <MDBNavbarNav className="ml-auto">
              {" "}
              {/* Right-aligned */}
              {user ? (
                // If user is logged in, show logout button
                
                <MDBNavbarItem>
                  <MDBNavbarLink onClick={handleLogout} href="/login">
                    <MDBBtn color="danger">Logout</MDBBtn> 
                      
                  </MDBNavbarLink>
                </MDBNavbarItem>
              ) : (
                // If user is not logged in, show login button
                <MDBNavbarItem >
                  <MDBNavbarLink href="/Login">
                    <MDBBtn color="primary">Login</MDBBtn>
                  </MDBNavbarLink>
                </MDBNavbarItem>
              )}
              {user && user.role === 0 && (
                <MDBNavbarItem>
                <MDBNavbarLink href="#">
                  
                    <MDBIcon fas icon="shopping-cart">
                      CART
                    </MDBIcon>
                
                </MDBNavbarLink>
              </MDBNavbarItem>
              )}
              
              
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}

// import React, { useState } from "react";
// import {
//   MDBNavbar,
//   MDBContainer,
//   MDBNavbarBrand,
//   MDBNavbarToggler,
//   MDBNavbarItem,
//   MDBNavbarLink,
//   MDBCollapse,
//   MDBBtn,
//   MDBNavbarNav,
//   MDBIcon,
//   MDBInputGroup,
// } from "mdb-react-ui-kit";
// import swadeshilogo from '../Components/Images/swadeshilogo2.jpg';

// export default function App() {
//   const [openNavNoTogglerThird, setOpenNavNoTogglerThird] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');

//   const handleLogout = () => {
//     localStorage.removeItem("auth");
//     // Add your logout logic here
//   };

//   const user = JSON.parse(localStorage.getItem("auth"));

//   return (
//     <>
//       <MDBNavbar expand="lg" light bgColor="light">
//         <MDBContainer fluid>
//           <MDBNavbarToggler
//             type="button"
//             data-target="#navbarTogglerDemo03"
//             aria-controls="navbarTogglerDemo03"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//             onClick={() => setOpenNavNoTogglerThird(!openNavNoTogglerThird)}
//           >
//             <MDBIcon icon="bars" fas />
//           </MDBNavbarToggler>

//           <MDBNavbarBrand href="#">
//             <img
//               style={{ height: '50px', width: '200px' }}
//               // src={swadeshilogo}
//               src="https://www.shutterstock.com/image-vector/swadeshi-word-english-calligraphy-by-260nw-2112040853.jpg"
//               height='30'
//               alt=''
//               loading='lazy'
//             />
//           </MDBNavbarBrand>
//           <MDBCollapse navbar open={openNavNoTogglerThird}>
//             <MDBNavbarNav className="mr-auto">

//               <MDBNavbarItem>
//                 <MDBNavbarLink active aria-current="page" href="/">
//                   Home
//                 </MDBNavbarLink>
//               </MDBNavbarItem>
//               {user && user.role === 0 && (
//                 <MDBNavbarItem>
//                   <MDBNavbarLink href="/UserDashboard">
//                     My Profile
//                   </MDBNavbarLink>
//                 </MDBNavbarItem>
//               )}
//               {user && user.role === 1 && (
//                 <MDBNavbarItem>
//                   <MDBNavbarLink href="/SellerDashboard">
//                     Dashboard
//                   </MDBNavbarLink>
//                 </MDBNavbarItem>
//               )}
//                {user && user.role === 2 && (
//                 <MDBNavbarItem>
//                   <MDBNavbarLink href="/AdminDashboard">
//                     Dashboard
//                   </MDBNavbarLink>
//                 </MDBNavbarItem>
//               )}
//               <MDBNavbarItem>
//                 <MDBNavbarLink href="/About">
//                   About
//                 </MDBNavbarLink>
//               </MDBNavbarItem>
//               <MDBNavbarItem>
//                 <MDBNavbarLink href="/Contact">Contact</MDBNavbarLink>
//               </MDBNavbarItem>

//               <MDBNavbarItem>
//                 <MDBNavbarLink
//                   LOGIN
//                   href="/sellerregistration"
//                   tabIndex={-1}
//                   aria-disabled="true"
//                 >
//                   Seller
//                 </MDBNavbarLink>
//               </MDBNavbarItem>
//             </MDBNavbarNav>
//             <MDBNavbarNav className="mx-auto"> {/* Centered */}
//               <MDBNavbarItem>
//                 <MDBInputGroup>
//                   <input
//                     type="search"
//                     className="form-control"
//                     placeholder="Search Products"
//                     aria-label="Search"
//                     value={searchQuery}
//                     onChange={(e) => setSearchQuery(e.target.value)}
//                   />
//                   <MDBBtn outline className="text-center">
//                     Search
//                   </MDBBtn>
//                 </MDBInputGroup>
//               </MDBNavbarItem>
//             </MDBNavbarNav>
//             <MDBNavbarNav className="ml-auto"> {/* Right-aligned */}
//               {user ? (
//                 // If user is logged in, show logout button
//                 <MDBNavbarItem>
//                   <MDBNavbarLink onClick={handleLogout} href="/login">
//                     <MDBBtn color="danger">Logout</MDBBtn>
//                   </MDBNavbarLink>
//                 </MDBNavbarItem>
//               ) : (
//                 // If user is not logged in, show login button
//                 <MDBNavbarItem>
//                   <MDBNavbarLink href="/Login">
//                     <MDBBtn color="primary">Login</MDBBtn>
//                   </MDBNavbarLink>
//                 </MDBNavbarItem>
//               )}
//               <MDBNavbarItem>
//                 <MDBNavbarLink href="#">
//                   <span>
//                     <MDBIcon fas icon="shopping-cart">CART</MDBIcon>
//                   </span>
//                 </MDBNavbarLink>
//               </MDBNavbarItem>
//               <MDBNavbarBrand href="#">
//             <img
//               style={{ height: '60px', width: '150px' }}
//               // src={swadeshilogo}
//               src="https://www.shutterstock.com/image-vector/swadeshimade-india-materials-that-have-260nw-2112034118.jpg"
//               height='30'
//               alt=''
//               loading='lazy'
//             />
//           </MDBNavbarBrand>
//             </MDBNavbarNav>
//           </MDBCollapse>
//         </MDBContainer>
//       </MDBNavbar>
//     </>
//   );
// }
