import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

import tick from '../assets/paytm_tick.webp';
import paytmLogo from '../assets/Paytm_Logo.png';
import paytm_cashback from '../assets/paytm_cashback.png'


export default function LatestPaytmSuccessPage() {
    return (
        <div className="max-w-sm mx-auto min-h-screen font-sans">

            <div className='flex flex-col items-center p-4 bg-gradient-to-b to-[#d4f0fb] from-[#ffff]'>
                {/* Top Nav */}
                <div className="w-full flex items-center justify-between mb-2">
                    <span className="material-symbols-outlined text-2xl">arrow_back</span>

                    <img src={paytmLogo} alt="Paytm Logo" className="h-6" />

                    <div className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-2xl">more_vert</span>
                    </div>
                </div>
                {/* Receiver Info */}
                <h2 className="text-lg font-semibold text-center text-black">Ajmal Faris K</h2>
                <p className="text-sm text-gray-800 ">UPI ID: fashionfriday.co@oksbi</p>

                {/* Amount */}
                <div className="flex items-center my-3">
                    <span className="text-[42px] font-bold mr-2">₹1</span>
                    <img src={tick} alt="success" className='w-8' />
                </div>

                {/* Date, Time & Ref */}
                <p className="text-xs text-gray-800">
                    14 Jul, 01:13 PM &nbsp; <span className='text-black text-bold text-md'>•&nbsp;</span> Ref. No: 519564229108
                    <span className="material-symbols-outlined text-sm ml-1 cursor-pointer rotate-180 flip scale-x-[-1]">content_copy</span>
                </p>

                {/* Buttons */}
                <div className="flex gap-4 my-4 text-gray-900">
                    <button className="px-3 py-1.5 rounded-full bg-white border text-[14px] font-medium shadow">
                        Check Balance
                    </button>
                    <button className="px-3 py-1.5 rounded-full bg-white border text-[14px] font-medium shadow">
                        Pay Again
                    </button>
                    <button className="px-3 py-1.5 rounded-full bg-green-600 text-white text-[14px] font-medium shadow flex items-center gap-1">
                        <FontAwesomeIcon icon={faWhatsapp} className="text-white en-500 text-lg" /> Share
                    </button>
                </div>
            </div>

            <hr className='border-[5px] w-full border-[#55b3f1]' />
            <hr className='border-[5px] w-full border-[#12286d]' />


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
