import React from "react";
import { Condition } from "@/types/condition";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const SingleCondition = ({ condition }: { condition: Condition }) => {
  const { img, title, description1, description2, description3, description4, description5 } = condition;

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
        className="animate_top z-40 rounded-lg border border-white bg-white p-7.5 shadow-solid-3 transition-all hover:shadow-solid-7 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark xl:p-12.5"
      >
        <Link href={'/services'} className="flex flex-col h-full items-center">
          <h3 className="text-xl font-semibold text-black dark:text-white xl:text-itemtitle md:h-[30px]">
            {title}
          </h3>
          <Image className="my-5 relative rounded-[4px] w-[303px] h-[202px] object-cover" src={img} width={303} height={202} alt="title" />
          <div className="flex-grow">
            <p className="text-justify">•{description1}</p>
            <p className="text-justify">•{description2}</p>
          </div>
          <button
            aria-label="get started button"
            className="flex w-40 rounded-full bg-primary px-7.5 py-2.5 mt-5 text-white duration-300 ease-in-out hover:bg-primaryho dark:bg-primaryho dark:hover:bg-btndark"
          >
            Learn More
          </button>
        </Link>
      </motion.div>
    </>
  );
};

export default SingleCondition;
