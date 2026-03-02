import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Search from './Search';
import { useDebounce } from 'react-use';

const Header = ({ searchTerm, setSearchTerm, wishlist, setIsSidebarOpen, showSearch }) => {
    const [localSearchTerm, setLocalSearchTerm] = useState(searchTerm);
    const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useDebounce(() => {
        setSearchTerm(localSearchTerm);
    }, 500, [localSearchTerm]);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`Header sticky top-0 z-50 w-full flex flex-col justify-center sm:h-[18vh] h-auto min-h-[64px] px-4 sm:px-10 lg:px-20 py-2 sm:py-0 transition-all duration-300
            ${scrolled
                ? 'bg-white/80 backdrop-blur-md shadow-md'
                : 'bg-(--primary-color)'
            }`}>

            {/* Main row */}
            <div className="wrapper w-full flex justify-between items-center gap-4">

                {/* Logo */}
                <div className='Logo_Text flex-shrink-0'>
                    <p className='text-[20px] sm:text-[33px] leading-[23px] tracking-[0.02em] text-[Plus_Jakarta_Sans] text-(--global-color) font-bold'>
                        <Link to="/">MORENT</Link>
                    </p>
                </div>

                {/* Desktop search */}
                {showSearch && (
                    <div className='hidden md:flex flex-1 justify-center sm:justify-start'>
                        <Search searchTerm={localSearchTerm} onSearchChange={setLocalSearchTerm} setIsSidebarOpen={setIsSidebarOpen} />
                    </div>
                )}

                {/* Right icons */}
                <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">

                    {/* Mobile search toggle */}
                    {showSearch && (
                        <button
                            className="md:hidden w-[44px] h-[44px] border border-gray-200 rounded-full bg-(--primary-color) flex justify-center items-center"
                            onClick={() => setMobileSearchOpen(prev => !prev)}
                            aria-label="Toggle search"
                        >
                            <img src="/search.svg" className='w-[22px] h-[22px]' alt="search" />
                        </button>
                    )}

                    <Link to="/wishlist">
                        <div className="w-[44px] h-[44px] sm:w-[45px] sm:h-[45px] border border-gray-200 rounded-full bg-(--primary-color) flex justify-center items-center relative">
                            <img src="/heart.svg" className='w-[22px] h-[22px] sm:w-[25px] sm:h-[25px]' alt="Wishlist" />
                            {wishlist.length > 0 && (
                                <div className="badge absolute h-[16px] w-[16px] bg-red-500 rounded-full top-0 right-0 text-white text-[10px] font-[500] flex justify-center items-center">
                                    {wishlist.length}
                                </div>
                            )}
                        </div>
                    </Link>

                    <div className="w-[44px] h-[44px] sm:w-[45px] sm:h-[45px] border border-gray-200 rounded-full bg-(--primary-color) flex justify-center items-center">
                        <img src="/notification.svg" className='w-[22px] h-[22px] sm:w-[25px] sm:h-[25px]' alt="Notifications" />
                    </div>

                    <Link to="/settings">
                        <div className="w-[44px] h-[44px] sm:w-[45px] sm:h-[45px] border border-gray-200 rounded-full bg-(--primary-color) flex justify-center items-center">
                            <img src="/setting.svg" className='w-[22px] h-[22px] sm:w-[25px] sm:h-[25px]' alt="Settings" />
                        </div>
                    </Link>

                    <div className="w-[44px] h-[44px] sm:w-[45px] sm:h-[45px] border border-gray-200 rounded-full bg-(--primary-color) overflow-hidden ">
                        <img src="/Image.png" className='w-full h-full' alt="Profile" />
                    </div>

                </div>
            </div>

            {/* Mobile search bar (collapsible) */}
            {showSearch && mobileSearchOpen && (
                <div className="md:hidden w-full mt-2 pb-2">
                    <Search searchTerm={localSearchTerm} onSearchChange={setLocalSearchTerm} setIsSidebarOpen={setIsSidebarOpen} mobile />
                </div>
            )}
        </div>
    )
}

export default Header