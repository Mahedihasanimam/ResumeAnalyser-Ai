'use client'

import React, { useState } from 'react';

// প্ল্যান ডেটা - সকল মূল্য ০ (Free) করে ব্যবহারকারীর আগ্রহ বাড়াতে টায়ারগুলির নাম পরিবর্তন করা হয়েছে।
const pricingTiers = [
    {
        name: "মৌলিক বিশ্লেষণ (Basic)", // Basic Analysis
        price: "০",
        interval: "/ জীবনকাল",
        description: "প্ল্যাটফর্মটি পরীক্ষা করার জন্য আদর্শ। এটি আপনাকে আমাদের এআই ক্ষমতার প্রাথমিক ধারণা দেবে।",
        features: [
            { text: "৩টি সিভির প্রাথমিক এ.টি.এস স্ক্যান", available: true },
            { text: "প্রভাব বনাম দায়িত্বের অনুপাত (সীমিত)", available: true },
            { text: "লেআউট এবং বিন্যাস যাচাই", available: true },
            { text: "সেমান্টিক কীওয়ার্ড ইন্টিগ্রেশন", available: false },
            { text: "অসীম এ.টি.এস আল্ট্রা-স্ক্যান", available: false },
            { text: "ডেডিকেটেড চ্যাট সমর্থন", available: false },
        ],
        buttonText: "বিনামূল্যে শুরু করুন",
        buttonStyle: "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300",
    },
    {
        name: "প্রিমিয়াম অ্যাক্সেস (Recommended)", // Premium Access - Recommended
        price: "০",
        interval: "/ মাস (সাধারণত $৯)", // Note: Adding a hint that this is usually paid
        description: "ক্যারিয়ারে দ্রুত অগ্রগতি নিশ্চিত করতে আমাদের শক্তিশালী এআই টুলস ব্যবহার করুন। আমাদের সবচেয়ে জনপ্রিয় টায়ার, যা এখন বিনামূল্যে!",
        isRecommended: true,
        features: [
            { text: "অসীম এ.টি.এস আল্ট্রা-স্ক্যান", available: true },
            { text: "সম্পূর্ণ সিমান্টিক কীওয়ার্ড ইন্টিগ্রেশন", available: true },
            { text: "ইনফ্লুয়েন্স ফ্যাক্টর জেনারেটর (সম্পূর্ণ)", available: true },
            { text: "৫টি সিভি টার্গেটিং ল্যাব সংস্করণ", available: true },
            { text: "রিয়েল-টাইম এআই পরামর্শ", available: true },
            { text: "দ্রুত চ্যাট সমর্থন", available: false }, // Still slightly limited to encourage 'Expert'
        ],
        buttonText: "বিনামূল্যে প্রিমিয়াম অ্যাক্সেস নিন",
        buttonStyle: "bg-[#4285F4] text-white hover:bg-[#3269d9] shadow-lg shadow-[#4285F4]/50",
    },
    {
        name: "এক্সপার্ট টায়ার (Expert)", // Expert Tier
        price: "০",
        interval: "/ মাস (সাধারণত $২৫)", // Note: Adding a hint that this is usually paid
        description: "পরামর্শদাতা বা ভারী ব্যবহারকারীদের জন্য ডিজাইন করা। সীমাহীন বিশ্লেষণ ও ব্যক্তিগত সহায়তাসহ সর্বোচ্চ সুবিধা, সম্পূর্ণ বিনামূল্যে।",
        features: [
            { text: "অসীম এ.টি.এস আল্ট্রা-স্ক্যান ও বিশ্লেষণ", available: true },
            { text: "অসীম টার্গেটিং ল্যাব অ্যাক্সেস", available: true },
            { text: "সমস্ত এআই ফিচার আনলকড", available: true },
            { text: "বিশেষ চাকরির বাজার বিশ্লেষণ", available: true },
            { text: "২৪/৭ ডেডিকেটেড ম্যানেজার (চ্যাট)", available: true },
            { text: "ভবিষ্যত ফিচারে অগ্রিম অ্যাক্সেস", available: true },
        ],
        buttonText: "এখনই এক্সপার্ট টায়ার আনলক করুন",
        buttonStyle: "bg-[#34A853] text-white hover:bg-[#287d40] shadow-lg shadow-[#34A853]/50",
    },
];

