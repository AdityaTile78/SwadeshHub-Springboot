import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  Paper,
  Typography,
} from '@mui/material';
import Layout from '../Layout/Layout';


export const SellerRegistration = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
 
  const states = [
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chattisgarh',
    'Gujarat',
    'Himachal Pradesh',
    'Kerala',
    'Maharashtra',
    'Madhya Pradesh',
    'Orrisa',
    'Rajasthan',
    'Tamil Nadu',
    'Telangana',
    'Uttar Pradesh',
    'West Bengal',
    'Uttarakhand',
    'Tripura'

    // Add more states as needed
  ];

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        'http://localhost:8065/api/seller-forms',
        data
      );

      if (!response.formId) {
        console.log('Form submitted successfully:', response.data.message);
        // You can handle success (e.g., show a success message or redirect)
        alert('Form submitted successfully');
        reset();
      } else {
        console.error('Form submission failed:', response.data.message);
        // You can handle failure (e.g., show an error message)
      }
    } catch (error) {
      console.error('Form submission failed:', error);
      // Handle errors, you can display an error message or log the error
    }
  };

  return (
    <Layout>
      <br/>
      <br/>
    <Grid container justifyContent="center" alignItems="center" height="100vh" >
      <Grid item xs={6}>
        <Paper elevation={3} style={{background: 'linear-gradient(to right, #FFEAC7, #ffffff,#D1FFC7)', borderRadius:'10px',padding: '20px'}}>
          <Typography variant="h5" gutterBottom>
            Seller Registration Form
          </Typography>

          <form onSubmit={handleSubmit(onSubmit)} >
            <TextField
              label="GST Number"
              fullWidth
              {...register('gstNo', {
                required: 'GST Number is required',
                pattern: {
                  value: /^[0-9]{15}$/,
                  message: 'Enter a valid GST Number (15 digits)',
                },
              })}
              error={!!errors.gstNo}
              helperText={errors.gstNo?.message}
              margin="normal"
            />

            <TextField
              label="Username"
              fullWidth
              {...register('username', {
                required: 'Username is required',
                minLength: { value: 6, message: 'Username must be at least 6 characters' },
              })}
              error={!!errors.username}
              helperText={errors.username?.message}
              margin="normal"
            />

            <TextField
              type="password"
              label="Password"
              fullWidth
              {...register('password', {
                required: 'Password is required',
                minLength: { value: 8, message: 'Password must be at least 8 characters' },
              })}
              error={!!errors.password}
              helperText={errors.password?.message}
              margin="normal"
            />

            <TextField
              label="Company Name"
              fullWidth
              {...register('companyName', { required: 'Company Name is required' })}
              error={!!errors.companyName}
              helperText={errors.companyName?.message}
              margin="normal"
            />

            <TextField
              label="Owner Name"
              fullWidth
              {...register('ownerName', { required: 'Owner Name is required' })}
              error={!!errors.ownerName}
              helperText={errors.ownerName?.message}
              margin="normal"
            />

            <TextField
              label="City"
              fullWidth
              {...register('city', { required: 'City is required' })}
              error={!!errors.city}
              helperText={errors.city?.message}
              margin="normal"
            />

            {/* <TextField
              label="State"
              fullWidth
              {...register('state', { required: 'State is required' })}
              error={!!errors.state}
              helperText={errors.state?.message}
              margin="normal"
            /> */}
             <FormControl fullWidth margin="normal">
              <InputLabel>State</InputLabel>
              <Select
                {...register('state', { required: 'State is required' })}
                error={!!errors.state}
              >
                {states.map((state) => (
                  <MenuItem key={state} value={state}>
                    {state}
                  </MenuItem>
                ))}
              </Select>
              {errors.state && (
                <Typography variant="body2" color="error">
                  {errors.state.message}
                </Typography>
              )}
            </FormControl>
            <TextField
              label="Pincode"
              fullWidth
              {...register('pincode', {
                required: 'Pincode is required',
                pattern: {
                  value: /^[0-9]{6}$/,
                  message: 'Enter a valid 6-digit Pincode',
                },
              })}
              error={!!errors.pincode}
              helperText={errors.pincode?.message}
              margin="normal"
            />

            <TextField
              label="Category"
              fullWidth
              {...register('category', { required: 'Category is required' })}
              error={!!errors.category}
              helperText={errors.category?.message}
              margin="normal"
            />

            <TextField
              label="Account Number"
              fullWidth
              {...register('accountNo', {
                required: 'Account Number is required',
                pattern: {
                  value: /^[0-9]+$/,
                  message: 'Enter a valid Account Number',
                },
              })}
              error={!!errors.accountNo}
              helperText={errors.accountNo?.message}
              margin="normal"
            />

            <TextField
              label="Bank Name"
              fullWidth
              {...register('bankName', { required: 'Bank Name is required' })}
              error={!!errors.bankName}
              helperText={errors.bankName?.message}
              margin="normal"
            />

            <TextField
              label="IFSC Code"
              fullWidth
              {...register('ifscCode', {
                required: 'IFSC Code is required',
                pattern: {
                  value: /^[A-Za-z]{4}[0-9]{7}$/,
                  message: 'Enter a valid IFSC Code',
                },
              })}
              error={!!errors.ifscCode}
              helperText={errors.ifscCode?.message}
              margin="normal"
            />

            <TextField
              type="date"
              label=""
              fullWidth
              {...register('addDate', { required: 'Add Date is required' })}
              error={!!errors.addDate}
              helperText={errors.addDate?.message}
              margin="normal"
            />

            <FormControl fullWidth margin="normal">
              <InputLabel>Status</InputLabel>
              <Select
                {...register('status', { required: 'Status is required' })}
                error={!!errors.status}
              >
                <MenuItem value="active">Active</MenuItem>
                <MenuItem value="inactive">Inactive</MenuItem>
              </Select>
            </FormControl>

            <Button type="submit" variant="contained" color="primary" style={{ marginTop: '20px' }}>
              Submit
            </Button>
          </form>
        </Paper>
      </Grid>
    </Grid>
    <br/>
    <br/>
    </Layout>
  );
};

