// components/ProjectCard.tsx
'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectCard() {
  return (
    <div className="relative min-h-screen bg-gradient-to-r from-purple-100 to-purple-300">
      <div className="flex flex-col md:flex-row items-center justify-center pt-4 md:pt-0">
        
        {/* Side Title */}
        <div className="
          w-full md:w-32
          bg-purple-700
          flex items-center justify-center
          p-4 md:p-0
          my-8 md:my-0 md:mr-8
          md:min-h-screen md:shrink-0
          rounded-3xl md:rounded-r-full
        ">
          <h2 className="
            text-white
            text-3xl md:text-4xl
            font-bold
            tracking-wide
            text-center
            md:rotate-[-90deg] md:text-left
          ">
            PROJECT
          </h2>
        </div>

        {/* Decorative elements */}
        <div className="hidden lg:block absolute left-[30%] top-[30%] w-64 h-64 bg-purple-700 rounded-[20%] rotate-45 opacity-70"></div>
        <div className="hidden lg:grid absolute left-[28%] top-[68%] grid-cols-7 gap-2 opacity-70">
          {Array.from({ length: 49 }).map((_, i) => (
            <div key={i} className="w-3 h-3 bg-purple-700 rounded-full" />
          ))}
        </div>

        {/* Project Card as Link */}
        <Link href="https://eshopinin.netlify.app/" className="z-10 w-full max-w-sm md:max-w-xl mx-auto mt-24 hover:scale-105 transition-transform duration-300">
          <div className="bg-gray-100 rounded-xl shadow-lg p-6 md:p-8 w-full cursor-pointer">
            <h3 className="text-xl md:text-2xl font-bold text-purple-700 mb-3 md:mb-4 text-center">Ecommerce Website</h3>

<Image src="/myproj.jpg" alt="My project" width={400} height={300} />
            <p className="text-sm text-gray-800 mb-2">
              Created a dummy eCommerce website as a personal practice project to enhance my skills in React JS and Tailwind CSS.
            </p>
            <p className="font-bold text-sm md:text-base">React JS</p>
            <p className="font-bold mb-3 md:mb-4 text-sm md:text-base">Tailwind CSS</p>
            <span className="inline-block bg-purple-700 text-white text-xs font-semibold px-3 py-1 rounded-full">PROJECT</span>
          </div>
        </Link>

      </div>
    </div>
  );
}
