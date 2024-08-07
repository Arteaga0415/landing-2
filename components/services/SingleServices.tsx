import React from "react";
import { Services } from "@/types/service";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const SingleService = ({ service }: { service: Services }) => {
  const { id, img, title, description } = service;

  return (
    <>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -10,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="h-112 lg:h-120 animate_top z-40 rounded-lg border border-white bg-white p-5 shadow-solid-3 transition-all hover:shadow-solid-7 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark xl:p-12.5"
      >
        <Link href={`/services/${id}?id=${id}`}>
          <Image 
            className="relative h-1/2 flex w-full items-center justify-center rounded-[4px]" 
            src={img} 
            width={300} 
            height={200} 
            alt="title" 
          />
          <h3 className="mb-5 mt-7.5 text-xl font-semibold text-black dark:text-white xl:text-itemtitle">
            {title}
          </h3>
          <p>{description}</p>
        </Link>
      </motion.div>
    </>
  );
};

export default SingleService;
