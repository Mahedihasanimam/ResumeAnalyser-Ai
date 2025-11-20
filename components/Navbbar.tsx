import Image from 'next/image';
import React from 'react';

function Navbbar() {
    return (
        <nav className="flex items-center justify-between p-4 bg-white border-b border-gray-200">
            {/* Left: Google Logo + Product Name */}
            <div className="flex items-center space-x-4">
                <Image
                    src="/googlelogo.png"
                    alt="Google"
                    width={180}
                    height={180}
                    className="rounded-full"
                />
                <div className="h-8 w-px bg-gray-300"></div>
                <span className="text-xl text-gray-700 font-medium">Resume Analyzer</span>
            </div>

            {/* Center: Navigation Links - Google Style */}
            <div className="hidden md:flex items-center space-x-0 bg-gray-50 rounded-lg p-1 border border-gray-200">
                <a href="#" className="px-4 py-2 text-sm text-gray-600 font-medium transition-all duration-300 relative group">
                    Features
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#4285F4] to-[#34A853] group-hover:w-full transition-all duration-300"></span>
                    <span className="absolute -bottom-1 -right-1 w-2 h-2 bg-[#4285F4] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100"></span>
                </a>
                <a href="#" className="px-4 py-2 text-sm text-gray-600 font-medium transition-all duration-300 relative group">
                    Pricing
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#EA4335] to-[#FBBC05] group-hover:w-full transition-all duration-300"></span>
                    <span className="absolute -bottom-1 -right-1 w-2 h-2 bg-[#EA4335] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100"></span>
                </a>
                <a href="#" className="px-4 py-2 text-sm text-gray-600 font-medium transition-all duration-300 relative group">
                    Success Stories
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#FBBC05] to-[#34A853] group-hover:w-full transition-all duration-300"></span>
                    <span className="absolute -bottom-1 -right-1 w-2 h-2 bg-[#FBBC05] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100"></span>
                </a>
                <a href="#" className="px-4 py-2 text-sm text-gray-600 font-medium transition-all duration-300 relative group">
                    For Employers
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#34A853] to-[#4285F4] group-hover:w-full transition-all duration-300"></span>
                    <span className="absolute -bottom-1 -right-1 w-2 h-2 bg-[#34A853] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100"></span>
                </a>
            </div>

            {/* Right: CTA Button - Google Blue */}
            <div className="flex items-center space-x-4">
                <button className="bg-transparent hover:bg-gray-50 border border-[#dadce0] hover:border-gray-400 text-sm font-medium px-6 py-2.5 rounded-md transition-all duration-200 flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span className="font-medium text-lg">
                        <span className="text-[#4285F4]">A</span>
                        <span className="text-[#EA4335]">n</span>
                        <span className="text-[#FBBC05]">a</span>
                        <span className="text-[#4285F4]">l</span>
                        <span className="text-[#34A853]">y</span>
                        <span className="text-[#EA4335]">z</span>
                        <span className="text-gray-600"> </span>
                        <span className="text-[#4285F4]">R</span>
                        <span className="text-[#EA4335]">e</span>
                        <span className="text-[#FBBC05]">s</span>
                        <span className="text-[#34A853]">u</span>
                        <span className="text-[#EA4335]">m</span>
                        <span className="text-[#4285F4]">e</span>
                    </span>
                </button>

                {/* Mobile menu button */}
                <button className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </nav>
    );
}

export default Navbbar;