export default SellerRegistration;

// import React from 'react';
// import axios from 'axios';
// import { useForm } from 'react-hook-form';
// import {
//   TextField,
//   Button,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
//   Grid,
//   Paper,
//   Typography,
// } from '@mui/material';
// import Layout from '../Layout/Layout';


// export const SellerRegistration = () => {
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm();
 
//   const states = [
//     'Andhra Pradesh',
//     'Arunachal Pradesh',
//     'Assam',
//     'Bihar',
//     'Chattisgarh',
//     'Gujarat',
//     'Himachal Pradesh',
//     'Kerala',
//     'Maharashtra',
//     'Madhya Pradesh',
//     'Orrisa',
//     'Rajasthan',
//     'Tamil Nadu',
//     'Telangana',
//     'Uttar Pradesh',
//     'West Bengal',
//     'Uttarakhand',
//     'Tripura'

//     // Add more states as needed
//   ];

//   const onSubmit = async (data) => {
//     try {
//       const response = await axios.post(
//         'http://localhost:8065/api/seller-forms',
//         data
//       );

//       if (!response.formId) {
//         console.log('Form submitted successfully:', response.data.message);
//         // You can handle success (e.g., show a success message or redirect)
//         alert('Form submitted successfully');
//         reset();
//       } else {
//         console.error('Form submission failed:', response.data.message);
//         // You can handle failure (e.g., show an error message)
//       }
//     } catch (error) {
//       console.error('Form submission failed:', error);
//       // Handle errors, you can display an error message or log the error
//     }
//   };

//   return (
//     <Layout>
//       <br/>
//       <br/>
//     <Grid container justifyContent="center" alignItems="center" height="100vh" >
//       <Grid item xs={6}>
//         <Paper elevation={3} style={{background: 'linear-gradient(to right, #FFEAC7, #ffffff,#D1FFC7)', borderRadius:'10px',padding: '20px'}}>
//           <Typography variant="h5" gutterBottom>
//             Seller Registration Form
//           </Typography>

//           <form onSubmit={handleSubmit(onSubmit)} >
//             <TextField
//               label="GST Number"
//               fullWidth
//               {...register('gstNo', {
//                 required: 'GST Number is required',
//                 pattern: {
//                   value: /^[0-9]{15}$/i,
//                   message: 'Enter a valid GST Number (15 digits)',
//                 },
//               })}
//               error={!!errors.gstNo}
//               helperText={errors.gstNo?.message}
//               margin="normal"
//             />

