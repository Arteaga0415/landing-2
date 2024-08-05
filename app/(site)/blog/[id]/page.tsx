import BigBlog from "@/components/Blog/bigBlog";
import BlogData from "@/components/Blog/blogData";
import RelatedPost from "@/components/Blog/RelatedPost";
import SharePost from "@/components/Blog/SharePost";
import Presentation from "@/components/Presentation";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Blog Details Page - Solid SaaS Boilerplate",
  description: "This is Blog details page for Solid Pro",
  // other metadata
};

const SingleBlogPage2 = async () => {

  return (
    <>
      <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
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
