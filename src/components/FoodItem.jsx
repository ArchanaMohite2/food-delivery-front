import React from 'react';
import PizzaImage from '../assets/pizza.jpg';  
import sushiImage from '../assets/sushi.jpg';  
import BurgerImage from '../assets/Burger.jpg';  

const FoodItem = ({ food }) => {
  const handleAddToCart = () => {
    alert(`${food.name} added to cart!`);
  };
  const getFoodImage = (foodName) => {
    switch (foodName) {
      case 'Pizza':
        return PizzaImage;
      case 'Sushi':
        return sushiImage;
      case 'Burger':
        return BurgerImage;
      default:
        return ''; 
    }
  };

  return (
    <div className="food-item">
      {/* Dynamically load the correct image based on food name */}
      <img 
        src={getFoodImage(food.name)} 
        alt={food.name} 
        width="300" 
      />
      <h3>{food.name}</h3>
      <p>{food.description}</p>
      <p>Price: ${food.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default FoodItem;