//             <TextField
//               label="Username"
//               fullWidth
//               {...register('username', {
//                 required: 'Username is required',
//                 minLength: { value: 6, message: 'Username must be at least 6 characters' },
//               })}
//               error={!!errors.username}
//               helperText={errors.username?.message}
//               margin="normal"
//             />

//             <TextField
//               type="password"
//               label="Password"
//               fullWidth
//               {...register('password', {
//                 required: 'Password is required',
//                 minLength: { value: 8, message: 'Password must be at least 8 characters' },
//               })}
//               error={!!errors.password}
//               helperText={errors.password?.message}
//               margin="normal"
//             />

//             <TextField
//               label="Company Name"
//               fullWidth
//               {...register('companyName', { required: 'Company Name is required' })}
//               error={!!errors.companyName}
//               helperText={errors.companyName?.message}
//               margin="normal"
//             />

//             <TextField
//               label="Owner Name"
//               fullWidth
//               {...register('ownerName', { required: 'Owner Name is required' })}
//               error={!!errors.ownerName}
//               helperText={errors.ownerName?.message}
//               margin="normal"
//             />

//             <TextField
//               label="City"
//               fullWidth
//               {...register('city', { required: 'City is required' })}
//               error={!!errors.city}
//               helperText={errors.city?.message}
//               margin="normal"
//             />

//             {/* <TextField
//               label="State"
//               fullWidth
//               {...register('state', { required: 'State is required' })}
//               error={!!errors.state}
//               helperText={errors.state?.message}
//               margin="normal"
//             /> */}
//              <FormControl fullWidth margin="normal">
//               <InputLabel>State</InputLabel>
//               <Select
//                 {...register('state', { required: 'State is required' })}
//                 error={!!errors.state}
//               >
//                 {states.map((state) => (
//                   <MenuItem key={state} value={state}>
//                     {state}
//                   </MenuItem>
//                 ))}
//               </Select>
//               {errors.state && (
//                 <Typography variant="body2" color="error">
//                   {errors.state.message}
//                 </Typography>
//               )}
//             </FormControl>
//             <TextField
//               label="Pincode"
//               fullWidth
//               {...register('pincode', {
//                 required: 'Pincode is required',
//                 pattern: {
//                   value: /^[0-9]{6}$/i,
//                   message: 'Enter a valid 6-digit Pincode',
//                 },
//               })}
//               error={!!errors.pincode}
//               helperText={errors.pincode?.message}
//               margin="normal"
//             />

//             <TextField
//               label="Category"
//               fullWidth
//               {...register('category', { required: 'Category is required' })}
//               error={!!errors.category}
//               helperText={errors.category?.message}
//               margin="normal"
//             />

//             <TextField
//               label="Account Number"
//               fullWidth
//               {...register('accountNo', {
//                 required: 'Account Number is required',
//                 pattern: {
//                   value: /^[0-9]+$/i,
//                   message: 'Enter a valid Account Number',
//                 },
//               })}
//               error={!!errors.accountNo}
//               helperText={errors.accountNo?.message}
//               margin="normal"
//             />

//             <TextField
//               label="Bank Name"
//               fullWidth
//               {...register('bankName', { required: 'Bank Name is required' })}
//               error={!!errors.bankName}
//               helperText={errors.bankName?.message}
//               margin="normal"
//             />

//             <TextField
//               label="IFSC Code"
//               fullWidth
//               {...register('ifscCode', {
//                 required: 'IFSC Code is required',
//                 pattern: {
//                   value: /^[A-Za-z]{4}[0-9]{7}$/i,
//                   message: 'Enter a valid IFSC Code',
//                 },
//               })}
//               error={!!errors.ifscCode}
//               helperText={errors.ifscCode?.message}
//               margin="normal"
//             />

//             <TextField
//               type="date"
//               label=""
//               fullWidth
//               {...register('addDate', { required: 'Add Date is required' })}
//               error={!!errors.addDate}
//               helperText={errors.addDate?.message}
//               margin="normal"
//             />

