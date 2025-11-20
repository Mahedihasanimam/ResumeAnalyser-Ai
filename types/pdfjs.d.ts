// types/pdfjs.d.ts

/**
 * Declare the specific pdfjs-dist build path used for Node.js environments.
 * This resolves the TypeScript error: Cannot find module 'pdfjs-dist/build/pdf.js'
 */
declare module "pdfjs-dist/build/pdf.js" {
  const pdfjs: unknown;
  export = pdfjs;
}

/**
 * Declare the worker path if needed for the server runtime configuration.
 */
declare module "pdfjs-dist/build/pdf.worker.js" {
  const worker: unknown;
  export = worker;
}
