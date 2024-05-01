import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import swadeshiImage from '../Components/Images/FooterImage1.jpg'


export default function Footer() {
  return (
    <MDBFooter  className="text-center text-lg-start text-muted" style={{background: 'linear-gradient(to right, #ff9933, #ffffff, #138808)',color: '#000000'}}>
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">     
        <div className="me-5 d-none d-lg-block"  >
          <span style={{color: '#000000 '}}>Get connected with us on social networks:</span>
        </div>

        <div style={{color: '#000000'}}>
          <a href="" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="facebook-f" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="twitter" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="google" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="instagram" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="linkedin" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon color="secondary" fab icon="github" />
          </a>
        </div>
      </section>

      <section className="" style={{color: '#000000'}}>
        <MDBContainer className="text-center text-md-start mt-5" >
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4" >
                <MDBIcon color="secondary" icon="fa-solid fa-shop" className="me-3" />
                {/* <FontAwesomeIcon icon="fa-solid fa-shop" /> */}
                Swadeshi
              </h6>
              <p >
                Swadeshi stores will retail a range of handicraft, textiles,
                paintings, home decor products, furniture and gifting items.
              </p>
              <img
                src={swadeshiImage}
                alt="Swadeshi Image"
                className="img-fluid"
                style={{borderRadius:'10px'}} 
              />
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
              <MDBIcon color="secondary" icon="fa-solid fa-bag-shopping" className="me-3" />
              {/* <FontAwesomeIcon icon="fa-solid fa-bag-shopping" /> */}
                Categories</h6>
              <p>
                <a href="https://swadeshiclick.com/" >
                  Clothing
                </a>
              </p>
              <p>
                <a href="https://indian.handicrafts.gov.in/en">
                  Handicrafts
                </a>
              </p>
              <p>
                <a href="https://indiacircus.com/" >
                  Home Decor
                </a>
              </p>
              <p>
                <a href="https://www.theheritagelab.in/" >
                  Paintings
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
              <MDBIcon color="secondary" icon="fa-solid fa-link" className="me-3" />
              {/* <FontAwesomeIcon icon="fa-solid fa-link" /> */}
                Useful links</h6>
              <p>
                <a href="https://cdac.in/index.aspx?id=help" >
                  Help
                </a>
              </p>
              <p>
                <a href="https://cdac.in/index.aspx?id=website_policies" >
                  Website Polices
                </a>
              </p>
              <p>
                <a href="https://cdac.in/index.aspx?id=legal_notice#2" >
                  Copyright Policy
                </a>
              </p>
              <p>
                <a href="https://cdac.in/index.aspx?id=terms_conditions">
                  Terms & Conditions
                </a>
              </p>
            </MDBCol>
            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
              <MDBIcon color="secondary" icon="fa-regular fa-address-book" className="me-3" />
              {/* <FontAwesomeIcon icon="fa-regular fa-address-book" /> */}
                Contact</h6>
              <p style={{color: '#000000'}}>
                <MDBIcon color="secondary" icon="home" className="me-2" />
                Raintree Marg, Near Bharati Vidyapeeth, Opp. Kharghar Railway
                Station, Sector 7, CBD Belapur
                <br />
                Navi Mumbai - 400 614 - Maharashtra (India)
              </p>
              <p>
                <MDBIcon color="secondary" icon="phone" className="me-3" />
                <a href="tel:+912227565303">+91-22-27565303</a>
              </p>
              <p>
                <MDBIcon color="secondary" icon="fax" className="me-3" />
                <a href="tel:+912227560004">+91-22-2756-0004</a>
              </p>
            </MDBCol>
            <MDBCol>
            <h6 className="text-uppercase fw-bold mb-4">
              <MDBIcon color="secondary" icon="fa-solid fa-map-location-dot" className="me-3" />
                Map</h6>
                <iframe
                  title="Google Map"
                  width="130%"
                  height="300"
                  style={{ border: "0" }}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.7087036907464!2d73.03822761527504!3d19.01459325798112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b76c80e97f17%3A0x83b06bf4613b3d6d!2sCDAC%20-%20Centre%20for%20Development%20of%20Advanced%20Computing!5e0!3m2!1sen!2sin!4v1643117226011!5m2!1sen!2sin"
                  allowFullScreen
                ></iframe>
              </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)",color: '#000000' }}
        
      >
        © 2024 Swadeshi:
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
        All rights reserved, Last Updated: Tuesday, Jan 02, 2024
        </a>
      </div>
    </MDBFooter>
  );
}

// import React from 'react';
// import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
// import swadeshiImage from '../Components/Images/FooterImage1.jpg'


// export default function Footer() {
//   return (
//     <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
//       <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
//         <div className="me-5 d-none d-lg-block">
//           <span>Get connected with us on social networks:</span>
//         </div>

