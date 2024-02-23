import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useContext, useEffect } from "react";
import { CartContext } from "../Contexts";
import "./Header.css";

const Header = () => {
  const [cartData, setCartData] = useContext(CartContext);
  useEffect(() => {
    console.log(cartData);
  }, []);

  return (
    <div className="navbar">
      <div className="nav-links">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/Login" className="nav-link">
          Login
        </Link>
        <Link to="/Products" className="nav-link">
          Products
        </Link>
        <Link to="/Categories" className="nav-link">
          Categories
        </Link>
        <Link to="/Profile" className="nav-link">
          Profile
        </Link>
        <Link to="/Cart" className="nav-link cart-link">
          <label>{cartData.length}</label>
          <FaShoppingCart className="cart-icon" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
