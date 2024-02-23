import { useContext, useState, createContext, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HOC1 from "./HOC1.jsx";
import Mycomponent from "./Mycomponent.jsx";
import AudioPlayer from "./Audio.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header.jsx";
import Products from "./Products.jsx";
import Categories from "./Categories.jsx";
import Profile from "./Profile.jsx";
import Login from "./Login.jsx";
import Home from "./Home.jsx";
import Registration from "./Registration.jsx";
import FetchData from "./FetchData.jsx";
import { CartContext } from "./Contexts";
import Cart from "./Cart.jsx";

// let HOC1trial = HOC1(Mycomponent);

export const theme = createContext("light");

function App() {
  const [appTheme, setAppTheme] = useState("light");
  const [isShown, setIsShown] = useState(false);
  const [cartData, setCartData] = useState([]);
  const toggle = () => {
    setIsShown(!isShown);
  };

  function getCartData() {
    try {
      let stored = localStorage.getItem("cart");
      if (stored) {
        let data = JSON.parse(stored)
        setCartData(data)
      }
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getCartData()
  },[])
  return (
    <>
      {/* <FetchData/> */}
      <CartContext.Provider value={[cartData, setCartData]}>
        <theme.Provider value={[appTheme, setAppTheme]}>
          <Router>
            <Routes>
              <Route path="/" Component={Home}></Route>
              <Route path="/Register" Component={Registration}></Route>
              <Route path="/Login" Component={Login}></Route>
              <Route path="/Products" Component={Products} />
              <Route path="/Categories" Component={Categories} />
              <Route path="/Profile" Component={Profile} />
              <Route path="/Cart" Component={Cart} />
            </Routes>
          </Router>
        </theme.Provider>
      </CartContext.Provider>

      {/* <HOC1trial/>
      <AudioPlayer /> */}
    </>
  );
}

export default App;
