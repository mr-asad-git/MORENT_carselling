import React from 'react'

const Locators = ({ title }) => {
    return (
        <div className='flex w-full bg-[#fff] shadow-md rounded-xl justify-center items-center px-4 sm:px-8 md:px-[50px] py-4 sm:py-[25px]'>
            <div className="locate-div w-full">
                <div className="locate-text flex flex-col gap-[10px]">
                    <div className="radio-title flex items-center gap-[10px]">
                        <div className="radio1 w-[18px] h-[18px] rounded-full bg-white border border-(--global-color) flex justify-center items-center flex-shrink-0">
                            <div className="radio w-[10px] h-[10px] rounded-full bg-(--global-color)"></div>
                        </div>
                        <p className='text-[Plus_Jakarta_Sans] font-[600] text-[14px] sm:text-[16px] leading-tight'>{title}</p>
                    </div>
                    <div className="dropdowns grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-0 sm:flex sm:justify-between sm:items-center w-full">
                        <div className="Locations-dropdown flex flex-col gap-[5px]">
                            <p className='text-[Plus_Jakarta_Sans] font-[700] text-[13px] sm:text-[16px] leading-tight'>Locations</p>
                            <select defaultValue="" className='text-[#90A3BF] text-[11px] sm:text-[12px] font-medium border-none outline-none bg-transparent cursor-pointer w-full' name="" id="">
                                <option value="" disabled>Select Location</option>
                                <option value="London">London</option>
                                <option value="Paris">Paris</option>
                                <option value="New York">New York</option>
                                <option value="Dubai">Dubai</option>
                            </select>
                        </div>
                        <div className="Date-dropdown flex flex-col gap-[5px] sm:px-[20px] sm:border-l border-[#C3D4E9]/40">
                            <p className='text-[Plus_Jakarta_Sans] font-[700] text-[13px] sm:text-[16px] leading-tight'>Date</p>
                            <select defaultValue="" className='text-[#90A3BF] text-[11px] sm:text-[12px] font-medium border-none outline-none bg-transparent cursor-pointer w-full' name="" id="">
                                <option value="" disabled>Select Date</option>
                                <option value="2026-03-01">2026-03-01</option>
                                <option value="2026-03-02">2026-03-02</option>
                                <option value="2026-03-03">2026-03-03</option>
                            </select>
                        </div>
                        <div className="Time-dropdown flex flex-col gap-[5px] sm:px-[20px] sm:border-l border-[#C3D4E9]/40 col-span-2 sm:col-span-1">
                            <p className='text-[Plus_Jakarta_Sans] font-[700] text-[13px] sm:text-[16px] leading-tight'>Time</p>
                            <select defaultValue="" className='text-[#90A3BF] text-[11px] sm:text-[12px] font-medium border-none outline-none bg-transparent cursor-pointer w-full' name="" id="">
                                <option value="" disabled>Select Time</option>
                                <option value="09:00 AM">09:00 AM</option>
                                <option value="12:00 PM">12:00 PM</option>
                                <option value="03:00 PM">03:00 PM</option>
                                <option value="06:00 PM">06:00 PM</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Locators
