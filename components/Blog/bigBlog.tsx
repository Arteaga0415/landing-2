'use client'

import Image from "next/image"
import SharePost from "./SharePost"
import { useSearchParams } from "next/navigation"
import BlogData from "./blogData"

export default function BigBlog () {
  const searchParams = useSearchParams()
  const search = searchParams.get('id');
  console.log('url params: ', search);
  const blog = BlogData[Number(search)-1];

  return (
    <div className="lg:w-2/3">
      <div className="animate_top rounded-md border border-stroke bg-white p-7.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection md:p-10">
        <div className="mb-10 w-full overflow-hidden ">
          <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
            <Image
              src={blog.mainImage}
              alt="Kobe Steel plant that supplied"
              fill
              className="rounded-md object-cover object-center"
            />
          </div>
        </div>

        <h2 className="mb-5 mt-11 text-3xl font-semibold text-black dark:text-white 2xl:text-sectiontitle2">
          {blog.title}
        </h2>

        <ul className="mb-9 flex flex-wrap gap-5 2xl:gap-7.5">
          <li>
            <span className="text-black dark:text-white">Autor: </span>{" "}
            {blog.author}
          </li>
          <li>
            <span className="text-black dark:text-white">
              Publicado: {blog.publishedAt}
            </span>{" "}
          </li>
        </ul>
        {blog.body5 ? 
        <div className="blog-details">
          <p className="py-2 text-justify">
            {blog.body}
          </p>
          <p className="py-2 text-justify">
            {blog.body1}
          </p>
          <p className="py-2 text-justify">
            {blog.body2}
          </p>
          <p className="py-2 text-justify">
            {blog.body3}
          </p>
          <p className="py-2 text-justify">
            {blog.body4}
          </p>

          {blog.thirdImage ? 
          <div className="flex flex-wrap gap-5 py-4">
            <Image
              src={`${blog.secondImage}`}
              width={350}
              height={200}
              alt="image"
              className="rounded-md"
            />
            <Image
              src={`${blog.thirdImage}`}
              width={350}
              height={200}
              alt="image"
              className="rounded-md"
            />
          </div> : 
          <div className="flex flex-wrap gap-5 py-4">
            <Image
              src={`${blog.secondImage}`}
              width={450}
              height={300}
              alt="image"
              className="rounded-md"
            />
          </div>}

          <p className="py-2 text-justify">
            {blog.body5}
          </p>
          <p className="py-2 text-justify">
            {blog.body6}
          </p>
          <p className="py-2 text-justify">
            {blog.body7}
          </p>
          <p className="py-2 text-justify">
            {blog.body9}
          </p>
          <p className="py-2 text-justify">
            {blog.body9}
          </p>
          <p className="py-2 text-justify">
            {blog.body10}
          </p>
        </div>
        : 
        <div>
          <p className="py-2 text-justify">
            {blog.body}
          </p>
          <p className="py-2 text-justify">
            {blog.body1}
          </p>
          <p className="py-2 text-justify">
            {blog.body2}
          </p>

          {blog.thirdImage ? 
          <div className="flex flex-wrap gap-5 py-4">
            <Image
              src={`${blog.secondImage}`}
              width={350}
              height={200}
              alt="image"
              className="rounded-md"
            />
            <Image
              src={`${blog.thirdImage}`}
              width={350}
              height={200}
              alt="image"
              className="rounded-md"
            />
          </div> : 
          <div className="flex flex-wrap gap-5 py-4">
            <Image
              src={`${blog.secondImage}`}
              width={450}
              height={300}
              alt="image"
              className="rounded-md"
            />
          </div>}

          <p className="py-2 text-justify">
            {blog.body3}
          </p>
          <p className="py-2 text-justify">
            {blog.body4}
          </p>
      
        </div>}
        <SharePost />
      </div>
    </div>
  )
}