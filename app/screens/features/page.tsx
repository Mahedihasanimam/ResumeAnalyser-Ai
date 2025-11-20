import Link from 'next/link';
import React from 'react';

// অত্যাধুনিক প্রযুক্তিনির্ভর ফিচার ডেটা, বাংলায় অনুবাদ ও পরিমার্জিত
const analysisFeatures = [
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#4285F4]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
            </svg>
        ),
        title: "এ.টি.এস (ATS) আল্ট্রা-স্ক্যান স্কোর",
        description: "আমাদের অত্যাধুনিক 'ডকুমেন্ট ল্যাব' প্রযুক্তি ব্যবহার করে আপনার সিভির কাঠামো এবং ডেটা-পয়েন্টগুলি স্ক্রিন করে। এটি নিশ্চিত করে যে আপনার সিভি হাজার হাজার অ্যাপ্লিক্যান্ট ট্র্যাকিং সিস্টেমে (ATS) ১০০% সামঞ্জস্যপূর্ণ।",
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#34A853]">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
        ),
        title: "সেমান্টিক কীওয়ার্ড ইন্টিগ্রেশন",
        description: "এআই দ্বারা লক্ষ্যযুক্ত চাকরির বর্ণনার সাথে আপনার সিভির সেমান্টিক বিশ্লেষণ করা হয়। নিখুঁত মিলের জন্য অনুপস্থিত উচ্চ-চাহিদার শিল্প-নির্দিষ্ট শব্দগুলি শনাক্ত ও প্রস্তাব করা হয়।",
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#FBBC05]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.195 3.375 1.928 3.375h14.71c1.733 0 2.794-1.875 1.928-3.375l-7.38-12.784a1.755 1.755 0 0 0-3.044 0l-7.38 12.784Z" />
            </svg>
        ),
        title: "ইনফ্লুয়েন্স ফ্যাক্টর জেনারেটর",
        description: "নিষ্ক্রিয় বা দুর্বল বাক্যগুলিকে দ্রুত শক্তিশালী অ্যাকশন ভার্ব দিয়ে প্রতিস্থাপন করুন। আপনার প্রতিটি বুলেট পয়েন্টে 'STAR/PAR' কাঠামোর মাধ্যমে প্রভাব নিশ্চিত করে নিয়োগকর্তাকে আকর্ষণ করুন।",
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#EA4335]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m5.25 12H10.5M10.5 15L9 21m-6-15h18" />
            </svg>
        ),
        title: "পিক্সেল-পারফেক্ট বিন্যাস নিরীক্ষণ",
        description: "ফন্ট, মার্জিন, হোয়াইট স্পেস— সবকিছুই পিক্সেল স্তরে যাচাই করা হয়। নিয়োগকর্তার চোখে আপনার সিভি পেশাদার ও ত্রুটিমুক্ত দেখাবে, যা সফলতার প্রথম ধাপ।",
    },
];

const uniqueFeatures = [
    {
        title: "সিমান্টিক দক্ষতা লেভেলিং",
        description: "আমাদের এনএলপি (NLP) ইঞ্জিন আপনার দক্ষতার প্রসঙ্গ এবং অভিজ্ঞতার স্তর বিশ্লেষণ করে, নিয়োগকারীদের আপনার সক্ষমতার সঠিক ও নির্ভুল পরিমাপ সরবরাহ করে।",
    },
    {
        title: "মাল্টি-ভার্সন টার্গেটিং ল্যাব",
        description: "একাধিক চাকরির শিরোনাম বা কোম্পানির প্রোফাইলের জন্য আপনার সিভির অপটিমাইজ করা সংস্করণগুলি তৈরি করুন ও সংরক্ষণ করুন। প্রতিটি সংস্করণ তাৎক্ষণিকভাবে লক্ষ্যানুযায়ী তৈরি হবে।",
    },
];

