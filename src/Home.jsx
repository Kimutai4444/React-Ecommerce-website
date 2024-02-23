import React, { useContext,useEffect} from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { FaShoppingCart } from "react-icons/fa";
import Products from "./Products";
import Categories from "./Categories";
// import { useContext } from "react";
import { CartContext } from "./Contexts";
import Header from "./Header";
import Product1Image from "./Product1.jpeg";
import Product2Image from "./Product2.jpeg";
import Product3Image from "./Product3.jpeg";
import Product4Image from "./Product4.jpeg";
import { useRef } from "react";

let images = [Product1Image, Product2Image, Product3Image, Product4Image];

function Home() {
  const carouselRef = useRef();
  let count = 0;
 const [cartData, setCartData] = useContext(CartContext);
 useEffect(() => {
   console.log(cartData);
 }, []);
  
  const next = () => {
    let clientRect = (carouselRef.current.getBoundingClientRect());
    count++
    console.log(clientRect.width);
    carouselRef.current.scrollLeft = +(count*clientRect.width);
  }

  const previous = () => {
    let clientRect = (carouselRef.current.getBoundingClientRect());
    count--
    console.log(clientRect.width);
    carouselRef.current.scrollLeft = -(count*clientRect.width);
  }

  return (
    <div>
      <Header />
      <div ref={ carouselRef} className="carousel">
        <button className="prev" onClick={previous}>Previous</button>
        {
          images.map((images, index)=>{
           return(
        <img src={images}/>
          )
        })
        }
         
        <button className="next" onClick={next}>Next</button>
      </div>
    </div>
  );
}

export default Home;
