import React, { useContext } from "react";
import { theme } from "../App";
import Header from "../Components/Header";
import { Link } from "react-router-dom";
import "./Categories.css";
import categories1Image from "./categories1.jpeg";
import categories2Image from "./categories2.jpeg";
import categories3Image from "./categories3.jpeg";
import categories4Image from "./categories4.jpeg";
import categories5Image from "./categories5.jpeg";
import categories6Image from "./categories6.jpeg";

function Categories() {
  const [appTheme, setAppTheme] = useContext(theme);

  const Categories = [
    {
      id: 1,
      name: "categories 1",
      price: 19.99,
      image: categories1Image,
    },
    {
      id: 2,
      name: "categories 2",
      price: 29.99,
      image: categories2Image,
    },
    {
      id: 3,
      name: "categories 3",
      price: 39.99,
      image: categories3Image,
    },
    {
      id: 4,
      name: "categories 4",
      price: 23.99,
      image: categories4Image,
    },
    {
      id: 5,
      name: "categories 5",
      price: 23.99,
      image: categories5Image,
    },
    {
      id: 6,
      name: "categories 6",
      price: 23.99,
      image: categories6Image,
    },
  ];
  return (
    <div>
      <Header />
      {/* {appTheme}
      <Link to="/Categories">Categories</Link>
      <button onClick={() => setAppTheme("Dark from Profile")}>click</button> */}
      <h3>Categoriess</h3>
      <div className="featured-categories">
        {Categories.map((categories) => (
          <div key={categories.id} className="categories-card">
            <img src={categories.image} alt={categories.name} />
            <h4>{categories.name}</h4>
            <p>${categories.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
