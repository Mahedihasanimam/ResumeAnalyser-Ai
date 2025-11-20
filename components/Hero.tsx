// // components/HeroSection.tsx
// import React from 'react';

// export const HeroSection: React.FC = () => {
//     return (
//         <div className="relative bg-white rounded-2xl shadow-lg p-8 sm:p-12 mb-8 overflow-hidden border border-gray-200">
//             {/* Google-style background elements */}
//             <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-r from-[#4285F4]/10 to-transparent rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
//             <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-l from-[#EA4335]/10 to-[#FBBC05]/10 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
//             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#34A853]/10 rounded-full mix-blend-multiply filter blur-2xl opacity-20"></div>

//             <div className="relative z-10 max-w-4xl mx-auto">
//                 {/* Badge with Google colors */}
//                 <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 border border-gray-300 rounded-full mb-8">
//                     <div className="flex space-x-1">
//                         <div className="w-2 h-2 bg-[#4285F4] rounded-full"></div>
//                         <div className="w-2 h-2 bg-[#EA4335] rounded-full"></div>
//                         <div className="w-2 h-2 bg-[#FBBC05] rounded-full"></div>
//                         <div className="w-2 h-2 bg-[#34A853] rounded-full"></div>
//                     </div>
//                     <span className="text-sm font-medium text-gray-700">
//                         🇧🇩 Trusted by Bangladeshi Professionals
//                     </span>
//                 </div>

//                 {/* Main headline with Google colors */}
//                 <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
//                     <span className="block text-gray-800">স্ট্যান্ড আউট ইন দ্য</span>
//                     <span className="block">
//                         <span className="text-[#4285F4]">C</span>
//                         <span className="text-[#EA4335]">o</span>
//                         <span className="text-[#FBBC05]">m</span>
//                         <span className="text-[#4285F4]">p</span>
//                         <span className="text-[#34A853]">e</span>
//                         <span className="text-[#EA4335]">t</span>
//                         <span className="text-[#4285F4]">i</span>
//                         <span className="text-[#FBBC05]">t</span>
//                         <span className="text-[#34A853]">i</span>
//                         <span className="text-[#EA4335]">v</span>
//                         <span className="text-[#4285F4]">e</span>
//                         <span className="text-gray-800"> </span>
//                         <span className="text-[#4285F4]">J</span>
//                         <span className="text-[#EA4335]">o</span>
//                         <span className="text-[#FBBC05]">b</span>
//                         <span className="text-gray-800"> </span>
//                         <span className="text-[#34A853]">M</span>
//                         <span className="text-[#4285F4]">a</span>
//                         <span className="text-[#EA4335]">r</span>
//                         <span className="text-[#FBBC05]">k</span>
//                         <span className="text-[#34A853]">e</span>
//                         <span className="text-[#4285F4]">t</span>
//                     </span>
//                 </h1>

//                 {/* Subheading with Google colors */}
//                 <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
//                     Beat the <span className="font-semibold text-[#EA4335]">500+ applicants</span> with an AI-optimized CV.
//                     Get instant feedback tailored for <span className="font-semibold text-[#34A853]">Bangladeshi companies</span> and international ATS systems.
//                 </p>

//                 {/* Key benefits with Google colors */}
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
//                     <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 hover:border-[#4285F4] transition-all duration-200">
//                         <div className="text-[#4285F4] font-bold text-lg mb-2 flex items-center">
//                             <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
//                                 <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
//                             </svg>
//                             ATS Friendly
//                         </div>
//                         <p className="text-gray-600 text-sm">Pass automated screening used by top companies</p>
//                     </div>
//                     <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 hover:border-[#34A853] transition-all duration-200">
//                         <div className="text-[#34A853] font-bold text-lg mb-2 flex items-center">
//                             <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
//                                 <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
//                             </svg>
//                             Localized Tips
//                         </div>
//                         <p className="text-gray-600 text-sm">Bangladeshi industry-specific recommendations</p>
//                     </div>
//                     <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 hover:border-[#FBBC05] transition-all duration-200">
//                         <div className="text-[#FBBC05] font-bold text-lg mb-2 flex items-center">
//                             <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
//                                 <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
//                             </svg>
//                             Instant Results
//                         </div>
//                         <p className="text-gray-600 text-sm">Detailed analysis in under 60 seconds</p>
//                     </div>
//                 </div>

//                 {/* CTA Section with Google-style buttons */}
//                 <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//                     <button className="bg-[#1a73e8] hover:bg-[#1967d2] text-white font-bold py-4 px-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 flex items-center space-x-2">
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//                         </svg>
//                         <span>বিশ্লেষণ করুন এখনই</span>
//                     </button>
//                     <button className="bg-transparent hover:bg-gray-50 text-[#1a73e8] border border-gray-300 hover:border-[#1a73e8] font-semibold py-4 px-8 rounded-lg transition-all duration-200 flex items-center space-x-2">
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
//                         </svg>
//                         <span>লাইভ ডেমো দেখুন</span>
//                     </button>
//                 </div>

//                 {/* Trust indicator with Google colors */}
//                 <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-600">
//                     <div className="flex items-center gap-2">
//                         <div className="flex -space-x-2">
//                             {[1, 2, 3, 4].map((item, index) => (
//                                 <div key={item} className={`w-8 h-8 rounded-full border-2 border-white ${index === 0 ? 'bg-[#4285F4]' :
//                                     index === 1 ? 'bg-[#EA4335]' :
//                                         index === 2 ? 'bg-[#FBBC05]' : 'bg-[#34A853]'
//                                     }`}></div>
//                             ))}
//                         </div>
//                         <span>500+ Bangladeshi Professionals Helped</span>
//                     </div>
//                     <div className="hidden sm:block w-px h-6 bg-gray-300"></div>
//                     <div className="flex items-center gap-2 text-[#34A853]">
//                         <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
//                             <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                         </svg>
//                         <span>Get your first analysis FREE</span>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };


// components/HeroSection.tsx
import React from 'react';

export const HeroSection: React.FC = () => {
    return (
        <div className="relative bg-white rounded-lg p-8 sm:p-12 mb-8 overflow-hidden border border-gray-200">
            {/* Google-style minimal background */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#4285F4]/5 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
            <div className="absolute bottom-0 left-0 w-56 h-56 bg-[#34A853]/5 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

            <div className="relative z-10 max-w-4xl mx-auto text-center">
                {/* Google-style simple badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full mb-8">
                    <div className="flex space-x-1">
                        <div className="w-1.5 h-1.5 bg-[#4285F4] rounded-full"></div>
                        <div className="w-1.5 h-1.5 bg-[#EA4335] rounded-full"></div>
                        <div className="w-1.5 h-1.5 bg-[#FBBC05] rounded-full"></div>
                        <div className="w-1.5 h-1.5 bg-[#34A853] rounded-full"></div>
                    </div>
                    <span className="text-xs font-medium text-gray-600">
                        বাংলাদেশের জন্য তৈরি
                    </span>
                </div>

                {/* Google-style clean headline - All Bengali */}
                <h1 className="text-3xl sm:text-5xl font-normal text-gray-900 mb-6 leading-tight">
                    <span className="block">আপনার রিজিউমি এখন</span>
                    <span className="block">AI এর মাধ্যমে বিশ্লেষণ করুন</span>
                </h1>

                {/* Professional subheading in Bengali */}
                <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
                    <span className="font-medium text-gray-800">৫০০+ আবেদনকারী</span> এর মধ্যে আপনি  হোন।
                    গুগল AI টেকনোলজি ব্যবহার করে পান <span className="font-medium text-gray-800">বাংলাদেশি কোম্পানির জন্য</span> কাস্টমাইজড ফিডব্যাক।
                </p>

                {/* Google-style feature cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 max-w-3xl mx-auto">
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <div className="flex items-center justify-center w-12 h-12 bg-[#4285F4] rounded-full mx-auto mb-3">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </div>
                        <h3 className="font-medium text-gray-900 mb-2">ATS কম্প্যাটিবল</h3>
                        <p className="text-sm text-gray-600">অটোমেটেড স্ক্রিনিং সিস্টেম পাস করুন</p>
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <div className="flex items-center justify-center w-12 h-12 bg-[#34A853] rounded-full mx-auto mb-3">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            </svg>
                        </div>
                        <h3 className="font-medium text-gray-900 mb-2">লোকালাইজড টিপস</h3>
                        <p className="text-sm text-gray-600">বাংলাদেশি ইন্ডাস্ট্রির জন্য স্পেসিফিক সাজেশন</p>
                    </div>

                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <div className="flex items-center justify-center w-12 h-12 bg-[#EA4335] rounded-full mx-auto mb-3">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="font-medium text-gray-900 mb-2">তাৎক্ষণিক রেজাল্ট</h3>
                        <p className="text-sm text-gray-600">৬০ সেকেন্ডের মধ্যে ডিটেইলড এনালাইসিস</p>
                    </div>
                </div>

                {/* Google-style CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-8">
                    <button className="bg-[#1a73e8] hover:bg-[#1967d2] text-white font-medium py-3 px-6 rounded-lg text-sm flex items-center space-x-2 transition-colors duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span>রিজিউমি আপলোড করুন</span>
                    </button>

                    <button className="bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 font-medium py-3 px-6 rounded-lg text-sm flex items-center space-x-2 transition-colors duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                        <span>ডেমো দেখুন</span>
                    </button>
                </div>

                {/* Google-style trust indicators */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-xs text-gray-500">
                    <div className="flex items-center gap-3">
                        <div className="flex -space-x-2">
                            {[1, 2, 3].map((item) => (
                                <div key={item} className="w-6 h-6 bg-gray-200 rounded-full border-2 border-white"></div>
                            ))}
                        </div>
                        <span>৫০০+ বাংলাদেশি প্রফেশনাল</span>
                    </div>

                    <div className="hidden sm:block w-px h-4 bg-gray-300"></div>

                    <div className="flex items-center gap-2 text-[#34A853]">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-600">প্রথম এনালাইসিস ফ্রি</span>
                    </div>
                </div>

                {/* Google branding subtle mention */}
                <div className="mt-6 pt-4 border-t border-gray-100">
                    <p className="text-xs text-gray-400">
                        গুগল AI টেকনোলজি দ্বারা পাওয়ার্ড
                    </p>
                </div>
            </div>
        </div>
    );
};