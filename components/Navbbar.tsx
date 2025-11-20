'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

// Define the navigation links for reusability and to maintain the design
const navLinks = [
    { name: "Features", href: "/screens/features", color1: "#4285F4", color2: "#34A853" },
    { name: "Pricing", href: "/screens/pricing", color1: "#EA4335", color2: "#FBBC05" },
    { name: "Success Stories", href: "/screens/stories", color1: "#FBBC05", color2: "#34A853" },
    { name: "For Employers", href: "/screens/employers", color1: "#34A853", color2: "#4285F4" },
];

function Navbbar() {
    // State for managing mobile menu visibility
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Toggle function for the mobile menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Function to close the menu when a link is clicked
    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        // Main Nav Container: Added 'relative' and 'z-50' for proper layering
        <nav className="relative flex items-center justify-between p-4 bg-white border-b border-gray-200 z-50">

            {/* Left: Google Logo + Product Name (Always visible) */}
            <div className="flex items-center space-x-4 flex-shrink-0">
                <Link href="/" onClick={closeMenu}> {/* Link added */}
                    <Image
                        src="/googlelogo.png"
                        alt="Google"
                        width={200}
                        height={220}
                        className="rounded-full  object-cover"
                    />
                </Link>
                <div className="h-8 w-px bg-gray-300 "></div>
                <Link href="/" onClick={closeMenu} className="text-xl text-gray-700 font-medium whitespace-nowrap hidden lg:block">Resume Analyzer</Link>
            </div>

            {/* Center: Navigation Links - Google Style (Desktop/Tablet ONLY) - ORIGINAL DESIGN */}
            <div className="hidden lg:flex items-center space-x-0 bg-gray-50 rounded-lg p-1 border border-gray-200">
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href} // Functional link
                        className="px-4 py-2 text-sm text-gray-600 font-medium transition-all duration-300 relative group whitespace-nowrap"
                    >
                        {link.name}
                        {/* Underline effect, using utility classes for the dynamic gradient */}
                        <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[${link.color1}] to-[${link.color2}] group-hover:w-full transition-all duration-300`}></span>
                        {/* Dot effect */}
                        <span className={`absolute -bottom-1 -right-1 w-2 h-2 bg-[${link.color1}] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100`}></span>
                    </Link>
                ))}
            </div>

            {/* Right: CTA Button + Mobile Menu Button */}
            <div className="flex items-center space-x-2 sm:space-x-4">
                {/* CTA Button - Google Blue (Functional Link) */}
                <Link
                    href="#ResumeUp" // Functional Link
                    onClick={closeMenu}
                    // Adjusted padding and font size for better mobile fit while keeping the general look
                    className="bg-transparent hover:bg-gray-50 border border-[#dadce0] hover:border-gray-400 text-xs sm:text-sm font-medium px-3 sm:px-6 py-2 rounded-md transition-all duration-200  items-center space-x-1 sm:space-x-2 whitespace-nowrap hidden lg:flex md:flex xl:flex "
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span className="font-medium text-sm">
                        <span className="text-[#4285F4]">A</span><span className="text-[#EA4335]">n</span><span className="text-[#FBBC05]">a</span><span className="text-[#4285F4]">l</span><span className="text-[#34A853]">y</span><span className="text-[#EA4335]">z</span>
                        <span className="text-gray-600"> </span>
                        <span className="text-[#4285F4]">R</span><span className="text-[#EA4335]">e</span><span className="text-[#FBBC05]">s</span><span className="text-[#34A853]">u</span><span className="text-[#EA4335]">m</span><span className="text-[#4285F4]">e</span>
                    </span>
                </Link>

                {/* Mobile menu button (Hidden on desktop/tablet) */}
                <button
                    className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                    onClick={toggleMenu}
                    aria-label="Toggle navigation menu"
                >
                    {isMenuOpen ? (
                        // Close icon (X)
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        // Hamburger icon
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Menu Drawer (Smooth slide-in from left for small screens) */}
            <div
                className={`fixed top-0 left-0 h-full w-full md:hidden transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'
                    } z-40`}
            >
                {/* Backdrop (Darkens background when menu is open) */}
                <div
                    className="absolute inset-0 bg-black opacity-30"
                    onClick={closeMenu}
                ></div>

                {/* Menu Content (The white drawer itself) */}
                <div className="absolute top-0 left-0 h-full w-3/4 max-w-xs bg-white shadow-xl p-6 flex flex-col space-y-4">
                    <h3 className="text-xl font-semibold text-gray-800 border-b pb-3 mb-2">Navigation</h3>

                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={closeMenu} // Closes menu after clicking a link
                            className="w-full text-base text-gray-700 font-medium py-2 px-3 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}

                    {/* Re-using the CTA as a link within the drawer for mobile */}
                    <a
                        href="#ResumeUp"
                        onClick={closeMenu}
                        className="mt-6 w-full text-center bg-[#4285F4] hover:bg-[#3269d9] text-white font-semibold py-3 rounded-md transition-colors shadow-md hidden  "
                    >
                        Analyze My Resume
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Navbbar;