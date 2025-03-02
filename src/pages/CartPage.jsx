import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const CartPage = () => {
  const [cart, setCart] = useState([
    { id: 1, name: "Pizza", price: 200 },
  ]);
  const navigate = useNavigate();

  const placeOrder = () => {
    alert("Order placed successfully!");
    setCart([]);
    navigate("/home");
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? <p>Cart is empty</p> : cart.map((item, index) => (
        <div key={index} className="cart-item">
          <h3>{item.name}</h3>
          <p>₹{item.price}</p>
        </div>
      ))}
      <button onClick={placeOrder} className="order-btn">Place Order</button>
    </div>
  );
};

export default CartPage;
