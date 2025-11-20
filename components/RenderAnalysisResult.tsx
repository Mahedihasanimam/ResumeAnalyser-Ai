

import React from 'react'

interface AnalysisResult {
    summaryScore: number;
    strengths: string[];
    weaknesses: string[];
    matchingRoles: string[];
}
const RenderAnalysisResult = (data: AnalysisResult) => {
    const { summaryScore, strengths, weaknesses, matchingRoles } = data;

    return (
        <div className="space-y-6">
            <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h3 className="text-xl font-semibold text-blue-800">Overall ATS Score</h3>
                <div className="text-5xl font-extrabold mt-2 text-blue-600">{summaryScore}/100</div>
                <p className="text-sm text-gray-600 mt-1">
                    A score above 80 is generally competitive.
                </p>
            </div>

            {/* Strengths */}
            <div>
                <h2 className="text-xl font-bold pt-4 pb-1 border-b border-gray-200 text-green-700">🚀 Strengths</h2>
                <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-700">
                    {strengths.map((s, i) => <li key={i}>{s}</li>)}
                </ul>
            </div>

            {/* Weaknesses */}
            <div>
                <h2 className="text-xl font-bold pt-4 pb-1 border-b border-gray-200 text-red-700">⚠️ Areas for Improvement</h2>
                <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-700">
                    {weaknesses.map((w, i) => <li key={i}>{w}</li>)}
                </ul>
            </div>

            {/* Matching Roles */}
            <div>
                <h2 className="text-xl font-bold pt-4 pb-1 border-b border-gray-200 text-indigo-700">🎯 Matching Roles</h2>
                <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-700">
                    {matchingRoles.map((r, i) => <li key={i}>{r}</li>)}
                </ul>
            </div>
        </div>
    );
};
export default RenderAnalysisResult