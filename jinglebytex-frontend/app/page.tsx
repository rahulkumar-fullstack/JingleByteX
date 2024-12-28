"use client";

import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
        Hello, Dark Mode!
      </h1>
      <button
        onClick={toggleDarkMode}
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-md dark:bg-gray-700"
      >
        Toggle Dark Mode
      </button>
    </div>
  );
}
