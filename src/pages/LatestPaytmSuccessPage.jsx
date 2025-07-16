import React from 'react';
import { data, useLocation } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

import tick from '../assets/paytm_tick.webp';
import paytmLogo from '../assets/Paytm_Logo.png';
import paytm_cashback from '../assets/paytm_cashback.png'

import { amtFormate } from "../utils/helpers";
import { formatDateTime } from "../utils/helpers";



export default function LatestPaytmSuccessPage() {

    const location = useLocation();
    const formData = location.state || {};

    return (
        <div className="max-w-sm mx-auto min-h-screen font-sans">

            <div className='flex flex-col items-center p-4 bg-gradient-to-b [background-image:linear-gradient(to_bottom,white_0%,#d4f0fb_60%,#d4f0fb_100%)]'>
                {/* Top Nav */}
                <div className="w-full flex items-center justify-between mb-2">
                    <span className="material-symbols-outlined flex items-center">
                        west
                    </span>

                    <img src={paytmLogo} alt="Paytm Logo" className="h-6" />

                    <div className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-2xl">more_vert</span>
                    </div>
                </div>
                {/* Receiver Info */}
                <h2 className="text-xl font-semibold text-center text-black">{formData.receiverName}</h2>
                <p className="text-sm text-gray-800 ">UPI ID: fashionfriday.co@oksbi</p>

                {/* Amount */}
                <div className="flex items-center my-3">
                    <span className="text-[42px] font-bold mr-2">{`₹${amtFormate(formData.amount)}`}</span>
                    <img src={tick} alt="success" className='w-8' />
                </div>

                {/* Date, Time & Ref */}
                <p className="text-[13px] text-gray-900">
                    {formatDateTime(formData.dateTime)}&nbsp; <span className='text-black font-black text-md'>•&nbsp;</span> {`Ref. No: ${formData.upiTransactionId}`}
                    <span className="material-symbols-outlined text-sm ml-2 cursor-pointer rotate-180 flip scale-x-[-1] st">content_copy</span>
                </p>

                {/* Buttons */}
                <div className="flex gap-3 mt-4 mb-2 text-gray-900">
                    <button className="px-3 py-2 rounded-full bg-white text-[14px] font-medium">
                        Check Balance
                    </button>
                    <button className="px-3 py-1.5 rounded-full bg-white text-[14px] font-medium">
                        Pay Again
                    </button>
                    <button className="px-3 py-1.5 rounded-full bg-green-600 text-white text-[14px] font-medium flex items-center gap-1">
                        <FontAwesomeIcon icon={faWhatsapp} className="text-white en-500 text-[16px]" /> Share
                    </button>
                </div>
            </div>

            <hr className='border-[4px] w-full border-[#55b3f1]' />
            <hr className='border-[4px] w-full border-[#12286d]' />


            {/* Scratch Card */}
            <div className="w-full bg-gradient-to-b from-[#e6f4fd] to-[#ffffff] rounded-lg text-center mb-4">
                <img
                    src={paytm_cashback}
                    alt="Scratch Card"
                    className="w-full  mx-auto rounded-xl shadow"
                />
            </div>
        </div>
    )
}
