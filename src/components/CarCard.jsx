import React from 'react'

const CarCard = ({ car, wishlist, setWishlist }) => {

    const favourite = wishlist.some((item) => item.id === car.id);

    const handleFavourite = () => {
        if (favourite) {
            setWishlist(wishlist.filter((item) => item.id !== car.id));
        } else {
            setWishlist([...wishlist, car]);
        }
    }
    return (
        <div className="w-[304px] h-[388px] bg-white rounded-xl shadow-sm flex flex-col justify-between p-[24px] hover:shadow-xl hover:scale-105 transition-all duration-300">
            <div className="flex justify-between items-start">
                <div className="car-title">
                    <p className='text-[Plus_Jakarta_Sans] font-[700] text-[20px] leading-tight text-[#1A202C]'>{car.name}</p>
                    <p className='text-[Plus_Jakarta_Sans] font-[500] text-[14px] leading-tight text-[#90A3BF] mt-[4px]'>{car.type}</p>
                </div>
                <img src={favourite ? "/filled-heart.svg" : "/empty-heart.svg"} className="w-[24px] h-[24px] cursor-pointer" alt="Like" onClick={() => handleFavourite(car)} />
            </div>

            <div className="relative w-full h-[120px] flex items-center justify-center my-[20px]">
                <img src={car.image} alt={car.name} className="min-w-[220px] object-contain" />
                <div className="absolute bottom-0 w-full h-[30px] bg-gradient-to-t from-white to-transparent"></div>
            </div>

            <div className="car-details flex flex-col gap-[24px]">
                <div className="car-data flex justify-between">
                    <div className="fuel flex items-center gap-[6px]">
                        <img className='w-[24px] h-[24px] object-contain' src="/gas.svg" alt="Gas" />
                        <p className='text-[Plus_Jakarta_Sans] font-[500] text-[14px] leading-tight text-[#90A3BF]'>{car.fuelCapacity}L</p>
                    </div>
                    <div className="transmission flex border-l border-(--theme-color)/60 pl-2 items-center gap-[6px]">
                        <img className='w-[24px] h-[24px] object-contain' src="/Car.svg" alt="Transmission" />
                        <p className='text-[Plus_Jakarta_Sans] font-[500] text-[14px] leading-tight text-[#90A3BF]'>{car.transmission}</p>
                    </div>
                    <div className="passengers flex border-l border-(--theme-color)/60 pl-2 items-center gap-[6px]">
                        <img className='w-[24px] h-[24px] object-contain' src="/passengers.svg" alt="Passengers" />
                        <p className='text-[Plus_Jakarta_Sans] font-[500] text-[14px] leading-tight text-[#90A3BF]'>{car.passengers} People</p>
                    </div>
                </div>

                <div className="price flex items-center justify-between">
                    <div>
                        <span className='text-[Plus_Jakarta_Sans] font-[700] text-[20px] leading-tight text-[#1A202C]'>${car.price}.00/</span>
                        <span className='text-[Plus_Jakarta_Sans] font-[500] text-[14px] leading-tight text-[#90A3BF]'>day</span>
                    </div>
                    <button className='px-[20px] h-[44px] bg-[#3563E9] rounded-[4px] text-white text-[Plus_Jakarta_Sans] font-[600] text-[16px] leading-tight hover:bg-[#3563E9]/80 transition-all cursor-pointer border-none'>
                        Rent Now
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CarCard