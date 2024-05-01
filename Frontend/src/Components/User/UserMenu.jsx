import React from 'react';
import { NavLink } from 'react-router-dom';

const UserMenu = () => {
  const user = JSON.parse(localStorage.getItem("auth")); // Assuming auth is a JSON string

  console.log(user.Id);
  return (
    <div>
      <h1>UserMenu</h1>
      <ul className="list-group mt-3" style={{background: 'linear-gradient(to right, #FFEAC7, #ffffff,#D1FFC7)'}}>
        <NavLink to={`/dashboard/User/Profile/${user.Id}`} className="list-group-item" aria-current="true" style={{background: 'linear-gradient(to right, #FFEAC7, #ffffff,#D1FFC7)'}}>
          UserProfile
        </NavLink>
        <NavLink to={`/dashboard/User/Cart/${user.username}`} className="list-group-item" aria-current="true" style={{background: 'linear-gradient(to right, #FFEAC7, #ffffff,#D1FFC7)'}}>
          Cart
        </NavLink>
        <NavLink to={`/dashboard/User/orders/${user.Id}`}  className="list-group-item" aria-current="true" style={{background: 'linear-gradient(to right, #FFEAC7, #ffffff,#D1FFC7)'}}>
          Orders
        </NavLink>
        <NavLink to={`/dashboard/User/DeliveredOrder/${user.Id}`}  className="list-group-item" aria-current="true" style={{background: 'linear-gradient(to right, #FFEAC7, #ffffff,#D1FFC7)'}} >
          Delivered Orders
        </NavLink>
       
      </ul>
    </div>
  );
};

export default UserMenu;