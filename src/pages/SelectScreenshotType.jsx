import React, { useState } from "react";
import NavBar from "../components/NavBar";
import { useNavigate, useParams } from "react-router-dom";

export default function SelectScreenshotType() {
  const { platform } = useParams();

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-black flex flex-col items-center justify-center px-4 font-sans">
      <NavBar />
      <div className="text-center mb-14">
        <h1 className="text-4xl font-extrabold uppercase text-center text-[#1e40af]">
          Select Screenshot Type
        </h1>
        <p className="mb-8">Choose what you want to create.</p>
      </div>

      <button
        className="w-full bg-[#1e40af] text-white p-4 rounded-2xl mb-4 flex items-center justify-between text-xl font-bold"
        onClick={() => navigate(`/${platform}/success/input`)}
      >
        <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center">
          <span className="material-symbols-outlined text-[#1e40af] text-5xl">
            check_circle
          </span>
        </div>
        <p className="w-4/5">
          Instant Success <br /> Page Screenshot
        </p>
      </button>

      <button
        className="w-full bg-[#1e40af] text-white p-4 rounded-2xl mb-4 flex items-center justify-between text-xl font-bold"
        onClick={() => navigate(`/${platform}/receipt/input`)}
      >
        <div className="w-20 h-20 rounded-2xl bg-white flex items-center justify-center">
          <span className="material-symbols-outlined text-[#1e40af] text-5xl">
            receipt
          </span>
        </div>
        <p className="w-4/5">Receipt Page Screenshot</p>
      </button>
    </div>
  );
}
