import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import CarCard from '../components/CarCard'

const Wishlist = ({ wishlist, setWishlist, setShowSearch }) => {

    useEffect(() => {
        setShowSearch(false);
    }, [setShowSearch]);

    return (
        <div className='min-h-full px-4 sm:px-8 md:px-12 lg:px-20 py-6 flex flex-col gap-[2rem] bg-[#F6F7F9]'>

            <div className="wrap flex flex-col">
                <p className='text-[Plus_Jakarta_Sans] font-[600] text-[16px] text-[#90A3BF] leading-tight px-[10px]'><Link to="/">Home</Link> / &nbsp;<span className='text-(--global-color)'>Wishlist</span></p>
            </div>

            {wishlist.length > 0 ? (
                <div className="cars-grid grid gap-4 sm:gap-6 lg:gap-[32px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {wishlist.map((car) => (
                        <CarCard key={car.id} car={car} wishlist={wishlist} setWishlist={setWishlist} />
                    ))}
                </div>
            ) : (
                <div className="flex h-[40vh] justify-center items-center py-[2rem] bg-white rounded-xl border border-dashed border-gray-300">
                    <p className='text-[Plus_Jakarta_Sans] font-[500] text-[18px] text-[#90A3BF]'>No cars wishlisted yet.</p>
                </div>
            )}
        </div>
    )
}

export default Wishlist