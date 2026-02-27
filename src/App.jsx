import React, { useState } from 'react'

import Header from './components/Header'
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

import './App.css'

import LayoutPage from './pages/LayoutPage';
import Wishlist from './pages/Wishlist';
import Settings from './pages/Settings';

import { Routes, Route } from 'react-router-dom';

const DEFAULT_FILTERS = {
  types: [],
  capacities: [],
  maxPrice: 100,
}

const App = () => {
  const [wishlist, setWishlist] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [filters, setFilters] = useState(DEFAULT_FILTERS);

  return (
    <>
      <Header
        wishlist={wishlist}
        setWishlist={setWishlist}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setIsSidebarOpen={setIsSidebarOpen}
        showSearch={showSearch}
        setShowSearch={setShowSearch}
      />

      {/* Sidebar is fixed-position, outside the flex layout */}
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        filters={filters}
        setFilters={setFilters}
      />

      {/* Main content shifts right when sidebar opens */}
      <div
        className="layout-content transition-all duration-300 ease-in-out"
        style={{ marginLeft: isSidebarOpen ? '250px' : '0px' }}
      >
        <Routes>
          <Route
            path="/"
            element={
              <LayoutPage
                wishlist={wishlist}
                setWishlist={setWishlist}
                searchTerm={searchTerm}
                setShowSearch={setShowSearch}
                filters={filters}
                isSidebarOpen={isSidebarOpen}
              />
            }
          />
          <Route
            path="/wishlist"
            element={
              <Wishlist
                wishlist={wishlist}
                setWishlist={setWishlist}
                searchTerm={searchTerm}
                setShowSearch={setShowSearch}
              />
            }
          />
          <Route
            path="/settings"
            element={<Settings setShowSearch={setShowSearch} />}
          />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App