// main.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import FoodTruckDetail from './components/FoodTruckDetail';
import './index.css'; // Import index.css here
import { Auth } from "./pages/auth";
import CartDetailPage from './components/CartDetailPage '; // Adjust the path as necessary
import Cancel from './pages/Cancel';
import Success from './pages/Success';

const root = createRoot(document.getElementById('root'));

root.render(
  <Router>
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/food-truck/:truckId" element={<FoodTruckDetail />} />
      <Route path="/cart" element={<CartDetailPage />} />
      <Route path="success" element={<Success />} />
      <Route path="cancel" element={<Cancel />} />
    </Routes>
  </Router>
);