import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Search from './Search';
import { useDebounce } from 'react-use';

const Header = ({ searchTerm, setSearchTerm, wishlist, setWishlist }) => {
    const [localSearchTerm, setLocalSearchTerm] = useState(searchTerm);

    useDebounce(() => {
        setSearchTerm(localSearchTerm);
    }, 500, [localSearchTerm]);


    return (
        <div className='Header w-full flex justify-center h-[18vh] bg-(--primary-color) item-center px-1rem'>
            <div className="wrapper w-full px-20 flex justify-between items-center">
                <div className="logo_and_text w-[50%] flex justify-between items-center flex-row gap-[">
                    <div className='Logo_Text'>
                        <p className='text-[15px] text-[33px] leading-[23px] tracking-[0.02em] text-[Plus_Jakarta_Sans] text-(--global-color) font-bold'><Link to="/">MORENT</Link></p>
                    </div>
                    <Search searchTerm={localSearchTerm} onSearchChange={setLocalSearchTerm} />
                </div>

                <div className="nav-links_and_user flex justify-center items-center">
                    <div className="nav-links flex justify-center items-center">
                        <ul className='flex justify-center items-center flex-row gap-4'>
                            <Link to="/wishlist"><div className="button w-[45px] h-[45px] border-[1px] border-gray-200 rounded-4xl bg-(--primary-color) flex justify-center items-center relative"><img src="./heart.svg" className='w-[25px] h-[25px]' alt="" />{wishlist.length > 0 && <div className="badge absolute h-[15px] w-[15px] bg-red-500 rounded-full top-0 right-0 text-white text-[10px] text-[Plus_Jakarta_Sans] font-[500] flex justify-center items-center">{wishlist.length}</div>}</div></Link>
                            <div className="button w-[45px] h-[45px] border-[1px] border-gray-200 rounded-4xl bg-(--primary-color) flex justify-center items-center"><img src="./notification.svg" className='w-[25px] h-[25px]' alt="" /></div>
                            <div className="button w-[45px] h-[45px] border-[1px] border-gray-200 rounded-4xl bg-(--primary-color) flex justify-center items-center"><img src="./setting.svg" className='w-[25px] h-[25px]' alt="" /></div>
                            <div className="button w-[45px] h-[45px] border-[1px] border-gray-200 rounded-4xl bg-(--primary-color)"><img src="./Image.svg" className='w-full h-full' alt="" /></div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header