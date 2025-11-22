// /api/analyze

import { GoogleGenAI } from "@google/genai";
import { type NextRequest, NextResponse } from "next/server";

// 1. নিশ্চিত Key লোডিং (আপনার সিস্টেমে GEMINI_API_KEY ব্যবহার করুন)
const apiKey = process.env.GEMINI_API_KEY ?? process.env.GOOGLE_API_KEY;

// 2. ক্লায়েন্ট ইনিশিয়ালাইজেশন
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

// TypeScript interface defining the GUARANTEED structure of the AI's JSON response.
// ⭐️ এই ইন্টারফেসটি ফ্রন্টএন্ডের বিস্তারিত স্ট্রাকচারের সাথে মিল রেখে আপডেট করা হয়েছে
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
    originalTextSnippet?: string;
    example: string;
    priority: "high" | "medium" | "low";
  }[];
  redFlags: {
    issue: string;
    impact: string;
    solution: string;
  }[];
}

export async function POST(req: NextRequest) {
  if (!ai) {
    return NextResponse.json(
      { error: "Analysis failed: API Key is missing or invalid." },
      { status: 500 }
    );
  }

  try {
    const body = await req.json();
    const resumeText = body.resumeText as string;

    if (!resumeText) {
      return NextResponse.json(
        { error: "Resume text is missing" },
        { status: 400 }
      );
    }

    // ⭐️ সিস্টেম প্রম্পট আপডেট:
    // এখন প্রম্পটটি AI কে বলছে যে সে যেন প্রত্যেকটি দুর্বলতার জন্য
    // কী লিখতে হবে (example) এবং কেন লিখতে হবে (reason) তা প্রদান করে।
    const systemPrompt = `You are an expert ATS Resume Analyzer and technical career coach. Your output MUST strictly adhere to the provided JSON schema.
        
Analyze the resume thoroughly. For every weakness found, you must provide:
1. A specific, actionable 'suggestion'.
2. The 'reason' why it needs improvement.
3. The exact original line or phrase from the resume that contains the issue (THIS IS CRITICAL for context). ⭐️ নতুন লাইন
4. A concrete 'example' of what the user should write instead (THIS IS CRITICAL).

Also, provide detailed scores for five core metrics (0-100) and identify any critical 'redFlags'.`;

    const userQuery = `Analyze the following resume text and provide the structured analysis:\n\n---\n\n${resumeText.trim()}`;

    // 3. Generate content with structured output configuration
    const response: any = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [
        {
          role: "user",
          parts: [{ text: userQuery }],
        },
      ],
      config: {
        systemInstruction: systemPrompt,
        responseMimeType: "application/json",
        // ⭐️ RESPONSE SCHEMA UPDATE:
        // এখানে সমস্ত বিস্তারিত ফিল্ড যোগ করা হয়েছে
        responseSchema: {
          type: "object",
          properties: {
            summaryScore: {
              type: "number",
              description:
                "An overall score for the resume on a scale of 1 to 100.",
            },
            strengths: {
              type: "array",
              items: { type: "string" },
              description:
                "A list of 3-5 key professional strengths found in the resume.",
            },
            weaknesses: {
              type: "array",
              items: { type: "string" },
              description:
                "A list of 3-5 high-level areas needing improvement.",
            },
            matchingRoles: {
              type: "array",
              items: { type: "string" },
              description: "A list of 3-5 suggested relevant job titles.",
            },
            detailedAnalysis: {
              type: "object",
              description: "Component scores for the resume quality.",
              properties: {
                atsCompatibility: {
                  type: "number",
                  description: "ATS readability and formatting score (0-100).",
                },
                contentQuality: {
                  type: "number",
                  description: "Clarity and professionalism of text (0-100).",
                },
                keywordOptimization: {
                  type: "number",
                  description:
                    "Relevance and density of industry keywords (0-100).",
                },
                structure: {
                  type: "number",
                  description: "Layout, flow, and consistency (0-100).",
                },
                impactMetrics: {
                  type: "number",
                  description:
                    "Use of quantifiable results and action verbs (0-100).",
                },
              },
              required: [
                "atsCompatibility",
                "contentQuality",
                "keywordOptimization",
                "structure",
                "impactMetrics",
              ],
            },
            improvementSuggestions: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  suggestion: {
                    type: "string",
                    description: "A concise suggestion for improvement.",
                  },
                  reason: {
                    type: "string",
                    description:
                      "The reason why this improvement is necessary.",
                  },
                  originalTextSnippet: {
                    // ⭐️ নতুন ফিল্ড যোগ
                    type: "string",
                    description:
                      "The exact line or phrase from the resume text that needs improvement.",
                  },
                  example: {
                    type: "string",
                    description:
                      "A concrete, example bullet point or sentence of what the user should write instead.",
                  },
                  priority: {
                    type: "string",
                    enum: ["high", "medium", "low"],
                    description: "The urgency of the suggestion.",
                  },
                },
                required: ["suggestion", "reason", "example", "priority"],
              },
              description:
                "Detailed, actionable suggestions for improvement, including examples of what to write.",
            },
            redFlags: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  issue: {
                    type: "string",
                    description:
                      "The critical issue (e.g., Missing contact info).",
                  },
                  impact: {
                    type: "string",
                    description:
                      "The negative consequence (e.g., Recruiters cannot reach you).",
                  },
                  solution: {
                    type: "string",
                    description: "Immediate corrective action.",
                  },
                },
                required: ["issue", "impact", "solution"],
              },
              description: "Critical errors that must be fixed immediately.",
            },
          },
          required: [
            "summaryScore",
            "strengths",
            "weaknesses",
            "matchingRoles",
            "detailedAnalysis",
            "improvementSuggestions",
            "redFlags",
          ],
        },
      },
    });

    const aiText = response.text.trim();
    let parsedData: AnalysisResult;

    // Parse the output and validate it conforms to the expected shape.
    try {
      parsedData = JSON.parse(aiText) as AnalysisResult;
    } catch (e) {
      console.error("Failed to parse AI response as JSON:", aiText, e);
      return NextResponse.json(
        { error: "AI returned non-JSON or unexpected response" },
        { status: 500 }
      );
    }

    // Return the structured JSON data
    return NextResponse.json({ result: parsedData });
  } catch (error: unknown) {
    console.error("Analysis Error:", error);
    return NextResponse.json(
      { error: `Analysis failed: ${(error as Error).message}` },
      { status: 500 }
    );
  }
}