//             <FormControl fullWidth margin="normal">
//               <InputLabel>Status</InputLabel>
//               <Select
//                 {...register('status', { required: 'Status is required' })}
//                 error={!!errors.status}
//               >
//                 <MenuItem value="active">Active</MenuItem>
//                 <MenuItem value="inactive">Inactive</MenuItem>
//               </Select>
//             </FormControl>

//             <Button type="submit" variant="contained" color="primary" style={{ marginTop: '20px' }}>
//               Submit
//             </Button>
//           </form>
//         </Paper>
//       </Grid>
//     </Grid>
//     <br/>
//     <br/>
//     </Layout>
//   );
// };

// export default SellerRegistration;

// // import React from 'react';
// // import axios from 'axios';
// // import { useForm } from 'react-hook-form';
// // import {
// //   TextField,
// //   Button,
// //   FormControl,
// //   InputLabel,
// //   Select,
// //   MenuItem,
// //   Grid,
// //   Paper,
// //   Typography,
// // } from '@mui/material';
// // import Layout from '../Layout/Layout';


// // export const SellerRegistration = () => {
// //   const {
// //     register,
// //     handleSubmit,
// //     reset,
// //     formState: { errors },
// //   } = useForm();
 
// //   const states = [
// //     'Andhra Pradesh',
// //     'Arunachal Pradesh',
// //     'Assam',
// //     'Bihar',
// //     'Chattisgarh',
// //     'Gujarat',
// //     'Himachal Pradesh',
// //     'Kerala',
// //     'Maharashtra',
// //     'Madhya Pradesh',
// //     'Orrisa',
// //     'Rajasthan',
// //     'Tamil Nadu',
// //     'Telangana',
// //     'Uttar Pradesh',
// //     'West Bengal',
// //     'Uttarakhand',
// //     'Tripura'

// //     // Add more states as needed
// //   ];

// //   const onSubmit = async (data) => {
// //     try {
// //       const response = await axios.post(
// //         'http://localhost:8065/api/seller-forms',
// //         data
// //       );

// //       if (!response.formId) {
// //         console.log('Form submitted successfully:', response.data.message);
// //         // You can handle success (e.g., show a success message or redirect)
// //         alert('Form submitted successfully');
// //         reset();
// //       } else {
// //         console.error('Form submission failed:', response.data.message);
// //         // You can handle failure (e.g., show an error message)
// //       }
// //     } catch (error) {
// //       console.error('Form submission failed:', error);
// //       // Handle errors, you can display an error message or log the error
// //     }
// //   };

// //   return (
// //     <Layout>
// //       <br/>
// //       <br/>
// //     <Grid container justifyContent="center" alignItems="center" height="100vh">
// //       <Grid item xs={6}>
// //         <Paper elevation={3} style={{ padding: '20px' }}>
// //           <Typography variant="h5" gutterBottom>
// //             Seller Registration Form
// //           </Typography>

// //           <form onSubmit={handleSubmit(onSubmit)}>
// //             <TextField
// //               label="GST Number"
// //               fullWidth
// //               {...register('gstNo', {
// //                 required: 'GST Number is required',
// //                 pattern: {
// //                   value: /^[0-9]{15}$/i,
// //                   message: 'Enter a valid GST Number (15 digits)',
// //                 },
// //               })}
// //               error={!!errors.gstNo}
// //               helperText={errors.gstNo?.message}
// //               margin="normal"
// //             />

// //             <TextField
// //               label="Username"
// //               fullWidth
// //               {...register('username', {
// //                 required: 'Username is required',
// //                 minLength: { value: 6, message: 'Username must be at least 6 characters' },
// //               })}
// //               error={!!errors.username}
// //               helperText={errors.username?.message}
// //               margin="normal"
// //             />

// //             <TextField
// //               type="password"
// //               label="Password"
// //               fullWidth
// //               {...register('password', {
// //                 required: 'Password is required',
// //                 minLength: { value: 8, message: 'Password must be at least 8 characters' },
// //               })}
// //               error={!!errors.password}
// //               helperText={errors.password?.message}
// //               margin="normal"
// //             />

// //             <TextField
// //               label="Company Name"
// //               fullWidth
// //               {...register('companyName', { required: 'Company Name is required' })}
// //               error={!!errors.companyName}
// //               helperText={errors.companyName?.message}
// //               margin="normal"
// //             />

