import React, { useState } from 'react';
import "./App.css";
import FoodTruckDetail from './components/FoodTruckDetail'; // Import the FoodTruckDetail component
import Card from "./components/Card";
import data from "./data/data";

function App() {
  const [selectedFoodTruck, setSelectedFoodTruck] = useState(null);

  const handleFoodTruckClick = (foodTruck) => {
    setSelectedFoodTruck(foodTruck);
  };

  return (
    <>
      <img src="../src/img/awning.png" alt="header" className="header" />
      <h1>Food Truck Favorites</h1>
      <div className="cardContainer">
        {data.map((truck, index) => (
          <Card
            key={index}
            id={truck.id} // Adding id prop to Card component
            img={truck.img}
            name={truck.name}
            region={truck.region}
            onClick={() => handleFoodTruckClick(truck)} // Pass the food truck object to the click handler
          />
        ))}
      </div>
      {/* Render the FoodTruckDetail component with the selected food truck */}
      {selectedFoodTruck && <FoodTruckDetail foodTruck={selectedFoodTruck} />}
    </>
  );
}

export default App;
