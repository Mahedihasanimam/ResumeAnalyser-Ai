// 'use client'
// import React, { useState } from "react";
// import { Check, Loader2, FileText, UploadCloud, XCircle, BarChart2, Zap, Lightbulb } from 'lucide-react'; // Added lucide-react icons

// // --- Type Definitions (Unchanged) ---
// interface AnalysisResult {
//     summaryScore: number;
//     strengths: string[];
//     weaknesses: string[];
//     matchingRoles: string[];
//     detailedAnalysis: {
//         atsCompatibility: number;
//         contentQuality: number;
//         keywordOptimization: number;
//         structure: number;
//         impactMetrics: number;
//     };
//     improvementSuggestions: {
//         suggestion: string;
//         reason: string;
//         example: string;
//         priority: "high" | "medium" | "low";
//     }[];
//     redFlags: {
//         issue: string;
//         impact: string;
//         solution: string;
//     }[];
// }

// interface UploadState {
//     result: AnalysisResult | null;
//     error: string | undefined;
// }

// interface CheckItem {
//     id: string;
//     label: string;
//     completed: boolean;
// }

// const initialState: UploadState = {
//     result: null,
//     error: undefined,
// };

// // --- Main Component ---
// export default function ResumeUpload() {
//     const [file, setFile] = useState<File | null>(null);
//     const [analyzing, setAnalyzing] = useState<boolean>(false);
//     const [uploadState, setUploadState] = useState<UploadState>(initialState);
//     const [checkItems, setCheckItems] = useState<CheckItem[]>([]);
//     const [currentCheckIndex, setCurrentCheckIndex] = useState<number>(0);

//     const analysisChecklist: CheckItem[] = [
//         { id: "file-format", label: "PDF ফাইল ফরম্যাট চেক করা হচ্ছে", completed: false },
//         { id: "text-extraction", label: "রিজিউমি টেক্সট এক্সট্র্যাক্ট করা হচ্ছে", completed: false },
//         { id: "ats-scan", label: "ATS কম্প্যাটিবিলিটি স্ক্যান", completed: false },
//         { id: "keyword-analysis", label: "কীওয়ার্ড ও অপ্টিমাইজেশন এনালাইসিস", completed: false },
//         { id: "structure-check", label: "স্ট্রাকচার ও ফরম্যাটিং চেক", completed: false },
//         { id: "content-quality", label: "কন্টেন্ট কোয়ালিটি অ্যাসেসমেন্ট", completed: false },
//         { id: "impact-metrics", label: "ইমপ্যাক্ট মেট্রিক্স এনালাইসিস", completed: false },
//         { id: "role-matching", label: "জব রোল ম্যাচিং", completed: false },
//         { id: "final-scoring", label: "ফাইনাল স্কোরিং ও রিপোর্ট জেনারেট", completed: false },
//     ];

//     // Initialize checklist when component mounts (or after analysis reset)
//     useState(() => {
//         setCheckItems(analysisChecklist.map(item => ({ ...item, completed: false })));
//     });


//     const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const selected = e.target.files && e.target.files[0];
//         if (selected && selected.type !== 'application/pdf') {
//             setUploadState({ result: null, error: "শুধুমাত্র PDF ফাইল সাপোর্টেড" });
//             setFile(null);
//             return;
//         }
//         setFile(selected);
//         setUploadState(initialState);
//         setCheckItems(analysisChecklist.map(item => ({ ...item, completed: false })));
//         setCurrentCheckIndex(0);
//     };

//     const simulateCheckProgress = async () => {
//         for (let i = 0; i < analysisChecklist.length; i++) {
//             await new Promise(resolve => setTimeout(resolve, 300 + Math.random() * 400));
//             setCurrentCheckIndex(i);
//             setCheckItems(prev =>
//                 prev.map((item, index) =>
//                     index <= i ? { ...item, completed: true } : item
//                 )
//             );
//         }
//     };

//     const handleAnalyze = async () => {
//         if (!file) {
//             setUploadState({ result: null, error: "দয়া করে প্রথমে আপনার রিজিউমি PDF আপলোড করুন" });
//             return;
//         }

//         setAnalyzing(true);
//         setUploadState(initialState);
//         setCheckItems(analysisChecklist.map(item => ({ ...item, completed: false })));
//         setCurrentCheckIndex(0);

//         try {
//             // Start the checking animation
//             await simulateCheckProgress();

