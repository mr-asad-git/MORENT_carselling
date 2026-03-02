import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import HeroCarDisplay from '../components/HeroCarDisplay'
import { useParams, Link } from 'react-router-dom'
import cars from '../mui/cars'
import reviews from '../mui/reviews'
import { FaStar } from "react-icons/fa";
import UserReview from '../components/UserReview'
import CarCard from '../components/CarCard'

import demo1 from '/cars/demo1.svg'
import demo2 from '/cars/demo2.svg'

const CarDisplay = ({ wishlist, setWishlist }) => {

    const selectedReview = reviews.slice(0, 49);
    const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
    const recentCars = cars.slice(0, 4);
    const recommendedCars = cars.slice(4);

    const nextReview = () => {
        setCurrentReviewIndex((prev) => (prev >= selectedReview.length - 1 ? 0 : prev + 1));
    };

    const prevReview = () => {
        setCurrentReviewIndex((prev) => (prev === 0 ? selectedReview.length - 1 : prev - 1));
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentReviewIndex((prev) => (prev >= selectedReview.length - 1 ? 0 : prev + 1));
        }, 7000);
        return () => clearInterval(interval);
    }, [selectedReview.length]);

    const { id } = useParams()

    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, [id])

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    // Convert string id to number
    const car = cars.find((item) => item.id === Number(id))

    if (!car) {
        return (
            <div className="flex justify-center items-center h-[60vh]">
                <h1 className="text-2xl font-bold text-red-500">
                    404 - No car found with this ID
                </h1>
            </div>
        )
    }

    return (
        <div className="h-full w-full bg-[#F5F5F5] py-[2rem] px-4 sm:px-8 md:px-12 lg:px-20">
            <div className='flex w-full flex-col gap-[2rem]'>
                <p className='text-[Plus_Jakarta_Sans] font-[600] text-[16px] text-[#90A3BF] leading-tight px-[10px] mb-4'>
                    <Link to="/">Home</Link> /
                    <span className='text-[#3563E9]'> {car.name}</span>
                </p>

                <div className="wrap w-full flex flex-col gap-4">
                    <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                        {/* Thumbnails — row on mobile, column on md+ */}
                        <div className="image-l flex flex-row md:flex-col gap-3 md:gap-[10px] justify-center md:justify-start overflow-x-auto md:overflow-visible flex-shrink-0">
                            <div className="demo1 h-[90px] w-[90px] sm:h-[110px] sm:w-[110px] md:h-[130px] md:w-[130px] lg:h-[150px] lg:w-[150px] bg-[#3563E9] rounded-[1rem] flex justify-center items-center flex-shrink-0">
                                <img src={car.image} className='w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] md:w-[110px] md:h-[110px] lg:w-[120px] lg:h-[120px] object-contain' alt="" />
                            </div>
                            <div className="demo2 h-[90px] w-[90px] sm:h-[110px] sm:w-[110px] md:h-[130px] md:w-[130px] lg:h-[150px] lg:w-[150px] rounded-[1rem] -rotate-[10deg] flex justify-center items-center flex-shrink-0"><img src={demo1} className='w-[90px] h-[90px] sm:w-[110px] sm:h-[110px] md:w-[130px] md:h-[130px] lg:w-[150px] lg:h-[150px] object-contain' alt="" /></div>
                            <div className="demo3 h-[90px] w-[90px] sm:h-[110px] sm:w-[110px] md:h-[130px] md:w-[130px] lg:h-[150px] lg:w-[150px] rounded-[1rem] -rotate-[10deg] flex justify-center items-center flex-shrink-0"><img src={demo2} className='w-[90px] h-[90px] sm:w-[110px] sm:h-[110px] md:w-[130px] md:h-[130px] lg:w-[150px] lg:h-[150px] object-contain' alt="" /></div>
                        </div>
                        <div className="image-r flex-1 min-w-0">
                            <HeroCarDisplay title={car.title} text={car.text} car={car.image} bgVariant="chevrons" />
                        </div>
                    </div>
                </div>

                <div className="mt-6 flex flex-col lg:flex-row justify-center gap-6 lg:gap-10">
                    <div className="car-details w-full lg:w-[60%] bg-[#fff] rounded-[1rem] flex flex-col gap-5 p-5 sm:p-8">
                        <div className="product-info flex flex-col gap-2">
                            <h1 className='text-[Plus_Jakarta_Sans] font-[600] text-[24px] text-[#1A212F] leading-tight'>{car.name}</h1>
                            <div className="star-rating flex flex-row gap-1 items-center ">
                                {[1, 2, 3, 4, 5].map((star) => {
                                    return (
                                        <FaStar
                                            key={star}
                                            size={18}
                                            color={star <= car.rating ? "#FBBC04" : "#E4E4E4"}
                                            style={{ transition: "all 0.2s ease-in-out", display: "flex", flexDirection: "row", gap: "10px" }}
                                        />
                                    );
                                })}

                                <p className='text-[Plus_Jakarta_Sans] font-[400] text-[16px] text-[#1A212F] leading-tight mx-3'>{car.Reviewers}+ reviews</p>
                            </div>
                        </div>
                        <div className="flex flex-row gap-5">
                            <p className='text-[Plus_Jakarta_Sans] font-[400] text-[18px] text-[#1A212F] leading-tight'>{car.text}.</p>
                        </div>

                        <div className="car-specs grid grid-cols-2 gap-4">
                            <div className="spec-1 flex flex-col gap-1">
                                <p className='text-[Plus_Jakarta_Sans] font-[600] text-[14px] sm:text-[16px] text-[#90A3BF] leading-tight'>Car type</p>
                                <p className='text-[Plus_Jakarta_Sans] font-[600] text-[14px] sm:text-[16px] text-[#1A212F] leading-tight'>{car.type}</p>
                            </div>
                            <div className="spec-2 flex flex-col gap-1">
                                <p className='text-[Plus_Jakarta_Sans] font-[600] text-[14px] sm:text-[16px] text-[#90A3BF] leading-tight'>Capacity</p>
                                <p className='text-[Plus_Jakarta_Sans] font-[600] text-[14px] sm:text-[16px] text-[#1A212F] leading-tight'>{car.passengers} passengers</p>
                            </div>
                            <div className="spec-3 flex flex-col gap-1">
                                <p className='text-[Plus_Jakarta_Sans] font-[600] text-[14px] sm:text-[16px] text-[#90A3BF] leading-tight'>Steering</p>
                                <p className='text-[Plus_Jakarta_Sans] font-[600] text-[14px] sm:text-[16px] text-[#1A212F] leading-tight'>{car.transmission}</p>
                            </div>
                            <div className="spec-4 flex flex-col gap-1">
                                <p className='text-[Plus_Jakarta_Sans] font-[600] text-[14px] sm:text-[16px] text-[#90A3BF] leading-tight'>Gasoline</p>
                                <p className='text-[Plus_Jakarta_Sans] font-[600] text-[14px] sm:text-[16px] text-[#1A212F] leading-tight'>{car.fuelCapacity}L</p>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4 sm:gap-10 mt-6 sm:mt-10 items-center justify-between sm:justify-start">
                            <div className="flex flex-col gap-2 items-start">
                                <p className='text-[Plus_Jakarta_Sans] font-[800] text-[22px] sm:text-[28px] text-[#1A212F] leading-tight'>${car.price}.00/<span className='text-[Plus_Jakarta_Sans] font-[600] text-[16px] sm:text-[18px] text-[#90A3BF] leading-tight'>day</span></p>
                                <p className='text-[Plus_Jakarta_Sans] font-[600] text-[14px] sm:text-[18px] text-[#90A3BF] leading-tight line-through'>${car.price + 50}.00</p>
                            </div>
                            <button className="bg-[#3563E9] h-[44px] sm:h-[50px] w-[130px] sm:w-[150px] cursor-pointer hover:bg-[#254fd1] text-[#fff] px-4 py-2 rounded-[5px] text-[14px] sm:text-[16px]">Rent Now</button>
                        </div>
                    </div>

                    <div className="car-details w-full lg:w-[40%] bg-[#fff] rounded-[1rem] p-5 sm:p-8 flex flex-col">
                        <div className="flex justify-between items-center mb-5">
                            <h1 className='text-[Plus_Jakarta_Sans] font-[600] text-[24px] text-[#1A212F] leading-tight'>Reviews</h1>
                            <div className="flex gap-4 ">
                                <button onClick={prevReview} className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition-colors shadow-sm cursor-pointer">
                                    <FaChevronLeft size={16} className="text-gray-600" />
                                </button>
                                <button onClick={nextReview} className="w-10 h-10 flex items-center justify-center bg-[#3563E9] rounded-full hover:bg-[#254fd1] transition-colors shadow-sm cursor-pointer">
                                    <FaChevronRight size={16} className="text-white" />
                                </button>
                            </div>
                        </div>
                        <div className="relative overflow-hidden w-full h-[400px] ">
                            <div
                                className="flex flex-col transition-transform duration-500 ease-in-out h-full gap-4 "
                                style={{ transform: `translateY(-${currentReviewIndex * 50}%)` }}
                            >
                                {selectedReview.map((review) => (
                                    <div key={review.id} className="min-h-[calc(50%-0.5rem)] flex-shrink-0 py-2 bg-gray-100/50 rounded-lg px-4 flex justify-center items-center">
                                        <UserReview review={review} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>


                <div className="section-recent flex flex-col gap-[20px]">
                    <div className="flex justify-between items-center px-[10px]">
                        <p className='text-[Plus_Jakarta_Sans] font-[600] text-[16px] text-[#90A3BF] leading-tight'>Recent Car</p>
                        <a href="#" className='text-[Plus_Jakarta_Sans] font-[600] text-[16px] text-[#3563E9] leading-tight hover:underline hover:transition-all hover:duration-300'>View All</a>
                    </div>
                    {recentCars.length > 0 ? (
                        <div className="cars-grid grid gap-4 sm:gap-6 lg:gap-[32px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {recentCars.map((car) => (
                                <CarCard key={car.id} car={car} wishlist={wishlist} setWishlist={setWishlist} />
                            ))}
                        </div>
                    ) : (
                        <div className="flex justify-center items-center py-[2rem] bg-white rounded-xl border border-dashed border-gray-300">
                            <p className='text-[Plus_Jakarta_Sans] font-[500] text-[18px] text-[#90A3BF]'>No cars match the current filters.</p>
                        </div>
                    )}
                </div>

                <div className="section-recommended flex flex-col gap-[20px]">
                    <div className="flex justify-between items-center px-[10px]">
                        <p className='text-[Plus_Jakarta_Sans] font-[600] text-[16px] text-[#90A3BF] leading-tight'>Recommended Car</p>
                        <a href="#" className='text-[Plus_Jakarta_Sans] font-[600] text-[16px] text-[#3563E9] leading-tight hover:underline hover:transition-all hover:duration-300'>View All</a>
                    </div>
                    {recommendedCars.length > 0 ? (
                        <div className="cars-grid grid gap-4 sm:gap-6 lg:gap-[32px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {recommendedCars.map((car) => (
                                <CarCard key={car.id} car={car} wishlist={wishlist} setWishlist={setWishlist} />
                            ))}
                        </div>
                    ) : (
                        <div className="flex justify-center items-center py-[2rem] bg-white rounded-xl border border-dashed border-gray-300">
                            <p className='text-[Plus_Jakarta_Sans] font-[500] text-[18px] text-[#90A3BF]'>No cars match the current filters.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default CarDisplay