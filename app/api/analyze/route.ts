// import { NextRequest, NextResponse } from "next/server";
// import { GoogleGenerativeAI } from "@google/generative-ai";

// /**
//  * TypeScript interface defining the guaranteed structure of the AI's JSON response.
//  */
// interface AnalysisResult {
//   summaryScore: number;
//   strengths: string[];
//   weaknesses: string[];
//   matchingRoles: string[];
// }

// /**
//  * Define the exact structured format (schema) that the Gemini model must return.
//  * Uses string literals for type definition (e.g., "OBJECT") as required by the SDK.
//  */
// const responseSchema = {
//   type: "OBJECT",
//   properties: {
//     summaryScore: {
//       type: "NUMBER",
//       description:
//         "An overall score for the resume on a scale of 1 to 100 based on modern recruiting standards.",
//     },
//     strengths: {
//       type: "ARRAY",
//       items: { type: "STRING" },
//       description:
//         "A list of 3-5 key professional strengths found in the resume (e.g., specific skills, experience depth).",
//     },
//     weaknesses: {
//       type: "ARRAY",
//       items: { type: "STRING" },
//       description:
//         "A list of 3-5 areas needing improvement (e.g., lack of metrics, poor formatting, vague descriptions).",
//     },
//     matchingRoles: {
//       type: "ARRAY",
//       items: { type: "STRING" },
//       description:
//         "A list of 3-5 suggested job titles or roles that the candidate's skills and experience match well.",
//     },
//   },
//   required: ["summaryScore", "strengths", "weaknesses", "matchingRoles"],
// };

// /**
//  * Next.js Route Handler for analyzing resume text using the Gemini SDK with Structured Output.
//  */
// export async function POST(req: NextRequest) {
//   try {
//     const body = await req.json();
//     const resumeText = body.resumeText as string;

//     console.log("resumetext", resumeText);

//     if (!resumeText) {
//       return NextResponse.json(
//         { error: "Resume text is missing" },
//         { status: 400 }
//       );
//     }

//     // 1. Initialize the AI client using the environment variable.
//     // The SDK constructor may accept an options object ({ apiKey }) or a raw string in some versions.
//     const apiKey = process.env.GEMINI_API_KEY;
//     const hasApiKey = Boolean(apiKey);

//     console.log("hasapikey", hasApiKey);

//     type GenAIClient = {
//       getGenerativeModel?: (opts: { model: string }) => unknown;
//       getModel?: (opts: { model: string }) => unknown;
//     };

//     // If we don't have an API key, we'll skip initializing the real Gemini client
//     // and instead use a lightweight local analyzer (useful for local dev and testing).
//     let model: unknown = undefined;
//     if (hasApiKey) {
//       // Construct the SDK client with a safe cast to a minimal interface. Use `unknown` for inputs to avoid `any`.
//       let genAI: GenAIClient;
//       try {
//         genAI = new (GoogleGenerativeAI as unknown as {
//           new (opts: unknown): GenAIClient;
//         })({ apiKey });
//       } catch {
//         // Fallback: some versions may accept the raw key as first arg
//         genAI = new (GoogleGenerativeAI as unknown as {
//           new (arg: unknown): GenAIClient;
//         })(apiKey);
//       }

//       // Prefer `getGenerativeModel`, fall back to `getModel` if present
//       const getModelFn = (genAI.getGenerativeModel ?? genAI.getModel)!.bind(
//         genAI
//       ) as (opts: { model: string }) => unknown;
//       model = getModelFn({ model: "gemini-1.5-flash" });
//     }

//     // 2. Define the System Instruction (Model's persona)
//     const systemPrompt = `You are an expert ATS Resume Analyzer and technical career coach. Your output MUST strictly adhere to the provided JSON schema. Analyze the resume, identify key strengths, weaknesses, and suggest matching job roles.`;

//     const userQuery = `Analyze the following resume text and provide the structured analysis:\n\n---\n\n${resumeText.trim()}`;

//     // 3. Generate content with structured output configuration
//     let result: unknown;