//             // --- Simulation (Replace with actual fetch calls) ---
//             // Simulating a high-quality result
//             const simulateAnalysisResult: AnalysisResult = {
//                 summaryScore: 88, // Increased score for professional look
//                 strengths: [
//                     "জব মার্কেটের জন্য প্রাসঙ্গিক শক্তিশালী কীওয়ার্ড",
//                     "স্পষ্ট এবং সংক্ষিপ্ত প্রোফেশনাল সামারি",
//                     "কাজের অভিজ্ঞতায় পরিমাপযোগ্য অর্জন (কোয়ান্টিফায়েড রেজাল্ট)",
//                     "প্রযুক্তিগত দক্ষতা ভালোভাবে ও সুগঠিতভাবে উপস্থাপন",
//                 ],
//                 weaknesses: [
//                     "কিছু বুলেট পয়েন্টে আরও নির্দিষ্ট মেট্রিক্স যোগ করা যেতে পারে",
//                     "কিছু অংশে বাক্য গঠন আরও সংক্ষিপ্ত করা প্রয়োজন",
//                 ],
//                 matchingRoles: [
//                     "সিনিয়র সফটওয়্যার ইঞ্জিনিয়ার",
//                     "ডাটা আর্কিটেক্ট",
//                     "টেক লিড",
//                     "AI/ML ইঞ্জিনিয়ার",
//                     "ক্লাউড সলিউশন কনসালটেন্ট",
//                 ],
//                 detailedAnalysis: {
//                     atsCompatibility: 92,
//                     contentQuality: 85,
//                     keywordOptimization: 90,
//                     structure: 88,
//                     impactMetrics: 78
//                 },
//                 improvementSuggestions: [
//                     {
//                         suggestion: "স্কিলের সাথে প্রজেক্ট লিঙ্ক করুন",
//                         reason: "স্কিলগুলি বাস্তবে কীভাবে ব্যবহার করেছেন তা দেখানো হয়নি",
//                         example: "'Node.js' ব্যবহার করে একটি 'Scalable API Gateway' তৈরির প্রজেক্ট যোগ করুন",
//                         priority: "medium"
//                     },
//                     {
//                         suggestion: "কাস্টমাইজড সামারি লিখুন",
//                         reason: "প্রতিটি জবের জন্য সামারি কাস্টমাইজ করলে ATS স্কোর বাড়ে",
//                         example: "জব ডেস্ক্রিপশন থেকে মূল কীওয়ার্ডগুলি সামারিতে ব্যবহার করুন",
//                         priority: "low"
//                     }
//                 ],
//                 redFlags: [
//                     {
//                         issue: "শিক্ষাগত যোগ্যতার তারিখ উল্টোপাল্টা",
//                         impact: "রিক্রুটাররা বিভ্রান্ত হয়, প্রফেশনালিজম প্রশ্নবিদ্ধ হতে পারে",
//                         solution: "সর্বশেষ ডিগ্রি প্রথমে রেখে ক্রমানুসারে সাজান (Reverse Chronological)"
//                     },
//                 ]
//             };

//             await new Promise(resolve => setTimeout(resolve, 1000));
//             setUploadState({ result: simulateAnalysisResult, error: undefined });

//         } catch (err: unknown) {
//             const message = err instanceof Error ? err.message : String(err);
//             setUploadState({ result: null, error: message || "বিশ্লেষণের সময় একটি অপ্রত্যাশিত ত্রুটি ঘটেছে" });
//         } finally {
//             setAnalyzing(false);
//         }
//     };

//     // --- Component for Rendering the Analysis Checklist (Permanent/Sidebar) ---
//     const renderChecklistSidebar = (isAnalyzing: boolean) => (
//         <div className="bg-white rounded-2xl shadow-xl p-6 h-full border border-gray-200">
//             <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
//                 <BarChart2 className="w-5 h-5 mr-2 text-blue-600" />
//                 বিশ্লেষণ প্রক্রিয়া
//             </h4>
//             <div className="space-y-3">
//                 {checkItems.map((item, index) => (
//                     <div key={item.id} className="flex items-center">
//                         <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0 ${item.completed
//                             ? "bg-green-500"
//                             : isAnalyzing && index === currentCheckIndex
//                                 ? "bg-blue-500"
//                                 : "bg-gray-200"
//                             }`}>
//                             {item.completed ? (
//                                 <Check className="w-4 h-4 text-white" />
//                             ) : isAnalyzing && index === currentCheckIndex ? (
//                                 <Loader2 className="w-4 h-4 text-white animate-spin" />
//                             ) : (
//                                 <span className="text-sm text-gray-500">
//                                     {index + 1}
//                                 </span>
//                             )}
//                         </div>
//                         <span className={`text-md ${item.completed ? "text-green-700 font-medium" : isAnalyzing && index === currentCheckIndex ? "text-blue-600 font-semibold" : "text-gray-500"
//                             }`}>
//                             {item.label}
//                         </span>
//                     </div>
//                 ))}
//             </div>
//             {isAnalyzing && (
//                 <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
//                     <p className="text-blue-700 text-sm flex items-center">
//                         <Zap className="w-4 h-4 mr-2" />
//                         <strong>বর্তমানে চলছে:</strong> {checkItems[currentCheckIndex]?.label}
//                     </p>
//                 </div>
//             )}
//             {uploadState.result && (
//                 <div className="mt-6 p-3 bg-green-50 rounded-lg border border-green-200 text-center">
//                     <p className="text-green-700 font-bold">✅ বিশ্লেষণ সম্পন্ন!</p>
//                 </div>
//             )}
//         </div>
//     );

//     // --- Component for Rendering the Full-Width Analysis Result ---
//     const renderAnalysisResult = (data: AnalysisResult) => {
//         const { summaryScore, strengths, matchingRoles, detailedAnalysis, improvementSuggestions, redFlags } = data;

//         const getScoreColor = (score: number) => {
//             if (score >= 85) return "text-green-600";
//             if (score >= 70) return "text-blue-600";
//             return "text-orange-600";
//         };

//         const getScoreBg = (score: number) => {
//             if (score >= 85) return "bg-green-50 border-green-200";
//             if (score >= 70) return "bg-blue-50 border-blue-200";
//             return "bg-orange-50 border-orange-200";
//         };

//         const getPriorityColor = (priority: string) => {
//             switch (priority) {
//                 case "high": return "bg-red-100 text-red-800 border-red-300";
//                 case "medium": return "bg-orange-100 text-orange-800 border-orange-300";
//                 case "low": return "bg-blue-100 text-blue-800 border-blue-300";
//                 default: return "bg-gray-100 text-gray-800";
//             }
//         };

