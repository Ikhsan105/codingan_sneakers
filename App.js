import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import NewArrival from './components/NewArrival';
import ShoeDetails from './components/ShoeDetails';
import BestCollection from './components/BestCollection';
import About from './components/About';
import Cart from './components/Cart'; // Tambahkan impor komponen Cart
import Favourite from './components/Favourite';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <BrowserRouter>
      <Routes>
        {isLoggedIn ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/new-arrival" element={<NewArrival />} />
            <Route path="/details/:id" element={<ShoeDetails />} />
            <Route path="/best-collection" element={<BestCollection />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} /> {/* Rute untuk halaman Cart */}
            <Route path="/favourite" element={<Favourite />} />
          </>
        ) : (
          <Route path="*" element={<Login onLogin={handleLogin} />} />
        )}
        {!isLoggedIn && <Route path="/" element={<Navigate to="/login" />} />}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
