import React from 'react'
import { useLocation } from 'react-router-dom';

import tick from '../assets/paytm_tick.webp';
import blueTick from '../assets/paytm_blue_tick.webp'
import sbi from '../assets/bankLogos/sbiLogo.webp'
import grayUpi from '../assets/upiGrayLogo.webp'

import { amtFormate } from "../utils/helpers";
import { generateAcNo } from "../utils/helpers";
import amountInWords from "../utils/amoutInWords";
import getInitials from "../utils/getFirstLetter";

import { bankList } from "../data/bankList";



export default function PaytmReceiptPage() {

    const location = useLocation();
    const formData = location.state || {};

    const { first: receiverFirst, second: receiverSecond } = getInitials(formData.receiverName.toUpperCase());
    const { first: senderFirst, second: senderSecond } = getInitials(formData.senderName.toUpperCase());

    // Find the matching bank
    const selectedBank = bankList.find(
        (bank) => bank.name === formData.senderBank
    );

    function formatDateTime(isoString) {
        const date = new Date(isoString);

        // Extract hours & minutes in local time
        let hours = date.getHours();
        const minutes = date.getMinutes();

        // AM/PM
        const ampm = hours >= 12 ? "PM" : "AM";
        hours = hours % 12;
        hours = hours ? hours : 12; // 0 should be 12

        // Format minutes to 2 digits
        const formattedMinutes = minutes.toString().padStart(2, "0");

        // Day, Month, Year
        const day = date.getDate().toString().padStart(2, "0");
        const month = date.toLocaleString("default", { month: "short" });
        const year = date.getFullYear();

        return `${hours}:${formattedMinutes} ${ampm}, ${day} ${month} ${year}`;
    }

    return (
        <div className="min-h-screen bg-white font-sans flex flex-col text-gray-800">
            {/* Top Bar */}
            <div className="flex justify-between items-center px-4 pt-3">
                <div className="flex justify-center gap-2 ">
                    <span className="material-symbols-outlined flex items-center">
                        west
                    </span>
                    <h1 className="font-semibold text-xl">Sent Successfully</h1>
                </div>
                <div className="flex space-x-4 text-[#03b7f9] text-xs font-semibold">
                    <button>Share</button>
                    <button>Help</button>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-4">
                {/* Amount Card */}
                <div className="bg-white rounded-xl shadow-sm border-[1.5px] px-4 py-6 mb-3">
                    <p className="text-xs text-gray-700 font-semibold mb-1">Amount</p>
                    <div className="flex items-center space-x-3 text-3xl font-bold text-black">
                        <span>{`₹${amtFormate(formData.amount)}`}</span>
                        <img src={tick} alt="success" className='w-7 h-7 brightness-125' />
                    </div>
                    <p className="text-xs text-gray-700 font-[500] mt-1">{`Rupee ${amountInWords(formData.amount)} Only`}</p>

                    <div className="flex items-center gap-4 mt-3">
                        <span className="flex items-center bg-green-100 text-gray-800 font-semibold px-4 py-1.5 rounded-full text-sm bg-opacity-50">
                            💵 Transfers
                        </span>
                        <button className="text-blue-500 text-sm font-semibold text-[#03b7f9]">Edit</button>
                    </div>

                    <hr className='border-gray-200 border-[1px] my-5' />

                    {/* To Section */}
                    <div className="flex justify-between items-start mb-6">
                        <div>
                            <p className='text-xs font-semibold text-gray-800 mb-1'>
                                To
                            </p>
                            <p className="font-bold flex items-center text-black">
                                {`${formData.receiverName}`} <img src={blueTick} alt="blue tick" className='w-4 ml-1.5' />
                            </p>
                            <p className="text-xs mt-1 font-[500] text-gray-700">
                                UPI ID: fashionfriday.co@oksbi on <br /> Google Pay
                            </p>
                            <div className="flex space-x-4 mt-4">
                                <button className="border-[1.8px] border-[#03b7f9] text-[#03b7f9] px-3 py-1 rounded-[6px] text-sm">
                                    Pay Again
                                </button>
                                <button className="border-[1.8px] border-[#03b7f9] text-[#03b7f9] px-3 py-1 rounded-[6px] text-sm">
                                    View History
                                </button>
                            </div>
                        </div>
                        <div className="w-11 h-11 rounded-full bg-pink-500 flex items-center justify-center text-pink-400 font-bold bg-opacity-30">
                            {`${receiverFirst}${receiverSecond}`}
                        </div>
                    </div>

                    <hr className='border-gray-200 border-[1px] my-5' />

                    {/* From Section */}
                    <div className="flex justify-between items-start">
                        <div>
                            <p className='text-xs font-semibold text-gray-800 mb-1'>
                                From
                            </p>
                            <p className="font-bold flex items-center text-black">
                                {`${formData.senderName}`}
                            </p>
                            <p className="text-xs mt-1 font-[500] text-gray-800">
                                {`UPI ID: ${formData.senderName.replace(/\s+/g, '').toLowerCase()}${selectedBank.upiSuffix}`}</p>
                            <p className="text-xs mt-1 font-[500] text-gray-800 flex align-center gap-1">
                                {`${selectedBank.name} - ${generateAcNo()}`} <img src={selectedBank.logo} alt="bank logo" className='w-3 h-3  mt-0.5' />
                            </p>
                            <p className="text-xs mt-1 font-[500] text-gray-800">
                                {`Paid at ${formatDateTime(formData.dateTime)}`}
                            </p>
                            <p className="text-xs mt-5 font-[500] text-gray-800">
                                {`UPI Ref No: ${formData.upiTransactionId}`} <span className="text-[#03b7f9] font-semibold ml-2">Copy</span>
                            </p>
                            <p className="text-[#03b7f9] text-sm mt-1 font-semibold">Payment Details </p>
                        </div>
                        <div className="w-11 h-11 rounded-full bg-pink-500 flex items-center justify-center text-pink-400 font-bold bg-opacity-30">
                            {`${senderFirst}${senderSecond}`}
                        </div>
                    </div>
                </div>
            </div>



            {/* Feedback */}
            <div className="px-4 mb-4">
                <div className="bg-[#f5f8ff] rounded-xl flex justify-between items-center px-4 py-3">
                    <p className="text-sm">Did you find this page useful?</p>
                    <div className="space-x-2">
                        <button className="text-lg bg-white p-1 rounded-md border border-gray-300">👍</button>
                        <button className="text-lg bg-white p-1 rounded-md border border-gray-300">👎</button>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-center gap-2 text-xs text-gray-500 sticky bg-white bottom-0">
                <div className='flex justify-center items-center flex-row text-[5px]'>
                    <p className='text-end font-bold leading-none'>Powered <br /> by</p>
                    <img
                        src={grayUpi}
                        alt="paytm logo"
                        className="w-8 h-auto"
                    />
                </div>
                |
                <img
                    src={sbi}
                    alt="paytm logo"
                    className="w-4 h-auto brightness-"
                />
                <p className='font-extrabold'>SBI</p>
            </div>

        </div>
    );
}
