import Link from 'next/link';
import React from 'react';

function Page() {
    return (
        <section className="py-16 bg-white min-h-screen flex items-center justify-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

                {/* Google Style Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full mb-8">
                    <div className="flex space-x-1">
                        <div className="w-1.5 h-1.5 bg-[#4285F4] rounded-full"></div>
                        <div className="w-1.5 h-1.5 bg-[#EA4335] rounded-full"></div>
                        <div className="w-1.5 h-1.5 bg-[#34A853] rounded-full"></div>
                    </div>
                    <span className="text-sm font-medium text-gray-600">
                        গুগল AI টেকনোলজি
                    </span>
                </div>

                {/* Hero Section - Google Style */}
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-medium text-gray-900 tracking-tight leading-tight">
                    <span className="text-[#1a73e8]">এআই</span>-এর শক্তিতে আপনার{' '}
                    <span className="text-gray-900">সিভি</span>কে{' '}
                    <span className="text-gray-900">সর্বোচ্চ স্তরে</span> নিয়ে যান
                </h1>

                {/* Subtitle - Google Style */}
                <p className="mt-6 text-lg sm:text-xl max-w-3xl mx-auto text-gray-600">
                    আমাদের ডিপ লার্নিং প্রযুক্তি ব্যবহার করে মুহূর্তের মধ্যে আপনার রিজিউমি বিশ্লেষণ করুন। জেনে নিন কোথায় উন্নতির সুযোগ আছে এবং নিয়োগকর্তার প্রথম পছন্দ হন।
                </p>

                {/* Key Metrics - Google Style */}
                <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <div className="text-2xl font-bold text-[#4285F4] mb-1">৯৮%</div>
                        <div className="text-sm text-gray-600">ATS সামঞ্জস্য</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <div className="text-2xl font-bold text-[#34A853] mb-1">০</div>
                        <div className="text-sm text-gray-600">সম্পূর্ণ বিনামূল্যে</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200 col-span-2 sm:col-span-1">
                        <div className="text-2xl font-bold text-[#FBBC05] mb-1">৫</div>
                        <div className="text-sm text-gray-600">মিনিটে রিপোর্ট</div>
                    </div>
                </div>

                {/* Primary CTA - Google Style */}
                <div className="mt-12">
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-[#1a73e8] hover:bg-[#1967d2] transition-colors duration-200"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        বিনামূল্যে সিভি বিশ্লেষণ শুরু করুন
                    </Link>
                    <p className="mt-3 text-sm text-gray-500">
                        কোনো ক্রেডিট কার্ডের প্রয়োজন নেই
                    </p>
                </div>

                {/* Secondary Feature - Google Style */}
                <div className="mt-16 max-w-3xl mx-auto p-6 bg-gray-50 rounded-xl border border-gray-200">
                    <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                            <div className="w-10 h-10 bg-[#34A853] rounded-lg flex items-center justify-center">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                        </div>
                        <div className="text-left">
                            <h3 className="text-lg font-medium text-gray-900 mb-2">
                                বিশেষজ্ঞদের সুপারিশ
                            </h3>
                            <p className="text-gray-600">
                                "এটি শুধুমাত্র একটি বানান যাচাইকারী নয়, এটি একটি এআই-চালিত নিয়োগ বিশেষজ্ঞ যা আপনার সিভিকে চাকরির বাজারের জন্য প্রস্তুত করে তোলে।" - ক্যারিয়ার কাউন্সেলিং বাংলাদেশ
                            </p>
                        </div>
                    </div>
                </div>

                {/* Additional Trust Indicators */}
                <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-[#34A853]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>১০০% সুরক্ষিত</span>
                    </div>
                    <div className="hidden sm:block w-px h-4 bg-gray-300"></div>
                    <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-[#34A853]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>গোপনীয়তা সুরক্ষিত</span>
                    </div>
                    <div className="hidden sm:block w-px h-4 bg-gray-300"></div>
                    <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-[#34A853]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>তাত্ক্ষণিক ফলাফল</span>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Page;