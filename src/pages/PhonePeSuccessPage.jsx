import React from 'react';
import upiLogo from '../assets/upiLogo.webp';

export default function PaymentSuccessScreen() {
    return (
        <div className="max-w-sm min-h-screen bg-[#262626] text-white font-sans flex flex-col items-center relative">
            {/* Header */}
            <div className="w-full bg-[#28A745] text-center pt-5 h-[40vh] relative flex flex-col items-center ">
                <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center items-center mb-4">
                    <div className="w-14 h-14 bg-white  rounded-full flex items-center justify-center">
                        <span class="material-symbols-outlined text-[#28A745] text-5xl font-bold">
                            check
                        </span>
                    </div>
                </div>
                <h2 className="text-md font-[500]">Payment Successful</h2>
                <p className="text-sm text-[#f9ffaf]">12 July 2025 at 02:10 PM</p>
            </div>

            {/* User Info Card */}
            <div className="w-full p-2 absolute top-[23vh]">
                <div className="w-full bg-[#191919] rounded-xl p-6 flex flex-col space-y-4 mb-4 ">
                    <div className="flex flex-col items-center justify-between">
                        <div className="flex items-start justify-start w-full ">
                            <div className="w-[60px] h-[60px] bg-[#27b4fc] rounded-3xl flex items-center justify-center text-2xl mr-6">
                                FF
                            </div>
                            <div className='flex flex-col w-[70%]'>
                                <div>
                                    <h3 className="text-xl font-bold">Fashion Friday</h3>
                                    <p className="text-sm text-gray-400">XXXXXX9093</p></div>

                                <div className="flex items-center justify-between w-full mt-2">
                                    <div className="text-2xl font-semibold">₹10,990</div>
                                    <button className="text-[#853cd8] text-sm font-medium">Split Expense</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center mt-2 border-t-[1px] border-gray-800 pt-4 justify-between">
                        <button className="flex items-center text-sm text-white gap-2 border-r-[1px] border-gray-800 w-[50%]">
                            <div className="bg-[#853cd8] bg-opacity-30 p-3 rounded-full w-[45px] h-[45px] flex items-center justify-center text-[#853cd8]">
                                <span class="material-symbols-outlined">
                                    article
                                </span>
                            </div>
                            View Details
                        </button>
                        <button className="flex items-center text-sm text-white gap-2 w-[50%] pl-2">
                            <div className="bg-[#853cd8] bg-opacity-30 p-3 rounded-full w-[45px] h-[45px] flex items-center justify-center text-[#853cd8]">
                                <span class="material-symbols-outlined">
                                    share
                                </span>
                            </div>
                            Share Receipt
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
