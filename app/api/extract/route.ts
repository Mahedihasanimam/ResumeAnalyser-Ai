import { NextRequest, NextResponse } from "next/server";
import { Buffer } from "buffer";

// Force Node runtime so Node-only libraries like `pdf-parse` work correctly.
export const runtime = "nodejs";

/**
 * Next.js Route Handler for handling PDF file uploads and text extraction.
 * Processes the raw file buffer using the 'pdf-parse' library.
 * @param req The incoming NextRequest containing the form data.
 */
export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    // The key 'file' must match the key used in the client's FormData append
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    // Convert file to a Node.js Buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Dynamically import pdf-parse to avoid bundling it into Edge runtime.
    const pdfModule = await import("pdf-parse");
    type PdfParseFn = (data: Buffer | Uint8Array) => Promise<{ text?: string }>;
    const pdfParse: PdfParseFn =
      (pdfModule as { default?: PdfParseFn }).default ??
      (pdfModule as unknown as PdfParseFn);
    const data = await pdfParse(buffer);

    return NextResponse.json({ text: data?.text ?? "" });
  } catch (err: unknown) {
    const message =
      err instanceof Error
        ? `PDF Extraction failed: ${err.message}`
        : "An unknown server error occurred.";

    console.error("PDF Extraction Error:", err);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
