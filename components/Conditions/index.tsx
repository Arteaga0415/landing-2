"use client";
import React from "react";
import conditionsData from "./conditionsData";
import SingleCondition from "./SingleCondition";
import SectionHeader from "../Common/SectionHeader";

const Conditions = () => {
  return (
    <>
      {/* <!-- ===== house conditions Start ===== --> */}
      <section id="house-conditions" className="py-10 lg:py-15 xl:py-20">
        <div className="mx-auto max-w-c-1490 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <SectionHeader
            headerInfo={{
              title: "Benefits",
              subtitle: "What condition is your house in?",
              description: ``,
            }}
          />
          {/* <!-- Section Title End --> */}

          <div className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5">
            {/* <!-- house conditions item Start --> */}

            {conditionsData.map((condition, key) => (
              <SingleCondition condition={condition} key={key} />
            ))}
            {/* <!-- house conditions item End --> */}
          </div>
        </div>
      </section>

      {/* <!-- ===== house conditions End ===== --> */}
    </>
  );
};

export default Conditions;
