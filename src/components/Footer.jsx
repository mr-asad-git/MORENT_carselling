import React from 'react'

const Footer = () => {

    const aboutData = ["How it works", "Featured", "Partnership", "Business Relation"]
    const communityData = ["Events", "Blog", "Podcast", "Invite a friend"]
    const socialsData = ["Discord", "Instagram", "Twitter", "Youtube"]

    return (
        <div className='h-[50vh] w-full bg-(--primary-color) flex justify-center items-center px-[5rem] '>
            <div className="wrapper h-full w-full flex justify-between items-center">
                <div className="details flex flex-col gap-[1rem]">
                    <h1 className='text-[Plus_Jakarta_Sans] font-[600] text-[33px] text-(--global-color) leading-tight'>MORENT</h1>
                    <p className='text-[Plus_Jakarta_Sans] font-[400] text-[15px] w-[60%] leading-tight'>Our vision is to provide convenience and help increase your sales business.</p>
                </div>
                <div className="links flex flex-row gap-[3rem]">
                    <div className="about px-10">
                        <ul className='flex flex-col gap-[1rem]'>
                            <li className='text-[Plus_Jakarta_Sans] font-[600] text-[20px] leading-tight'>About</li>
                            {aboutData.map((about) => (
                                <li className='text-[Plus_Jakarta_Sans] font-[400] text-[15px] leading-tight hover:text-(--global-color) transition-all cursor-pointer'>{about}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="Community px-10">
                        <ul className='flex flex-col gap-[1rem]'>
                            <li className='text-[Plus_Jakarta_Sans] font-[600] text-[20px] leading-tight'>Community</li>
                            {communityData.map((community) => (
                                <li className='text-[Plus_Jakarta_Sans] font-[400] text-[15px] leading-tight hover:text-(--global-color) transition-all cursor-pointer'>{community}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="Socials px-10">
                        <ul className='flex flex-col gap-[1rem]'>
                            <li className='text-[Plus_Jakarta_Sans] font-[600] text-[20px] leading-tight'>Socials</li>
                            {socialsData.map((social) => (
                                <li className='text-[Plus_Jakarta_Sans] font-[400] text-[15px] leading-tight hover:text-(--global-color) transition-all cursor-pointer'>{social}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer