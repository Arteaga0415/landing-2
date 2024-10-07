"use client";
import React from "react";
import conditionsData from "./conditionsData";
import SingleCondition from "./SingleCondition";
import SectionHeader from "../Common/SectionHeader";

const Conditions = () => {
  return (
    <>
      {/* <!-- ===== house conditions Start ===== --> */}
      <section id="conditions" className="py-10 lg:py-15 xl:py-20">
        <div className="mx-auto max-w-c-1490 p-4 md:p-8 xl:p-10 rounded-lg bg-gradient-to-t from-transparent to-[#dee7ff47] dark:bg-gradient-to-t dark:to-[#252A42]">
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
