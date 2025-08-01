import React, { useState, useEffect } from "react";
import { data, useLocation } from "react-router-dom";

import paytmLogo from '../assets/Paytm_Logo.png';
import tick from '../assets/paytm_tick.webp';
import paytmDetailsSection from '../assets/paytm_detail_section.png';
import paytmGrayLogo from '../assets/paytmGrayLogo.webp';
import upiGrayLogo from '../assets/upiGrayLogo.webp';
import hdfcGrayLogo from '../assets/hdfcGrayLogo.webp';
import { amtFormate } from "../utils/helpers";
import {formatDateTime} from "../utils/helpers";
import {generateAcNo} from "../utils/helpers";
import amountInWords from "../utils/amoutInWords";
import getInitials from "../utils/getFirstLetter";

export default function PaytmSuccessPage() {
    const location = useLocation();
    const formData = location.state || {};

    const { first: receiverFirst, second: receiverSecond } = getInitials(formData.receiverName);
    const { first: senderFirst, second: senderSecond } = getInitials(formData.senderName);

    return (
        <div className="min-h-screen flex flex-col items-center justify-start pt-8 font-sans text-black bg-cover bg-center px-3">            {/* Paytm logo */}
            <img src={paytmLogo} alt="Paytm Logo" className='w-[80px] h-auto' />
            {/* Blue card */}
            <div className="w-full bg-[#e1f5fe] rounded-t-[14px] text-center mb-4 mt-6 overflow-hidden max-w-sm">
                <div className='p-8'>
                    <h2 className="text-2xl font-semibold mb-4 text-gray-900">Payment Successful</h2>
                    <div className="flex justify-center items-center gap-4 mb-4">
                        <span className="text-4xl font-bold">{`₹${amtFormate(formData.amount) || 0}`}</span>
                        <img src={tick} alt="success" className='w-8 h-8' />
                    </div>
                    <p className="text-sm text-gray-800 font-[410]">{`Rupees ${amountInWords(formData.amount || 0)} Only`}</p>
                </div>
                <div className="h-2 w-full mt-2 bg-[#03b7f9]"></div>
                <div className="h-2 w-full bg-[#022975]"></div>
            </div>

            {/* Details card */}
            <div className="w-full h-full px-8 py-4 relative w-full max-w-sm aspect-square bg-cover bg-center" style={{ backgroundImage: `url(${paytmDetailsSection})`, backgroundSize: 'cover', }}>

                {/* To */}
                <div className="flex justify-between items-center mb-2 h-[30%]">
                    <div>
                        <p className="font-[410] text-gray-700 text-lg">To: <span className="font-semibold text-gray-900">{formData.receiverName}</span></p>
                        <p className="text-md font-[410] text-gray-700">UPI ID: fashionfriday.co@oksbi</p>
                    </div>
                    <div className="bg-pink-200 text-pink-800 w-10 h-10 flex items-center justify-center rounded-full text-lg font-bold uppercase">
                        {receiverFirst}{receiverSecond}
                    </div>
                </div>

                {/* From */}
                <div className="flex justify-between items-center mb-2 h-[30%] ">
                    <div>
                        <p className="font-[410] text-gray-700 text-lg">From: <span className="font-semibold text-gray-900 capitalize">{formData.senderName}</span></p>
                        <p className="text-md font-[410] text-gray-700">{`${formData.senderBank} - ${generateAcNo()}`}</p>
                    </div>
                    <div className="bg-blue-200 text-blue-800 w-10 h-10 flex items-center justify-center rounded-full text-lg font-bold uppercase">
                        {senderFirst}{senderSecond}
                    </div>
                </div>

                {/* UPI Ref */}
                <div className="flex flex-col h-[30%] col">
                    <p className="text-gray-700 font-[410] text-lg">UPI Ref. No: <span className='tracking-widest'> {`${formData.upiTransactionId}`} <span className='font-[900] text-gray-900'>{`${formData.upiTransactionId.slice(7)}`}</span> </span></p>
                    <p className='text-gray-600 text-md'>{`${formatDateTime(formData.dateTime)}`}</p>
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
