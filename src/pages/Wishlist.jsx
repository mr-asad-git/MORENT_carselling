import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import CarCard from '../components/CarCard'

const Wishlist = ({ wishlist, setWishlist, setShowSearch }) => {

    useEffect(() => {
        setShowSearch(false);
    }, [setShowSearch]);

    return (
        <div className='h-full mx-[5rem] flex flex-col gap-[2rem]'>

            <div className="wrap flex flex-col">
                <p className='text-[Plus_Jakarta_Sans] font-[600] text-[16px] text-[#90A3BF] leading-tight px-[10px]'><Link to="/">Home</Link> / &nbsp;<span className='text-(--global-color)'>Wishlist</span></p>
            </div>

            {wishlist.length > 0 ? (
                <div className="cars-grid grid grid-cols-4 gap-[32px]">
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