//         return (
//             <div className="space-y-10">
//                 <div className="text-center p-8 rounded-2xl border-4 shadow-xl mx-auto max-w-lg" style={{ borderColor: getScoreColor(summaryScore).replace('text-', '') }}>
//                     <h3 className="text-2xl font-extrabold text-gray-800 mb-4">রিজিউমি স্কোর</h3>
//                     <div className="flex items-center justify-center space-x-6">
//                         <div className="relative w-32 h-32">
//                             {/* Score Circle SVG - Professional Look */}
//                             <svg className="w-full h-full" viewBox="0 0 36 36">
//                                 <path
//                                     d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
//                                     fill="none"
//                                     stroke="#E5E7EB"
//                                     strokeWidth="3.5"
//                                 />
//                                 <path
//                                     d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
//                                     fill="none"
//                                     stroke="#0e7490" // A professional cyan color
//                                     strokeWidth="3.5"
//                                     strokeDasharray={`${summaryScore}, 100`}
//                                 />
//                             </svg>
//                             <div className="absolute inset-0 flex flex-col items-center justify-center">
//                                 <span className={`text-5xl font-extrabold ${getScoreColor(summaryScore)}`}>{summaryScore}</span>
//                                 <span className="text-sm text-gray-500">/100</span>
//                             </div>
//                         </div>
//                         <div className="text-left">
//                             <p className="text-xl font-semibold text-gray-700">
//                                 {summaryScore >= 85
//                                     ? "✅ অসাধারণ কাজ!"
//                                     : summaryScore >= 70
//                                         ? "✨ ভালো স্কোর, সামান্য উন্নতি প্রয়োজন"
//                                         : "⚠️ উন্নতির সুযোগ আছে"
//                                 }
//                             </p>
//                             <p className="text-sm text-gray-500 mt-2">আপনার স্কোরটি ATS স্ট্যান্ডার্ড অনুযায়ী</p>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Detailed Analysis Metrics */}
//                 <div className="bg-white rounded-xl p-6 border shadow-lg border-gray-100">
//                     <h4 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-3 flex items-center">
//                         <BarChart2 className="w-6 h-6 mr-3 text-blue-600" />
//                         কোর মেট্রিক্স এনালাইসিস
//                     </h4>
//                     <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
//                         {Object.entries(detailedAnalysis).map(([key, value]) => (
//                             <div key={key} className="text-center p-4 bg-gray-50 rounded-lg border border-gray-200 transition duration-300 hover:shadow-md">
//                                 <div className={`text-3xl font-bold ${getScoreColor(value)} mb-1`}>
//                                     {value}%
//                                 </div>
//                                 <div className="text-sm text-gray-600 capitalize font-medium">
//                                     {key.replace(/([A-Z])/g, ' $1').trim()}
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Improvement & Red Flags in Two Columns on Larger Screens */}
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//                     {/* Improvement Suggestions */}
//                     <div className="bg-orange-50 rounded-xl p-6 border shadow-lg border-orange-200">
//                         <h4 className="text-xl font-bold text-orange-800 mb-4 border-b border-orange-300 pb-2 flex items-center">
//                             <Lightbulb className="w-5 h-5 mr-2" />
//                             উন্নতির জন্য সুপারিশ
//                         </h4>
//                         <div className="space-y-4">
//                             {improvementSuggestions.map((suggestion, index) => (
//                                 <div key={index} className={`bg-white rounded-lg p-4 border-l-4 ${getPriorityColor(suggestion.priority).split(' ')[1].replace('-', 'l-')}`} style={{ borderColor: getPriorityColor(suggestion.priority).split(' ')[2].replace('border-', '') }}>
//                                     <div className="flex justify-between items-start mb-2">
//                                         <h5 className="font-bold text-gray-800">{suggestion.suggestion}</h5>
//                                         <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(suggestion.priority)}`}>
//                                             {suggestion.priority === "high" ? "উচ্চ প্রাধান্য" : suggestion.priority === "medium" ? "মধ্যম প্রাধান্য" : "নিম্ন প্রাধান্য"}
//                                         </span>
//                                     </div>
//                                     <p className="text-gray-700 mb-2"><strong>কারণ:</strong> {suggestion.reason}</p>
//                                     <div className="bg-gray-50 p-3 rounded border border-gray-200">
//                                         <strong className="text-gray-600 block mb-1">উদাহরণ:</strong>
//                                         <p className="text-gray-800 text-sm">{suggestion.example}</p>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>

//                     {/* Red Flags Section */}
//                     <div className="bg-red-50 rounded-xl p-6 border shadow-lg border-red-200">
//                         <h4 className="text-xl font-bold text-red-800 mb-4 border-b border-red-300 pb-2 flex items-center">
//                             <XCircle className="w-5 h-5 mr-2" />
//                             রেড ফ্ল্যাগস (বাধ্যতামূলক সমাধান)
//                         </h4>
//                         <div className="space-y-4">
//                             {redFlags.map((flag, index) => (
//                                 <div key={index} className="bg-white rounded-lg p-4 border border-red-300">
//                                     <div className="flex items-start">
//                                         <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
//                                             <Zap className="w-4 h-4 text-white" />
//                                         </div>
//                                         <div className="flex-1">
//                                             <h5 className="font-bold text-red-700 text-lg">{flag.issue}</h5>
//                                             <p className="text-red-600 mt-1 text-sm"><strong>ইমপ্যাক্ট:</strong> {flag.impact}</p>
//                                             <p className="text-green-700 mt-2 text-sm"><strong>সমাধান:</strong> {flag.solution}</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>

