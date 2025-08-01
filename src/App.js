import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Import your Navbar
import Home from './pages/Home';
import RentCar from './pages/RentCar';
import Brand from './pages/Brand'; // You'll need to create this
import Login from './pages/Login'; // You'll need to create this

import './styles/App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/rent' element={<RentCar />} />
        <Route path='/brand' element={<Brand />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
