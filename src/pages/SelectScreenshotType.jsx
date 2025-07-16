import React, { useState } from "react";
import NavBar from "../components/NavBar";
import { useNavigate, useParams } from "react-router-dom";

export default function SelectScreenshotType() {
  const { platform } = useParams();

  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-white dark:bg-black text-black flex flex-col items-center justify-center px-4 font-sans">
      <NavBar />
      <div className="w-full text-center shadow-md rounded-2xl mb-14">
        <h1 className="text-4xl font-extrabold uppercase text-center text-[#1e40af] dark:text-white p-2">
          Select <br /> Screenshot Type
        </h1>
        <p className="mb-8 dark:text-gray-500">Choose what you want to create.</p>
      </div>

      <button
        className="w-full bg-white dark:bg-gray-900 text-[#1e40af] dark:text-white p-4 rounded-2xl mb-4 flex items-center justify-between text-xl font-bold shadow-around-md"
        onClick={() => navigate(`/${platform}/success/input`)}
      >
        <div className="w-20 h-20 rounded-2xl bg-white dark:bg-black flex items-center justify-center ">
          <span className="material-symbols-outlined text-5xl shadow-around-md p-4 rounded-full ">
            check_circle
          </span>
        </div>
        <p className="w-4/5">
          Instant Success <br /> Page Screenshot
        </p>
      </button>

      <button
        className="w-full bg-white dark:bg-gray-900 text-[#1e40af] dark:text-white p-4 rounded-2xl mb-4 flex items-center justify-between text-xl font-bold shadow-around-md"
        onClick={() => navigate(`/${platform}/receipt/input`)}
      >
        <div className="w-20 h-20 rounded-2xl bg-white dark:bg-black flex items-center justify-center ">
          <span className="material-symbols-outlined text-5xl shadow-around-md p-4 rounded-full ">
            receipt
          </span>
        </div>
        <p className="w-4/5 ">Receipt Page Screenshot</p>
      </button>

      {platform == "paytm" ? (
        <button
          className="w-full bg-white dark:bg-gray-900 text-[#1e40af] dark:text-white p-4 rounded-2xl mb-4 flex items-center justify-between text-xl font-bold shadow-around-md"
          onClick={() => navigate(`/${platform}/latest_success/input`)}
        >
          <div className="w-20 h-20 rounded-2xl bg-white dark:bg-black flex items-center justify-center ">
          <span className="material-symbols-outlined text-5xl shadow-around-md p-4 rounded-full ">
              fiber_new
            </span>
          </div>
          <p className="w-4/5 ">Latest Success Page Screenshot</p>
        </button>
      ) : null}

    </div>
  );
}
