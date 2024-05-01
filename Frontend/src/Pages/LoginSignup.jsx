


import React, { useState } from 'react';
import Login from './Login';
import SignUp from './SignUp.jsx';

import './LoginSignup.css';

const LoginSignup = () => {
  const [action, setAction] = useState("Sign Up");

  return (
    <div>
      {action === "Login" ? <Login /> : <SignUp />}
      <div className="toggle-action">
        <div className={action === "Login" ? "active" : ""} onClick={() => { setAction("Login") }}>Login</div>
        <div className={action === "Sign Up" ? "active" : ""} onClick={() => { setAction("Sign Up") }}>Sign Up</div>
      </div>
    </div>
  );
}

export default LoginSignup;




// import React from "react";
// import './LoginSignup.css';
// import { useState } from "react";




// const LoginSignup = () =>{

//     const [action,setAction] = useState("Sign Up");
//     return(
//         <div className='container'>
//             <div className='header'>
//                 <div className='text'>{action}</div>
//                 <div className='underline'></div>
//             </div>
//                 <div className="inputs">
//                 {action === "Login"?<div></div>:<div className="input">
//                     <img src="" alt=""></img>
//                     <input type="text" placeholder="First Name"></input>
//                 </div>}

               
//                 {action === "Login"?<div></div>:<div className="input">
//                     <img src="" alt=""></img>
//                     <input type="text" placeholder="Last Name"></input>
//                 </div>}
                
//                 {action === "Login"?<div></div>:<div className="input">
//                     <img src="" alt=""></img>
//                     <input type="number" placeholder="Mobile No"></input>
//                 </div>}

//                 <div className="input">
//                     <img src="" alt=""></img>
//                     <input type="email" placeholder="Email Id"></input>
//                 </div>
//                 <div className="input">
//                     <img src="" alt=""></img>
//                     <input type="password" placeholder="Password"></input>
//                 </div>
//             </div>
//             {action === "Sign Up"?<div></div>:<div className="forgot-password">Forgot Password?<span>Click Here</span></div>}
            
            
//             <div className="submit-container">
//                 <div className={action === "Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
//                 <div className={action === "Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
//             </div>

//         </div>
//     )
// }

// export default LoginSignup