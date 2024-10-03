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
import VideoSkeleton from "@/ui/skeletons/videoSekeleton";
import Conditions from "@/components/Conditions";
import WhyChooseUs from "@/components/choose-us";
import VerticalCarousel from "@/components/carousel-prime";
import EmbeddedForm from "@/components/Form";
import Partners from "@/components/carousel";

export const metadata: Metadata = {
  title: "Single Family Services",
  description: "We pay the most to our clients amongst any other buyers, plain and simple! There are no commissions, expensive closing costs or hidden fees; the price you see, is the price you get!",
};

export default function Home() {
  return (
    <main>
      <Suspense fallback={<VideoSkeleton/>} >
        <Video />
      </Suspense>
      <Hero />
      {/* <Brands /> */}
      <Feature />
      <Conditions />
      <WhyChooseUs />
      <VerticalCarousel />
      {/* <ServiceCard /> */}
      {/* <div className="pb-20">
        <Presentation />
      </div> */}
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
      <EmbeddedForm />
      {/* <Blog /> */}
    </main>
  );
}
