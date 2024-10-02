import React from "react";
import Contact from "@/components/Contact";
import { Metadata } from "next";
import Presentation from "@/components/Presentation";

export const metadata: Metadata = {
  title: "Support Page - Solid SaaS Boilerplate",
  description: "This is Support page for Solid Pro",
  // other metadata
};

const SupportPage = () => {
  return (
    <section className="overflow-hidden py-25 lg:py-32.5 xl:py-37.5">
      <h2 className="mx-auto flex justify-center mb-4 text-3xl font-bold text-black dark:text-white md:w-4/5 xl:text-sectiontitle3">
        Contact Us
      </h2>
      <Contact />
      {/* <Presentation /> */}
    </section>
  );
};

export default SupportPage;
