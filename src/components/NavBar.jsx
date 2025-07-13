// src/components/ThemeToggle.jsx
import React from "react";
import { useState } from "react";

import logo from "../assets/fakePayLogo.webp";

export default function NavBar() {


  const [isDarkMode, setIsDarkMode] = useState(
    document.documentElement.classList.contains("dark")
  );

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    setIsDarkMode(!isDarkMode);
  };

  return (
    <nav className="bg-[#1e40af] p-4 text-white text-center w-full flex justify-between items-center fixed top-0 z-50 px-4">
      <span className="material-symbols-outlined">
        sort
      </span>

      <img src={logo} alt="Fake Pay Logo" className="w-36 md:w-52 mx-auto" />

      <button
        onClick={toggleDarkMode}
        className="flex items-center w-8 h-8 justify-center rounded-full bg-white text-[#1e40af]"
      >
        {isDarkMode ? (
          <span className="material-symbols-outlined text-xl">light_mode</span>
        ) : (
          <span className="material-symbols-outlined text-xl">moon_stars</span>
        )}
      </button>
    </nav>
  );
}