//         <div>
//           <a href="" className="me-4 text-reset">
//             <MDBIcon color="secondary" fab icon="facebook-f" />
//           </a>
//           <a href="" className="me-4 text-reset">
//             <MDBIcon color="secondary" fab icon="twitter" />
//           </a>
//           <a href="" className="me-4 text-reset">
//             <MDBIcon color="secondary" fab icon="google" />
//           </a>
//           <a href="" className="me-4 text-reset">
//             <MDBIcon color="secondary" fab icon="instagram" />
//           </a>
//           <a href="" className="me-4 text-reset">
//             <MDBIcon color="secondary" fab icon="linkedin" />
//           </a>
//           <a href="" className="me-4 text-reset">
//             <MDBIcon color="secondary" fab icon="github" />
//           </a>
//         </div>
//       </section>

//       <section className="">
//         <MDBContainer className="text-center text-md-start mt-5">
//           <MDBRow className="mt-3">
//             <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
//               <h6 className="text-uppercase fw-bold mb-4">
//                 <MDBIcon color="secondary" icon="fa-solid fa-shop" className="me-3" />
//                 {/* <FontAwesomeIcon icon="fa-solid fa-shop" /> */}
//                 Swadeshi
//               </h6>
//               <p>
//                 Swadeshi stores will retail a range of handicraft, textiles,
//                 paintings, home decor products, furniture and gifting items.
//               </p>
//               <img
//                 src={swadeshiImage}
//                 alt="Swadeshi Image"
//                 className="img-fluid"
//               />
//             </MDBCol>

//             <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
//               <h6 className="text-uppercase fw-bold mb-4">
//               <MDBIcon color="secondary" icon="fa-solid fa-bag-shopping" className="me-3" />
//               {/* <FontAwesomeIcon icon="fa-solid fa-bag-shopping" /> */}
//                 Categories</h6>
//               <p>
//                 <a href="https://swadeshiclick.com/" >
//                   Clothing
//                 </a>
//               </p>
//               <p>
//                 <a href="https://indian.handicrafts.gov.in/en">
//                   Handicrafts
//                 </a>
//               </p>
//               <p>
//                 <a href="https://indiacircus.com/" >
//                   Home Decor
//                 </a>
//               </p>
//               <p>
//                 <a href="https://www.theheritagelab.in/" >
//                   Paintings
//                 </a>
//               </p>
//             </MDBCol>

//             <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
//               <h6 className="text-uppercase fw-bold mb-4">
//               <MDBIcon color="secondary" icon="fa-solid fa-link" className="me-3" />
//               {/* <FontAwesomeIcon icon="fa-solid fa-link" /> */}
//                 Useful links</h6>
//               <p>
//                 <a href="https://cdac.in/index.aspx?id=help" >
//                   Help
//                 </a>
//               </p>
//               <p>
//                 <a href="https://cdac.in/index.aspx?id=website_policies" >
//                   Website Polices
//                 </a>
//               </p>
//               <p>
//                 <a href="https://cdac.in/index.aspx?id=legal_notice#2" >
//                   Copyright Policy
//                 </a>
//               </p>
//               <p>
//                 <a href="https://cdac.in/index.aspx?id=terms_conditions">
//                   Terms & Conditions
//                 </a>
//               </p>
//             </MDBCol>
//             <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
//               <h6 className="text-uppercase fw-bold mb-4">
//               <MDBIcon color="secondary" icon="fa-regular fa-address-book" className="me-3" />
//               {/* <FontAwesomeIcon icon="fa-regular fa-address-book" /> */}
//                 Contact</h6>
//               <p>
//                 <MDBIcon color="secondary" icon="home" className="me-2" />
//                 Raintree Marg, Near Bharati Vidyapeeth, Opp. Kharghar Railway
//                 Station, Sector 7, CBD Belapur
//                 <br />
//                 Navi Mumbai - 400 614 - Maharashtra (India)
//               </p>
//               <p>
//                 <MDBIcon color="secondary" icon="phone" className="me-3" />
//                 <a href="tel:+912227565303">+91-22-27565303</a>
//               </p>
//               <p>
//                 <MDBIcon color="secondary" icon="fax" className="me-3" />
//                 <a href="tel:+912227560004">+91-22-2756-0004</a>
//               </p>
//             </MDBCol>
//             <MDBCol>
//             <h6 className="text-uppercase fw-bold mb-4">
//               <MDBIcon color="secondary" icon="fa-solid fa-map-location-dot" className="me-3" />
//                 Map</h6>
//                 <iframe
//                   title="Google Map"
//                   width="130%"
//                   height="300"
//                   style={{ border: "0" }}
//                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.7087036907464!2d73.03822761527504!3d19.01459325798112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b76c80e97f17%3A0x83b06bf4613b3d6d!2sCDAC%20-%20Centre%20for%20Development%20of%20Advanced%20Computing!5e0!3m2!1sen!2sin!4v1643117226011!5m2!1sen!2sin"
//                   allowFullScreen
//                 ></iframe>
//               </MDBCol>
//           </MDBRow>
//         </MDBContainer>
//       </section>

//       <div
//         className="text-center p-4"
//         style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
//       >
//         © 2024 Swadeshi:
//         <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
//         All rights reserved, Last Updated: Tuesday, Jan 02, 2024
//         </a>
//       </div>
//     </MDBFooter>
//   );
// }