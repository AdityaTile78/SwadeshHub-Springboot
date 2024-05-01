import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import registerBackground from '../Components/Images/bg17.jpg'; // Update with the correct relative path
import Layout from '../Layout/Layout';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    mobile: '',
  });
  const navigate = useNavigate();

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      mobile: '',
    };

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^[0-9]{10}$/;

    if (!emailRegex.test(email)) {
      newErrors.email = 'Invalid email format';
      isValid = false;
    }

    if (!firstName.trim()) {
      newErrors.firstName = 'First Name is required';
      isValid = false;
    }

    if (!lastName.trim()) {
      newErrors.lastName = 'Last Name is required';
      isValid = false;
    }

    if (!email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    }

    if (!password.trim()) {
      newErrors.password = 'Password is required';
      isValid = false;
    } else {
      // Password validation: At least one uppercase, one lowercase, one special character, and minimum 8 characters
      const passwordRegex = /^(?=.[a-z])(?=.[A-Z])(?=.[!@#$%^&()_+{}\[\]:;<>,.?~\\-]).{8,}$/;
      if (!passwordRegex.test(password)) {
        newErrors.password =
          'Password must contain at least one uppercase letter, one lowercase letter, one special character, and be at least 8 characters long';
        isValid = false;
      }
    }

    if (!mobileRegex.test(mobile)) {
      newErrors.mobile = 'Invalid mobile number';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const response = await axios.post('http://localhost:8065/api/user/register', {
        firstName,
        lastName,
        mobile,
        email,
        password,
      });

      if (response.status) {
        toast.success(response.data.message || 'User Registered successfully!', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        navigate('/login');
      } else {
        toast.error('Form submission failed. Please try again.', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    } catch (error) {
      console.error('Registration failed:', error.response.data);
    }
  };

  return (
    <Layout>
    <Container 
    color="black"
      component="main"
      maxWidth="s"
      sx={{
        position: 'relative',
        backgroundImage: `url(${registerBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '150vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.1)', // Adjust opacity as needed
        },
      }}
    >
      {/* <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover /> */}

      <Box style={{background: 'linear-gradient(to right, #FFEAC7, #ffffff,#D1FFC7)', borderRadius:'10px'}}
      sx={{ 
        position:'relative',
        zIndex: 1,
        marginTop: '15vh',
        marginBottom: '5vh',
        padding: '2rem',
        boxShadow: '0px 10px 50px rgba(0, 0, 0, 0.3)',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'right',
        backgroundColor: 'rgba(255, 255, 255,0.95)',
        width:'30%',
       }}>
        <Typography component="h1" variant="h4" style={{ marginBottom: '1rem', color: '#333' }}>
          <i className="fas fa-user-plus" style={{ marginRight: '10px',color: '#007BFF' }}></i>
            Sign Up
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%' }} style={{marginTop:'10px'}}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="firstName"
            label="First Name"
            name="firstName"
            autoComplete="firstName"
            autoFocus
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            error={!!errors.firstName}
            helperText={errors.firstName}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="lastName"
            label="Last Name"
            name="lastName"
            autoComplete="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            error={!!errors.lastName}
            helperText={errors.lastName}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={!!errors.email}
            helperText={errors.email}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={!!errors.password}
            helperText={errors.password}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="mobile"
            label="Mobile Number"
            name="mobile"
            autoComplete="mobile"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            error={!!errors.mobile}
            helperText={errors.mobile}
          />
          <Button
            type="submit"
            fullWidth variant="contained"
            sx={{ mt: 3, mb: 2, backgroundColor: '#007BFF', color: '#fff' }}
          >
            Sign Up
          </Button>
        </Box>
      </Box>
    </Container>
    </Layout>
  );
};

export default Register;

// import React, { useState } from 'react';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import Box from '@mui/material/Box';
// import Container from '@mui/material/Container';
// import Typography from '@mui/material/Typography';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// import registerBackground from '../Components/Images/bg17.jpg'; // Update with the correct relative path
// import Layout from '../Layout/Layout';

// const Register = () => {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [mobile, setMobile] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errors, setErrors] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: '',
//     mobile: '',
//   });
//   const navigate = useNavigate();

//   const validateForm = () => {
//     let isValid = true;
//     const newErrors = {
//       firstName: '',
//       lastName: '',
//       email: '',
//       password: '',
//       mobile: '',
//     };

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     const mobileRegex = /^[0-9]{10}$/;

//     if (!emailRegex.test(email)) {
//       newErrors.email = 'Invalid email format';
//       isValid = false;
//     }

//     if (!firstName.trim()) {
//       newErrors.firstName = 'First Name is required';
//       isValid = false;
//     }

//     if (!lastName.trim()) {
//       newErrors.lastName = 'Last Name is required';
//       isValid = false;
//     }

//     if (!email.trim()) {
//       newErrors.email = 'Email is required';
//       isValid = false;
//     }

//     if (!password.trim()) {
//       newErrors.password = 'Password is required';
//       isValid = false;
//     } else {
//       // Password validation: At least one uppercase, one lowercase, one special character, and minimum 8 characters
//       const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]).{8,}$/;
//       if (!passwordRegex.test(password)) {
//         newErrors.password =
//           'Password must contain at least one uppercase letter, one lowercase letter, one special character, and be at least 8 characters long';
//         isValid = false;
//       }
//     }

//     if (!mobileRegex.test(mobile)) {
//       newErrors.mobile = 'Invalid mobile number';
//       isValid = false;
//     }

//     setErrors(newErrors);
//     return isValid;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!validateForm()) {
//       return;
//     }

//     try {
//       const response = await axios.post('http://localhost:8065/api/user/register', {
//         firstName,
//         lastName,
//         mobile,
//         email,
//         password,
//       });

//       if (response.status) {
//         toast.success(response.data.message || 'User Registered successfully!', {
//           position: 'top-right',
//           autoClose: 3000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//         });
//         navigate('/login');
//       } else {
//         toast.error('Form submission failed. Please try again.', {
//           position: 'top-right',
//           autoClose: 3000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//         });
//       }
//     } catch (error) {
//       console.error('Registration failed:', error.response.data);
//     }
//   };

//   return (
//     <Layout>
//     <Container 
//     color="black"
//       component="main"
//       maxWidth="s"
//       sx={{
//         position: 'relative',
//         backgroundImage: `url(${registerBackground})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         minHeight: '150vh',
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         '&::before': {
//           content: '""',
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           backgroundColor: 'rgba(255, 255, 255, 0.1)', // Adjust opacity as needed
//         },
//       }}
//     >
//       {/* <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover /> */}

//       <Box sx={{ 
//         position:'relative',
//         zIndex: 1,
//         marginTop: '7vh',
//         marginBottom: '5vh',
//         padding: '2rem',
//         boxShadow: '0px 10px 50px rgba(0, 0, 0, 0.3)',
//         borderRadius: '10px',
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'right',
//         backgroundColor: 'rgba(255, 255, 255,0.95)',
//         width:'30%',
//        }}>
//         <Typography component="h1" variant="h4" style={{ marginBottom: '1rem', color: '#333' }}>
//           <i className="fas fa-user-plus" style={{ marginRight: '10px',color: '#007BFF' }}></i>
//             Sign Up
//         </Typography>
//         <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%' }}>
//           <TextField
//             margin="normal"
//             required
//             fullWidth
//             id="firstName"
//             label="First Name"
//             name="firstName"
//             autoComplete="firstName"
//             autoFocus
//             value={firstName}
//             onChange={(e) => setFirstName(e.target.value)}
//             error={!!errors.firstName}
//             helperText={errors.firstName}
//           />
//           <TextField
//             margin="normal"
//             required
//             fullWidth
//             id="lastName"
//             label="Last Name"
//             name="lastName"
//             autoComplete="lastName"
//             value={lastName}
//             onChange={(e) => setLastName(e.target.value)}
//             error={!!errors.lastName}
//             helperText={errors.lastName}
//           />
//           <TextField
//             margin="normal"
//             required
//             fullWidth
//             id="email"
//             label="Email Address"
//             name="email"
//             autoComplete="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             error={!!errors.email}
//             helperText={errors.email}
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
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             error={!!errors.password}
//             helperText={errors.password}
//           />
//           <TextField
//             margin="normal"
//             required
//             fullWidth
//             id="mobile"
//             label="Mobile Number"
//             name="mobile"
//             autoComplete="mobile"
//             value={mobile}
//             onChange={(e) => setMobile(e.target.value)}
//             error={!!errors.mobile}
//             helperText={errors.mobile}
//           />
//           <Button
//             type="submit"
//             fullWidth variant="contained"
//             sx={{ mt: 3, mb: 2, backgroundColor: '#007BFF', color: '#fff' }}
//           >
//             Sign Up
//           </Button>
//         </Box>
//       </Box>
//     </Container>
//     </Layout>
//   );
// };

// export default Register;