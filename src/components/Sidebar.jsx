import React from 'react'

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
    return (
        <div>
            <div className="sidebar w-[350px] h-full bg-[#fff] border-r border-[#E1E5EA]">
                <div className="sidebar-header flex justify-between items-center px-[20px] py-[20px]">
                    <p className='text-[Plus_Jakarta_Sans] font-[600] text-[16px] text-[#90A3BF] leading-tight'>Sidebar</p>
                    <button className='text-[Plus_Jakarta_Sans] font-[600] text-[16px] text-[#90A3BF] leading-tight hover:text-(--global-color) transition-all cursor-pointer border-none' onClick={() => setIsSidebarOpen(false)}>Close</button>
                </div>
            </div>
        </div>
    )
}

export default Sidebar