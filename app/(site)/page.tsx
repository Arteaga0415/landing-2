import { Metadata } from "next";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Feature from "@/components/Features";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import Testimonial from "@/components/Testimonial";
import Presentation from "@/components/Presentation";
import { Video } from "@/components/video";
import ServiceCard from "@/components/services/serviceCard";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Ingeniería y Telecomunicaciones HL SAS",
  description: "Es una empresa innovadora en el área de las telecomunicaciones y energías renovables, solar y eólica. Siendo pionera en la región del llano, brindando una solución de conectividad para el sector Empresarial.",
};

export default function Home() {
  return (
    <main>
      <Suspense fallback={<p className="text-black">Cargando Video...</p>}>
        <Video />
      </Suspense>
      <Hero />
      {/* <Brands /> */}
      <Feature />
      <ServiceCard />
      <div className="pb-20">
        <Presentation />
      </div>
      {/* <About /> */}
      {/* <FeaturesTab /> */}
      {/* <FunFact /> */}
      {/* <Integration /> */}
      {/* Se puede Utilizar */}
      {/* <CTA /> */}
      {/* Se Utilizo */}
      {/* <FAQ /> */}
      {/* Se puede Utilizar */}
      {/* <Testimonial /> */}
      {/* Se Utilizo */}
      {/* <Pricing /> */}
      {/* Se Utilizo */}
      <Contact />
      {/* <Blog /> */}
    </main>
  );
}
