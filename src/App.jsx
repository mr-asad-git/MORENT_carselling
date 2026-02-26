import React, { useState } from 'react'

import Header from './components/Header'
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

import './App.css'

import LayoutPage from './pages/LayoutPage';
import Wishlist from './pages/Wishlist';
import Settings from './pages/Settings';

import { Routes, Route } from 'react-router-dom';

const App = () => {
  const [wishlist, setWishlist] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);


  return (
    <>
      <Header wishlist={wishlist} setWishlist={setWishlist} searchTerm={searchTerm} setSearchTerm={setSearchTerm} setIsSidebarOpen={setIsSidebarOpen} />

      <Routes>
        <Route path="/" element={<LayoutPage wishlist={wishlist} setWishlist={setWishlist} searchTerm={searchTerm} />} />
        <Route path="/wishlist" element={<Wishlist wishlist={wishlist} setWishlist={setWishlist} searchTerm={searchTerm} />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App