import React, { useState } from 'react';
import { useParams,useNavigate } from "react-router-dom";
import truck_data from "../data/data";

function FoodTruckDetail() {
  let { truckId } = useParams();
  let navigate = useNavigate();
  const [menuCounts, setMenuCounts] = useState(() => {
    const truck = truck_data.find(truck => truck.id.toString() === truckId);
    return truck ? truck.menu.map(() => 0) : [];
  });

  const [cartItems, setCartItems] = useState([]);


  // const handleIncrease = (index) => {
  //   setMenuCounts(prevMenuCounts => prevMenuCounts.map((count, i) => i === index ? count + 1 : count));
  //   setCartCount(prevCartCount => prevCartCount + 1);
  // };

  // const handleDecrease = (index) => {
  //   setMenuCounts(prevMenuCounts => prevMenuCounts.map((count, i) => {
  //     if (i === index && count > 0) {
  //       setCartCount(prevCartCount => prevCartCount - 1);
  //       return count - 1;
  //     }
  //     return count;
  //   }));
  // };

  const foodTruck = truck_data.find(truck => truck.id.toString() === truckId);
  if (!foodTruck) return <div>Loading...</div>;
  const handleIncrease = (index) => {
    setMenuCounts(prevMenuCounts => 
      prevMenuCounts.map((count, i) => i === index ? count + 1 : count)
  );
    const newItem = foodTruck.menu[index];
    const itemIndex = cartItems.findIndex(item => item.name === newItem.name);
    if (itemIndex > -1) {
      // 如果菜单项已在购物车中，增加数量
      const newCartItems = [...cartItems];
      newCartItems[itemIndex].count += 1;
      setCartItems(newCartItems);
    } else {
      // 如果菜单项不在购物车中，添加新项
      setCartItems([...cartItems, { ...newItem, count: 1 }]);
    }
  };

  const handleDecrease = (index) => {
    setMenuCounts(prevMenuCounts => 
      prevMenuCounts.map((count, i) => (i === index && count > 0) ? count - 1 : count)
  );
    const newItem = foodTruck.menu[index];
    const itemIndex = cartItems.findIndex(item => item.name === newItem.name);
    if (itemIndex > -1) {
      const newCartItems = [...cartItems];
      newCartItems[itemIndex].count -= 1;
      if (newCartItems[itemIndex].count < 1) {
        // 如果数量减少到0，从购物车中移除
        newCartItems.splice(itemIndex, 1);
      }
      setCartItems(newCartItems);
    }
  };
  const goToCart = () => navigate('/cart', { state: { cartItems } });
  return (
    <div className='page'>
      <div style={{ position: "fixed", top: 0, right: 0, padding: "20px" }}>
      <button onClick={goToCart}>Cart: {cartItems.reduce((acc, item) => acc + item.count, 0)}</button>   
      </div>
      <h1>{foodTruck.name}</h1>
      <img src={foodTruck.img} alt={foodTruck.name} />
      <h2>Region: {foodTruck.region}</h2>
      <p>{foodTruck.description}</p>
      <h2>Menu</h2>
      {foodTruck.menu.map((item, index) => (
        <div key={index} className="menu-item">
          <img src={item.img} alt={item.name} className='food_img' />
          <br />
          {item.name} - ${item.price}
          <br />
          <button onClick={() => handleDecrease(index)}>-</button>
          {menuCounts[index]}
          <button onClick={() => handleIncrease(index)}>+</button>
        </div>
      ))}
      <h2>Location</h2>
      <p>Address: {foodTruck.address}</p>
      <p>Latitude: {foodTruck.latitude}, Longitude: {foodTruck.longitude}</p>
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