function FeaturesPage() {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header Section - Google Style */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full mb-6">
                        <div className="flex space-x-1">
                            <div className="w-1.5 h-1.5 bg-[#4285F4] rounded-full"></div>
                            <div className="w-1.5 h-1.5 bg-[#EA4335] rounded-full"></div>
                            <div className="w-1.5 h-1.5 bg-[#FBBC05] rounded-full"></div>
                            <div className="w-1.5 h-1.5 bg-[#34A853] rounded-full"></div>
                        </div>
                        <span className="text-sm font-medium text-gray-600">
                            গুগল AI টেকনোলজি
                        </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-medium text-gray-900 tracking-tight">
                        ক্যারিয়ারের ভবিষ্যৎ দেখুন
                    </h2>
                    <p className="mt-4 max-w-2xl text-lg text-gray-600 mx-auto">
                        অত্যাধুনিক ডীপ লার্নিং প্রযুক্তি ব্যবহার করে মুহূর্তের মধ্যে আপনার সিভির দুর্বলতা ও শক্তি খুঁজে বের করুন।
                    </p>
                </div>

                {/* Core Features Grid - Google Style */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
                    {analysisFeatures.map((feature, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-md transition-all duration-200">
                            <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-lg mb-4 mx-auto">
                                {feature.icon}
                            </div>
                            <h3 className="text-lg font-medium text-gray-900 mb-3 text-center">{feature.title}</h3>
                            <p className="text-sm text-gray-600 text-center">{feature.description}</p>
                        </div>
                    ))}
                </div>

                {/* Separator */}
                <div className="my-16 border-t border-gray-200"></div>

                {/* Deep Dive Section - Google Style */}
                <div className="lg:grid lg:grid-cols-3 lg:gap-8 items-start">

                    {/* Unique Features List */}
                    <div className="lg:col-span-2 mb-12 lg:mb-0">
                        <h3 className="text-2xl font-medium text-gray-900 mb-8">
                            সাধারণের বাইরে: ডেটা-চালিত কর্মজীবনের বুদ্ধিমত্তা
                        </h3>
                        <div className="space-y-8">
                            {uniqueFeatures.map((item, index) => (
                                <div key={index} className="flex space-x-4">
                                    <div className="flex-shrink-0">
                                        <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                                            <svg className="w-4 h-4 text-[#1a73e8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-medium text-gray-900 mb-2">
                                            {item.title}
                                        </h4>
                                        <p className="text-gray-600">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Performance Metrics Card - Google Style */}
                    <div className="lg:col-span-1 bg-white p-6 rounded-xl border border-gray-200">
                        <h4 className="text-lg font-medium text-gray-900 mb-6">রিয়েল-টাইম মেট্রিক্স</h4>
                        <div className="space-y-5">

                            {/* Metric 1 */}
                            <div>
                                <div className="flex justify-between text-sm font-medium text-gray-700 mb-1">
                                    <span>এ.টি.এস সামঞ্জস্যতা</span>
                                    <span className="text-[#4285F4]">৯২%</span>
                                </div>
                                <div className="h-2 bg-gray-100 rounded-full">
                                    <div className="h-2 rounded-full bg-[#4285F4]" style={{ width: '92%' }}></div>
                                </div>
                            </div>

                            {/* Metric 2 */}
                            <div>
                                <div className="flex justify-between text-sm font-medium text-gray-700 mb-1">
                                    <span>প্রভাব বনাম দায়িত্ব</span>
                                    <span className="text-[#34A853]">৭৫%</span>
                                </div>
                                <div className="h-2 bg-gray-100 rounded-full">
                                    <div className="h-2 rounded-full bg-[#34A853]" style={{ width: '75%' }}></div>
                                </div>
                            </div>

                            {/* Metric 3 */}
                            <div>
                                <div className="flex justify-between text-sm font-medium text-gray-700 mb-1">
                                    <span>পাঠের সময়কাল</span>
                                    <span className="text-[#FBBC05]">৬ সেকেন্ড</span>
                                </div>
                                <div className="h-2 bg-gray-100 rounded-full">
                                    <div className="h-2 rounded-full bg-[#FBBC05]" style={{ width: '30%' }}></div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

                {/* Final CTA - Google Style */}
                <div className="mt-16 text-center">
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-[#1a73e8] hover:bg-[#1967d2] transition-colors duration-200"
                    >
                        ক্যারিয়ারে এগিয়ে থাকতে এখনই শুরু করুন
                    </Link>
                    <p className="mt-3 text-sm text-gray-600">
                        একেবারে বিনামূল্যে!
                    </p>
                </div>

            </div>
        </section>
    );
}

export default FeaturesPage;