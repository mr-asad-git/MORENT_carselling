import React from 'react'
import cars from '../mui/cars'
import CarCard from '../components/CarCard'
import { Link } from 'react-router-dom'


const Cars = ({ wishlist, setWishlist, searchTerm, setShowSearch, filters, isSidebarOpen }) => {


    React.useEffect(() => {
        window.scrollTo(0, 0)
        setShowSearch(true);
    }, [setShowSearch])

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
            const searchMatch = !searchTerm.trim() || car.name.toLowerCase().includes(searchTerm.toLowerCase());
            return typeMatch && capacityMatch && priceMatch && searchMatch;
        });
    };

    const filteredCars = applyFilters(cars);

    return (
        <div className='w-full flex flex-col gap-[2rem] px-4 sm:px-8 md:px-12 lg:px-20 bg-[#F6F7F9] py-[2rem] sm:py-[3rem] min-h-[60vh]'>
            <p className='text-[Plus_Jakarta_Sans] font-[600] text-[16px] text-[#90A3BF] leading-tight px-[10px]'>All Cars</p>
            {filteredCars.length > 0 ? (
                <div className={`cars-grid grid gap-4 sm:gap-6 lg:gap-[32px] grid-cols-1 sm:grid-cols-2 ${isSidebarOpen ? 'lg:grid-cols-2 xl:grid-cols-3' : 'lg:grid-cols-3 xl:grid-cols-4'}`}>
                    {filteredCars.map((car) => (
                        <CarCard key={car.id} car={car} wishlist={wishlist} setWishlist={setWishlist} />
                    ))}
                </div>
            ) : (
                <div className="flex justify-center items-center py-[2rem] bg-white rounded-xl border border-dashed border-gray-300">
                    <p className='text-[Plus_Jakarta_Sans] font-[500] text-[18px] text-[#90A3BF]'>No cars match the current filters.</p>
                </div>
            )}
        </div >
    )
}

export default Cars