import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Settings = ({ setShowSearch }) => {

    useEffect(() => {
        setShowSearch(false);
    }, [setShowSearch]);
    return (
        <div className='h-full mx-[5rem] flex flex-col gap-[2rem]'>
            <div className="wrap flex flex-col">
                <p className='text-[Plus_Jakarta_Sans] font-[600] text-[16px] text-[#90A3BF] leading-tight px-[10px]'><Link to="/">Home</Link> / &nbsp;<span className='text-(--global-color)'>Settings</span></p>
            </div>
            <div className="flex h-[40vh] justify-center items-center py-[2rem] bg-white rounded-xl border border-dashed border-gray-300">
                <p className='text-[Plus_Jakarta_Sans] font-[500] text-[18px] text-[#90A3BF]'>No settings available yet.</p>
            </div>
        </div>
    )
}

export default Settings