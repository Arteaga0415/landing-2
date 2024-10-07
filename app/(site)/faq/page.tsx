import React from "react";
import Contact from "@/components/Contact";
import { Metadata } from "next";
import Presentation from "@/components/Presentation";
import FAQ from "@/components/FAQ";

export const metadata: Metadata = {
  title: "Support Page - Solid SaaS Boilerplate",
  description: "This is Support page for Solid Pro",
  // other metadata
};

const FaqPage = () => {
  return (
    <section className="overflow-hidden py-25 lg:py-32.5 xl:py-37.5">
      <h2 className="mx-auto flex justify-center mb-4 text-3xl font-bold text-black dark:text-white md:w-4/5 xl:text-sectiontitle3">
        FAQ
      </h2>
      <FAQ />
    </section>
  );
};

export default FaqPage;
