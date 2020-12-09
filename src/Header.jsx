import React from 'react';
import logo from './img/logo2.png';
const Header=()=>{
    return<>
      <div className="header">
         <img  src={logo} alt="logo"  />
         <h1>__Note Keep__</h1>
      </div>
    </>;
};

export default Header;