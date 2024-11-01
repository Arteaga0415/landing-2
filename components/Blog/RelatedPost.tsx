import React from "react";
import Image from "next/image";
import Link from "next/link";
import BlogData from "./blogData";

const RelatedBlog = async () => {
  return (
    <>
      <div className="animate_top rounded-md border border-stroke bg-white p-9 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
        <h4 className="mb-7.5 text-2xl font-semibold text-black dark:text-white">
          Blogs
        </h4>

        <div className="flex flex-col justify-center">
          {BlogData.slice(0,9).map((blog, key) => (
            <div
              className="mb-7.5 flex flex-wrap gap-4 xl:flex-nowrap 2xl:gap-6"
              key={key}
            >
              <div className="max-w-45 relative h-24 w-1/2 rounded-md">
                <Link href={`/blog/${blog._id}?id=${blog._id}`}>
                  <Image fill src={blog.mainImage} alt="Blog" className="rounded-md"/>
                </Link>
              </div>
              <h4 className="w-1/2 text-md font-medium text-black transition-all duration-300 hover:text-primary dark:text-white dark:hover:text-primary">
                <Link href={`/blog/${blog._id}?id=${blog._id}`}>
                  {" "}
                  {blog.title.slice(0, 40)}...
                </Link>
              </h4>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RelatedBlog;
