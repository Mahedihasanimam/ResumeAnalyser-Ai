import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbbar from "@/components/Navbbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// অত্যাধুনিক SEO মেট্রিক্স: ATS, AI এবং বাংলা কীওয়ার্ড সহ
export const metadata: Metadata = {
  // নতুন Optimized Title (সর্বোচ্চ CTR এবং SEO-এর জন্য)
  title: "AI চালিত CV/Resume Analyzer | ফ্রি ATS সামঞ্জস্য ও অপটিমাইজেশন",

  // নতুন Optimized Description (সুস্পষ্ট সুবিধা এবং এআই প্রযুক্তির উল্লেখ)
  description: "আমাদের অত্যাধুনিক AI প্রযুক্তির মাধ্যমে সম্পূর্ণ বিনামূল্যে আপনার সিভি বিশ্লেষণ করুন। ATS স্ক্যান, কীওয়ার্ড অপটিমাইজেশন এবং বিশেষজ্ঞের পরামর্শ নিয়ে নিয়োগকর্তার প্রথম পছন্দ হন।",

  // শক্তিশালী কীওয়ার্ডের সেট (Google search terms based on ATS and CV analysis)
  keywords: [
    // --- ENGLISH TRENDING KEYWORDS ---
    "ATS Resume Checker Free",
    "AI Resume Review Tool",
    "CV Optimization Platform",
    "Free Resume Builder",
    "Job Application Success",
    "Improve Resume Score",
    "Professional CV Formatting",
    "Best Resume Analyzer 2024",

    // --- BANGLA KEYWORDS ---
    "সিভি চেক বিনামূল্যে",
    "এআই রেজ্যুমে পরীক্ষক",
    "ATS সামঞ্জস্যতা পরীক্ষা",
    "চাকরির জন্য সিভি তৈরি",
    "কীওয়ার্ড অপটিমাইজেশন টুল",
    "সিভি সংশোধন",
    "ফ্রি সিভি অপটিমাইজার",
    "বাংলাদেশ চাকরির সিভি",

    // --- HINDI/HINDUSTANI KEYWORDS (Devanagari script) ---
    "फ्री रेज़्यूमे चेकर",
    "एटीएस रेज़्यूमे विश्लेषण",
    "सीवी ऑप्टिमाइज़ेशन टूल मुफ्त",
    "एआई सीवी समीक्षक",
    "नौकरी के लिए रेज़्यूमे स्कोर",
  ],

  // OpenGraph মেটাডেটা (সোশ্যাল মিডিয়া শেয়ারিংয়ের জন্য)
  openGraph: {
    title: "AI চালিত CV/Resume Analyzer | ফ্রি ATS সামঞ্জস্য ও অপটিমাইজেশন",
    description: "ATS স্ক্যান, কীওয়ার্ড অপটিমাইজেশন এবং বিশেষজ্ঞের পরামর্শ নিয়ে নিয়োগকর্তার প্রথম পছন্দ হন।",
    url: "আপনার-প্ল্যাটফর্মের-লিঙ্ক", // এই লিঙ্কটি আপনার আসল ডোমেন দিয়ে আপডেট করুন
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // 'lang' attribute বাংলাতে পরিবর্তন করা হলো
    <html lang="bn">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbbar />
        {children}

        <Footer />
      </body>
    </html>
  );
}