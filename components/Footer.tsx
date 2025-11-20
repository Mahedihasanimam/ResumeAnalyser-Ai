// components/Footer.tsx
import React from 'react'

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white mt-12 pt-10 pb-6 border-t border-gray-700 shadow-inner w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">

                    {/* 1. Logo & Branding */}
                    <div className="col-span-2 lg:col-span-1">
                        <h3 className="text-3xl font-bold text-emerald-400">
                            Resume <span className="text-white">Ai</span>
                        </h3>
                        <p className="mt-2 text-sm text-gray-400">
                            AI-Powered Career Tools.
                        </p>
                    </div>

                    {/* 2. Product Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-3 text-white">Product</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">ATS Analyzer</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">Job Matcher</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">Cover Letter Generator</a></li>
                        </ul>
                    </div>

                    {/* 3. Company Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-3 text-white">Company</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">About Us</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">Careers</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* 4. Support Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-3 text-white">Support</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">Help Center</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">Terms of Service</a></li>
                        </ul>
                    </div>

                    {/* 5. Social Media */}
                    <div className="col-span-2 md:col-span-1">
                        <h4 className="text-lg font-semibold mb-3 text-white">Follow Us</h4>
                        <div className="flex space-x-4">
                            {/* Icons use the new color on hover */}
                            <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-emerald-400 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.238-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                            </a>
                            <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-emerald-400 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.791-1.574 2.153-2.729-.95.567-2.005.977-3.128 1.188-1.713-1.808-4.996-.708-4.996 2.478 0 .427.05.843.149 1.24-.827.818-1.849 1.458-3.033 1.96-2.023 1.5-3.351 1.051-4.148 1.051-.252 0-.498-.03-.74-.087-1.396 2.378-2.618 3.523-4.114 3.523-.39 0-.77-.046-1.14-.136.27.765.617 1.492 1.053 2.164.241.378.502.738.777 1.082 1.831 2.387 4.14 4.116 6.845 5.161 2.705 1.045 5.587 1.488 8.65 1.353 3.635-.164 6.81-1.35 9.074-3.567 2.264-2.217 3.447-5.26 3.447-9.456 0-.323-.016-.643-.048-.958.33-.243.64-.51 1.157-.96z" /></svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Separator Line */}
                <div className="mt-8 border-t border-gray-700 pt-6">
                    {/* Copyright & Legal */}
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-sm text-gray-400">
                            &copy; {new Date().getFullYear()} Resume Ai. All rights reserved.
                        </p>
                        <div className="flex space-x-4 mt-3 md:mt-0">
                            <a href="#" className="text-xs text-gray-400 hover:text-emerald-400">Security</a>
                            <a href="#" className="text-xs text-gray-400 hover:text-emerald-400">Sitemap</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;