//                 {/* Strengths & Matching Roles in Full Width */}
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//                     {/* Strengths */}
//                     <div className="bg-green-50 rounded-xl p-6 border shadow-lg border-green-200">
//                         <div className="flex items-center mb-4 border-b border-green-300 pb-2">
//                             <Check className="w-5 h-5 text-green-600 mr-2" />
//                             <h4 className="text-xl font-bold text-green-800">আপনার শক্তিগুলো</h4>
//                         </div>
//                         <ul className="space-y-3">
//                             {strengths.map((s, i) => (
//                                 <li key={i} className="flex items-start">
//                                     <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
//                                     <span className="text-green-700">{s}</span>
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>

//                     {/* Matching Roles */}
//                     <div className="bg-blue-50 rounded-xl p-6 border shadow-lg border-blue-200">
//                         <div className="flex items-center mb-4 border-b border-blue-300 pb-2">
//                             <FileText className="w-5 h-5 text-blue-600 mr-2" />
//                             <h4 className="text-xl font-bold text-blue-800">প্রস্তাবিত ক্যারিয়ার</h4>
//                         </div>
//                         <div className="flex flex-wrap gap-3">
//                             {matchingRoles.map((r, i) => (
//                                 <span key={i} className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md hover:shadow-lg transition duration-300">
//                                     {r}
//                                 </span>
//                             ))}
//                         </div>
//                     </div>
//                 </div>

//             </div>
//         );
//     };

//     // --- Main Render Function ---
//     return (
//         <>
//             <style jsx global>{`
//                 /* ... (Blob styles remain the same) ... */
//                 @keyframes blob {
//                     0% { transform: translate(0px, 0px) scale(1); }
//                     33% { transform: translate(30px, -50px) scale(1.1); }
//                     66% { transform: translate(-20px, 20px) scale(0.9); }
//                     100% { transform: translate(0px, 0px) scale(1); }
//                 }
//                 .animate-blob { animation: blob 7s infinite cubic-bezier(0.6, 0.01, 0.4, 1); }
//                 .animation-delay-2000 { animation-delay: 2s; }
//                 .animation-delay-4000 { animation-delay: 4s; }
//             `}</style>

//             <div className="relative min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 flex flex-col items-center p-4 sm:p-8 overflow-hidden">
//                 {/* Background blobs with blue/cyan theme */}
//                 <div className="absolute top-10 left-1/4 w-48 h-48 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
//                 <div className="absolute bottom-20 right-1/4 w-48 h-48 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
//                 <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-sky-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>

//                 <div className="z-10 w-full max-w-7xl space-y-8">
//                     {analyzing && (
//                         // Full-width loading/analyzing state
//                         <div className="bg-white rounded-2xl shadow-2xl p-10 border border-blue-100 text-center">
//                             <h3 className="text-3xl font-bold text-gray-800 mb-2">রিজিউমি বিশ্লেষণ চলছে...</h3>
//                             <p className="text-xl text-gray-600 mb-6">দয়া করে অপেক্ষা করুন, এআই আপনার রিপোর্ট তৈরি করছে।</p>
//                             {renderChecklistSidebar(true)}
//                         </div>
//                     )}

//                     {!analyzing && (
//                         <>
//                             {/* TOP SECTION: Upload and Permanent Checklist (Two Columns) */}
//                             <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//                                 {/* Upload Card (2/3 width on large screens) */}
//                                 <div className="lg:col-span-2 bg-white rounded-2xl shadow-2xl p-8 flex flex-col border border-blue-100 h-full">
//                                     <div className="text-center mb-6">
//                                         <h3 className="text-2xl font-bold text-gray-800 mb-2">আপনার রিজিউমি আপলোড করুন</h3>
//                                         <p className="text-gray-600">PDF ফাইল আপলোড করে এআই বিশ্লেষণ পান</p>
//                                     </div>

//                                     <div
//                                         className={`w-full h-64 border-2 ${file ? 'border-green-400 bg-green-50' : 'border-dashed border-blue-300 bg-blue-50'} rounded-2xl flex flex-col items-center justify-center text-gray-500 transition-all duration-300 cursor-pointer hover:border-blue-400 hover:bg-blue-100`}
//                                         onClick={() => document.getElementById('resumeFileInput')?.click()}
//                                     >
//                                         {file ? (
//                                             <div className="flex flex-col items-center text-center p-4">
//                                                 <FileText className="h-16 w-16 text-green-500 mb-3" />
//                                                 <span className="text-green-700 font-semibold text-lg">{file.name}</span>
//                                                 <span className="text-green-600 mt-1">বিশ্লেষণের জন্য প্রস্তুত!</span>
//                                             </div>
//                                         ) : (
//                                             <div className="text-center p-6">
//                                                 <UploadCloud className="h-20 w-20 text-blue-400 mb-4" />
//                                                 <p className="text-xl font-semibold text-gray-700 mb-2">PDF ফাইল ড্রপ করুন</p>
//                                                 <p className="text-lg font-medium text-blue-600">অথবা ক্লিক করে সিলেক্ট করুন</p>
//                                                 <p className="text-sm text-gray-500 mt-3">সাপোর্টেড: .pdf</p>
//                                             </div>
//                                         )}
//                                         <input
//                                             id="resumeFileInput"
//                                             type="file"
//                                             accept=".pdf"
//                                             onChange={handleFileChange}
//                                             className="hidden"
//                                         />
//                                     </div>

//                                     <button
//                                         onClick={handleAnalyze}
//                                         disabled={!file}
//                                         className={`mt-8 w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg ${!file
//                                             ? "bg-gray-300 text-gray-500 cursor-not-allowed"
//                                             : "bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700 hover:shadow-xl transform hover:-translate-y-1"
//                                             }`}
//                                     >
//                                         রিজিউমি বিশ্লেষণ করুন
//                                     </button>

