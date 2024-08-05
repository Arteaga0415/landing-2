import React from "react";
import Image from "next/image";
import Link from "next/link";
import servicesData from "./servicesData";

const RelatedService = async () => {
  return (
    <>
      <div className="animate_top rounded-md border border-stroke bg-white p-9 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
        <h4 className="mb-7.5 text-2xl font-semibold text-black dark:text-white">
          Servicios
        </h4>

        <div className="flex flex-col justify-center">
          {servicesData.map((service, key) => (
            <div
              className="mb-7.5 flex flex-wrap gap-4 xl:flex-nowrap 2xl:gap-6"
              key={key}
            >
              <div className="max-w-45 relative h-24 w-1/2 rounded-md">
                <Link href={`/services/${service.id}?id=${service.id}`}>
                  <Image fill src={service.img} alt="Blog" className="rounded-md"/>
                </Link>
              </div>
              <h5 className="w-1/2 text-md font-medium text-black transition-all duration-300 hover:text-primary dark:text-white dark:hover:text-primary">
                <Link href={`/services/${service.id}?id=${service.id}`}>
                  {" "}
                  {/* {service.title.slice(0, 40)}... */}
                  {service.title}
                </Link>
              </h5>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RelatedService;