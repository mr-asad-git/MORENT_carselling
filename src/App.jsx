import React, { useState } from 'react'
import Header from './components/Header'
import './App.css'
import LayoutPage from './pages/LayoutPage'
import Wishlist from './pages/Wishlist';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  const [wishlist, setWishlist] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <Header wishlist={wishlist} setWishlist={setWishlist} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Routes>
        <Route path="/" element={<LayoutPage wishlist={wishlist} setWishlist={setWishlist} searchTerm={searchTerm} />} />
        <Route path="/wishlist" element={<Wishlist wishlist={wishlist} setWishlist={setWishlist} />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App