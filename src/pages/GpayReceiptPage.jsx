// src/pages/SuccessPagePlatform1.jsx
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { bankList } from "../data/bankList";

import { amtFormate } from "../utils/helpers";
import { generateAcNo } from "../utils/helpers";
import {formatDateTime} from "../utils/helpers";

import ffLogo from "../assets/ffLogo.webp";
import upiLogo from "../assets/upiLogo.webp";

export default function GpayReceiptPage() {

  const location = useLocation();
  const formData = location.state || {};
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



  // Find the matching bank
  const selectedBank = bankList.find(
    (bank) => bank.name === formData.senderBank
  );


  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-white text-center px-4 font-sans dark:bg-[#131313]">
      {/* Navigation Bar */}
      <div
        className={`flex justify-between items-center w-full mb-4 fixed px-4 transition-colors duration-300 ${isScrolled ? "bg-[#f3f6fd] shadow" : "bg-transparent"} py-5 text-gray-800 dark:text-[#e5e5e5]`}
      >
        <span className="material-symbols-outlined">arrow_back</span>
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined">flag</span>
          <span className="material-symbols-outlined text-gray-800 dark:text-[#c2c2c2]">more_vert</span>
        </div>
      </div>

      {/* Logo */}
      <img
        src={ffLogo}
        alt="Fashion Friday"
        className="w-[55px] h-[55px] mb-4 rounded-full mt-20"
      />

      {/* Merchant name & number */}
      <h1 className="text-lg font-medium text-gray-800 dark:text-[#dcdcdc]">
        To {formData.receiverName || "Fashion Friday"}
      </h1>
      <p className="text-gray-600 mb-2 dark:text-[#cfcfcf]">+91 75589 69093</p>

      {/* Amount */}
      <div className="flex text-gray-900 dark:text-[#e6e6e6]">
        <span className="font-mukta text-[40px] mt-2 font-[400]">₹</span>
        <span className="font-inter text-[50px] font-normal ">
          {amtFormate(formData.amount) || 999}
        </span>
      </div>

      {formData.message && (
        <div className="text-center bg-[#f9fafe] dark:bg-[#1b1b1b] rounded-xl px-6 py-2 flex flex-col items-center justify-center my-2">
          <p className="text-sm text-gray-800 dark:text-[#b6b6b6]">{formData.message}</p>
        </div>
      )}


      {/* Pay again button */}
      <button className="bg-[#0b57cf] dark:bg-[#7ca2ee] text-white dark:text-[#0b2353] rounded-full px-6 py-1.5 flex justify-center items-center mb-5 pb-2.5 mt-4">
        Pay again
      </button>

      {/* Status */}
      <div className="flex items-center justify-center gap-2 mb-2">
        <span className="w-4 h-4 bg-[#1f893d] rounded-full flex justify-center items-center text-white">
          <span className="material-symbols-outlined text-[16px]">
            check_small
          </span>
        </span>
        <span className="text-sm text-gray-800 dark:text-[#e6e6e6]">Completed</span>
      </div>

      <hr className="w-48 border-t border-gray-400 dark:border-gray-600 mb-3.5 mt-2" />

      {/* Date & Time */}
      <p className="text-sm text-gray-900 mb-8 dark:text-[#e6e6e6]">
        {formatDateTime(formData.dateTime)}
      </p>

      {/* Transaction card */}
      <div className="w-full max-w-md border border-gray-400 dark:border-gray-600 rounded-xl shadow-sm">
        <div className="flex items-center justify-between px-4 py-4 border-b border-gray-400 dark:border-gray-600">
          <div className="flex items-center gap-2">
            <div className="w-12 h-8 rounded-md flex items-center justify-center border border-gray-400 dark:border-gray-600  mr-2 bg-white">
              <img
                src={selectedBank.logo}
                alt={selectedBank.name}
                className="h-full"
              />
            </div>
            <span className="text-[17px] text-gray-800 dark:text-[#e6e6e6] font-medium">
              {formData.senderBank} {generateAcNo()}
            </span>
          </div>
          <span className="text-gray-700 flex justify-center items-center dark:text-[#e6e6e6]">
            <span className="material-symbols-outlined">
              keyboard_arrow_down
            </span>
          </span>
        </div>

        <div className="px-4 py-3 text-left text-sm text-gray-700 dark:text-[#e6e6e6]">
          <p className="mb-2">
            <span className="font-[500] text-gray-800 dark:text-[#e6e6e6]">
              UPI transaction ID
            </span>
            <br />
            {formData.upiTransactionId || "NA"}
          </p>
          <p className="mb-2">
            <span className="font-[500] text-gray-800 dark:text-[#e6e6e6]">
              To: AJMAL FARIS K
            </span>
            <br />
            Google Pay • fashionfriday.co@oksbi
          </p>
          <p className="mb-2">
            <span className="font-[500] text-gray-800 dark:text-[#e6e6e6]">
              {`From: ${formData.senderName} (${formData.senderBank})`}
            </span>
            <br />
            {`Google Pay • ${formData.senderName.replace(/\s+/g, '').toLowerCase()}${selectedBank.upiSuffix}`}
          </p>
          <p>
            <span className="font-[500] text-gray-800 dark:text-[#e6e6e6]">
              Google transaction ID
            </span>
            <br />
            {formData.googleTransactionId}
          </p>
        </div>
      </div>

      {/* Powered by UPI + GPay */}
      <div className="mt-6 mb-2">
        <img
          src={upiLogo}
          alt="Powered by UPI"
          className="h-4 mx-auto mb-1"
        />
      </div>
    </div>
  );
}
