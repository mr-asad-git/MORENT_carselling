import React from "react";
import { FaStar } from "react-icons/fa";

const UserReview = ({ review }) => {
    const { name, designation, rating, review: reviewText, date } = review;

    // Generate initials for avatar fallback
    const initials = name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);

    return (
        <div className="flex flex-row gap-4 w-full">
            {/* Left: Avatar */}
            <div className="flex-shrink-0">
                <div
                    className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg"
                    style={{
                        background: `linear-gradient(135deg, #3563E9 0%, #6d8df5 100%)`,
                        boxShadow: "0 2px 8px rgba(53, 99, 233, 0.3)",
                    }}
                >
                    {initials}
                </div>
            </div>

            {/* Right: Text content */}
            <div className="flex flex-col gap-2 flex-1 min-w-0">
                {/* Name + Date row */}
                <div className="flex items-center justify-between gap-2">
                    <h2 className="text-[Plus_Jakarta_Sans] font-[700] text-[18px] text-[#1A212F] leading-tight truncate">
                        {name}
                    </h2>
                    <p className="text-[Plus_Jakarta_Sans] font-[400] text-[13px] text-[#90A3BF] whitespace-nowrap flex-shrink-0">
                        {date}
                    </p>
                </div>

                {/* Designation + Stars row */}
                <div className="flex items-center justify-between gap-2">
                    <p className="text-[Plus_Jakarta_Sans] font-[500] text-[14px] text-[#90A3BF] leading-tight truncate">
                        {designation}
                    </p>
                    <div className="flex items-center gap-[2px] flex-shrink-0">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <FaStar
                                key={star}
                                size={14}
                                color={star <= rating ? "#FBBC04" : "#E4E4E4"}
                            />
                        ))}
                    </div>
                </div>

                {/* Review text */}
                <p className="text-[Plus_Jakarta_Sans] font-[400] text-[15px] text-[#596780] leading-relaxed mt-1">
                    {reviewText}
                </p>
            </div>
        </div>
    );
};

export default UserReview;
