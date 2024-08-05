"use client";
import { Blog } from "@/types/blog";
import { motion } from "framer-motion";
import { Section } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const MisionItem = ({ mision }: { mision: Blog[] }) => {
  // const { mainImage, title, metadata } = mision[0];
  // const { mainImageVision, titleVision, metadataVision } = mision[1];

  return (
    <section id="mision-vision" className="overflow-hidden pb-20 lg:pb-25 xl:pb-30 lg:px-20" >
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -20,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="animate_top rounded-lg bg-white p-4 pb-9 shadow-solid-8 dark:bg-blacksection"
      >
        {mision.map((el, index) => (
          <div className="px-4 text-justify" key={index}>
            <h3 className="mb-3.5 mt-7.5 line-clamp-2 inline-block text-lg font-medium text-black duration-300 hover:text-primary dark:text-white dark:hover:text-primary xl:text-itemtitle2">
              {`${el.title.slice(0, 40)}`}
            </h3>
            <p>{el.metadata}</p>
            {/* <p className="line-clamp-3">{metadata}</p> */}
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default MisionItem;
