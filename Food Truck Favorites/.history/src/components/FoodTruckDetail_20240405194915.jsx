// FoodTruckDetail.jsx
import React from 'react';
import { useParams } from "react-router-dom";
import truck_data from "../data/data";

function FoodTruckDetail() {
  let { truckId } = useParams();

  function findById(data, id) {
    return data.find((item) => item.id == id);
  }

  // console.log(">>>>" + truckId);
  // console.log(truck_data);

  const foodTruck = findById(truck_data, truckId);

  if (!foodTruck) {
    return <div>Loading...</div>;
  }

  return (
    <div class = 'page'>
      <h1>{foodTruck.name}</h1>
      <img src={foodTruck.img} alt={foodTruck.name} />
      <h2>Region: {foodTruck.region}</h2>
      <p>{foodTruck.description}</p>
      <h2>Menu</h2>
      {/* <ul> */}
        {foodTruck.menu.map((item, index) => (
          <p key={index}>
            <img src={item.img} alt={item.name} />
            </br>
            {item.name} - ${item.price}
          </p>
        ))}
      {/* </ul> */}
      <h2>Location</h2>
      <p>Address: {foodTruck.address}</p>
      <p>Latitude: {foodTruck.latitude}</p>
      <p>Longitude: {foodTruck.longitude}</p>
      {/* Add map display here using latitude and longitude */}


      <h2>Reviews</h2>
      
      <div style={{ display: "flex", alignItems: "center" }}>
        <p style={{ marginRight: "10px", flex: "0 0 auto" }}>Review 1: ⭐️⭐️⭐️⭐️</p>
      </div>
      <div style={{ flex: "1", textAlign: "left" }}>
          <p>{foodTruck.review1}</p>
      </div>


      <div style={{ display: "flex", alignItems: "center" }}>
        <p style={{ marginRight: "10px", flex: "0 0 auto" }}>Review 2: ⭐️⭐️⭐️⭐️⭐️</p>
      </div>
      <div style={{ flex: "1", textAlign: "left" }}>
          <p>{foodTruck.review2}</p>
      </div>


      <div style={{ display: "flex", alignItems: "center" }}>
        <p style={{ marginRight: "10px", flex: "0 0 auto" }}>Review 3: ⭐️⭐️⭐️⭐️⭐️</p>
      </div>
      <div style={{ flex: "1", textAlign: "left" }}>
          <p>{foodTruck.review3}</p>
      </div>


      <div style={{ display: "flex", alignItems: "center" }}>
        <p style={{ marginRight: "10px", flex: "0 0 auto" }}>Review 4: ⭐️⭐️⭐️⭐️</p>
      </div>
      <div style={{ flex: "1", textAlign: "left" }}>
          <p>{foodTruck.review4}</p>
      </div>


      <div style={{ display: "flex", alignItems: "center" }}>
        <p style={{ marginRight: "10px", flex: "0 0 auto" }}>Review 5: ⭐️⭐️⭐️⭐️⭐️</p>
      </div>
      <div style={{ flex: "1", textAlign: "left" }}>
          <p>{foodTruck.review5}</p>
      </div>

      <a href="/">Back</a>
    </div>
  );
}

export default FoodTruckDetail;
