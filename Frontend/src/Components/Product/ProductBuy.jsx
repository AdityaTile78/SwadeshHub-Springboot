import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, TextField, FormControlLabel, Radio, RadioGroup, FormControl, FormLabel, Grid } from '@mui/material';

const CheckoutForm = () => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [totalAmount, setTotalAmount] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [pincode, setPincode] = useState('');
  const [userId, setUserId] = useState('');
  const [productId, setProductId] = useState('');
  const [mobile, setMobile] = useState('');
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = JSON.parse(localStorage.getItem("auth"));
        const productResponse = await axios.get(`http://localhost:8065/api/products/${params.productId}`);
        const userResponse = await axios.get(`http://localhost:8065/api/user/${user.Id}`);
        if (productResponse.data && userResponse.data) {
          const { firstName, lastName } = userResponse.data;
          const { price } = productResponse.data;
          setFirstName(firstName);
          setLastName(lastName);
          setTotalAmount(price);
          setEmail(userResponse.data.email);
          setAddress(userResponse.data.address);
          setCity(userResponse.data.city);
          setPincode(userResponse.data.pincode);
          setMobile(userResponse.data.mobile);
          setUserId(user.Id);
          setProductId(params.productId);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [params.productId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (paymentMethod === 'COD') {
      try {
        const paymentMode = 'COD';
        const response = await axios.post('http://localhost:8065/api/orders', {
          totalAmount,
          userId,
          firstName,
          lastName,
          productId,
          city,
          address,
          pincode,
          email,
          mobile,
          paymentMode
        });
      
        if (response.data.ordId) {
          console.log('Cash on Delivery form submitted:');
          navigate("/"); // Navigate to home page
        } else {
          console.log("error in submitting order");
        }
      } catch (error) {
        console.error('Error submitting COD form:', error);
      }
    } else if (paymentMethod === 'Online') {
      try {
        const response = await axios.post('http://localhost:8065/api/products/payments', {
          totalAmount,
          userId,
          email,
          mobile
        });

        if (response.data.payment_link_url) {
          const orderData = { firstName, lastName, email, totalAmount, address, city, pincode, userId, productId };
          localStorage.setItem("orderData", JSON.stringify(orderData));
          window.location.href = response.data.payment_link_url;
        }
        
        // setPaymentResponse(response.data); // Not sure if you need this state
        // Optionally handle success response
      } catch (error) {
        console.error('Error submitting Pay Online form:', error);
        // Optionally handle error
      }
    }
  };

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} md={6}>
        <div>
          <h2 style={{ textAlign: 'center' }}>Payment Method</h2>
          <FormControl component="fieldset" style={{ textAlign: 'center' }}>
            <RadioGroup
              aria-label="paymentMethod"
              name="paymentMethod"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <FormControlLabel value="COD" control={<Radio />} label="Cash on Delivery" />
              <FormControlLabel value="Online" control={<Radio />} label="Pay Online" />
            </RadioGroup>
          </FormControl>

          {paymentMethod && (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <br></br>
              <TextField label="First Name" value={firstName} InputProps={{ readOnly: true }} style={{ marginBottom: '1rem', width: '100%' }} />
              <br></br>
              <TextField label="Last Name" value={lastName} InputProps={{ readOnly: true }} style={{ marginBottom: '1rem', width: '100%' }} />
              <br></br>
              <TextField label="Email" value={email} InputProps={{ readOnly: true }} style={{ marginBottom: '1rem', width: '100%' }} />
              <br></br>
              <TextField label="Total Amount" value={totalAmount} InputProps={{ readOnly: true }} style={{ marginBottom: '1rem', width: '100%' }} />
              <br></br>
              <TextField label="Address" value={address} onChange={(e) => setAddress(e.target.value)} style={{ marginBottom: '1rem', width: '100%' }} />
              <br></br>
              <TextField label="City" value={city} onChange={(e) => setCity(e.target.value)} style={{ marginBottom: '1rem', width: '100%' }} />
              <br></br>
              <TextField label="Pincode" value={pincode} onChange={(e) => setPincode(e.target.value)} style={{ marginBottom: '1rem', width: '100%' }} />
              <br></br>
              <TextField label="Mobile" value={mobile} InputProps={{ readOnly: true }} style={{ marginBottom: '1rem', width: '100%' }} />
              <br></br>
              <Button type="submit" variant="contained" style={{ marginTop: '1rem' }}>{paymentMethod === 'COD' ? 'Cash on Delivery' : 'Pay Online'}</Button>
            </form>
          )}
        </div>
      </Grid>
    </Grid>
  );
};

export default CheckoutForm;
