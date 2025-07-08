import React from 'react';
import { useLocation } from 'react-router-dom';
import paytmLogo from '../assets/Paytm_Logo.png';

import tick from '../assets/paytm_tick.webp';
import paytmDetailsSection from '../assets/paytm_detail_section.png';
import paytmGrayLogo from '../assets/paytmGrayLogo.webp';
import upiGrayLogo from '../assets/upiGrayLogo.webp';
import hdfcGrayLogo from '../assets/hdfcGrayLogo.webp';

export default function PaytmSuccessPage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-start pt-8 font-sans text-black bg-cover bg-center px-3">            {/* Paytm logo */}
            <img src={paytmLogo} alt="Paytm Logo" className='w-[80px] h-auto' />
            {/* Blue card */}
            <div className="w-full bg-[#e1f5fe] rounded-t-[14px] text-center mb-4 mt-6 overflow-hidden max-w-sm">
                <div className='p-8'>
                    <h2 className="text-lg font-semibold mb-4 text-gray-900">Payment Successful</h2>
                    <div className="flex justify-center items-center gap-4 mb-4">
                        <span className="text-4xl font-bold">₹299</span>
                        <img src={tick} alt="success" className='w-8 h-8' />
                    </div>
                    <p className="text-sm text-gray-800 font-[500]">Nine Hundred Ninety Nine Only</p>
                </div>
                <div className="h-2 w-full mt-2 bg-[#03b7f9]"></div>
                <div className="h-2 w-full bg-[#022975]"></div>
            </div>

            {/* Details card */}
            <div className="w-full h-full px-8 py-4 relative w-full max-w-sm aspect-square bg-cover bg-center" style={{ backgroundImage: `url(${paytmDetailsSection})`, backgroundSize: 'cover', }}>

                {/* To */}
                <div className="flex justify-between items-center mb-2 h-[30%]">
                    <div>
                        <p className="font-semibold">To: Fashion Friday</p>
                        <p className="text-sm text-gray-600">UPI ID:fashionfriday.co@oksbi</p>
                    </div>
                    <div className="bg-pink-200 text-pink-800 w-10 h-10 flex items-center justify-center rounded-full text-md font-bold">
                        FF
                    </div>
                </div>

                {/* From */}
                <div className="flex justify-between items-center mb-2 h-[30%] ">
                    <div>
                        <p className="font-semibold">From: Salmanul Faris K</p>
                        <p className="text-sm text-gray-600">State Bank Of India - 7879</p>
                    </div>
                    <div className="bg-blue-200 text-blue-800 w-10 h-10 flex items-center justify-center rounded-full text-md font-bold">
                        SF
                    </div>
                </div>

                {/* UPI Ref */}
                <div className="flex flex-col h-[30%] col">
                    <p>UPI Ref No: <span className='tracking-widest'> 6874603 <span className='font-[700]'>88171</span> </span></p>
                    <p className='text-gray-600 text-sm'>07:28 PM, 07 Jul 2025</p>
                </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
                <img
                    src={paytmGrayLogo}
                    alt="paytm logo"
                    className="w-12 h-auto"
                />
                |
                <div className='flex justify-center items-center flex-row text-[8px]'>
                    <p className='text-end font-bold leading-none'>Powered <br /> by</p>
                    <img
                        src={upiGrayLogo}
                        alt="paytm logo"
                        className="w-12 h-auto"
                    />
                </div>
                |
                <img
                    src={hdfcGrayLogo}
                    alt="paytm logo"
                    className="w-14 h-auto"
                />
            </div>
        </div>
    )
}
