import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import FoodTruckDetail from './components/FoodTruckDetail';
import './index.css'; // Import index.css here

const root = createRoot(document.getElementById('root'));

root.render(
  <Router>
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route path="/food-truck/:truckId" element={<FoodTruckDetail />} />
    </Routes>
  </Router>
);
