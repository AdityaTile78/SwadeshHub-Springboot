
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import Layout from '../Layout/Layout';
import registerBackground from '../Components/Images/bg17.jpg'; // Update with the correct relative path


const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
   //const [auth,setAuth]=useAuth();
   const navigate = useNavigate();


  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      // Make a POST request to your Spring Boot backend endpoint for login
      console.log('Attempting login...');
      const response = await axios.post('http://localhost:8065/api/authenticate', {
        email,
        password
      }
        );

      console.log(response.data); // Log the response from the server
      // setAuth({...auth,user:res.data.user,token:res.data.token});
       localStorage.setItem('auth',JSON.stringify(response.data));
       if(response.data.role===0){
      navigate("/");
       }
       else if(response.data.role===1){
        navigate("/SellerDashboard");
       }else if(response.data.role===2){
        navigate("/AdminDashboard");
       }
    } catch (error) {
      //console.error('Login failed:', error);
      console.error('Login failed:', error.response.data);
      //setError('Login failed. Please check your credentials.');
      // Handle errors, you can display an error message or log the error
    }
  };

  return (
    < Layout>
    <Container component="main" maxWidth="sm" style={{background: 'linear-gradient(to right, #FFEAC7, #ffffff,#D1FFC7)', borderRadius:'10px'}}>
      <Box
        sx={{
          marginTop: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          background: 'linear-gradient(to right, #FFEAC7, #ffffff, #D1FFC7 )'
        }}
      >
        <Typography component="h1" variant="h4" style={{color:'black'}}>
        <i className="fas fa-sign-in-alt" style={{ marginRight: '5px',marginTop:'10px', color:'black' }}></i>
          Login
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ mt: 3 }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            value={email} onChange={(e) => setEmail(e.target.value)}
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
            value={password} onChange={(e) => setPassword(e.target.value) }
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Login
          </Button>
          <p>
          Don't have an account?{' '}
          <Link to="/register" style={{ color: '#007BFF', textDecoration: 'underline' }}>
            Create New Account
          </Link>
        </p>
        </Box>
      </Box>
    </Container>
    </Layout>
  );
};

export default LoginForm;
// import React, { useState } from 'react';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import Box from '@mui/material/Box';
// import Container from '@mui/material/Container';
// import Typography from '@mui/material/Typography';
// import axios from 'axios';
// import { useNavigate } from "react-router-dom";
// import { Link } from 'react-router-dom';
// import Layout from '../Layout/Layout';


// const LoginForm = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//    //const [auth,setAuth]=useAuth();
//    const navigate = useNavigate();


//   const handleSubmit = async(e) => {
//     e.preventDefault();
//     try {
//       // Make a POST request to your Spring Boot backend endpoint for login
//       console.log('Attempting login...');
//       const response = await axios.post('http://localhost:8065/api/authenticate', {
//         email,
//         password
//       }
//         );

//       console.log(response.data); // Log the response from the server
//       // setAuth({...auth,user:res.data.user,token:res.data.token});
//        localStorage.setItem('auth',JSON.stringify(response.data));
//        if(response.data.role===0){
//       navigate("/");
//        }
//        else if(response.data.role===1){
//         navigate("/SellerDashboard");
//        }else if(response.data.role===2){
//         navigate("/AdminDashboard");
//        }
//     } catch (error) {
//       //console.error('Login failed:', error);
//       console.error('Login failed:', error.response.data);
//       //setError('Login failed. Please check your credentials.');
//       // Handle errors, you can display an error message or log the error
//     }
//   };

//   return (
//     < Layout>
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
//         <i className="fas fa-sign-in-alt" style={{ marginRight: '5px' }}></i>
//           Login
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
//             id="username"
//             label="Username"
//             name="username"
//             autoComplete="username"
//             autoFocus
//             value={email} onChange={(e) => setEmail(e.target.value)}
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
//             value={password} onChange={(e) => setPassword(e.target.value) }
//           />
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             sx={{ mt: 3, mb: 2 }}
//           >
//             Login
//           </Button>
//           <p>
//           Don't have an account?{' '}
//           <Link to="/register" style={{ color: '#007BFF', textDecoration: 'underline' }}>
//             Create New Account
//           </Link>
//         </p>
//         </Box>
//       </Box>
//     </Container>
//     </Layout>
//   );
// };

// export default LoginForm;


// import React, { useState } from 'react';
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import Box from '@mui/material/Box';
// import Container from '@mui/material/Container';
// import Typography from '@mui/material/Typography';
// import axios from 'axios';
// import { useNavigate } from "react-router-dom";
// import { Link } from 'react-router-dom';
// import Layout from '../Layout/Layout';


// const LoginForm = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//    //const [auth,setAuth]=useAuth();
//    const navigate = useNavigate();


//   const handleSubmit = async(e) => {
//     e.preventDefault();
//     try {
//       // Make a POST request to your Spring Boot backend endpoint for login
//       console.log('Attempting login...');
//       const response = await axios.post('http://localhost:8065/api/authenticate', {
//         email,
//         password
//       }
//         );

//       console.log(response.data); // Log the response from the server
//       // setAuth({...auth,user:res.data.user,token:res.data.token});
//        localStorage.setItem('auth',JSON.stringify(response.data));
//        if(response.data.role===0){
//       navigate("/");
//        }
//        else if(response.data.role===1){
//         navigate("/SellerDashboard");
//        }else if(response.data.role===2){
//         navigate("/AdminDashboard");
//        }
//     } catch (error) {
//       //console.error('Login failed:', error);
//       console.error('Login failed:', error.response.data);
//       //setError('Login failed. Please check your credentials.');
//       // Handle errors, you can display an error message or log the error
//     }
//   };

//   return (
//     < Layout>
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
//         <i className="fas fa-sign-in-alt" style={{ marginRight: '5px' }}></i>
//           Login
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
//             id="username"
//             label="Username"
//             name="username"
//             autoComplete="username"
//             autoFocus
//             value={email} onChange={(e) => setEmail(e.target.value)}
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
//             value={password} onChange={(e) => setPassword(e.target.value) }
//           />
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             sx={{ mt: 3, mb: 2 }}
//           >
//             Login
//           </Button>
//           <p>
//           Don't have an account?{' '}
//           <Link to="/register" style={{ color: '#007BFF', textDecoration: 'underline' }}>
//             Create New Account
//           </Link>
//         </p>
//         </Box>
//       </Box>
//     </Container>
//     </Layout>
//   );
// };

// export default LoginForm;