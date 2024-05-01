// import React, { useState } from 'react';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import Box from '@mui/material/Box';
// import Container from '@mui/material/Container';
// import Typography from '@mui/material/Typography';

// const SignUp = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     password: '',
//     email: '',
//     mobile: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add your form submission logic here
//     console.log('Form Data:', formData);
//   };

//   return (
//     <Container component="main" maxWidth="xs">
//       <Box
//         sx={{
//           marginTop: 8,
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//         }}
//       >
//         <Typography component="h1" variant="h5">
//           Sign Up
//         </Typography>
//         <Box
//           component="form"
//           onSubmit={handleSubmit}
//           sx={{ mt: 3 }}
//         >
//           <TextField
//             margin="normal"
//             required
//             fullWidth
//             id="firstName"
//             label="First Name"
//             name="firstName"
//             autoComplete="firstName"
//             autoFocus
//             value={formData.firstName}
//             onChange={handleChange}
//           />
//           <TextField
//             margin="normal"
//             required
//             fullWidth
//             id="lastName"
//             label="Last Name"
//             name="lastName"
//             autoComplete="lastName"
//             value={formData.lastName}
//             onChange={handleChange}
//           />
//           <TextField
//             margin="normal"
//             required
//             fullWidth
//             name="password"
//             label="Password"
//             type="password"
//             id="password"
//             autoComplete="current-password"
//             value={formData.password}
//             onChange={handleChange}
//           />
//           <TextField
//             margin="normal"
//             required
//             fullWidth
//             id="email"
//             label="Email Address"
//             name="email"
//             autoComplete="email"
//             value={formData.email}
//             onChange={handleChange}
//           />
//           <TextField
//             margin="normal"
//             required
//             fullWidth
//             id="mobile"
//             label="Mobile Number"
//             name="mobile"
//             autoComplete="mobile"
//             value={formData.mobile}
//             onChange={handleChange}
//           />
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             sx={{ mt: 3, mb: 2 }}
//           >
//             Sign Up
//           </Button>
//         </Box>
//       {/* </Box> */}
//     </Container>
//   );
// };

// export default Register;


//  const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     try {
//       // Make a POST request to your Spring Boot backend endpoint
//       const response = await axios.post('http://localhost:8065/api/user/register', {
//         firstName,
//         lastName,
//         mobile,
//         email,
//         password,
//       });

//       console.log(response.data); // Log the response from the server

//       // If successful, you can redirect to the login page or show a success message
//     } catch (error) {
//       console.error('Registration failed:', error.response.data);
//       // Handle errors, you can display an error message or log the error
//     }
//   };

//   import React, { useState } from 'react';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import Box from '@mui/material/Box';
// import Container from '@mui/material/Container';
// import Typography from '@mui/material/Typography';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import axios from 'axios';

// const Register = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     password: '',
//     email: '',
//     mobile: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     try {
//       // Make a POST request to your Spring Boot backend endpoint
//       const response = await axios.post('http://localhost:8065/api/user/register', formData);
  
//       if (response.data.success) {
//         // Show success toast
//         toast.success('Form submitted successfully!', {
//           position: 'top-right',
//           autoClose: 3000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//         });
//       } else {
//         // Show error toast
//         toast.error('Form submission failed. Please try again.', {
//           position: 'top-right',
//           autoClose: 3000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//         });
//       }
  
//       // If successful, you can redirect to the login page or show a success message
//     } catch (error) {
//       console.error('Registration failed:', error.response.data);
//       // Handle errors, you can display an error message or log the error
//     }
//   };
//   return (
//     <Container component="main" maxWidth="xs">
     
// <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />

//       <Box
//         sx={{
//           marginTop: 8,
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//         }}
//       >
//         <Typography component="h1" variant="h5">
//           Sign Up
//         </Typography>
//         <Box
//           component="form"
//           onSubmit={handleSubmit}
//           sx={{ mt: 3 }}
//         >
//           <TextField
//             margin="normal"
//             required
//             fullWidth
//             id="firstName"
//             label="First Name"
//             name="firstName"
//             autoComplete="firstName"
//             autoFocus
//             value={formData.firstName}
//             onChange={handleChange}
//           />
//           <TextField
//             margin="normal"
//             required
//             fullWidth
//             id="lastName"
//             label="Last Name"
//             name="lastName"
//             autoComplete="lastName"
//             value={formData.lastName}
//             onChange={handleChange}
//           />
//           <TextField
//             margin="normal"
//             required
//             fullWidth
//             name="password"
//             label="Password"
//             type="password"
//             id="password"
//             autoComplete="current-password"
//             value={formData.password}
//             onChange={handleChange}
//           />
//           <TextField
//             margin="normal"
//             required
//             fullWidth
//             id="email"
//             label="Email Address"
//             name="email"
//             autoComplete="email"
//             value={formData.email}
//             onChange={handleChange}
//           />
//           <TextField
//             margin="normal"
//             required
//             fullWidth
//             id="mobile"
//             label="Mobile Number"
//             name="mobile"
//             autoComplete="mobile"
//             value={formData.mobile}
//             onChange={handleChange}
//           />
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             sx={{ mt: 3, mb: 2 }}
//           >
//             Sign Up
//           </Button>
//         </Box>
//       </Box>
//     </Container>
//   );
// };

// export default Register;





// const [firstName, setFirstName] = useState('');
// const [lastName, setLastName] = useState('');
// const [mobile, setMobile] = useState('');
// const [email, setEmail] = useState('');
// const [password, setPassword] = useState('');

// const handleSubmit = async (e) => {
//   e.preventDefault();
  
//   try {
//     // Make a POST request to your Spring Boot backend endpoint
//     const response = await axios.post('http://localhost:8065/api/user/register', {
//       firstName,
//       lastName,
//       mobile,
//       email,
//       password,
//     });




//     import React, { useState } from 'react';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import Box from '@mui/material/Box';
// import Container from '@mui/material/Container';
// import Typography from '@mui/material/Typography';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import axios from 'axios';

// const Register = () => {
// const [firstName, setFirstName] = useState('');
// const [lastName, setLastName] = useState('');
// const [mobile, setMobile] = useState('');
// const [email, setEmail] = useState('');
// const [password, setPassword] = useState('');

 

//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     try {
//       // Make a POST request to your Spring Boot backend endpoint
//       const response = await axios.post('http://localhost:8065/api/user/register', {
//         firstName,
//         lastName,
//         mobile,
//         email,
//         password,
//       });
  
//       if (response.data.success) {
//         // Show success toast
//         toast.success('Form submitted successfully!', {
//           position: 'top-right',
//           autoClose: 3000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//         });
//       } else {
//         // Show error toast
//         toast.error('Form submission failed. Please try again.', {
//           position: 'top-right',
//           autoClose: 3000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//         });
//       }
  
//       // If successful, you can redirect to the login page or show a success message
//     } catch (error) {
//       console.error('Registration failed:', error.response.data);
//       // Handle errors, you can display an error message or log the error
//     }
//   };



//   onChange={(e) => setEmail(e.target.value)} required