import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const CAR_TYPES = [
    { label: 'Sport', count: 10 },
    { label: 'SUV', count: 12 },
    { label: 'MPV', count: 16 },
    { label: 'Sedan', count: 20 },
    { label: 'Coupe', count: 14 },
    { label: 'Hatchback', count: 14 },
]

const CAR_CAPACITIES = [
    { label: '2 Person', value: 2, count: 10 },
    { label: '4 Person', value: 4, count: 14 },
    { label: '6 Person', value: 6, count: 12 },
    { label: '8 or More', value: 8, count: 16 },
]

const MAX_PRICE = 100

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen, filters, setFilters }) => {
    const location = useLocation()

    // Close sidebar whenever the route changes
    useEffect(() => {
        setIsSidebarOpen(false)
    }, [location.pathname, setIsSidebarOpen])

    const handleTypeChange = (type) => {
        setFilters((prev) => {
            const types = prev.types.includes(type)
                ? prev.types.filter((t) => t !== type)
                : [...prev.types, type]
            return { ...prev, types }
        })
    }

    const handleCapacityChange = (value) => {
        setFilters((prev) => {
            const capacities = prev.capacities.includes(value)
                ? prev.capacities.filter((c) => c !== value)
                : [...prev.capacities, value]
            return { ...prev, capacities }
        })
    }

    const handlePriceChange = (e) => {
        setFilters((prev) => ({ ...prev, maxPrice: Number(e.target.value) }))
    }

    return (
        <>
            {/* Overlay */}
            {isSidebarOpen && (
                <div
                    className="fixed h-full left-0 right-0 top-0 z-40"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Sidebar Panel */}
            <aside
                className={`
          fixed left-0 z-50
          w-[250px] bg-white border-r border-[#E1E5EA]
          flex flex-col
          transition-transform duration-300 ease-in-out
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
                style={{ top: '18vh', height: 'calc(100% - 18vh)' }}
            >
                {/* Sidebar header row */}
                <div className="flex justify-between items-center px-6 py-4 border-b border-[#E1E5EA]">
                    <p className="text-[16px] font-[700] text-[#1A202C]">Filters</p>
                    <button
                        onClick={() => setIsSidebarOpen(false)}
                        className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors cursor-pointer border-none bg-transparent text-[#90A3BF] hover:text-[#1A202C] text-[20px] leading-none"
                        aria-label="Close filters"
                    >
                        ✕
                    </button>
                </div>

                {/* Scrollable content */}
                <div className="flex-1 overflow-y-auto px-6 py-6 flex flex-col gap-8">

                    {/* TYPE */}
                    <section>
                        <p className="text-[12px] font-[600] tracking-[0.1em] text-[#90A3BF] uppercase mb-4">
                            Type
                        </p>
                        <div className="flex flex-col gap-3">
                            {CAR_TYPES.map(({ label, count }) => (
                                <label key={label} className="flex items-center gap-3 cursor-pointer group">
                                    <input
                                        type="checkbox"
                                        checked={filters.types.includes(label)}
                                        onChange={() => handleTypeChange(label)}
                                        className="w-5 h-5 rounded-[4px] accent-[#3563E9] cursor-pointer"
                                    />
                                    <span className="text-[16px] font-[500] text-[#596780] group-hover:text-[#3563E9] transition-colors">
                                        {label}
                                        <span className="text-[#90A3BF] ml-1">({count})</span>
                                    </span>
                                </label>
                            ))}
                        </div>
                    </section>

                    {/* CAPACITY */}
                    <section>
                        <p className="text-[12px] font-[600] tracking-[0.1em] text-[#90A3BF] uppercase mb-4">
                            Capacity
                        </p>
                        <div className="flex flex-col gap-3">
                            {CAR_CAPACITIES.map(({ label, value, count }) => (
                                <label key={label} className="flex items-center gap-3 cursor-pointer group">
                                    <input
                                        type="checkbox"
                                        checked={filters.capacities.includes(value)}
                                        onChange={() => handleCapacityChange(value)}
                                        className="w-5 h-5 rounded-[4px] accent-[#3563E9] cursor-pointer"
                                    />
                                    <span className="text-[16px] font-[500] text-[#596780] group-hover:text-[#3563E9] transition-colors">
                                        {label}
                                        <span className="text-[#90A3BF] ml-1">({count})</span>
                                    </span>
                                </label>
                            ))}
                        </div>
                    </section>

                    {/* PRICE */}
                    <section>
                        <p className="text-[12px] font-[600] tracking-[0.1em] text-[#90A3BF] uppercase mb-4">
                            Price
                        </p>
                        <div className="flex flex-col gap-3">
                            <input
                                type="range"
                                min={0}
                                max={MAX_PRICE}
                                value={filters.maxPrice}
                                onChange={handlePriceChange}
                                className="w-full h-[4px] rounded-full appearance-none cursor-pointer accent-[#3563E9]"
                                style={{
                                    background: `linear-gradient(to right, #3563E9 0%, #3563E9 ${filters.maxPrice}%, #E0E0E0 ${filters.maxPrice}%, #E0E0E0 100%)`
                                }}
                            />
                            <p className="text-[16px] font-[600] text-[#596780]">
                                Max. ${filters.maxPrice}.00
                            </p>
                        </div>
                    </section>
                </div>

                {/* Close button */}
                <div className="px-6 py-4 border-t border-[#E1E5EA]">
                    <button
                        onClick={() => setIsSidebarOpen(false)}
                        className="w-full h-[44px] bg-[#3563E9] text-white rounded-[6px] font-[600] text-[14px] hover:bg-[#3563E9]/80 transition-all cursor-pointer border-none"
                    >
                        Apply Filters
                    </button>
                </div>
            </aside>
        </>
    )
}

export default Sidebar