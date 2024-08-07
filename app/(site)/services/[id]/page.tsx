import RelatedService from "@/components/services/relatedService";
import SharePost from "@/components/Blog/SharePost";
import { Metadata } from "next";
import Image from "next/image";
import BigService from "@/components/page-service";
import Presentation from "@/components/Presentation";
import SectionHeader from "@/components/Common/SectionHeader";

export const metadata: Metadata = {
  title: "Blog Details Page - Solid SaaS Boilerplate",
  description: "This is Blog details page for Solid Pro",
};

const SingleBlogPage = async () => {
  return (
    <>
      <section className="pb-20 pt-30 lg:pb-25 lg:pt-35 xl:pb-30 xl:pt-40">
        <div className="pb-10">
          <SectionHeader
            headerInfo={{
              title: "Nuestros Servicios",
              subtitle: "Nuestros Servicios",
              description: `Telecomunicaciones y Energías Renovables, Solar y Eólica`,
            }}
          />
        </div>
        <div className="mx-auto max-w-c-1390 px-4 pb-20 md:px-8 2xl:px-0">
          <div className="flex flex-col-reverse gap-7.5 lg:flex-row xl:gap-12.5">
            <div className="md:w-1/2 lg:w-[32%] overflow-auto h-[800px] md:h-full">
              <RelatedService />
            </div>
            <BigService />
          </div>
        </div>
        <Presentation />
      </section>
    </>
  );
};

export default SingleBlogPage;