// //             <TextField
// //               label="Owner Name"
// //               fullWidth
// //               {...register('ownerName', { required: 'Owner Name is required' })}
// //               error={!!errors.ownerName}
// //               helperText={errors.ownerName?.message}
// //               margin="normal"
// //             />

// //             <TextField
// //               label="City"
// //               fullWidth
// //               {...register('city', { required: 'City is required' })}
// //               error={!!errors.city}
// //               helperText={errors.city?.message}
// //               margin="normal"
// //             />

// //             {/* <TextField
// //               label="State"
// //               fullWidth
// //               {...register('state', { required: 'State is required' })}
// //               error={!!errors.state}
// //               helperText={errors.state?.message}
// //               margin="normal"
// //             /> */}
// //              <FormControl fullWidth margin="normal">
// //               <InputLabel>State</InputLabel>
// //               <Select
// //                 {...register('state', { required: 'State is required' })}
// //                 error={!!errors.state}
// //               >
// //                 {states.map((state) => (
// //                   <MenuItem key={state} value={state}>
// //                     {state}
// //                   </MenuItem>
// //                 ))}
// //               </Select>
// //               {errors.state && (
// //                 <Typography variant="body2" color="error">
// //                   {errors.state.message}
// //                 </Typography>
// //               )}
// //             </FormControl>
// //             <TextField
// //               label="Pincode"
// //               fullWidth
// //               {...register('pincode', {
// //                 required: 'Pincode is required',
// //                 pattern: {
// //                   value: /^[0-9]{6}$/i,
// //                   message: 'Enter a valid 6-digit Pincode',
// //                 },
// //               })}
// //               error={!!errors.pincode}
// //               helperText={errors.pincode?.message}
// //               margin="normal"
// //             />

// //             <TextField
// //               label="Category"
// //               fullWidth
// //               {...register('category', { required: 'Category is required' })}
// //               error={!!errors.category}
// //               helperText={errors.category?.message}
// //               margin="normal"
// //             />

// //             <TextField
// //               label="Account Number"
// //               fullWidth
// //               {...register('accountNo', {
// //                 required: 'Account Number is required',
// //                 pattern: {
// //                   value: /^[0-9]+$/i,
// //                   message: 'Enter a valid Account Number',
// //                 },
// //               })}
// //               error={!!errors.accountNo}
// //               helperText={errors.accountNo?.message}
// //               margin="normal"
// //             />

// //             <TextField
// //               label="Bank Name"
// //               fullWidth
// //               {...register('bankName', { required: 'Bank Name is required' })}
// //               error={!!errors.bankName}
// //               helperText={errors.bankName?.message}
// //               margin="normal"
// //             />

// //             <TextField
// //               label="IFSC Code"
// //               fullWidth
// //               {...register('ifscCode', {
// //                 required: 'IFSC Code is required',
// //                 pattern: {
// //                   value: /^[A-Za-z]{4}[0-9]{7}$/i,
// //                   message: 'Enter a valid IFSC Code',
// //                 },
// //               })}
// //               error={!!errors.ifscCode}
// //               helperText={errors.ifscCode?.message}
// //               margin="normal"
// //             />

// //             <TextField
// //               type="date"
// //               label=""
// //               fullWidth
// //               {...register('addDate', { required: 'Add Date is required' })}
// //               error={!!errors.addDate}
// //               helperText={errors.addDate?.message}
// //               margin="normal"
// //             />

// //             <FormControl fullWidth margin="normal">
// //               <InputLabel>Status</InputLabel>
// //               <Select
// //                 {...register('status', { required: 'Status is required' })}
// //                 error={!!errors.status}
// //               >
// //                 <MenuItem value="active">Active</MenuItem>
// //                 <MenuItem value="inactive">Inactive</MenuItem>
// //               </Select>
// //             </FormControl>

// //             <Button type="submit" variant="contained" color="primary" style={{ marginTop: '20px' }}>
// //               Submit
// //             </Button>
// //           </form>
// //         </Paper>
// //       </Grid>
// //     </Grid>
// //     <br/>
// //     <br/>
// //     </Layout>
// //   );
// // };

// // export default SellerRegistration;

