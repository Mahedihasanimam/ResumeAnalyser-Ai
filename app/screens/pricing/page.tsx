'use client'

import React, { useState } from 'react';

// প্ল্যান ডেটা - সকল মূল্য ০ (Free)
const pricingTiers = [
    {
        name: "মৌলিক বিশ্লেষণ",
        price: "০",
        interval: "/ জীবনকাল",
        description: "প্ল্যাটফর্মটি পরীক্ষা করার জন্য আদর্শ। এটি আপনাকে আমাদের এআই ক্ষমতার প্রাথমিক ধারণা দেবে।",
        features: [
            { text: "৩টি সিভির প্রাথমিক এ.টি.এস স্ক্যান", available: true },
            { text: "প্রভাব বনাম দায়িত্বের অনুপাত", available: true },
            { text: "লেআউট এবং বিন্যাস যাচাই", available: true },
            { text: "সেমান্টিক কীওয়ার্ড ইন্টিগ্রেশন", available: false },
            { text: "অসীম এ.টি.এস আল্ট্রা-স্ক্যান", available: false },
            { text: "ডেডিকেটেড চ্যাট সমর্থন", available: false },
        ],
        buttonText: "বিনামূল্যে শুরু করুন",
    },
    {
        name: "প্রিমিয়াম অ্যাক্সেস",
        price: "০",
        interval: "/ মাস",
        description: "ক্যারিয়ারে দ্রুত অগ্রগতি নিশ্চিত করতে আমাদের শক্তিশালী এআই টুলস ব্যবহার করুন।",
        isRecommended: true,
        features: [
            { text: "অসীম এ.টি.এস আল্ট্রা-স্ক্যান", available: true },
            { text: "সম্পূর্ণ সিমান্টিক কীওয়ার্ড ইন্টিগ্রেশন", available: true },
            { text: "ইনফ্লুয়েন্স ফ্যাক্টর জেনারেটর", available: true },
            { text: "৫টি সিভি টার্গেটিং ল্যাব সংস্করণ", available: true },
            { text: "রিয়েল-টাইম এআই পরামর্শ", available: true },
            { text: "দ্রুত চ্যাট সমর্থন", available: false },
        ],
        buttonText: "বিনামূল্যে প্রিমিয়াম অ্যাক্সেস নিন",
    },
    {
        name: "এক্সপার্ট টায়ার",
        price: "০",
        interval: "/ মাস",
        description: "পরামর্শদাতা বা ভারী ব্যবহারকারীদের জন্য ডিজাইন করা। সর্বোচ্চ সুবিধা, সম্পূর্ণ বিনামূল্যে।",
        features: [
            { text: "অসীম এ.টি.এস আল্ট্রা-স্ক্যান ও বিশ্লেষণ", available: true },
            { text: "অসীম টার্গেটিং ল্যাব অ্যাক্সেস", available: true },
            { text: "সমস্ত এআই ফিচার আনলকড", available: true },
            { text: "বিশেষ চাকরির বাজার বিশ্লেষণ", available: true },
            { text: "২৪/৭ ডেডিকেটেড ম্যানেজার", available: true },
            { text: "ভবিষ্যত ফিচারে অগ্রিম অ্যাক্সেস", available: true },
        ],
        buttonText: "এখনই এক্সপার্ট টায়ার আনলক করুন",
    },
];

