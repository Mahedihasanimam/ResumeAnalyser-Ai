'use client';

import React, { useState } from 'react';

function EmployersPage() {
    const [showContactForm, setShowContactForm] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Create email content
        const subject = `Employer Partnership Inquiry from ${formData.company}`;
        const body = `
Name: ${formData.name}
Company: ${formData.company}
Email: ${formData.email}
Phone: ${formData.phone}

Message:
${formData.message}

---
Sent from ResumeAI Employers Page
        `.trim();

        // Open default email client
        window.location.href = `mailto:career@resumeai.bd?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        // Reset form
        setFormData({
            name: '',
            company: '',
            email: '',
            phone: '',
            message: ''
        });
        setShowContactForm(false);
    };

    return (
        <section className="py-16 bg-white min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header - Google Style */}
                <div className="text-center mb-16 p-8 bg-white rounded-xl border border-gray-200">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full mb-6">
                        <div className="flex space-x-1">
                            <div className="w-1.5 h-1.5 bg-[#4285F4] rounded-full"></div>
                            <div className="w-1.5 h-1.5 bg-[#34A853] rounded-full"></div>
                            <div className="w-1.5 h-1.5 bg-[#EA4335] rounded-full"></div>
                        </div>
                        <span className="text-sm font-medium text-gray-600">
                            নিয়োগকর্তাদের জন্য
                        </span>
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-medium text-gray-900 tracking-tight">
                        নিয়ন্ত্রণ করুন আপনার ট্যালেন্ট পাইপলাইন
                    </h2>
                    <p className="mt-4 max-w-3xl text-lg text-gray-600 mx-auto">
                        আমাদের স্মার্ট প্ল্যাটফর্ম আপনার নিয়োগ প্রক্রিয়াকে সরল, দ্রুত এবং ভুলমুক্ত করে। শুধুমাত্র অপটিমাইজড, যোগ্য প্রার্থীদের খুঁজুন।
                    </p>
                </div>

                {/* Process Steps - Google Style */}
                <div className="space-y-16">

                    {/* Step 1 */}
                    <div className="flex flex-col lg:flex-row items-start gap-8">
                        <div className="lg:w-1/2">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-10 h-10 bg-[#4285F4] rounded-full flex items-center justify-center text-white font-medium text-lg">
                                    ১
                                </div>
                                <h3 className="text-2xl font-medium text-gray-900">
                                    এআই-ভেটেড কোয়ালিটি ট্যালেন্ট
                                </h3>
                            </div>
                            <p className="text-gray-600">
                                যেসব প্রার্থী আমাদের কঠোর এ.টি.এস (ATS) আল্ট্রা-স্ক্যান এবং সেমান্টিক বিশ্লেষণ পাস করেছেন, তাদের সিভি স্বয়ংক্রিয়ভাবে উচ্চমানের। এর মানে আপনার হাতে আসা প্রতিটি আবেদনই স্ক্রিনিংয়ের জন্য প্রস্তুত।
                            </p>
                        </div>
                        <div className="lg:w-1/2 bg-gray-50 p-6 rounded-xl border border-gray-200">
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-[#4285F4] rounded-lg flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.358 9-7.5s-4.03-7.5-9-7.5S3 8.358 3 12.75c0 1.906.96 3.655 2.5 4.885l-.178 1.956c-.05.548.514.947.962.653L12 18.995v1.255z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-lg font-medium text-gray-800">৯৮% নির্ভুলতা</p>
                                    <p className="text-sm text-gray-600">আমাদের মডেল প্রার্থীদের চাকরির প্রয়োজনীয়তার সাথে সেমান্টিক মিল খুঁজে বের করে।</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="flex flex-col lg:flex-row items-start gap-8">
                        <div className="lg:w-1/2 order-2 lg:order-1">
                            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                                <h4 className="text-lg font-medium text-gray-900 mb-4">নিয়োগের সময় হ্রাস</h4>
                                <div className="space-y-4">
                                    <div>
                                        <div className="flex justify-between text-sm font-medium text-gray-700 mb-1">
                                            <span>পূর্বের সময়কাল</span>
                                            <span className="text-[#EA4335]">১৫ দিন</span>
                                        </div>
                                        <div className="h-2 bg-gray-200 rounded-full">
                                            <div className="h-2 bg-[#EA4335] rounded-full" style={{ width: '80%' }}></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex justify-between text-sm font-medium text-gray-700 mb-1">
                                            <span>বর্তমান সময়কাল</span>
                                            <span className="text-[#34A853]">৮ দিন</span>
                                        </div>
                                        <div className="h-2 bg-gray-200 rounded-full">
                                            <div className="h-2 bg-[#34A853] rounded-full" style={{ width: '43%' }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 order-1 lg:order-2">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-10 h-10 bg-[#34A853] rounded-full flex items-center justify-center text-white font-medium text-lg">
                                    ২
                                </div>
                                <h3 className="text-2xl font-medium text-gray-900">
                                    নিয়োগ প্রক্রিয়ায় সর্বোচ্চ গতি
                                </h3>
                            </div>
                            <p className="text-gray-600">
                                ভুল কীওয়ার্ডের ভিড় এবং অসম্পূর্ণ আবেদনপত্রের কারণে আপনার মূল্যবান সময় নষ্ট হবে না। আমাদের প্রার্থীরা চাকরির বর্ণনার সাথে সর্বোচ্চ সিমান্টিক মিল নিশ্চিত করেই আবেদন করেন।
                            </p>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="flex flex-col lg:flex-row items-start gap-8">
                        <div className="lg:w-1/2">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-10 h-10 bg-[#FBBC05] rounded-full flex items-center justify-center text-white font-medium text-lg">
                                    ৩
                                </div>
                                <h3 className="text-2xl font-medium text-gray-900">
                                    ডেটা-চালিত পার্টনারশিপ
                                </h3>
                            </div>
                            <p className="text-gray-600">
                                আমরা শুধুমাত্র প্রার্থী দিই না, আমরা আপনার বাজারের চাহিদার ভিত্তিতে বিশেষজ্ঞ ট্যালেন্ট পুল অ্যাক্সেস এবং বিশেষ এআই-চালিত স্ক্রিনিং টুলের জন্য পার্টনারশিপ অফার করি।
                            </p>
                        </div>
                        <div className="lg:w-1/2 bg-gray-50 p-6 rounded-xl border border-gray-200">
                            <h4 className="text-lg font-medium text-gray-900 mb-4">ট্যালেন্ট অ্যানালিটিক্স</h4>
                            <div className="space-y-3">
                                <div className="flex justify-between items-center border-b pb-2">
                                    <span className="text-sm text-gray-600">পেশাদার দক্ষতা পুল</span>
                                    <span className="text-xl font-semibold text-[#FBBC05]">৫,২০০+</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-gray-600">শীর্ষ ৩% প্রার্থী</span>
                                    <span className="text-xl font-semibold text-[#EA4335]">১৪৫</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Testimonial - Google Style */}
                <div className="mt-16 max-w-4xl mx-auto p-8 bg-gray-50 rounded-xl border border-gray-200">
                    <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-[#EA4335] rounded-full flex items-center justify-center">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                        </div>
                        <div>
                            <p className="text-xl text-gray-800 italic">
                                "আমাদের এইচআর টিম এই প্ল্যাটফর্ম থেকে আসা সিভিগুলোর মান দেখে সত্যিই মুগ্ধ। এটি আমাদের নিয়োগের সময়কাল <span className="text-[#EA4335] font-medium">৪৫%</span> উল্লেখযোগ্যভাবে কমিয়ে দিয়েছে।"
                            </p>
                            <p className="mt-4 text-base font-medium text-gray-700">- একটি শীর্ষস্থানীয় টেক কোম্পানি</p>
                        </div>
                    </div>
                </div>

                {/* Final CTA - Google Style */}
                <div className="mt-16 text-center">
                    <h3 className="text-2xl font-medium text-gray-900 mb-4">
                        বিশেষজ্ঞ ট্যালেন্ট অ্যাক্সেস করতে প্রস্তুত?
                    </h3>
                    <p className="text-lg text-gray-600 mb-8">
                        আপনার নিয়োগের চ্যালেঞ্জগুলি নিয়ে আলোচনা করতে এবং আমাদের ট্যালেন্ট পুল অ্যাক্সেস করতে যোগাযোগ করুন।
                    </p>
                    <button
                        onClick={() => setShowContactForm(true)}
                        className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-[#1a73e8] hover:bg-[#1967d2] transition-colors duration-200"
                    >
                        আমাদের সাথে যোগাযোগ করুন
                    </button>
                </div>

                {/* Contact Form Modal - Google Style */}
                {showContactForm && (
                    <div className="fixed inset-0 bg-black/10 flex items-center justify-center z-50 p-4">
                        <div className="bg-white rounded-xl max-w-md w-full p-6">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-xl font-medium text-gray-900">যোগাযোগ করুন</h3>
                                <button
                                    onClick={() => setShowContactForm(false)}
                                    className="text-gray-400 hover:text-gray-600"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                        আপনার নাম
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-[#1a73e8] focus:border-[#1a73e8]"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                                        কোম্পানির নাম
                                    </label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-[#1a73e8] focus:border-[#1a73e8]"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                        ইমেইল
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-[#1a73e8] focus:border-[#1a73e8]"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                        ফোন নম্বর
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-[#1a73e8] focus:border-[#1a73e8]"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                        বার্তা
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        rows={4}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-[#1a73e8] focus:border-[#1a73e8]"
                                        placeholder="আপনার চাহিদা এবং প্রয়োজনীয়তা সম্পর্কে লিখুন..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-black/35 text-white py-3 px-4 rounded-lg hover:bg-[#1967d2] transition-colors duration-200 font-medium"
                                >
                                    ইমেইল পাঠান
                                </button>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}

export default EmployersPage;