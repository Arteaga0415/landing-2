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
    <section className="overflow-hidden pb-25 pt-45 lg:pb-32.5 lg:pt-50 xl:pb-37.5 xl:pt-55">
      <h2 className="mx-auto mb-4 text-3xl font-bold text-black dark:text-white md:w-4/5 xl:text-sectiontitle3">
        Contactenos
      </h2>
      <Contact />
      <Presentation />
    </section>
  );
};

export default SupportPage;
