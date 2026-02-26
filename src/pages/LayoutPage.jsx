import React, { useState } from 'react'
import HeroCard from '../components/HeroCard'
import Locators from '../components/Locators'
import LocateDivider from '../components/LocateDivider'
import CarCard from '../components/CarCard'
import cars from '../mui/cars'

const LayoutPage = ({ wishlist, setWishlist, searchTerm }) => {


  const filteredCars = searchTerm.trim()
    ? cars.filter((car) => car.name.toLowerCase().includes(searchTerm.toLowerCase()))
    : [];

  const popularCars = cars.slice(0, 4);
  const recommendationCars = cars.slice(4);

  return (
    <div className='w-full flex flex-col gap-[2rem] px-[5rem] bg-[#F6F7F9] py-[3rem] min-h-[60vh]'>

      {/* Search Results Section */}
      <div className={`transition-all duration-500 ease-in-out overflow-hidden ${searchTerm.trim() ? "max-h-[2000px] opacity-100 mb-8" : "max-h-0 opacity-0 mb-0"}`}>
        <p className='text-[Plus_Jakarta_Sans] font-[600] text-[16px] text-[#90A3BF] leading-tight px-[10px] mb-4'>Search Results</p>

        {filteredCars.length > 0 ? (
          <div className="cars-grid grid grid-cols-4 gap-[32px]">
            {filteredCars.map((car) => (
              <CarCard key={car.id} car={car} wishlist={wishlist} setWishlist={setWishlist} />
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center py-[2rem] bg-white rounded-xl border border-dashed border-gray-300">
            <p className='text-[Plus_Jakarta_Sans] font-[500] text-[18px] text-[#90A3BF]'>No cars available matching "{searchTerm}".</p>
          </div>
        )}
      </div>


      <div className="cards flex justify-between gap-10">

        <HeroCard title="The Best Platform for Car Rental" text="Ease of doing a car rental safely and reliably. Of course at a low price." car="/cars/image 7.svg" bgVariant="circles" />
        <HeroCard title="Easy way to rent a car at a low price" text="Providing cheap car rental services and safe and comfortable facilities." car="/cars/car-1.svg" bgVariant="chevrons" />
      </div>

      <div className="location-comp flex justify-between items-center flex-row gap-[2rem]">
        <Locators title="Pick-up" />
        <LocateDivider />
        <Locators title="Drop-off" />
      </div>

      <div className="section-popular flex flex-col gap-[20px]">
        <div className="flex justify-between items-center px-[10px]">
          <p className='text-[Plus_Jakarta_Sans] font-[600] text-[16px] text-[#90A3BF] leading-tight'>Popular Car</p>
          <a href="#" className='text-[Plus_Jakarta_Sans] font-[600] text-[16px] text-[#3563E9] leading-tight hover:underline hover:transition-all hover:duration-300'>View All</a>
        </div>
        <div className="cars-grid grid grid-cols-4 gap-[32px]">
          {popularCars.map((car) => (
            <CarCard key={car.id} car={car} wishlist={wishlist} setWishlist={setWishlist} />
          ))}
        </div>
      </div>

      <div className="section-recommendation flex flex-col gap-[20px] mt-[20px]">
        <p className='text-[Plus_Jakarta_Sans] font-[600] text-[16px] text-[#90A3BF] leading-tight px-[10px]'>Recommendation Car</p>
        <div className="cars-grid grid grid-cols-4 gap-[32px]">
          {recommendationCars.map((car) => (
            <CarCard key={car.id} car={car} wishlist={wishlist} setWishlist={setWishlist} />
          ))}
        </div>

        <div className="flex justify-center mt-[40px]">
          <button className='px-[20px] h-[44px] bg-[#3563E9] rounded-[4px] text-white text-[Plus_Jakarta_Sans] font-[600] text-[16px] leading-tight hover:bg-[#3563E9]/80 transition-all cursor-pointer border-none'>
            Show more car &nbsp; (120)
          </button>
        </div>
      </div>
    </div>
  )
}


export default LayoutPage