import React from 'react';
import { data, useLocation } from "react-router-dom";


import upiLogo from '../assets/upiLogo.webp';
import {formatDateTime} from '../utils/helpers.js';
import { amtFormate } from "../utils/helpers";


export default function PaymentSuccessScreen() {

    const location = useLocation();
    const formData = location.state || {};
    const { receiverName, senderName, amount, dateTime } = formData;


    return (
        <div className="max-w-sm min-h-screen dark:bg-[#262626] text-white font-sans flex flex-col items-center relative">
            {/* Header */}
            <div className="w-full bg-[#28A745] text-center pt-5 h-[40vh] relative flex flex-col items-center ">
                <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center items-center mb-4">
                    <div className="w-14 h-14 bg-white  rounded-full flex items-center justify-center">
                        <span className="material-symbols-outlined text-[#28A745] text-5xl font-bold">
                            check
                        </span>
                    </div>
                </div>
                <h2 className="text-md font-[500]">Payment Successful</h2>
                <p className="text-sm text-[#f9ffaf]">{formatDateTime(dateTime)}</p>
            </div>

            {/* User Info Card */}
            <div className="w-full p-2 absolute top-[22vh]">
                <div className="w-full bg-white dark:bg-[#191919] rounded-xl p-6 flex flex-col space-y-4 mb-6 shadow-md light:border-[1px] border-gray-200 ">
                    <div className="flex flex-col items-center justify-between">
                        <div className="flex items-start justify-start w-full ">
                            <div className="w-[60px] h-[60px] bg-[#5d19b9] dark:bg-[#27b4fc] rounded-3xl flex items-center justify-center text-2xl mr-6">
                                FF
                            </div>
                            <div className='flex flex-col w-[70%]'>
                                <div>
                                    <h3 className="text-xl font-bold dark:text-white text-[#1e1e1e]">{receiverName}</h3>
                                    <p className="text-sm text-[#6c6c6c] dark:text-gray-400">fashionfriday.co@oksbi</p></div>

                                <div className="flex items-center justify-between w-full mt-2">
                                    <div className="text-2xl font-semibold text-[#1e1e1e] dark:text-white">{`₹${amtFormate(amount)}`}</div>
                                    <button className="text-[#5d19b9] dark:text-[#853cd8] text-sm font-semibold">Split Expense</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center mt-2 border-t-[1px] dark:border-gray-800 border-gray-200 pt-4 justify-between">
                        <button className="flex items-center text-sm text-white gap-3 border-r-[1px] dark:border-gray-800 border-gray-200 w-[50%]">
                            <div className="bg-[#ceaeff] dark:bg-[#853cd8] dark:bg-opacity-30 bg-opacity-30 p-2 rounded-full w-[45px] h-[45px] flex items-center justify-center text-[#853cd8]">
                                <span className="material-symbols-outlined">
                                    article
                                </span>
                            </div>
                            <p className='text-xs text-[#6c6c6c] dark:text-gray-400'>View Details</p>
                        </button>
                        <button className="flex items-center text-sm text-white gap-3 w-[50%] pl-4">
                            <div className="bg-[#ceaeff] dark:bg-[#853cd8] dark:bg-opacity-30 bg-opacity-30 p-2 rounded-full w-[45px] h-[45px] flex items-center justify-center text-[#853cd8]">
                                <span className="material-symbols-outlined">
                                    share
                                </span>
                            </div>
                            <p className='text-xs text-[#6c6c6c] dark:text-gray-400'>Share Receipt</p>
                        </button>
                    </div>
                </div>
                <div className="w-full flex items-center justify-center">
                    <img src={upiLogo} alt="upi" className='w-10' />
                </div>

            </div>
        </div>
    );
}
