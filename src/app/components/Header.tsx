"use client";

import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check if the code is running on the client-side
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme === "dark") {
        setDarkMode(true);
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, []);

  // Toggle dark mode
  useEffect(() => {
    if (darkMode) {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo on Left */}
          <a href="/" className="text-2xl font-bold text-gray-900 dark:text-white">
            <span className="text-[#0077b5]">M</span>ike<span className="text-[#0077b5]">.</span>
          </a>

          {/* Right side - Dark Mode Toggle & Navigation */}
          <div className="flex items-center space-x-4">
            {/* Dark Mode Button */}
            <button onClick={() => setDarkMode(!darkMode)} className="text-gray-900 hover:text-blue-500 dark:hover:text-blue-500 dark:text-white">
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Desktop Menu */}
            {/* <h1 className="hidden md:flex space-x-6">
              Read <Link href="/about">this page!</Link>
            </h1> */}
            <div className="hidden md:flex space-x-6">
              <a href="/about" className="text-gray-900 dark:text-white text-lg hover:text-blue-500 dark:hover:text-blue-500 transition duration-300">About</a>
              <a href="/MichaelDeLeon_ProductDesign_Resume.pdf" target="_blank" className="text-gray-900 dark:text-white text-lg hover:text-blue-500 dark:hover:text-blue-500 transition duration-300">Resume</a>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-900 dark:text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-4 space-y-4">
          <a href="/about" className="block">About</a>
          <a href="/MichaelDeLeon_ProductDesign_Resume.pdf" target="_blank" className="block">Resume</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
