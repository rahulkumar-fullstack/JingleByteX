"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
  };

  // Drawer Navigation Links
  const drawer = (
    <>
      {[
        { href: "/wishlist", label: "Wishlist" },
        { href: "/logistics", label: "Logistics" },
        { href: "/recipes", label: "Recipes" },
        { href: "/light-decorator", label: "Light Decorator" },
        { href: "/virtual-card", label: "Virtual Card" },
      ].map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="block px-4 py-2 text-gray-900 dark:text-gray-100 
                     transition-all duration-300 ease-in-out
                     hover:text-blue-600 dark:hover:text-yellow-500 
                     hover:scale-105 hover:translate-x-1"
        >
          {link.label}
        </Link>
      ))}
    </>

  );

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between md:justify-start">
        {/* Mobile: Menu Icon */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="block md:hidden me-2 text-gray-900 dark:text-gray-100"
          aria-label="Menu"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>

        {/* Mobile: Centered Logo */}
        <div className="flex-1 md:flex-none flex justify-center md:justify-start">
          <Link href="/" className="flex items-center mx-1">
          <Image
            src="/jinglebytex_logo.svg"
            alt="Logo"
            className="bg-black dark:bg-gray-900 rounded-lg px-2"
            width={60}
            height={40}
            style={{
                height: "auto",
                width: "80%",
                objectFit: "contain", 
              }}
          />
       
          </Link>
        </div>

        {/* Desktop: Navigation Links */}
        <nav className="hidden md:flex space-x-4 flex-grow">{drawer}</nav>

        {/* Dark Mode Button */}
        <button
          onClick={toggleDarkMode}
          className="p-2 w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
          aria-label="Toggle Dark Mode"
        >
          <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-gray-100 dark:bg-gray-800">
          <ul className="space-y-2 p-4 text-center">{drawer}</ul>
        </nav>
      )}
    </header>
  );
}