//                                     {uploadState.error && (
//                                         <div className="mt-4 p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl text-sm font-medium">
//                                             <div className="flex items-center">
//                                                 <XCircle className="w-5 h-5 mr-2" />
//                                                 {uploadState.error}
//                                             </div>
//                                         </div>
//                                     )}
//                                 </div>

//                                 {/* Checklist Sidebar (1/3 width on large screens) */}
//                                 <div className="lg:col-span-1">
//                                     {renderChecklistSidebar(false)}
//                                 </div>
//                             </div>

//                             {/* BOTTOM SECTION: Full Width Result */}
//                             {uploadState.result && (
//                                 <div className="w-full bg-white rounded-2xl shadow-2xl overflow-hidden border border-blue-100">
//                                     <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-6 text-white">
//                                         <h3 className="text-3xl font-extrabold flex items-center">
//                                             <FileText className="w-7 h-7 mr-3" />
//                                             রিজিউমি বিশ্লেষণ রিপোর্ট
//                                         </h3>
//                                         <p className="text-lg mt-1 text-blue-100">আপনার ক্যারিয়ারকে পরবর্তী স্তরে নিয়ে যাওয়ার জন্য ব্যক্তিগতকৃত রিপোর্ট</p>
//                                     </div>
//                                     <div className="p-8">
//                                         {renderAnalysisResult(uploadState.result)}
//                                     </div>
//                                 </div>
//                             )}
//                         </>
//                     )}
//                 </div>
//             </div>
//         </>
//     );
// }
'use client'
import React, { useState } from "react";
import { Check, Loader2, FileText, UploadCloud, XCircle, BarChart2, Zap, Lightbulb } from 'lucide-react';

// --- Type Definitions (Unchanged) ---
interface AnalysisResult {
    summaryScore: number;
    strengths: string[];
    weaknesses: string[];
    matchingRoles: string[];
    detailedAnalysis: {
        atsCompatibility: number;
        contentQuality: number;
        keywordOptimization: number;
        structure: number;
        impactMetrics: number;
    };
    improvementSuggestions: {
        suggestion: string;
        reason: string;
        example: string;
        priority: "high" | "medium" | "low";
    }[];
    redFlags: {
        issue: string;
        impact: string;
        solution: string;
    }[];
}

interface UploadState {
    result: AnalysisResult | null;
    error: string | undefined;
}

interface CheckItem {
    id: string;
    label: string;
    completed: boolean;
}

const initialState: UploadState = {
    result: null,
    error: undefined,
};

