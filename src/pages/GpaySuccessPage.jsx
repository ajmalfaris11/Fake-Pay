import React from 'react';
import { data, useLocation } from "react-router-dom";
import { formatDateTime } from "../utils/helpers";
import { amtFormate } from "../utils/helpers";

import secureIcon from "../assets/secureicon.webp"

export default function GpaySuccessPage() {

    const location = useLocation();
    const formData = location.state || {};

    return (
        <div className="min-h-screen dark:bg-[#131313] bg-white text-white flex flex-col items-center justify-center pb-10 px-4 font-sans">

            {/* Blue check circle */}
            <div className="w-[86px] h-[86px] rounded-full dark:bg-[#0b57cf] bg-[#1e6df2] flex items-center justify-center mb-6 max-w-sm">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-[50px] w-[50px] text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                    />
                </svg>
            </div>

            {/* Amount */}
            <div className="text-[32px] mb-6 mt-10 dark:text-[#e0e0e0] text-[#181818]">{`₹${amtFormate(formData.amount) || "999"}.00`}</div>

            {/* Paid to */}
            <div className="text-[15px] dark:text-[#e0e0e0] text-[#181818] mb-1">Paid to</div>
            <div className="text-[22px]  dark:text-[#e0e0e0] text-[#181818] tracking-wide">
                {formData.receiverName.toUpperCase() || "AJMAL FARIS K"}
            </div>

            {/* PhonePe VPA */}
            <div className="text-[14px] dark:text-[#e0e0e0] flex justify-center item-cente gap-1 text-[#181818]">
                <img src={secureIcon} alt="secure" className='w-[16px] h-[16px] mt-[2px] brightness-50 dark:brightness-125' />
                {`Banking name: AJMAL FARIS K`}
            </div>

            {/* Date and time */}
            <div className="text-[14px] dark:text-[#e0e0e0] mt-1 text-[#181818]">{`${formatDateTime(formData.dateTime)}`}</div>
        </div>
    );
}
