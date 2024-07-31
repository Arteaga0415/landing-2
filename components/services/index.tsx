"use client";
import React from "react";
import servicesData from "./servicesData";
import SingleService from "./SingleServices";
import SectionHeader from "../Common/SectionHeader";

const Service = () => {
  return (
    <>
      {/* <!-- ===== Services Start ===== --> */}
      <section id="services" className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <SectionHeader
            headerInfo={{
              title: "Nuestros Servicios",
              subtitle: "Nuestros Servicios",
              description: `Telecomunicaciones y Energías Renovables, Solar y Eólica`,
            }}
          />
          {/* <!-- Section Title End --> */}

          <div className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5">
            {/* <!-- services item Start --> */}

            {servicesData.map((service, key) => (
              <SingleService service={service} key={key} />
            ))}
            {/* <!-- Services item End --> */}
          </div>
        </div>
      </section>

      {/* <!-- ===== Services End ===== --> */}
    </>
  );
};

export default Service;
