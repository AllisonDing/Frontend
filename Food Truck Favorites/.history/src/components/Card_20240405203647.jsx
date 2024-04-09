import React from "react";
import { useNavigate } from 'react-router-dom';

const Card = (truck) => {
  let navigate = useNavigate();

  function goToTruck(truckId) {
    navigate(`/food-truck/${truckId}`);
  }

  return (
    <div className="card">
      <img src={truck.img} className="img" />
      <h2 style={{ color: "black" }}>{truck.name}</h2>
      <h4 style={{ color: "black" }}>{truck.region}</h4>
      <button className="button" onClick={() => goToTruck(truck.id)} class = 'Button'>
        View Menu
      </button>
    </div>
  );
};

export default Card;