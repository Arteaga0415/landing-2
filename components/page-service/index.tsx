'use client'

import servicesData from "../services/servicesData"
import Image from "next/image"  
import SharePost from "../Blog/SharePost"
import { useSearchParams } from 'next/navigation'

export default function BigService () {
  const searchParams = useSearchParams()
  const search = searchParams.get('id');
  console.log('url params: ', search);
  const service = servicesData[Number(search)-1];

  return (
    <>
      <div className="lg:w-2/3">
        <div className="animate_top rounded-md border border-stroke bg-white p-7.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection md:p-10">
          <div className="mb-10 w-full overflow-hidden ">
            <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
              <Image
                src={service.img}
                alt="Kobe Steel plant that supplied"
                fill
                className="rounded-md object-cover object-center"
              />
            </div>
          </div>

          <h2 className="mb-5 mt-11 text-3xl font-semibold text-black dark:text-white 2xl:text-sectiontitle2">
            {service.title}
          </h2>

          {/* <ul className="mb-9 flex flex-wrap gap-5 2xl:gap-7.5">
            <li>
              <span className="text-black dark:text-white">Author: </span>{" "}
              Jhon Doe
            </li>
            <li>
              <span className="text-black dark:text-white">
                Published On: July 30, 2023
              </span>{" "}
            </li>
            <li>
              <span className="text-black dark:text-white">
                Category:
              </span>
              Events
            </li>
          </ul> */}

          <div className="blog-details">
            <p>
              {service.description_long}
            </p>

            <div className="flex flex-wrap gap-5">
              <Image
                src={`${service.img_a}`}
                width={350}
                height={200}
                alt="image"
                className="rounded-md"
              />
              <Image
                src={`${service.img_b}`}
                width={350}
                height={200}
                alt="image"
                className="rounded-md"
              />
            </div>

            <h3 className="pt-8">
              Nunc elementum elit viverra, tempus quam non
            </h3>
          </div>

          {/* <SharePost /> */}
        </div>
      </div>
    </>
  )
}