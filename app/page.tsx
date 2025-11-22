'use client';
import { useEffect } from "react";
import { HeroSection } from "@/components/Hero";
import ResumeUpload from "@/components/ResuemUpload";
import React from "react";

export default function Page() {
  // useEffect(() => {
  //   const handleContextMenu = (e: MouseEvent) => {
  //     e.preventDefault();
  //   };

  //   document.addEventListener("contextmenu", handleContextMenu);

  //   return () => {
  //     document.removeEventListener("contextmenu", handleContextMenu);
  //   };
  // }, []);


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
