import React from 'react'

const HeroCardDisplay = ({ title, text, car, bgVariant }) => {
    return (
        <div className={`w-full min-h-[250px] sm:min-h-[350px] md:min-h-[470px] relative rounded-2xl flex flex-col overflow-hidden ${bgVariant === 'circles' ? 'bg-circles' : 'bg-chevrons'}`}>
            <div className="text-div h-full flex flex-col gap-[10px] sm:gap-[15px] relative top-8 sm:top-10 left-4 sm:left-5 z-10 pr-4">
                <h1 className='text-[Plus_Jakarta_Sans] font-[700] text-[20px] sm:text-[28px] md:text-[32px] leading-tight w-[60%] sm:w-[55%] text-white'>{title}</h1>
                <p className='text-[Plus_Jakarta_Sans] font-[500] text-[13px] sm:text-[16px] md:text-[20px] w-[60%] sm:w-[55%] text-white/90'>{text}</p>
            </div>
            <div className="image-div absolute right-4 sm:right-15 bottom-3 sm:bottom-5 z-10">
                <img className='w-[180px] sm:w-[380px] md:w-[650px] object-contain' src={car} alt="Car" />
            </div>
        </div>
    )
}


export default HeroCardDisplay