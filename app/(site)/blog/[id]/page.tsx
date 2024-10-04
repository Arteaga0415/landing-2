import BigBlog from "@/components/Blog/bigBlog";
import BlogData from "@/components/Blog/blogData";
import RelatedPost from "@/components/Blog/RelatedPost";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Single Family Services",
  description: "Blog page for Single Family Services",
};
const SingleBlogPage2 = async () => {

  return (
    <>
      <section className="pb-20 pt-25 lg:pb-25 lg:pt-30 xl:pb-30 xl:pt-35">
        <div className="animate_top mx-auto text-center">
          <h2 className="mx-auto mb-4 text-3xl font-bold text-black dark:text-white md:w-4/5 xl:text-sectiontitle3">
            Blog Single Family Services
          </h2>
        </div>
        <div className="mx-auto max-w-c-1390 px-4 pb-20 md:px-8 2xl:px-0">
          <div className="flex flex-col-reverse gap-7.5 lg:flex-row xl:gap-12.5">
            <div className="md:w-1/2 lg:w-[32%]">
              <div className="relative mb-10">
                <input
                  type="text"
                  placeholder="Search Here..."
                  className="w-full rounded-lg border border-stroke px-6 py-4 shadow-solid-12 focus:border-primary focus:outline-none dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
                />

                <button
                  className="absolute right-0 top-0 p-5"
                  aria-label="search-icon"
                >
                  <svg
                    className="fill-black transition-all duration-300 hover:fill-primary dark:fill-white dark:hover:fill-primary"
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16.031 14.617L20.314 18.899L18.899 20.314L14.617 16.031C13.0237 17.3082 11.042 18.0029 9 18C4.032 18 0 13.968 0 9C0 4.032 4.032 0 9 0C13.968 0 18 4.032 18 9C18.0029 11.042 17.3082 13.0237 16.031 14.617ZM14.025 13.875C15.2941 12.5699 16.0029 10.8204 16 9C16 5.132 12.867 2 9 2C5.132 2 2 5.132 2 9C2 12.867 5.132 16 9 16C10.8204 16.0029 12.5699 15.2941 13.875 14.025L14.025 13.875Z" />
                  </svg>
                </button>
              </div>
              {/* <div className="animate_top mb-10 rounded-md border border-stroke bg-white p-9 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
                <h4 className="mb-7.5 text-2xl font-semibold text-black dark:text-white">
                  Blogs
                </h4>

                <ul>
                  {BlogData.map((data, index) => (
                     <li key={index} className="mb-3 transition-all duration-300 last:mb-0 hover:text-primary">
                      <a href={`/blog/${data._id}?id=${data._id}`}>{data.title}</a>
                    </li>
                  ))}
                </ul>
              </div> */}

              <RelatedPost />
            </div>

            <BigBlog />
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleBlogPage2;