function PricingPage() {
    // State to manage share feedback (tier-specific or general footer)
    const [shareStatus, setShareStatus] = useState({ key: null, message: 'বন্ধুদের সাথে শেয়ার করুন', color: 'text-[#4285F4]' });

    // Function to handle sharing logic (copy to clipboard)
    const handleShare = (e, tierName = 'footer') => {
        e.preventDefault(); // Stop redirection

        // Construct the share text using a placeholder for the URL origin
        const platformLink = window.location.origin || 'আপনার_প্ল্যাটফর্মের_লিঙ্ক';
        const shareText = `আমি এই অত্যাধুনিক, সম্পূর্ণ বিনামূল্যে CV Analyzer প্ল্যাটফর্মটি ব্যবহার করে আমার ক্যারিয়ারে উন্নতি এনেছি! আপনিও ব্যবহার করুন: ${platformLink}`;

        const handleClipboardCopy = (text) => {
            // Use document.execCommand('copy') as navigator.clipboard.writeText() may not work due to iFrame restrictions
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
                setTimeout(() => setShareStatus({ key: null, message: 'বন্ধুদের সাথে শেয়ার করুন', color: 'text-[#4285F4]' }), 3000);
            } else {
                setShareStatus({ key: tierName, message: 'কপি করতে ব্যর্থ। ম্যানুয়ালি কপি করুন।', color: 'text-[#EA4335]' });
                setTimeout(() => setShareStatus({ key: null, message: 'বন্ধুদের সাথে শেয়ার করুন', color: 'text-[#4285F4]' }), 3000);
            }
        };

        handleClipboardCopy(shareText);
    };

    return (
        <section className="py-16 sm:py-24 bg-white min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header: Emphasizing FREE Value and Encouraging Sharing */}
                <div className="text-center mb-16">
                    <h2 className="text-sm font-semibold tracking-wide uppercase">
                        <span className="text-[#FBBC05]">মু ল্য</span>
                        <span className="text-gray-700">&nbsp; ছা ড়া ই &nbsp;</span>
                        <span className="text-[#34A853]">অ সী ম স ম্ভা ব না</span>
                    </h2>
                    <p className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
                        অত্যাধুনিক এআই এখন সবার জন্য সম্পূর্ণ বিনামূল্যে
                    </p>
                    <p className="mt-4 max-w-3xl text-xl text-gray-500 mx-auto">
                        আমরা বিশ্বাস করি, সফল ক্যারিয়ার সবার অধিকার। তাই আমাদের প্রযুক্তিগত শ্রেষ্ঠত্ব কোনো মূল্য ছাড়াই আপনার জন্য উন্মুক্ত। এই সুযোগটি কাজে লাগান এবং আপনার বন্ধুদেরকেও জানিয়ে দিন!
                    </p>
                </div>

                {/* Pricing Grid */}
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-10 items-stretch">
                    {pricingTiers.map((tier, index) => (
                        <div
                            key={index}
                            className={`flex flex-col p-8 bg-gray-50 rounded-2xl shadow-xl transition-all duration-300 ${tier.isRecommended ? 'border-4 border-[#4285F4] scale-[1.02] bg-white' : 'border border-gray-200'
                                }`}
                        >
                            {tier.isRecommended && (
                                <p className="mb-4 inline-flex items-center justify-center rounded-full bg-[#4285F4] px-4 py-1 text-sm font-semibold text-white tracking-wider uppercase">
                                    সেরা সুবিধা: কোনো খরচ নেই
                                </p>
                            )}

                            <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                            <p className="mt-4 flex items-baseline">
                                <span className="text-5xl font-extrabold tracking-tight text-gray-900">
                                    <span className="text-xl">৳</span>{tier.price}
                                </span>
                                <span className="ml-1 text-xl font-medium text-gray-500">
                                    {tier.interval}
                                </span>
                            </p>
                            <p className="mt-4 text-base text-gray-600">{tier.description}</p>

                            <div className="flex-1 mt-6">
                                <ul role="list" className="space-y-4">
                                    {tier.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start">
                                            {feature.available ? (
                                                <svg className="flex-shrink-0 h-6 w-6 text-[#34A853] mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                </svg>
                                            ) : (
                                                <svg className="flex-shrink-0 h-6 w-6 text-gray-400 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            )}
                                            <p className="ml-3 text-base text-gray-700">{feature.text}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* CTA Button to Activate/Signup */}
                            <a
                                href={`/signup?plan=${tier.name.split('(')[0].trim().toLowerCase()}`}
                                className={`mt-8 block w-full text-center py-3 border border-transparent rounded-lg text-lg font-medium transition-colors duration-200 ${tier.buttonStyle}`}
                            >
                                {tier.buttonText}
                            </a>

                            {/* NEW: Share with Friends Option (Button with Dynamic Feedback) */}
                            <button
                                onClick={(e) => handleShare(e, tier.name)}
                                className="mt-3 block w-full text-center py-2 text-sm font-medium rounded-lg transition duration-200 focus:outline-none"
                            >
                                <div className={`flex items-center justify-center space-x-2 ${shareStatus.key === tier.name ? shareStatus.color : 'text-[#4285F4] hover:bg-blue-50'}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186h13.783a2.25 2.25 0 0 1 0 4.372H7.217m0-2.186L5.15 7.15m2.067 3.75 2.067-3.75M7.217 14.093l-2.067 3.75m2.067-3.75L9.284 17.843" />
                                    </svg>
                                    {/* Display dynamic message or default message */}
                                    <span>{shareStatus.key === tier.name ? shareStatus.message : 'বন্ধুদের সাথে শেয়ার করুন'}</span>
                                </div>
                            </button>
                        </div>
                    ))}
                </div>

                {/* Footer CTA: Dedicated to Sharing (Uses general share function) */}
                <div className="mt-20 text-center p-8 bg-gray-100 rounded-xl shadow-inner border-t-4 border-[#FBBC05]">
                    <h3 className="text-2xl font-extrabold text-gray-900 mb-2">
                        আমাদের লক্ষ্য: আপনার এবং আপনার বন্ধুদের সাফল্য
                    </h3>
                    <p className="text-lg text-gray-600 mb-6">
                        যদি আপনি এই প্ল্যাটফর্মের সুবিধা পেয়ে থাকেন, তবে অনুগ্রহ করে এটি আপনার কর্মজীবন-সন্ধানী বন্ধুদের সাথে শেয়ার করুন। একসাথে এগিয়ে চলি!
                    </p>
                    <button
                        onClick={(e) => handleShare(e, 'footer')}
                        className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-lg font-medium rounded-md shadow-md text-white bg-[#34A853] hover:bg-[#287d40] transition duration-300"
                    >
                        {/* Display dynamic message for footer or default message */}
                        {shareStatus.key === 'footer' ? shareStatus.message : 'বন্ধুদের সাথে শেয়ার করুন'}
                    </button>
                </div>

            </div>
        </section>
    );
}

export default PricingPage;