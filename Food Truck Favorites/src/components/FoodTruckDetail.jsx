// FoodTruckDetail.jsx
import React from 'react';
import { useParams } from "react-router-dom";
import truck_data from "../data/data";

function FoodTruckDetail() {
  let { truckId } = useParams();

  function findById(data, id) {
    return data.find((item) => item.id == id);
  }

  console.log(">>>>" + truckId);
  console.log(truck_data);

  const foodTruck = findById(truck_data, truckId);

  if (!foodTruck) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{foodTruck.name}</h1>
      <img src={foodTruck.img} alt={foodTruck.name} />
      <p>Region: {foodTruck.region}</p>
      <h2>Menu</h2>
      {/* <ul> */}
        {foodTruck.menu.map((item, index) => (
          <p key={index}>
            {item.name} - ${item.price}
          </p>
        ))}
      {/* </ul> */}
      <h2>Location</h2>
      <p>Latitude: {foodTruck.latitude}</p>
      <p>Longitude: {foodTruck.longitude}</p>
      {/* Add map display here using latitude and longitude */}

      <a href="/">Back</a>
    </div>
  );
}

export default FoodTruckDetail;
