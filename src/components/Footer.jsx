import React from 'react'

const Footer = () => {

    const aboutData = ["How it works", "Featured", "Partnership", "Business Relation"]
    const communityData = ["Events", "Blog", "Podcast", "Invite a friend"]
    const socialsData = ["Discord", "Instagram", "Twitter", "Youtube"]

    return (
        <div className='w-full bg-(--primary-color) px-4 sm:px-10 lg:px-20 py-10'>
            <div className="wrapper w-full flex flex-col md:flex-row justify-between gap-8">
                <div className="details flex flex-col gap-[1rem] max-w-[260px]">
                    <h1 className='text-[Plus_Jakarta_Sans] font-[600] text-[28px] sm:text-[33px] text-(--global-color) leading-tight'>MORENT</h1>
                    <p className='text-[Plus_Jakarta_Sans] font-[400] text-[14px] sm:text-[15px] leading-tight'>Our vision is to provide convenience and help increase your sales business.</p>
                </div>
                <div className="links grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8">
                    <div className="about">
                        <ul className='flex flex-col gap-[0.75rem]'>
                            <li className='text-[Plus_Jakarta_Sans] font-[600] text-[18px] sm:text-[20px] leading-tight'>About</li>
                            {aboutData.map((about, index) => (
                                <li key={index} className='text-[Plus_Jakarta_Sans] font-[400] text-[14px] sm:text-[15px] leading-tight hover:text-(--global-color) transition-all cursor-pointer'>{about}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="Community">
                        <ul className='flex flex-col gap-[0.75rem]'>
                            <li className='text-[Plus_Jakarta_Sans] font-[600] text-[18px] sm:text-[20px] leading-tight'>Community</li>
                            {communityData.map((community, index) => (
                                <li key={index} className='text-[Plus_Jakarta_Sans] font-[400] text-[14px] sm:text-[15px] leading-tight hover:text-(--global-color) transition-all cursor-pointer'>{community}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="Socials col-span-2 sm:col-span-1">
                        <ul className='flex flex-col gap-[0.75rem]'>
                            <li className='text-[Plus_Jakarta_Sans] font-[600] text-[18px] sm:text-[20px] leading-tight'>Socials</li>
                            {socialsData.map((social, index) => (
                                <li key={index} className='text-[Plus_Jakarta_Sans] font-[400] text-[14px] sm:text-[15px] leading-tight hover:text-(--global-color) transition-all cursor-pointer'>{social}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer