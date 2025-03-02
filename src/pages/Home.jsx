import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const products = [
  { id: 1, name: "Pizza", price: 200 },
  { id: 2, name: "Burger", price: 100 },
  { id: 3, name: "Pasta", price: 150 },
];

const Home = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="home-container">
      <h2>Food Menu</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <button onClick={() => navigate("/cart")} className="cart-btn">Go to Cart ({cart.length})</button>
    </div>
  );
};

export default Home;
