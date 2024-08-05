import BigBlog from "@/components/Blog/bigBlog";
import BlogData from "@/components/Blog/blogData";
import RelatedPost from "@/components/Blog/RelatedPost";
import SharePost from "@/components/Blog/SharePost";
import Presentation from "@/components/Presentation";
import { Metadata } from "next";
import Image from "next/image";
import SectionHeader from "@/components/Common/SectionHeader";

export const metadata: Metadata = {
  title: "Noticias Ingeniería y Telecomunicaciones",
  description: "Esta es la pagina de noticias de Ingeniería y Telecomunicaciones",
};
const SingleBlogPage2 = async () => {

  return (
    <>
      <section className="pb-20 pt-25 lg:pb-25 lg:pt-30 xl:pb-30 xl:pt-35">
        <div className="animate_top mx-auto text-center">
          <h2 className="mx-auto mb-4 text-3xl font-bold text-black dark:text-white md:w-4/5 xl:text-sectiontitle3">
            Noticias Ingeniería y Telecomunicaciones
          </h2>
        </div>
        <div className="mx-auto max-w-c-1390 px-4 pb-20 md:px-8 2xl:px-0">
          <div className="flex flex-col-reverse gap-7.5 lg:flex-row xl:gap-12.5">
            <div className="md:w-1/2 lg:w-[32%]">

              <div className="animate_top mb-10 rounded-md border border-stroke bg-white p-9 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
                <h4 className="mb-7.5 text-2xl font-semibold text-black dark:text-white">
                  Noticias
                </h4>

                <ul>
                  {BlogData.map((data, index) => (
                     <li key={index} className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary">
                      <a href={`/blog/${data._id}?id=${data._id}`}>{data.title}</a>
                    </li>
                  ))}
                </ul>
              </div>

              <RelatedPost />
            </div>

            <BigBlog />
          </div>
        </div>
        <Presentation />
      </section>
    </>
  );
};

export default SingleBlogPage2;