function PricingPage() {
    const [shareStatus, setShareStatus] = useState({ key: null, message: 'বন্ধুদের সাথে শেয়ার করুন', color: 'text-[#1a73e8]' });

    const handleShare = (e, tierName = 'footer') => {
        e.preventDefault();

        const platformLink = window.location.origin || 'আপনার_প্ল্যাটফর্মের_লিঙ্ক';
        const shareText = `আমি এই অত্যাধুনিক, সম্পূর্ণ বিনামূল্যে CV Analyzer প্ল্যাটফর্মটি ব্যবহার করে আমার ক্যারিয়ারে উন্নতি এনেছি! আপনিও ব্যবহার করুন: ${platformLink}`;

        const handleClipboardCopy = (text: string) => {
            const input = document.createElement('textarea');
            input.value = text;
            document.body.appendChild(input);
            input.select();
            let successful = false;
            try {
                successful = document.execCommand('copy');
            } catch (err) {
                console.error('Failed to copy text:', err);
            }
            document.body.removeChild(input);

            if (successful) {
                setShareStatus({ key: tierName, message: 'লিঙ্ক কপি করা হয়েছে! 😊', color: 'text-[#34A853]' });
                setTimeout(() => setShareStatus({ key: null, message: 'বন্ধুদের সাথে শেয়ার করুন', color: 'text-[#1a73e8]' }), 3000);
            } else {
                setShareStatus({ key: tierName, message: 'কপি করতে ব্যর্থ। ম্যানুয়ালি কপি করুন।', color: 'text-[#EA4335]' });
                setTimeout(() => setShareStatus({ key: null, message: 'বন্ধুদের সাথে শেয়ার করুন', color: 'text-[#1a73e8]' }), 3000);
            }
        };

        handleClipboardCopy(shareText);
    };

    return (
        <section className="py-16 bg-white min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header - Google Style */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full mb-6">
                        <div className="flex space-x-1">
                            <div className="w-1.5 h-1.5 bg-[#4285F4] rounded-full"></div>
                            <div className="w-1.5 h-1.5 bg-[#34A853] rounded-full"></div>
                            <div className="w-1.5 h-1.5 bg-[#FBBC05] rounded-full"></div>
                        </div>
                        <span className="text-sm font-medium text-gray-600">
                            সম্পূর্ণ বিনামূল্যে
                        </span>
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-medium text-gray-900 tracking-tight">
                        অত্যাধুনিক এআই এখন সবার জন্য
                    </h2>
                    <p className="mt-4 max-w-3xl text-lg text-gray-600 mx-auto">
                        আমরা বিশ্বাস করি, সফল ক্যারিয়ার সবার অধিকার। তাই আমাদের প্রযুক্তিগত শ্রেষ্ঠত্ব কোনো মূল্য ছাড়াই আপনার জন্য উন্মুক্ত।
                    </p>
                </div>

                {/* Pricing Grid - Google Style */}
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-6">
                    {pricingTiers.map((tier, index) => (
                        <div
                            key={index}
                            className={`flex flex-col p-6 bg-white rounded-xl border ${tier.isRecommended ? 'border-[#1a73e8] border-2' : 'border-gray-200'}`}
                        >
                            {tier.isRecommended && (
                                <div className="mb-4 inline-flex items-center justify-center rounded-full bg-[#1a73e8] px-3 py-1 text-xs font-medium text-white">
                                    সেরা সুবিধা
                                </div>
                            )}

                            <h3 className="text-xl font-medium text-gray-900 mb-2">{tier.name}</h3>

                            <div className="mt-4 flex items-baseline">
                                <span className="text-4xl font-bold text-gray-900">
                                    ৳{tier.price}
                                </span>
                                <span className="ml-1 text-gray-600">
                                    {tier.interval}
                                </span>
                            </div>

                            <p className="mt-3 text-gray-600 text-sm">{tier.description}</p>

                            <div className="flex-1 mt-6">
                                <ul className="space-y-3">
                                    {tier.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start">
                                            {feature.available ? (
                                                <svg className="flex-shrink-0 w-5 h-5 text-[#34A853] mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                </svg>
                                            ) : (
                                                <svg className="flex-shrink-0 w-5 h-5 text-gray-400 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            )}
                                            <span className="ml-3 text-sm text-gray-600">{feature.text}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* CTA Button */}
                            <a
                                href={`/analyze`}
                                className={`mt-6 w-full py-3 px-4 text-center rounded-lg font-medium transition-colors duration-200 ${tier.isRecommended
                                    ? 'bg-[#1a73e8] text-white hover:bg-[#1967d2]'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300'
                                    }`}
                            >
                                {tier.buttonText}
                            </a>

                            {/* Share Button */}
                            <button
                                onClick={(e) => handleShare(e, tier.name)}
                                className="mt-3 w-full py-2 text-sm font-medium rounded-lg transition duration-200"
                            >
                                <div className={`flex items-center justify-center space-x-2 ${shareStatus.key === tier.name ? shareStatus.color : 'text-[#1a73e8] hover:text-[#1967d2]'
                                    }`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186h13.783a2.25 2.25 0 0 1 0 4.372H7.217m0-2.186L5.15 7.15m2.067 3.75 2.067-3.75M7.217 14.093l-2.067 3.75m2.067-3.75L9.284 17.843" />
                                    </svg>
                                    <span>{shareStatus.key === tier.name ? shareStatus.message : 'বন্ধুদের সাথে শেয়ার করুন'}</span>
                                </div>
                            </button>
                        </div>
                    ))}
                </div>

                {/* Footer CTA - Google Style */}
                <div className="mt-16 text-center p-8 bg-gray-50 rounded-xl border border-gray-200">
                    <h3 className="text-xl font-medium text-gray-900 mb-3">
                        আমাদের লক্ষ্য: আপনার এবং আপনার বন্ধুদের সাফল্য
                    </h3>
                    <p className="text-gray-600 mb-6">
                        যদি আপনি এই প্ল্যাটফর্মের সুবিধা পেয়ে থাকেন, তবে অনুগ্রহ করে এটি আপনার কর্মজীবন-সন্ধানী বন্ধুদের সাথে শেয়ার করুন।
                    </p>
                    <button
                        onClick={(e) => handleShare(e, 'footer')}
                        className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-[#1a73e8] hover:bg-[#1967d2] transition-colors duration-200"
                    >
                        {shareStatus.key === 'footer' ? shareStatus.message : 'বন্ধুদের সাথে শেয়ার করুন'}
                    </button>
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

export default PricingPage;