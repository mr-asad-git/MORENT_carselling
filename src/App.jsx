import React, { useState, useEffect } from 'react'

import Header from './components/Header'
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

import './App.css'

import LayoutPage from './pages/LayoutPage';
import Wishlist from './pages/Wishlist';
import Settings from './pages/Settings';
import CarDisplay from './pages/CarDisplay';
import Cars from './pages/Cars';

import { Routes, Route } from 'react-router-dom';
import { Toaster } from "@/components/ui/sonner"
import { SiFigma } from 'react-icons/si';
import { FaArrowUp } from 'react-icons/fa';

const FIGMA_URL = 'https://www.figma.com/design/QJQHUu70jhYeLG0SHYzYVC/Car-Rent-Website-Design---Pickolab-Studio--Community-?node-id=0-1&p=f&t=Gn32xjaOTwtff6ST-0';

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
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
        className={`layout-content transition-all duration-300 ease-in-out ${isSidebarOpen ? 'md:ml-[250px]' : ''}`}
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
          <Route path="/car-display/:id" element={<CarDisplay wishlist={wishlist} setWishlist={setWishlist} />} />
          <Route path="/cars" element={<Cars wishlist={wishlist} setWishlist={setWishlist} searchTerm={searchTerm} setShowSearch={setShowSearch} filters={filters} isSidebarOpen={isSidebarOpen} />} />
        </Routes>
        <Footer />
      </div>

      {/* ── Floating Action Buttons ── */}
      <div className="fixed bottom-6 right-5 z-[100] flex flex-col items-center gap-3">

        {/* Figma source link */}
        <a
          href={FIGMA_URL}
          target="_blank"
          rel="noopener noreferrer"
          title="View Figma Design Reference"
          className="group w-[48px] h-[48px] rounded-full bg-white shadow-lg border border-gray-200 flex justify-center items-center hover:scale-110 transition-all duration-200"
        >
          <SiFigma size={22} className="text-[#F24E1E] group-hover:text-[#A259FF] transition-colors duration-200" />
        </a>

        {/* Scroll-to-top button */}
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          title="Back to top"
          className={`w-[48px] h-[48px] rounded-full bg-[#3563E9] shadow-lg flex justify-center items-center text-white hover:bg-[#254fd1] hover:scale-110 transition-all duration-300 border-none cursor-pointer
            ${showScrollTop ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'}`}
        >
          <FaArrowUp size={18} />
        </button>
      </div>

      <Toaster />
    </>
  )
}

export default App