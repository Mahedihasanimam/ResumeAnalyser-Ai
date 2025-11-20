// components/Footer.tsx
import Image from 'next/image';
import React from 'react'
import GoogleTranslate from './GoogleTranslate';
import LanguageSelector from './LanguageSelector';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-50 border-t border-gray-200 mt-12 pt-12 pb-8 w-full">

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">

                    {/* 1. Logo & Branding - Google Style */}
                    <div className="col-span-2 lg:col-span-1">
                        <div className="flex items-center space-x-3 mb-3">

                            <Image src="/googlelogo.png" alt="Google Logo" width={180} height={180} />

                        </div>

                        <div>
                            <p className="text-sm text-gray-600">
                                গুগল AI টেকনোলজি দ্বারা পাওয়ার্ড
                            </p>

                        </div>
                    </div>

                    {/* 2. Product Links - Bengali */}
                    <div>
                        <h4 className="text-sm font-medium text-gray-900 mb-4">প্রোডাক্ট</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-600 hover:text-[#1a73e8] text-sm transition-colors">এটিএস এনালাইজার</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-[#1a73e8] text-sm transition-colors">জব ম্যাচার</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-[#1a73e8] text-sm transition-colors">কভার লেটার জেনারেটর</a></li>
                        </ul>
                    </div>

                    {/* 3. Company Links - Bengali */}
                    <div>
                        <h4 className="text-sm font-medium text-gray-900 mb-4">কোম্পানি</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-600 hover:text-[#1a73e8] text-sm transition-colors">আমাদের সম্পর্কে</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-[#1a73e8] text-sm transition-colors">ক্যারিয়ার</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-[#1a73e8] text-sm transition-colors">যোগাযোগ</a></li>
                        </ul>
                    </div>

                    {/* 4. Support Links - Bengali */}
                    <div>
                        <h4 className="text-sm font-medium text-gray-900 mb-4">সাপোর্ট</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-600 hover:text-[#1a73e8] text-sm transition-colors">হেল্প সেন্টার</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-[#1a73e8] text-sm transition-colors">প্রাইভেসি পলিসি</a></li>
                            <li><a href="#" className="text-gray-600 hover:text-[#1a73e8] text-sm transition-colors">টার্মস অফ সার্ভিস</a></li>
                        </ul>
                    </div>

                    {/* 5. Social Media - Google Style */}
                    <div className="col-span-2 md:col-span-1">
                        <h4 className="text-sm font-medium text-gray-900 mb-4">ফলো করুন</h4>
                        <div className="flex space-x-4">
                            <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-[#1a73e8] transition-colors p-2 hover:bg-gray-100 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.238-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </a>
                            <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-[#1a73e8] transition-colors p-2 hover:bg-gray-100 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.791-1.574 2.153-2.729-.95.567-2.005.977-3.128 1.188-1.713-1.808-4.996-.708-4.996 2.478 0 .427.05.843.149 1.24-.827.818-1.849 1.458-3.033 1.96-2.023 1.5-3.351 1.051-4.148 1.051-.252 0-.498-.03-.74-.087-1.396 2.378-2.618 3.523-4.114 3.523-.39 0-.77-.046-1.14-.136.27.765.617 1.492 1.053 2.164.241.378.502.738.777 1.082 1.831 2.387 4.14 4.116 6.845 5.161 2.705 1.045 5.587 1.488 8.65 1.353 3.635-.164 6.81-1.35 9.074-3.567 2.264-2.217 3.447-5.26 3.447-9.456 0-.323-.016-.643-.048-.958.33-.243.64-.51 1.157-.96z" />
                                </svg>
                            </a>
                            <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-[#1a73e8] transition-colors p-2 hover:bg-gray-100 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                                </svg>
                            </a>
                        </div>
                        <div className='container mx-auto mt-4'>
                            <div className='hidden'>
                                <GoogleTranslate />
                            </div>
                            <LanguageSelector />
                        </div>
                    </div>
                </div>

                {/* Separator Line */}
                <div className="mt-12 border-t border-gray-200 pt-6">
                    {/* Copyright & Legal - Bengali */}
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-sm text-gray-600">
                            &copy; {new Date().getFullYear()} Resume AI. সর্বস্বত্ব সংরক্ষিত।
                        </p>
                        <div className="flex space-x-6 mt-3 md:mt-0">
                            <a href="#" className="text-xs text-gray-600 hover:text-[#1a73e8]">সিকিউরিটি</a>
                            <a href="#" className="text-xs text-gray-600 hover:text-[#1a73e8]">সাইটম্যাপ</a>
                            <a href="#" className="text-xs text-gray-600 hover:text-[#1a73e8]">গোপনীয়তা</a>
                        </div>
                    </div>
                </div>

                {/* Google Attribution - Subtle */}
                <div className="mt-4 text-center">
                    <p className="text-xs text-gray-500">
                        গুগল AI টেকনোলজি ব্যবহার করে তৈরি
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;