//     if (hasApiKey) {
//       const generate = (
//         model as { generateContent?: (opts: unknown) => Promise<unknown> }
//       ).generateContent;
//       if (!generate) {
//         return NextResponse.json(
//           {
//             error:
//               "Incompatible Gemini SDK model object: missing generateContent",
//           },
//           { status: 500 }
//         );
//       }

//       result = await generate.call(model, {
//         contents: [{ role: "user", parts: [{ text: userQuery }] }],
//         config: {
//           systemInstruction: systemPrompt,
//           responseMimeType: "application/json",
//           responseSchema: responseSchema,
//         },
//       });
//     } else {
//       // Local fallback analyzer (simple heuristics) — returns the same AnalysisResult shape.
//       function localAnalyze(text: string): AnalysisResult {
//         const lc = text.toLowerCase();
//         const lengthScore = Math.min(
//           100,
//           Math.max(30, Math.floor(text.length / 10))
//         );

//         const strengths: string[] = [];
//         const weaknesses: string[] = [];
//         const roles: string[] = [];

//         // Simple heuristics
//         if (/\b(react|vue|angular|svelte|next.js|nextjs)\b/.test(lc))
//           strengths.push("Frontend frameworks (React/Next.js)");
//         if (/\b(node|express|nestjs|server)\b/.test(lc))
//           strengths.push("Backend / Node.js experience");
//         if (/\b(python|django|flask)\b/.test(lc))
//           strengths.push("Python / Web frameworks");
//         if (/\b(aws|azure|gcp|docker|kubernetes)\b/.test(lc))
//           strengths.push("Cloud & DevOps experience");
//         if (/\d+%|\b(improved|increased|reduced)\b/.test(lc))
//           strengths.push("Quantified achievements (metrics)");

//         if (!/\b(react|node|python|aws|docker)\b/.test(lc))
//           weaknesses.push(
//             "Few technical keywords detected — consider adding specific skills."
//           );
//         if (!/\b\d{4}\b/.test(text))
//           weaknesses.push("Missing clear timeline or employment years.");
//         if (!/\b(email|@)\b/.test(lc))
//           weaknesses.push(
//             "Contact details may be missing or not in standard format."
//           );

//         if (/\b(react|next)\b/.test(lc)) roles.push("Frontend Engineer");
//         if (/\b(node|express|backend)\b/.test(lc))
//           roles.push("Backend Engineer");
//         if (/\b(data scientist|machine learning|ml)\b/.test(lc))
//           roles.push("Data Scientist / ML Engineer");
//         if (roles.length === 0) roles.push("Software Engineer");

//         // Ensure 3-5 items where appropriate
//         const uniq = (arr: string[]) => Array.from(new Set(arr)).slice(0, 5);

//         return {
//           summaryScore: lengthScore,
//           strengths: uniq(strengths).slice(0, 5),
//           weaknesses: uniq(weaknesses).slice(0, 5),
//           matchingRoles: uniq(roles).slice(0, 5),
//         };
//       }

//       const parsed = localAnalyze(resumeText);
//       // Directly return the local analysis
//       return NextResponse.json({ result: parsed });
//     }

//     // The SDK's response shape can vary across versions. Use a helper to extract text safely.
//     function extractText(resp: unknown): string | undefined {
//       try {
//         const r = resp as Record<string, unknown>;

//         // Common: result.response.text
//         const response = r.response as Record<string, unknown> | undefined;
//         if (response && typeof response.text === "string") return response.text;

//         // Older shape: result.output[0].content[0].text
//         const output = r.output as unknown[] | undefined;
//         if (Array.isArray(output) && output.length > 0) {
//           const first = output[0] as Record<string, unknown> | undefined;
//           const content = first?.content as unknown[] | undefined;
//           if (
//             Array.isArray(content) &&
//             content.length > 0 &&
//             typeof content[0] === "object"
//           ) {
//             const c0 = content[0] as Record<string, unknown>;
//             if (typeof c0.text === "string") return c0.text;
//           }
//         }

//         // Candidates shape: result.candidates[0].content[0].text
//         const candidates = r.candidates as unknown[] | undefined;
//         if (Array.isArray(candidates) && candidates.length > 0) {
//           const cand0 = candidates[0] as Record<string, unknown> | undefined;
//           const content = cand0?.content as unknown[] | undefined;
//           if (
//             Array.isArray(content) &&
//             content.length > 0 &&
//             typeof content[0] === "object"
//           ) {
//             const c0 = content[0] as Record<string, unknown>;
//             if (typeof c0.text === "string") return c0.text;
//           }
//         }

