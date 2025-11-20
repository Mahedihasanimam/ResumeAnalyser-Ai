import React from 'react';

function Page() {
    return (
        <section className="py-16 sm:py-24 bg-white min-h-screen flex items-center justify-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

                {/* Hero Section - Main Headline */}
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 tracking-tighter leading-tight">
                    <span className="text-[#4285F4]">এ আই</span>-এর শক্তিতে <br />
                    আপনার <span className="text-[#EA4335]">সিভি</span>-কে <span className="text-[#34A853]">সর্বোচ্চ স্তরে</span> নিয়ে যান
                </h1>

                {/* Subtitle - Value Proposition */}
                <p className="mt-6 text-xl sm:text-2xl max-w-4xl mx-auto text-gray-600">
                    আমাদের যুগান্তকারী ডিপ লার্নিং প্রযুক্তি ব্যবহার করে মুহূর্তের মধ্যে আপনার রেজ্যুমে বা সিভি বিশ্লেষণ করুন। জেনে নিন কোথায় উন্নতির সুযোগ আছে এবং নিয়োগকর্তার প্রথম পছন্দ হন।
                </p>

                {/* Key Metrics / Trust Signals (Google Design Inspiration) */}
                <div className="mt-12 flex justify-center space-x-6 sm:space-x-10">
                    <div className="flex items-center space-x-3 p-3 bg-white rounded-xl shadow-lg border border-gray-100">
                        <span className="text-3xl font-bold text-[#4285F4]">৯৮%</span>
                        <span className="text-sm text-gray-600">ATS সামঞ্জস্যের <br /> নিশ্চয়তা</span>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-white rounded-xl shadow-lg border border-gray-100">
                        <span className="text-3xl font-bold text-[#34A853]">০</span>
                        <span className="text-sm text-gray-600">খরচ <br /> (সম্পূর্ণ বিনামূল্যে)</span>
                    </div>
                    <div className="hidden sm:flex items-center space-x-3 p-3 bg-white rounded-xl shadow-lg border border-gray-100">
                        <span className="text-3xl font-bold text-[#FBBC05]">৫</span>
                        <span className="text-sm text-gray-600">মিনিটে <br /> রিপোর্ট প্রস্তুত</span>
                    </div>
                </div>

                {/* Primary CTA (Google Blue Button) */}
                <div className="mt-16">
                    <a
                        href="/analyze" // Link to the analysis page
                        className="inline-flex items-center justify-center px-16 py-4 border border-transparent text-xl font-medium rounded-full shadow-2xl text-white bg-[#4285F4] hover:bg-[#3269d9] transition duration-300 transform hover:scale-105 uppercase tracking-wider"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 mr-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        বিনামূল্যে সিভি বিশ্লেষণ শুরু করুন
                    </a>
                    <p className="mt-4 text-sm text-gray-500">
                        কোনো ক্রেডিট কার্ডের প্রয়োজন নেই।
                    </p>
                </div>

                {/* Secondary Feature Highlight */}
                <div className="mt-20 max-w-4xl mx-auto p-8 bg-white rounded-2xl shadow-xl border-l-8 border-[#34A853]">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                        বিশেষজ্ঞদের সুপারিশ: কেন আমাদের প্ল্যাটফর্ম ব্যবহার করবেন?
                    </h3>
                    <p className="text-lg text-gray-700">
                        "এটি শুধুমাত্র একটি বানান যাচাইকারী নয়, এটি একটি এআই-চালিত নিয়োগ বিশেষজ্ঞ যা আপনার সিভিকে চাকরির বাজারের জন্য প্রস্তুত করে তোলে।" - ক্যারিয়ার কাউন্সেলিং বাংলাদেশ।
                    </p>
                </div>

            </div>
        </section>
    );
}

export default Page;