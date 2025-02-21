import React, { useState, useEffect } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import CartButton from './CartButton';

function NavBar() {

  const NavLink = ({name, path}) => {
    return (
      <Link to={path} className="navlink">
        {name}
      </Link>
    )
  };

  return (
    <div className='navbar-container'>
      <div className="cartbutton-nav">
        <CartButton />
      </div>
      <div className='navbar'>
        <NavLink name={"Magasin"} path={"/"} />
        <NavLink name={"Commandes"} path={"/orders"}  />
        <NavLink name={"Wishlist"} path={"/"}  />
      </div>
    </div>
  );
}

export default NavBar;
