import React from 'react'
import { Link } from 'react-router-dom'

const Settings = () => {
    return (
        <div className='mx-[5rem] flex flex-col'>
            <p className='text-[Plus_Jakarta_Sans] font-[600] text-[16px] text-[#90A3BF] leading-tight px-[10px]'><Link to="/">Home</Link> / &nbsp;<span className='text-(--global-color)'>Settings</span></p>
            <div className="wrap flex flex-col py-[2rem]">
                <div className="settings-box w-full h-[40vh] border border-dashed border-gray-300  bg-[#fff] rounded-xl flex justify-center items-center">
                    <p className='text-[Plus_Jakarta_Sans] font-[600] text-[18px] text-[#90A3BF] leading-tight px-[10px]'>No settings available yet.</p>
                </div>
            </div>
        </div>
    )
}

export default Settings