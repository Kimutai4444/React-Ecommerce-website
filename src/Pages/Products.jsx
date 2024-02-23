import React, { useEffect } from "react";
import Header from "../Header";
import { theme } from "../App";
import { Link } from "react-router-dom";
import "./Products.css";
import Product1Image from "./Product1.jpeg";
import Product2Image from "./Product2.jpeg";
import Product3Image from "./Product3.jpeg";
import Product4Image from "./Product4.jpeg";
import { useContext } from "react";
import { CartContext } from "../Contexts";

function Products() {
  const featuredProducts = [
    {
      id: 1,
      name: "Product 1",
      price: 19.99,
      image: Product1Image,
    },
    {
      id: 2,
      name: "Product 2",
      price: 29.99,
      image: Product2Image,
    },
    {
      id: 3,
      name: "Product 3",
      price: 39.99,
      image: Product3Image,
    },
    {
      id: 4,
      name: "Product 4",
      price: 23.99,
      image: Product4Image,
    },
  ];
  const [cartData, setCartData] = useContext(CartContext);
  useEffect(() => {
    console.log(cartData);
  }, []);

  function addToCart(product) {
    let newCartData = [...cartData];
    newCartData.push(product);
    setCartData(newCartData);

    localStorage.setItem("cart", JSON.stringify(newCartData));
  }

  return (
    <>
      <Header />
      <div className="home-container">
        <h2 className="welcome-text">Welcome to Dunky Online Shop</h2>
        <h3>Featured Products</h3>
        <div className="featured-products">
          {featuredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h4>{product.name}</h4>
              <p>${product.price}</p>
              <button
                onClick={() => {
                  addToCart(product);
                }}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Products;
