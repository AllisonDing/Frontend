// components/FoodTruck1.jsx

import React from 'react';
import data from '../data/data'; // Import food truck data

function FoodTruck1() {
  // Find the first food truck in the data array
  const foodTruck = data[0];

  return (
    <div>
      <h1>{foodTruck.name}</h1>
      <img src={foodTruck.img} alt={foodTruck.name} />
      <h2>Region</h2>
      <p>{foodTruck.region}</p>

      {/* Menu Section */}
      <h2>Menu</h2>
      <ul>
        {foodTruck.menu.map(item => (
          <li key={item.name}>
            {item.name} - ${item.price.toFixed(2)} {/* Display price with two decimal places */}
          </li>
        ))}
      </ul>

      {/* Additional sections can be added here, such as location, hours of operation, etc. */}
    </div>
  );
}

export default FoodTruck1;
