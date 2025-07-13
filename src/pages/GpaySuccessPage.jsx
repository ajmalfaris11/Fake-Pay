import React from 'react';

export default function GpaySuccessPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 font-sans">
      
      {/* Blue check circle */}
      <div className="w-[86px] h-[86px] rounded-full bg-[#0b57cf] flex items-center justify-center mb-6 max-w-sm">
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
      <div className="text-[32px] mb-6 mt-10 text-gray-300">₹1.00</div>

      {/* Paid to */}
      <div className="text-[15px] text-gray-500 mb-1">Paid to</div>
      <div className="text-[22px]  text-gray-300 tracking-wide">
        AJMAL FARIS K
      </div>

      {/* PhonePe VPA */}
      <div className="text-[14px] text-gray-400">
        Gpay • fashionfriday.co@oksbi
      </div>

      {/* Date and time */}
      <div className="text-[14px] text-gray-400 mt-1">12 July 2025, 2:25 pm</div>
    </div>
  );
}
