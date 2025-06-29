'use client';

import React from 'react';
import { FaPlay } from 'react-icons/fa';
import Link from 'next/link'; // Keep Link for the HIRE ME button
import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-white dark:bg-[#0f172a] overflow-hidden">
      {/* Left Circle */}
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute top-0 left-0 w-[200px] h-[200px] rounded-br-full bg-[#6b21a8] md:w-[250px] md:h-[250px]"
      ></motion.div>

      {/* Bottom Circle */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="absolute bottom-20 left-10 w-[60px] h-[60px] bg-[#6b21a8] rounded-full"
      ></motion.div>

      {/* Right Rotated Square */}
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute right-1 md:right-57 top-100 md:top-42 w-[100px] md:w-[350px] h-[100px] md:h-[350px] bg-[#6b21a8] rotate-45 rounded-[30px] z-0"
      ></motion.div>

      {/* Content */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="relative z-10 text-center max-w-2xl mt-10 md:mt-0 pt-16"
      >
        <p className="text-gray-500 text-sm tracking-widest">- HELLO</p>
        <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white">
          I’m Sahil Kaing<span className="text-white">ade</span>
        </h1>
        <h2 className="mt-2 text-2xl md:text-3xl font-bold text-black dark:text-white">
          WEB DEVELOPER
        </h2>
        <p className="mt-4 text-gray-700 dark:text-gray-300 text-sm">
          I’m a passionate web developer with the relevant industry skills and with some Re<span className='text-white'>actJS projects</span>
        </p>

        {/* Buttons */}
        <div className="mt-6 flex justify-center gap-4">
          <motion.a // Changed from motion.button to motion.a
            href="/Sahil_Kaingade_Portfolio.pdf" // Path to your portfolio file in the public folder
            download="Sahil_Kaingade_Portfolio.pdf" // Suggested filename for the downloaded file
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#6b21a8] text-white px-6 py-2 rounded-full flex items-center gap-2 hover:bg-[#6b21a8] transition"
            // No onClick needed as href and download handle it
          >
            <FaPlay className="text-xs" />
            PORTFOLIO
          </motion.a>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="border px-6 py-2 rounded-full border-black dark:border-white text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            <Link href="/pages/contact">
              HIRE ME
            </Link>
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}