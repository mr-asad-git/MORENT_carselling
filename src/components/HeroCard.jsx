import React from 'react'

const HeroCard = ({ title, text, car, bgVariant }) => {
    return (
        <div className={`h-[350px] w-[660px] relative rounded-xl flex flex-col overflow-hidden ${bgVariant === 'circles' ? 'bg-circles' : 'bg-chevrons'}`}>
            <div className="text-div h-full w-full flex flex-col gap-[15px] relative top-10 left-5 z-10">
                <h1 className='text-[Plus_Jakarta_Sans] font-[700] text-[32px] leading-tight w-[50%] text-white'>{title}</h1>
                <p className='text-[Plus_Jakarta_Sans] font-[500] text-[16px] w-[50%] text-white/90'>{text}</p>
                <button className={`w-[150px] h-[50px] rounded-md text-white font-semibold text-[16px] border-none outline-none cursor-pointer ${bgVariant === 'circles' ? 'bg-[#3563E9]' : 'bg-[#54A6FF]'}`}>
                    Rental Car
                </button>
            </div>
            <div className="image-div absolute bottom-5 left-1/2 -translate-x-1/3 z-10">
                <img className='w-[550px] object-contain' src={car} alt="Car" />
            </div>
        </div>
    )
}


export default HeroCard