export default function Experience() {
  return (
    <div className="flex flex-col md:flex-row pt-17 min-h-screen bg-gradient-to-r from-purple-100 to-purple-300">
      
      {/* Sidebar */}
      <div className="bg-purple-800 text-white flex items-center justify-center md:flex-col px-4 py-4 md:py-0 w-full md:w-32 rounded-b-full md:rounded-r-full md:rounded-b-none">
        <h1 className="text-3xl md:text-6xl font-bold tracking-wide transform md:-rotate-90 text-center">
          EXPERIENCE
        </h1>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-8 flex flex-col sm:flex-wrap sm:flex-row justify-center gap-6 md:gap-8">
        
        {/* Education Card */}
        <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 border border-gray-200 w-full max-w-md">
          <h2 className="text-xl sm:text-2xl font-bold text-purple-800 mb-4 text-center">EDUCATION</h2>

          <div className="mb-4">
            <p className="font-semibold text-sm sm:text-base">2023-2026</p>
            <p className="font-bold text-purple-800 text-sm sm:text-base">
              VIDYALANKAR SCHOOL OF INFORMATION TECHNOLOGY
            </p>
            <p className="text-xs sm:text-sm">(Bachelor of Science in Information Technology)</p>
          </div>

          <div>
            <p className="font-semibold text-sm sm:text-base">2023-2026</p>
            <p className="font-bold text-purple-800 text-sm sm:text-base">
              SANPADA COLLEGE OF COMMERCE & TECHNOLOGY
            </p>
            <p className="text-xs sm:text-sm">(Higher Secondary [Science])</p>
          </div>
        </div>

        {/* Work Experience Card */}
        <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 border border-gray-200 w-full max-w-md">
          <h2 className="text-xl sm:text-2xl font-bold text-purple-800 mb-4 text-center">WORK EXPERIENCE</h2>

          <p className="font-semibold text-sm sm:text-base">May 2025 - Present</p>
          <p className="font-bold text-purple-800 text-sm sm:text-base">
            VHYXARA (PRE INCORPORATION STARTUP)
          </p>
          <ul className="text-xs sm:text-sm list-disc list-inside mt-2">
            <li>Contributed to building the MVP of a pre-incorporation startup using React.js and Next.js</li>
            <li>Received regular mentorship and feedback from the founder</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
