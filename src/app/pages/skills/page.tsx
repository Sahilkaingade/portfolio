// 'use client' directive is important for client-side interactivity in Next.js
'use client';

import Image from 'next/image';
import { motion, Variants } from 'framer-motion'; // Import Variants type

import { useInView } from 'react-intersection-observer'; // For triggering animations on scroll

// Define the skill data
const skills = [
  { name: 'HTML', icon: '/html.png' }, // Make sure these paths are correct relative to your public directory
  { name: 'CSS', icon: '/css.png' },
  { name: 'JAVASCRIPT', icon: '/js.png' },
  { name: 'REACT JS', icon: '/react.png' },
  { name: 'TAILWIND CSS', icon: '/tailwind.png' },
  { name: 'NEXT JS', icon: '/next.png' },
];

// Animation variants for the skill cards
// You can optionally type this explicitly for better type checking:
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 100 }, // Start invisible and 100px below (more noticeable vertical slide)
  visible: {
    opacity: 1,
    y: 0, // Animate to original position
    transition: {
      type: 'spring', // Correctly specify the transition type here
      stiffness: 70,   // Spring specific properties
      damping: 12,     // Spring specific properties
      // duration: 0.7, // Optional: For 'spring' type, duration is often calculated.
                       // You can remove this line as it might be redundant or cause type issues
                       // if Framer Motion's types are very strict on 'spring' not having 'duration'.
    },
  },
};

export default function SkillsPage() {
  // Use useInView to detect when the grid comes into view
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.1, // Trigger when 10% of the component is visible
  });

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gradient-to-r from-purple-100 to-purple-300 transition-colors duration-500">
      {/* Sidebar / SKILLS Title */}
      <div className="
        pt-15 md:pt-0 w-full md:w-32 md:min-h-screen /* Full width on small, fixed width and min-height on md+ */
        bg-purple-800 text-white
        flex items-center justify-center
        p-4 md:p-0 /* Padding on small, no padding on md+ to allow full height */
        mb-8 md:mb-0 /* Margin below on small, no margin on md+ */
        rounded-xl md:rounded-r-full md:rounded-l-none /* Rounded full on small, specific on md+ */
        shrink-0 /* Prevent shrinking on larger screens */
      ">
        <h1 className="
          text-white
          text-4xl md:text-6xl /* Smaller on small screens, larger on md+ */
          font-bold tracking-wide
          text-center /* Center on small screens */
          md:transform md:-rotate-90 md:text-left /* Rotate and left align (effectively center) on md+ */
        ">
          SKILLS
        </h1>
      </div>

      {/* Skills Grid */}
      {/* Attach ref to the grid container to observe when it comes into view */}
      <div
        ref={ref}
        className="flex-1 flex items-center justify-center p-0 sm:p-6 /* Reduce padding on very small screens */ pt-35 sm:pt-15 /* Adjust top padding */"
      >
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 w-full max-w-5xl"
          // Animate the grid container to stagger its children
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'} // Use inView to control animation
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15, // Each child animates with a 0.15s delay (slightly increased for better visibility)
              },
            },
          }}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              className="
                bg-[#f5f5f5] dark:bg-white/10 backdrop-blur-md shadow-xl rounded-2xl
                p-6 sm:p-8 /* Adjust padding */
                w-full max-w-xs mx-auto /* Make cards responsive in width and center them */
                h-auto min-h-[220px] /* Responsive height, ensure min-height for consistent look */
                flex flex-col items-center justify-center
                transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl
                border border-gray-200 dark:border-gray-700
              "
              variants={cardVariants} // Apply the individual card animation variants
            >
              <Image
                src={skill.icon}
                alt={skill.name}
                width={100} /* Slightly smaller default size */
                height={100}
                className="mb-4 sm:mb-5 /* Adjust margin below image */"
              />
              <p className="text-lg font-bold text-[#463593] dark:text-white text-center">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}