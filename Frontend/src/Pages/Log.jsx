import React from 'react';
import './LoginSignup.css';

const Login = () => {
  return (
    <div className='container'>
      <div className='header'>
        <div className='text'>Login</div>
        <div className='underline'></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src="" alt=""></img>
          <input type="email" placeholder="Email Id"></input>
        </div>
        <div className="input">
          <img src="" alt=""></img>
          <input type="password" placeholder="Password"></input>
        </div>
      </div>
      <div className="forgot-password">Forgot Password?<span>Click Here</span></div>
      <div className="submit-container">
        <div className="submit">Login</div>
      </div>
    </div>
  );
}

export default Login;
