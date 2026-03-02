import React from 'react'

const Search = ({ searchTerm, onSearchChange, setIsSidebarOpen }) => {
    return (
        <div>
            <div className='Search'>
                <div className="search-div h-[45px] w-[500px] rounded-full border border-gray-300 px-[25px] p-[5px] flex justify-between items-center">
                    <div className="search_text flex flex-row gap-[10px]">
                        <img src="/search.svg" className='w-[25px] h-[25px]' alt="" />
                        <input
                            type="text"
                            className='border-none outline-none placeholder:text-[Plus_Jakarta_Sans] text-[Plus_Jakarta_Sans] font-medium w-[350px] placeholder:font-medium'
                            value={searchTerm}
                            onChange={(e) => onSearchChange(e.target.value)}
                            placeholder='What are you looking for?'
                        />
                    </div>
                    <div className="filter cursor-pointer">
                        <img src="/filter.svg" className='w-[25px] h-[25px]' alt="" srcSet="" onClick={() => setIsSidebarOpen(true)} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search