// --- Main Component ---
export default function ResumeUpload() {
    const [file, setFile] = useState<File | null>(null);
    const [analyzing, setAnalyzing] = useState<boolean>(false);
    const [uploadState, setUploadState] = useState<UploadState>(initialState);
    const [checkItems, setCheckItems] = useState<CheckItem[]>([]);
    const [currentCheckIndex, setCurrentCheckIndex] = useState<number>(0);

    const analysisChecklist: CheckItem[] = [
        { id: "file-format", label: "PDF ফাইল ফরম্যাট চেক করা হচ্ছে", completed: false },
        { id: "text-extraction", label: "রিজিউমি টেক্সট এক্সট্র্যাক্ট করা হচ্ছে", completed: false },
        { id: "ats-scan", label: "ATS কম্প্যাটিবিলিটি স্ক্যান", completed: false },
        { id: "keyword-analysis", label: "কীওয়ার্ড ও অপ্টিমাইজেশন এনালাইসিস", completed: false },
        { id: "structure-check", label: "স্ট্রাকচার ও ফরম্যাটিং চেক", completed: false },
        { id: "content-quality", label: "কন্টেন্ট কোয়ালিটি অ্যাসেসমেন্ট", completed: false },
        { id: "impact-metrics", label: "ইমপ্যাক্ট মেট্রিক্স এনালাইসিস", completed: false },
        { id: "role-matching", label: "জব রোল ম্যাচিং", completed: false },
        { id: "final-scoring", label: "ফাইনাল স্কোরিং ও রিপোর্ট জেনারেট", completed: false },
    ];

    // Initialize checklist when component mounts
    React.useEffect(() => {
        setCheckItems(analysisChecklist.map(item => ({ ...item, completed: false })));
    }, []);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selected = e.target.files && e.target.files[0];
        if (selected && selected.type !== 'application/pdf') {
            setUploadState({ result: null, error: "শুধুমাত্র PDF ফাইল সাপোর্টেড" });
            setFile(null);
            return;
        }
        setFile(selected);
        setUploadState(initialState);
        setCheckItems(analysisChecklist.map(item => ({ ...item, completed: false })));
        setCurrentCheckIndex(0);
    };

    const simulateCheckProgress = async () => {
        for (let i = 0; i < analysisChecklist.length; i++) {
            await new Promise(resolve => setTimeout(resolve, 300 + Math.random() * 400));
            setCurrentCheckIndex(i);
            setCheckItems(prev =>
                prev.map((item, index) =>
                    index <= i ? { ...item, completed: true } : item
                )
            );
        }
    };

    const handleAnalyze = async () => {
        if (!file) {
            setUploadState({ result: null, error: "দয়া করে প্রথমে আপনার রিজিউমি PDF আপলোড করুন" });
            return;
        }

        setAnalyzing(true);
        setUploadState(initialState);
        setCheckItems(analysisChecklist.map(item => ({ ...item, completed: false })));
        setCurrentCheckIndex(0);

        try {
            await simulateCheckProgress();

            // --- Simulation (Replace with actual fetch calls) ---
            const simulateAnalysisResult: AnalysisResult = {
                summaryScore: 88,
                strengths: [
                    "জব মার্কেটের জন্য প্রাসঙ্গিক শক্তিশালী কীওয়ার্ড",
                    "স্পষ্ট এবং সংক্ষিপ্ত প্রোফেশনাল সামারি",
                    "কাজের অভিজ্ঞতায় পরিমাপযোগ্য অর্জন (কোয়ান্টিফায়েড রেজাল্ট)",
                    "প্রযুক্তিগত দক্ষতা ভালোভাবে ও সুগঠিতভাবে উপস্থাপন",
                ],
                weaknesses: [
                    "কিছু বুলেট পয়েন্টে আরও নির্দিষ্ট মেট্রিক্স যোগ করা যেতে পারে",
                    "কিছু অংশে বাক্য গঠন আরও সংক্ষিপ্ত করা প্রয়োজন",
                ],
                matchingRoles: [
                    "সিনিয়র সফটওয়্যার ইঞ্জিনিয়ার",
                    "ডাটা আর্কিটেক্ট",
                    "টেক লিড",
                    "AI/ML ইঞ্জিনিয়ার",
                    "ক্লাউড সলিউশন কনসালটেন্ট",
                ],
                detailedAnalysis: {
                    atsCompatibility: 92,
                    contentQuality: 85,
                    keywordOptimization: 90,
                    structure: 88,
                    impactMetrics: 78
                },
                improvementSuggestions: [
                    {
                        suggestion: "স্কিলের সাথে প্রজেক্ট লিঙ্ক করুন",
                        reason: "স্কিলগুলি বাস্তবে কীভাবে ব্যবহার করেছেন তা দেখানো হয়নি",
                        example: "'Node.js' ব্যবহার করে একটি 'Scalable API Gateway' তৈরির প্রজেক্ট যোগ করুন",
                        priority: "medium"
                    },
                    {
                        suggestion: "কাস্টমাইজড সামারি লিখুন",
                        reason: "প্রতিটি জবের জন্য সামারি কাস্টমাইজ করলে ATS স্কোর বাড়ে",
                        example: "জব ডেস্ক্রিপশন থেকে মূল কীওয়ার্ডগুলি সামারিতে ব্যবহার করুন",
                        priority: "low"
                    }
                ],
                redFlags: [
                    {
                        issue: "শিক্ষাগত যোগ্যতার তারিখ উল্টোপাল্টা",
                        impact: "রিক্রুটাররা বিভ্রান্ত হয়, প্রফেশনালিজম প্রশ্নবিদ্ধ হতে পারে",
                        solution: "সর্বশেষ ডিগ্রি প্রথমে রেখে ক্রমানুসারে সাজান (Reverse Chronological)"
                    },
                ]
            };

            await new Promise(resolve => setTimeout(resolve, 1000));
            setUploadState({ result: simulateAnalysisResult, error: undefined });

        } catch (err: unknown) {
            const message = err instanceof Error ? err.message : String(err);
            setUploadState({ result: null, error: message || "বিশ্লেষণের সময় একটি অপ্রত্যাশিত ত্রুটি ঘটেছে" });
        } finally {
            setAnalyzing(false);
        }
    };

    // --- Updated Google-style Checklist Sidebar ---
    const renderChecklistSidebar = (isAnalyzing: boolean) => (
        <div className="bg-white rounded-xl p-6 border border-gray-200 h-full">
            <h4 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
                <BarChart2 className="w-5 h-5 mr-2 text-[#1a73e8]" />
                বিশ্লেষণ প্রক্রিয়া
            </h4>
            <div className="space-y-3">
                {checkItems.map((item, index) => (
                    <div key={item.id} className="flex items-center">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0 ${item.completed
                            ? "bg-[#34A853]"
                            : isAnalyzing && index === currentCheckIndex
                                ? "bg-[#1a73e8]"
                                : "bg-gray-200"
                            }`}>
                            {item.completed ? (
                                <Check className="w-4 h-4 text-white" />
                            ) : isAnalyzing && index === currentCheckIndex ? (
                                <Loader2 className="w-4 h-4 text-white animate-spin" />
                            ) : (
                                <span className="text-sm text-gray-500">
                                    {index + 1}
                                </span>
                            )}
                        </div>
                        <span className={`text-sm ${item.completed
                            ? "text-[#34A853] font-medium"
                            : isAnalyzing && index === currentCheckIndex
                                ? "text-[#1a73e8] font-medium"
                                : "text-gray-600"
                            }`}>
                            {item.label}
                        </span>
                    </div>
                ))}
            </div>
            {isAnalyzing && (
                <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-100">
                    <p className="text-[#1a73e8] text-sm flex items-center">
                        <Zap className="w-4 h-4 mr-2" />
                        <strong>বর্তমানে চলছে:</strong> {checkItems[currentCheckIndex]?.label}
                    </p>
                </div>
            )}
            {uploadState.result && (
                <div className="mt-6 p-3 bg-green-50 rounded-lg border border-green-100 text-center">
                    <p className="text-[#34A853] font-medium">✅ বিশ্লেষণ সম্পন্ন!</p>
                </div>
            )}
        </div>
    );

    // --- Updated Google-style Analysis Result ---
    const renderAnalysisResult = (data: AnalysisResult) => {
        const { summaryScore, strengths, matchingRoles, detailedAnalysis, improvementSuggestions, redFlags } = data;

        const getScoreColor = (score: number) => {
            if (score >= 85) return "text-[#34A853]";
            if (score >= 70) return "text-[#1a73e8]";
            return "text-[#EA4335]";
        };

        const getPriorityColor = (priority: string) => {
            switch (priority) {
                case "high": return "bg-red-50 text-red-800 border-red-200";
                case "medium": return "bg-orange-50 text-orange-800 border-orange-200";
                case "low": return "bg-blue-50 text-blue-800 border-blue-200";
                default: return "bg-gray-50 text-gray-800";
            }
        };

        return (
            <div className="space-y-8">
                {/* Score Header - Google Style */}
                <div className="text-center p-8 rounded-xl border border-gray-200 bg-white">
                    <h3 className="text-xl font-medium text-gray-900 mb-4">রিজিউমি স্কোর</h3>
                    <div className="flex items-center justify-center space-x-8">
                        <div className="relative w-28 h-28">
                            <svg className="w-full h-full" viewBox="0 0 36 36">
                                <path
                                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                    fill="none"
                                    stroke="#E5E7EB"
                                    strokeWidth="3"
                                />
                                <path
                                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                                    fill="none"
                                    stroke={summaryScore >= 85 ? "#34A853" : summaryScore >= 70 ? "#1a73e8" : "#EA4335"}
                                    strokeWidth="3"
                                    strokeDasharray={`${summaryScore}, 100`}
                                />
                            </svg>
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <span className={`text-4xl font-bold ${getScoreColor(summaryScore)}`}>{summaryScore}</span>
                                <span className="text-sm text-gray-500">/100</span>
                            </div>
                        </div>
                        <div className="text-left">
                            <p className="text-lg font-medium text-gray-900">
                                {summaryScore >= 85
                                    ? "✅ অসাধারণ কাজ!"
                                    : summaryScore >= 70
                                        ? "✨ ভালো স্কোর"
                                        : "⚠️ উন্নতির সুযোগ আছে"
                                }
                            </p>
                            <p className="text-sm text-gray-500 mt-2">ATS স্ট্যান্ডার্ড অনুযায়ী</p>
                        </div>
                    </div>
                </div>

                {/* Detailed Analysis Metrics - Google Style */}
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                    <h4 className="text-xl font-medium text-gray-900 mb-6 flex items-center">
                        <BarChart2 className="w-5 h-5 mr-2 text-[#1a73e8]" />
                        কোর মেট্রিক্স এনালাইসিস
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                        {Object.entries(detailedAnalysis).map(([key, value]) => (
                            <div key={key} className="text-center p-3 bg-gray-50 rounded-lg border border-gray-200">
                                <div className={`text-2xl font-bold ${getScoreColor(value)} mb-1`}>
                                    {value}%
                                </div>
                                <div className="text-xs text-gray-600 capitalize font-medium">
                                    {key.replace(/([A-Z])/g, ' $1').trim()}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Improvement & Red Flags */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Improvement Suggestions */}
                    <div className="bg-white rounded-xl p-6 border border-gray-200">
                        <h4 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
                            <Lightbulb className="w-5 h-5 mr-2 text-[#FBBC05]" />
                            উন্নতির জন্য সুপারিশ
                        </h4>
                        <div className="space-y-4">
                            {improvementSuggestions.map((suggestion, index) => (
                                <div key={index} className={`rounded-lg p-4 border ${getPriorityColor(suggestion.priority)}`}>
                                    <div className="flex justify-between items-start mb-2">
                                        <h5 className="font-medium text-gray-900">{suggestion.suggestion}</h5>
                                        <span className={`px-2 py-1 rounded text-xs font-medium ${getPriorityColor(suggestion.priority)}`}>
                                            {suggestion.priority === "high" ? "উচ্চ" : suggestion.priority === "medium" ? "মধ্যম" : "নিম্ন"}
                                        </span>
                                    </div>
                                    <p className="text-gray-700 text-sm mb-2"><strong>কারণ:</strong> {suggestion.reason}</p>
                                    <div className="bg-gray-50 p-3 rounded border border-gray-200">
                                        <strong className="text-gray-600 text-sm block mb-1">উদাহরণ:</strong>
                                        <p className="text-gray-800 text-sm">{suggestion.example}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Red Flags Section */}
                    <div className="bg-white rounded-xl p-6 border border-gray-200">
                        <h4 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
                            <XCircle className="w-5 h-5 mr-2 text-[#EA4335]" />
                            গুরুত্বপূর্ণ ইস্যু
                        </h4>
                        <div className="space-y-4">
                            {redFlags.map((flag, index) => (
                                <div key={index} className="bg-white rounded-lg p-4 border border-red-200">
                                    <div className="flex items-start">
                                        <div className="w-6 h-6 bg-[#EA4335] rounded-full flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                                            <Zap className="w-3 h-3 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <h5 className="font-medium text-red-700">{flag.issue}</h5>
                                            <p className="text-red-600 text-sm mt-1"><strong>ইমপ্যাক্ট:</strong> {flag.impact}</p>
                                            <p className="text-green-700 text-sm mt-2"><strong>সমাধান:</strong> {flag.solution}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Strengths & Matching Roles */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Strengths */}
                    <div className="bg-white rounded-xl p-6 border border-gray-200">
                        <div className="flex items-center mb-4">
                            <Check className="w-5 h-5 text-[#34A853] mr-2" />
                            <h4 className="text-lg font-medium text-gray-900">আপনার শক্তিগুলো</h4>
                        </div>
                        <ul className="space-y-3">
                            {strengths.map((s, i) => (
                                <li key={i} className="flex items-start">
                                    <Check className="w-4 h-4 text-[#34A853] mr-2 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-700 text-sm">{s}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Matching Roles */}
                    <div className="bg-white rounded-xl p-6 border border-gray-200">
                        <div className="flex items-center mb-4">
                            <FileText className="w-5 h-5 text-[#1a73e8] mr-2" />
                            <h4 className="text-lg font-medium text-gray-900">প্রস্তাবিত ক্যারিয়ার</h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {matchingRoles.map((r, i) => (
                                <span key={i} className="bg-[#1a73e8] text-white px-3 py-2 rounded-lg text-sm font-medium">
                                    {r}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    // --- Main Render Function ---
    return (
        <>
            <style jsx global>{`
                @keyframes blob {
                    0% { transform: translate(0px, 0px) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                    100% { transform: translate(0px, 0px) scale(1); }
                }
                .animate-blob { animation: blob 7s infinite cubic-bezier(0.6, 0.01, 0.4, 1); }
                .animation-delay-2000 { animation-delay: 2s; }
                .animation-delay-4000 { animation-delay: 4s; }
            `}</style>

            <div className="relative  bg-white flex flex-col items-center p-4 sm:p-8 overflow-hidden">
                {/* Subtle Google-style background elements */}
                <div className="absolute top-10 right-10 w-48 h-48 bg-[#4285F4]/5 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
                <div className="absolute bottom-10 left-10 w-56 h-56 bg-[#34A853]/5 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

                <div className="z-10 w-full max-w-7xl space-y-8">
                    {analyzing && (
                        <div className="bg-white rounded-xl p-8 border border-gray-200 text-center">
                            <h3 className="text-2xl font-medium text-gray-900 mb-2">রিজিউমি বিশ্লেষণ চলছে...</h3>
                            <p className="text-gray-600 mb-6">দয়া করে অপেক্ষা করুন, এআই আপনার রিপোর্ট তৈরি করছে।</p>
                            {renderChecklistSidebar(true)}
                        </div>
                    )}

                    {!analyzing && (
                        <>
                            {/* TOP SECTION: Upload and Checklist */}
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                                {/* Upload Card */}
                                <div className="lg:col-span-2 bg-white rounded-xl p-6 border border-gray-200 h-full">
                                    <div className="text-center mb-6">
                                        <h3 className="text-xl font-medium text-gray-900 mb-2">আপনার রিজিউমি আপলোড করুন</h3>
                                        <p className="text-gray-600">PDF ফাইল আপলোড করে এআই বিশ্লেষণ পান</p>
                                    </div>

                                    <div
                                        className={`w-full h-64 border-2 ${file ? 'border-[#34A853] bg-green-50' : 'border-dashed border-gray-300 bg-gray-50'} rounded-xl flex flex-col items-center justify-center text-gray-500 transition-all duration-300 cursor-pointer hover:border-[#1a73e8] hover:bg-blue-50`}
                                        onClick={() => document.getElementById('resumeFileInput')?.click()}
                                    >
                                        {file ? (
                                            <div className="flex flex-col items-center text-center p-4">
                                                <FileText className="h-14 w-14 text-[#34A853] mb-3" />
                                                <span className="text-[#34A853] font-medium text-lg">{file.name}</span>
                                                <span className="text-[#34A853] mt-1">বিশ্লেষণের জন্য প্রস্তুত!</span>
                                            </div>
                                        ) : (
                                            <div className="text-center p-6">
                                                <UploadCloud className="h-16 w-16 text-gray-400 mb-4" />
                                                <p className="text-lg font-medium text-gray-700 mb-2">PDF ফাইল ড্রপ করুন</p>
                                                <p className="text-gray-600">অথবা ক্লিক করে সিলেক্ট করুন</p>
                                                <p className="text-sm text-gray-500 mt-3">সাপোর্টেড: .pdf</p>
                                            </div>
                                        )}
                                        <input
                                            id="resumeFileInput"
                                            type="file"
                                            accept=".pdf"
                                            onChange={handleFileChange}
                                            className="hidden"
                                        />
                                    </div>

                                    <button
                                        onClick={handleAnalyze}
                                        disabled={!file}
                                        className={`mt-6 w-full py-3 rounded-lg font-medium text-sm transition-all duration-200 ${!file
                                            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                                            : "bg-[#1a73e8] hover:bg-[#1967d2] text-white shadow-sm hover:shadow-md"
                                            }`}
                                    >
                                        রিজিউমি বিশ্লেষণ করুন
                                    </button>

                                    {uploadState.error && (
                                        <div className="mt-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">
                                            <div className="flex items-center">
                                                <XCircle className="w-4 h-4 mr-2" />
                                                {uploadState.error}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Checklist Sidebar */}
                                <div className="lg:col-span-1">
                                    {renderChecklistSidebar(false)}
                                </div>
                            </div>

                            {/* BOTTOM SECTION: Results */}
                            {uploadState.result && (
                                <div className="w-full bg-white rounded-xl border border-gray-200">
                                    <div className="bg-gray-50 p-6 border-b border-gray-200">
                                        <h3 className="text-2xl font-medium text-gray-900 flex items-center">
                                            <FileText className="w-6 h-6 mr-3 text-[#1a73e8]" />
                                            রিজিউমি বিশ্লেষণ রিপোর্ট
                                        </h3>
                                        <p className="text-gray-600 mt-1">আপনার ক্যারিয়ার উন্নতির জন্য ব্যক্তিগতকৃত রিপোর্ট</p>
                                    </div>
                                    <div className="p-6">
                                        {renderAnalysisResult(uploadState.result)}
                                    </div>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>
        </>
    );
}