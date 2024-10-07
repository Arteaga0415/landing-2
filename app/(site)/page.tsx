import { Metadata } from "next";
import Hero from "@/components/Hero";
import Feature from "@/components/Features";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Testimonial from "@/components/Testimonial";
import { Video } from "@/components/video";
import { Suspense } from "react";
import VideoSkeleton from "@/ui/skeletons/videoSekeleton";
import Conditions from "@/components/Conditions";
import WhyChooseUs from "@/components/choose-us";
import VerticalCarousel from "@/components/carousel-prime";
import EmbeddedForm from "@/components/Form";

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
      <Feature />
      <Conditions />
      <WhyChooseUs />
      <VerticalCarousel />
      {/* <About /> */}
      <Testimonial />
      <Contact />
      <EmbeddedForm />
    </main>
  );
}
