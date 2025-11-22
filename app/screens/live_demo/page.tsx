import Link from 'next/link';
import React from 'react';

function Live_demo() {

    // ডেমো ভিডিওর ধাপগুলি (বাংলায় ও বানান সংশোধিত)
    const demoSteps = [
        {
            step: "ধাপ ১: সিভি আপলোড",
            title: "আপনার সিভি আপলোড করুন",
            description: "প্ল্যাটফর্মে প্রবেশ করে আপনার রেজ্যুমে বা সিভি (PDF, DOCX) 'আপলোড' বাটনে ক্লিক করুন। আমাদের সিস্টেম দ্রুত ফাইলটি প্রক্রিয়া করবে।",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-[#4285F4]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3.75 16.5 7.5m-4.5 2.25V3.75" />
                </svg>
            )
        },
        {
            step: "ধাপ ২: এআই বিশ্লেষণ",
            title: "এআই বিশ্লেষণ এবং স্ক্যান",
            description: "এক ক্লিকে আমাদের অত্যাধুনিক এআই মডেলগুলি (ATS, সেমান্টিক টুলস) আপনার সিভির গভীর বিশ্লেষণ শুরু করবে। এই ধাপে কীওয়ার্ড গ্যাপ ও বিন্যাস ত্রুটিগুলো নির্ভুলভাবে শনাক্ত করা হয়।",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-[#EA4335]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.358 9-7.5s-4.03-7.5-9-7.5S3 8.358 3 12.75c0 1.906.96 3.655 2.5 4.885l-.178 1.956c-.05.548.514.947.962.653L12 18.995v1.255z" />
                </svg>
            )
        },
        {
            step: "ধাপ ৩: রিপোর্ট ও উন্নতি",
            title: "বিস্তারিত রিপোর্ট পর্যালোচনা",
            description: "আপনি একটি সহজে বোধগম্য ড্যাশবোর্ড রিপোর্ট পাবেন। এখানে অ্যাকশনযোগ্য ও সুনির্দিষ্ট পরামর্শ থাকবে, যা অনুসরণ করে আপনি আপনার সিভিকে তাৎক্ষণিকভাবে উন্নত করতে পারবেন।",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-[#34A853]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.5l6 6 9-9" />
                </svg>
            )
        }
    ];

    return (
        <section className="py-16 sm:py-24 bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header: Emphasizing Simplicity and Learning */}
                <div className="text-center mb-16">
                    <h2 className="text-sm font-semibold tracking-wide uppercase">
                        <span className="text-[#FBBC05]">শি খু ন</span>
                        <span className="text-gray-700">&nbsp; মা ত্র &nbsp;</span>
                        <span className="text-[#34A853]">৩ টি &nbsp; ধা পে</span>
                    </h2>
                    <p className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
                        লাইভ ডেমো: দ্রুত ব্যবহারের নির্দেশিকা
                    </p>
                    <p className="mt-4 max-w-3xl text-xl text-gray-600 mx-auto">
                        আমাদের প্ল্যাটফর্ম ব্যবহার করা খুবই সহজ। নিচের ভিডিওটি দেখে নিন কীভাবে মাত্র কয়েক মিনিটের মধ্যে আপনার সিভিকে বিশ্লেষণ ও অপটিমাইজ করবেন—সম্পূর্ণ বিনামূল্যে।
                    </p>
                </div>

                {/* Video Placeholder (Main Feature) - Enhanced Google Style */}
                <div className="mt-10 mb-20 max-w-5xl mx-auto">
                    <div className="relative w-full aspect-video bg-gray-100 rounded-2xl shadow-2xl overflow-hidden border-4 border-[#4285F4]">
                        {/* Responsive YouTube iframe */}
                        <iframe
                            className="absolute inset-0 w-full h-full"
                            src="https://www.youtube.com/embed/x_DIy7KL7q4?si=4RP4WDedcpJ_2pIm"
                            title="Live Demo Video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        />
                    </div>
                </div>

                {/* Step-by-Step Guide Section (Below Video) */}
                <div className="mt-16">
                    <h3 className="text-3xl font-extrabold text-gray-900 mb-10 text-center">
                        ব্যবহার প্রক্রিয়া: সহজ ৩টি ধাপ
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {demoSteps.map((item, index) => (
                            <div key={index} className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg border-t-4 border-[#FBBC05] transition-shadow duration-300 hover:shadow-2xl">
                                <div className="mb-4 p-3 bg-gray-100 rounded-full">
                                    {item.icon}
                                </div>
                                <h4 className="text-xl font-bold text-gray-900 mb-2 text-center">{item.step}</h4>
                                <p className="text-center text-gray-600">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Final CTA: Encouraging immediate action */}
                <div className="mt-20 text-center p-10 bg-[#f0f4f9] rounded-2xl shadow-inner border-t-4 border-[#34A853]">
                    <h3 className="text-3xl font-extrabold text-gray-900 mb-4">
                        ভিডিও দেখা শেষ? আর দেরি নয়!
                    </h3>
                    <p className="text-xl text-gray-600 mb-8">
                        আপনার সিভি অপটিমাইজ করা শুরু করুন এবং আপনার ড্রিম জবের দিকে প্রথম ধাপ নিন।
                    </p>
                    <Link
                        href="/" // Link to the analysis page
                        className="inline-flex items-center justify-center px-12 py-4 border border-transparent text-xl font-medium rounded-full shadow-2xl text-white bg-[#34A853] hover:bg-[#287d40] transition duration-300 transform hover:scale-105 uppercase tracking-wider"
                    >
                        বিনামূল্যে বিশ্লেষণ শুরু করুন
                    </Link>
                </div>

            </div>
        </section>
    );
}

export default Live_demo;