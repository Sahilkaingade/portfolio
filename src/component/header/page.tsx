'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa'; // Removed FaMoon, FaSun as they are no longer needed

const Header = () => {
  // Removed darkMode state and useEffects related to dark/light mode
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-purple-600 dark:text-white">Sahil Kaingade</h1>

        {/* Desktop Nav */}
        <nav className="space-x-6 hidden md:flex">
          <Link href="/" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition">Home</Link>
          <Link href="/pages/experience" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition">Experience</Link>
          <Link href="/pages/project" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition">Projects</Link>
          <Link href="/pages/skills" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition">Skills</Link>
        </nav>

        <div className="flex items-center space-x-4">
          {/* Removed the dark/light mode toggle button */}

          <Link
            href="/pages/contact"
            className="hidden md:inline-block bg-purple-600 text-white px-4 py-2 rounded-4xl w-30 text-center hover:bg-purple-700 transition"
          >
            Contact
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-600 dark:text-white text-2xl"
            aria-label="Toggle Menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-md">
          <nav className="flex flex-col items-center space-y-4 py-4">
            <Link href="/" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link href="/pages/experience" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition" onClick={() => setMenuOpen(false)}>Experience</Link>
            <Link href="/pages/project" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition" onClick={() => setMenuOpen(false)}>Projects</Link>
            <Link href="/pages/skills" className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition" onClick={() => setMenuOpen(false)}>Skills</Link>
            <Link
              href="/pages/contact"
              className="bg-purple-600 text-white px-4 py-2 rounded-4xl w-30 text-center hover:bg-purple-700 transition"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;