import React from 'react'

const HeroCard = ({ title, text, car, bgVariant }) => {
    return (
        <div className={`w-full min-h-[200px] sm:min-h-[280px] md:min-h-[350px] relative rounded-xl flex flex-col overflow-hidden ${bgVariant === 'circles' ? 'bg-circles' : 'bg-chevrons'}`}>
            <div className="text-div h-full w-full flex flex-col gap-[10px] sm:gap-[15px] relative top-6 sm:top-10 left-4 sm:left-5 z-10 pr-4">
                <h1 className='text-[Plus_Jakarta_Sans] font-[700] text-[18px] sm:text-[24px] md:text-[32px] leading-tight w-[60%] sm:w-[55%] text-white'>{title}</h1>
                <p className='text-[Plus_Jakarta_Sans] font-[500] text-[12px] sm:text-[14px] md:text-[16px] w-[55%] sm:w-[50%] text-white/90'>{text}</p>
                <button className={`w-[110px] sm:w-[130px] md:w-[150px] h-[38px] sm:h-[44px] md:h-[50px] rounded-md text-white font-semibold text-[13px] sm:text-[15px] md:text-[16px] border-none outline-none cursor-pointer ${bgVariant === 'circles' ? 'bg-[#3563E9]' : 'bg-[#54A6FF]'}`}>
                    Rental Car
                </button>
            </div>
            <div className="image-div absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/3 z-10">
                <img className='w-[200px] sm:w-[350px] md:w-[550px] object-contain' src={car} alt="Car" />
            </div>
        </div>
    )
}


export default HeroCard