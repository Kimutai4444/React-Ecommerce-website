import React, { useContext, useEffect } from "react";
import { CartContext } from "./Contexts";
import "./Cart.css";
import { FaShoppingCart } from "react-icons/fa";
import Header from "./Header";

function Cart() {
  const [cartData, setCartData] = useContext(CartContext);

  useEffect(() => {
    console.log(cartData);
  }, []);

  const functionDelete = (index) => {
    const updatedCart = [...cartData];
    updatedCart.splice(index, 1);
    setCartData(updatedCart);
  };

  function deleteAll() {
    setCartData([]);
  }

  const placeOrder = () => {
    let formData = new FormData();
    formData.append("plcace-order", "1");
    formData.append("cartData", JSON.stringify(cartData));
    fetch("https://vividinnovations.co.ke/api/", {
      method: "POST",
      body: formData,
    })
      .then((req) => req.json())
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <Header />
      <div className="cart-container">
        {cartData.map((item, index) => (
          <div className="cart-item" key={index}>
            <p className="item-name">{item.name}</p>
            <p className="item-price">${item.price}</p>
            <button
              className="delete-btn"
              onClick={() => functionDelete(index)}
            >
              Remove this order
            </button>
          </div>
        ))}

        <div>
          {cartData.length > 0 && (
            <button className="delete-all-btn" onClick={() => deleteAll()}>
              Clear All orders
            </button>
          )}
        </div>
        <br />

        {cartData.length > 0 && (
          <button
            className="place-order-btn"
            onClick={() => {
              placeOrder();
            }}
          >
            Place Order
          </button>
        )}
        {cartData.length < 1 && (
          <div className="empty-cart">
            <FaShoppingCart className="cart-icon" />
            <p className="empty-cart-msg">Your cart is empty</p>
          </div>
        )}
      </div>
    </>
  );
}
export default Cart;
