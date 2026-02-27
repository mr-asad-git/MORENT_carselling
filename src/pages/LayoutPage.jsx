import React, { useState, useEffect } from 'react'
import HeroCard from '../components/HeroCard'
import Locators from '../components/Locators'
import LocateDivider from '../components/LocateDivider'
import CarCard from '../components/CarCard'
import cars from '../mui/cars'

const LayoutPage = ({ wishlist, setWishlist, searchTerm, setShowSearch, filters, isSidebarOpen }) => {

  useEffect(() => {
    setShowSearch(true);
  }, [setShowSearch]);

  // Apply search filter
  const searchFiltered = searchTerm.trim()
    ? cars.filter((car) => car.name.toLowerCase().includes(searchTerm.toLowerCase()))
    : null;

  // Apply sidebar filters (type, capacity, price)
  const applyFilters = (carList) => {
    if (!filters) return carList;
    return carList.filter((car) => {
      const typeMatch = filters.types.length === 0 || filters.types.includes(car.type);
      const capacityMatch =
        filters.capacities.length === 0 ||
        filters.capacities.some((cap) => {
          if (cap === 8) return car.passengers >= 8;
          return car.passengers === cap;
        });
      const priceMatch = car.price <= filters.maxPrice;
      return typeMatch && capacityMatch && priceMatch;
    });
  };

  const filteredCars = searchFiltered !== null ? applyFilters(searchFiltered) : null;

  const popularCars = applyFilters(cars.slice(0, 4));
  const recommendationCars = applyFilters(cars.slice(4));

  return (
    <div className='w-full flex flex-col gap-[2rem] px-[5rem] bg-[#F6F7F9] py-[3rem] min-h-[60vh]'>

      {/* Search Results Section */}
      <div className={`transition-all duration-500 ease-in-out overflow-hidden ${searchTerm.trim() ? "max-h-[2000px] opacity-100 mb-8" : "max-h-0 opacity-0 mb-0"}`}>
        <p className='text-[Plus_Jakarta_Sans] font-[600] text-[16px] text-[#90A3BF] leading-tight px-[10px] mb-4'>Search Results</p>

        {filteredCars && filteredCars.length > 0 ? (
          <div className={`cars-grid grid gap-[32px] ${isSidebarOpen ? 'grid-cols-3' : 'grid-cols-4'}`}>
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
        {popularCars.length > 0 ? (
          <div className={`cars-grid grid gap-[32px] ${isSidebarOpen ? 'grid-cols-3' : 'grid-cols-4'}`}>
            {popularCars.map((car) => (
              <CarCard key={car.id} car={car} wishlist={wishlist} setWishlist={setWishlist} />
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center py-[2rem] bg-white rounded-xl border border-dashed border-gray-300">
            <p className='text-[Plus_Jakarta_Sans] font-[500] text-[18px] text-[#90A3BF]'>No cars match the current filters.</p>
          </div>
        )}
      </div>

      <div className="section-recommendation flex flex-col gap-[20px] mt-[20px]">
        <p className='text-[Plus_Jakarta_Sans] font-[600] text-[16px] text-[#90A3BF] leading-tight px-[10px]'>Recommendation Car</p>
        {recommendationCars.length > 0 ? (
          <div className={`cars-grid grid gap-[32px] ${isSidebarOpen ? 'grid-cols-3' : 'grid-cols-4'}`}>
            {recommendationCars.map((car) => (
              <CarCard key={car.id} car={car} wishlist={wishlist} setWishlist={setWishlist} />
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center py-[2rem] bg-white rounded-xl border border-dashed border-gray-300">
            <p className='text-[Plus_Jakarta_Sans] font-[500] text-[18px] text-[#90A3BF]'>No cars match the current filters.</p>
          </div>
        )}

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