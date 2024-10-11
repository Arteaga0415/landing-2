"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const ContactForm = () => {
  /**
   * Source: https://www.joshwcomeau.com/react/the-perils-of-rehydration/
   * Reason: To fix rehydration error
   */
  const [hasMounted, setHasMounted] = React.useState(false);
  const [address, setAddress] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  
  useEffect(() => {

    if (!hasMounted) return;

    const fetchAddressSuggestions = async () => {
      const requestOptions = {
        method: 'GET',
      };
      // const apiKey = process.env.geoapify_key;
      const apiKey = "e489b6b8f9954f8da3451c0c501765b4";

      if (address.length > 3) {
        try {
          const response = await fetch(
            `https://api.geoapify.com/v1/geocode/autocomplete?text=${address}&apiKey=${apiKey}`,
            requestOptions
          );
          const result = await response.json();

          setSuggestions(result.features.map((feature) => feature.properties.formatted));
        } catch (error) {
          console.error('Error fetching address suggestions:', error);
        }
      } else {
        setSuggestions([]); 
      }
    };

    fetchAddressSuggestions();
  }, [address, hasMounted]);

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  return (
    <>
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
        transition={{ duration: 1, delay: 0.1 }}
        viewport={{ once: true }}
        className="animate_top w-full h-full lg:w-4/5 rounded-lg bg-white p-2.5 md:p-7.5 shadow-solid-8 dark:border dark:border-strokedark dark:bg-black xl:p-15"
      >
        <h2 className="flex mb-5 text-3xl font-semibold text-green2 dark:text-white xl:text-sectiontitle2">
          Get Fair Cash Offer today!
        </h2>
        <h4 className="flex text-lg mb-5 text-black dark:text-white">
          At Single Family Services we want to make things easier for you, we buy your house in any condition.
        </h4>

        <form
          action=""
          method="POST"
        >
          <div className="mb-5 md:mb-7.5 flex flex-row gap-7.5 lg:justify-between lg:gap-14">
            <input
              type="text"
              placeholder="Name"
              className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
            />
          </div>

          <div className="mb-5 md:mb-12.5 flex flex-row gap-7.5 lg:justify-between lg:gap-14">
            <input
              type="tel"
              placeholder="Phone"
              className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
            />

            {/* <input
              type="text"
              placeholder="Zipcode"
              className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
            /> */}
          </div>

          {/* <div className="mb-5 md:mb-12.5 flex flex-row gap-7.5 lg:justify-between lg:gap-14">
            <input
              type="text"
              placeholder="City"
              className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
            />

            <input
              type="text"
              placeholder="Zipcode (Optional)"
              className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2"
            />
          </div> */}

          <div className="mb-12.5 flex flex-col">
            <input
              type="text"
              placeholder="Address"
              value={address}
              className="w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"
              onChange={handleAddressChange}
            />
            {suggestions.length > 0 && (
              <ul className="w-full bg-white shadow-md z-10 max-h-60 overflow-y-auto">
                {suggestions.map((suggestion, index) => (
                  <li
                    key={index}
                    className="cursor-pointer p-2 hover:bg-gray-200"
                    onClick={() => {
                      setAddress(suggestion);
                      setSuggestions([]);
                    }}
                  >
                    {suggestion}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="flex flex-wrap gap-4 xl:justify-between ">
            <button
              aria-label="cash-offer"
              className="inline-flex items-center gap-2.5 rounded-full px-6 py-3 font-medium text-white duration-300 ease-in-out bg-green2 hover:bg-primaryho dark:bg-green2"
            >
              Get Cash Offer
              <svg
                className="fill-white"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.4767 6.16664L6.00668 1.69664L7.18501 0.518311L13.6667 6.99998L7.18501 13.4816L6.00668 12.3033L10.4767 7.83331H0.333344V6.16664H10.4767Z"
                  fill=""
                />
              </svg>
            </button>
          </div>
        </form>
      </motion.div>
    </>
  );
};

export default ContactForm;
