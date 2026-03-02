import React from 'react'

const HeroCardDisplay = ({ title, text, car, bgVariant }) => {
    return (
        <div className={`h-[470px] w-[70%] relative rounded-2xl flex flex-col overflow-hidden ${bgVariant === 'circles' ? 'bg-circles' : 'bg-chevrons'}`}>
            <div className="text-div h-full flex flex-col gap-[15px] relative top-10 left-5 z-10">
                <h1 className='text-[Plus_Jakarta_Sans] font-[700] text-[32px] leading-tight w-[50%] text-white'>{title}</h1>
                <p className='text-[Plus_Jakarta_Sans] font-[500] text-[20px] w-[50%] text-white/90'>{text}</p>
            </div>
            <div className="image-div absolute right-15 bottom-5 z-10">
                <img className='w-[650px] object-contain' src={car} alt="Car" />
            </div>
        </div>
    )
}


export default HeroCardDisplay