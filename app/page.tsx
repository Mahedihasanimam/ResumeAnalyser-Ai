import Footer from "@/components/Footer";
import { HeroSection } from "@/components/Hero";
import ResumeUpload from "@/components/ResuemUpload";
import React from "react";

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50">

      <HeroSection />

      {/* Resume Upload Section */}
      <section className="px-4 pb-16">
        <ResumeUpload />
      </section>
    </div>
  );
}
