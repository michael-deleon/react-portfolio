'use client'; // Add this line at the top

import React, { useState, useEffect } from 'react';

const BackToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-16 right-6 p-4 rounded-full bg-transparent text-white border-2 border-transparent shadow-lg transition-transform ${
        showButton ? 'opacity-100' : 'opacity-0'
      } hover:border-gray-500 hover:bg-transparent hover:text-black focus:outline-none dark:border-gray-500 dark:hover:border-white dark:hover:bg-transparent dark:hover:text-black`}
      aria-label="Scroll to top"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-6 h-6 m-auto text-black dark:text-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 9l-7-7-7 7"
        />
      </svg>
    </button>
  );
};

export default BackToTopButton;
