import React from "react";

export default function PlatformCard({ platform, onClick }) {
  return (
    <div 
      className="border p-4 rounded shadow-lg dark:shadow-md dark:shadow-blue-300/100 hover:bg-blue-100 cursor-pointer rounded-xl transition-colors duration-500 hover:scale-105 transition-transform duration-500 dark:bg-white"
      onClick={onClick}
    >
      <img src={platform.logo} alt={`${platform.name} logo`} className="mb-2 rounded-xl" />
      <h2 className="text-lg font-semibold">{platform.name}</h2>
      <p className="text-sm text-gray-600">{platform.description}</p>
    </div>
  );
}
