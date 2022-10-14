import React from "react";
import "./myStyles.css";
import logo from './logo.png';
const Logo = () => {
  return (
    <div>
    <div className="logo">
        <strong>
         
            <img src={logo} alt="logo"/>
        
        </strong>
      </div>
    </div>
  );
};

export default Logo;