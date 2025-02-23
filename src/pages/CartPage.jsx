import React, { useState } from 'react';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Pizza', price: 10 },
    { id: 2, name: 'Burger', price: 7 },
  ]);

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <div>
      <h1>Your Cart</h1>
      <div className="cart-items">
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cartItems.map(item => (
            <div key={item.id}>
              <h3>{item.name}</h3>
              <p>Price: ${item.price}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CartPage;
