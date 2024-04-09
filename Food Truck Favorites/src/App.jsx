// App.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import FoodTruckDetail from "./components/FoodTruckDetail";
import Card from "./components/Card";
import data from "./data/data";
import { Auth } from "./pages/auth";


function App() {
  const [selectedFoodTruck, setSelectedFoodTruck] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [loggedInUser, setLoggedInUser] = useState(null);
  const navigate = useNavigate();

  const handleFoodTruckClick = (foodTruck) => {
    setSelectedFoodTruck(foodTruck);
  };

  const handleSignup = () => {
    navigate("/auth");
  };

  const handleLogout = () => {
    setLoggedInUser(null);
    navigate("/auth");
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleRegionFilter = (event) => {
    setSelectedRegion(event.target.value);
  };

  const filteredData = data.filter((truck) => {
    const nameMatch = truck.name.toLowerCase().includes(searchTerm.toLowerCase());
    const regionMatch = selectedRegion ? truck.region === selectedRegion : true;
    return nameMatch && regionMatch;
  });

  return (
    <>
      <img src="../src/img/awning.png" alt="header" className="header" />
      <div className="navbar">
        {loggedInUser ? (
          <div>
            <p style={{ fontSize: "20px" }} className="username">
              {loggedInUser.username}
            </p>
            <button onClick={handleLogout} className="logout-button">
              Logout
            </button>
          </div>
        ) : (
          <div className="container">
          <p style={{ fontSize: "20px" }}  className="signup">yun@sfbu.edu</p>
          <button style={{ fontSize: "20px" }} onClick={handleSignup}>
            Logout
          </button>
          </div>
        )}
      </div>
      <h1>Food Truck Favorites</h1>
      <div className="search-filter">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <select value={selectedRegion} onChange={handleRegionFilter}>
          <option value="">Filter by region</option>
          <option value="Chinese">Chinese</option>
          <option value="American">American</option>
          <option value="Mexican">Mexican</option>
          <option value="Italian">Italian</option>
          <option value="Indian">Indian</option>
          <option value="Thai">Thai</option>
          <option value="Japanese">Japanese</option>
          <option value="Korean">Korean</option>
          <option value="Mediterranean">Mediterranean</option>
          <option value="Greek">Greek</option>
        </select>
      </div>
      <div className="cardContainer">
        {filteredData.map((truck, index) => (
          <Card
            key={index}
            id={truck.id}
            img={truck.img}
            name={truck.name}
            region={truck.region}
            onClick={() => handleFoodTruckClick(truck)}
          />
        ))}
      </div>
      {selectedFoodTruck && <FoodTruckDetail foodTruck={selectedFoodTruck} />}
    </>
  );
}

export default App;