//         // Fallback: attempt stringify
//         return typeof resp === "string" ? resp : JSON.stringify(resp);
//       } catch {
//         return undefined;
//       }
//     }

//     const aiText = (extractText(result) ?? "").trim();

//     // Parse the output and validate it conforms to the expected shape.
//     let parsedData: AnalysisResult;
//     try {
//       parsedData = JSON.parse(aiText) as AnalysisResult;
//     } catch {
//       console.error("Failed to parse AI response as JSON:", aiText);
//       return NextResponse.json(
//         { error: "AI returned non-JSON or unexpected response" },
//         { status: 500 }
//       );
//     }

//     // Return the structured JSON data
//     return NextResponse.json({ result: parsedData });
//   } catch (error: unknown) {
//     console.error("Analysis Error:", error);
//     return NextResponse.json(
//       { error: `Analysis failed: ${(error as Error).message}` },
//       { status: 500 }
//     );
//   }
// }
import { GoogleGenAI } from "@google/genai"; // ⭐️ বন্ধুর SDK ইমপোর্ট করুন
import { type NextRequest, NextResponse } from "next/server";

// 1. নিশ্চিত Key লোডিং (আপনার সিস্টেমে GEMINI_API_KEY ব্যবহার করুন)
const apiKey = process.env.GEMINI_API_KEY ?? process.env.GOOGLE_API_KEY;

// 2. ক্লায়েন্ট ইনিশিয়ালাইজেশন (বন্ধুর ক্লাস নাম ব্যবহার করুন)
// যদি apiKey না থাকে, তাহলে এটি অকার্যকর হবে।
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

// TypeScript interface defining the guaranteed structure of the AI's JSON response.
interface AnalysisResult {
  summaryScore: number;
  strengths: string[];
  weaknesses: string[];
  matchingRoles: string[];
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

    const systemPrompt = `You are an expert ATS Resume Analyzer and technical career coach. Your output MUST strictly adhere to the provided JSON schema. Analyze the resume, identify key strengths, weaknesses, and suggest matching job roles.`;

    const userQuery = `Analyze the following resume text and provide the structured analysis:\n\n---\n\n${resumeText.trim()}`;

    // 3. Generate content with structured output configuration
    const response: any = await ai.models.generateContent({
      model: "gemini-2.5-flash", // ⭐️ ফিক্সড: gemini-1.5-flash থেকে gemini-2.5-flash এ পরিবর্তন করা হয়েছে
      contents: [
        {
          role: "user",
          parts: [{ text: userQuery }],
        },
      ],
      config: {
        systemInstruction: systemPrompt,
        responseMimeType: "application/json",
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
              description: "A list of 3-5 key professional strengths.",
            },
            weaknesses: {
              type: "array",
              items: { type: "string" },
              description: "A list of 3-5 areas needing improvement.",
            },
            matchingRoles: {
              type: "array",
              items: { type: "string" },
              description: "A list of 3-5 suggested job titles.",
            },
          },
          required: [
            "summaryScore",
            "strengths",
            "weaknesses",
            "matchingRoles",
          ],
        },
      },
    });

    const aiText = response.text.trim();
    let parsedData: AnalysisResult;

    // Parse the output and validate it conforms to the expected shape.
    try {
      parsedData = JSON.parse(aiText) as AnalysisResult;
    } catch {
      console.error("Failed to parse AI response as JSON:", aiText);
      return NextResponse.json(
        { error: "AI returned non-JSON or unexpected response" },
        { status: 500 }
      );
    }

    // Return the structured JSON data
    return NextResponse.json({ result: parsedData });
  } catch (error: unknown) {
    console.error("Analysis Error:", error);
    // ⭐️ API key invalid ত্রুটিটি সরাসরি পাস করুন
    return NextResponse.json(
      { error: `Analysis failed: ${(error as Error).message}` },
      { status: 500 }
    );
  }
}
