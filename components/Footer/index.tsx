"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Footer = () => {
  return (
    <div>
      <footer className="border-t border-stroke bg-white dark:border-strokedark dark:bg-blacksection">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          {/* <!-- Footer Top --> */}
          <div className="py-20 lg:py-25">
            <div className="flex flex-wrap gap-8 lg:justify-between lg:gap-0">
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
                className="animate_top md:w-1/2 lg:w-1/4"
              >
                <a href="#" className="relative">
                  <Image
                    width={410}
                    height={100}
                    src="/logos/logo.png"
                    alt="Logo"
                    className="dark:hidden -ml-8"
                  />
                  <Image
                    width={410}
                    height={100}
                    src="/logos/logo.png"
                    alt="Logo"
                    className="hidden dark:block -ml-8"
                  />
                </a>

                {/* <p className="mb-10 mt-5">
                  Single Family Services
                </p> */}

                <p className="mb-1.5 mt-10 text-sectiontitle uppercase tracking-[5px]">
                  contact
                </p>
                <a
                  href="/support"
                  className="text-itemtitle font-medium text-black dark:text-white"
                >
                  info@singlefamilyservices.com
                </a>
              </motion.div>

              <div className="flex w-full flex-col gap-8 md:flex-row md:justify-between md:gap-0 lg:w-2/3 xl:w-7/12">
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
                  className="animate_top"
                >
                  <h4 className="mb-9 text-itemtitle2 font-medium text-black dark:text-white">
                    Pages
                  </h4>

                  <ul>
                    <li>
                      <a
                        href="#"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        href="/conditions"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        House Conditions
                      </a>
                    </li>
                    <li>
                      <a
                        href="/blog"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Blog
                      </a>
                    </li>
                  </ul>
                </motion.div>

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
                  className="animate_top"
                >
                  <h4 className="mb-9 text-itemtitle2 font-medium text-black dark:text-white">
                    Support
                  </h4>

                  <ul>
                    <li>
                      <a
                        href="/about"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        About Us
                      </a>
                    </li>
                    {/* <li>
                      <a
                        href="/blog"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Blog
                      </a>
                    </li> */}
                    <li>
                      <a
                        href="/support"
                        className="mb-3 inline-block hover:text-primary"
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                </motion.div>

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
                  className="animate_top"
                >
                  <h4 className="mb-9 text-itemtitle2 font-medium text-black dark:text-white">
                    Contact Us
                  </h4>
                  <p className="mb-4 w-[90%]">
                    Feel free to contact us and schedule a call.
                  </p>

                  <form action="#">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Email"
                        className="w-full rounded-full border border-stroke px-6 py-3 shadow-solid-11 focus:border-primary focus:outline-none dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
                      />

                      <button
                        aria-label="signup to newsletter"
                        className="absolute right-0 p-4"
                      >
                        <svg
                          className="fill-[#757693] hover:fill-primary dark:fill-white"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_48_1487)">
                            <path
                              d="M3.1175 1.17318L18.5025 9.63484C18.5678 9.67081 18.6223 9.72365 18.6602 9.78786C18.6982 9.85206 18.7182 9.92527 18.7182 9.99984C18.7182 10.0744 18.6982 10.1476 18.6602 10.2118C18.6223 10.276 18.5678 10.3289 18.5025 10.3648L3.1175 18.8265C3.05406 18.8614 2.98262 18.8792 2.91023 18.8781C2.83783 18.8769 2.76698 18.857 2.70465 18.8201C2.64232 18.7833 2.59066 18.7308 2.55478 18.6679C2.51889 18.6051 2.50001 18.5339 2.5 18.4615V1.53818C2.50001 1.46577 2.51889 1.39462 2.55478 1.33174C2.59066 1.26885 2.64232 1.2164 2.70465 1.17956C2.76698 1.14272 2.83783 1.12275 2.91023 1.12163C2.98262 1.12051 3.05406 1.13828 3.1175 1.17318ZM4.16667 10.8332V16.3473L15.7083 9.99984L4.16667 3.65234V9.16651H8.33333V10.8332H4.16667Z"
                              fill=""
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_48_1487">
                              <rect width="20" height="20" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </button>
                    </div>
                  </form>
                </motion.div>
              </div>
            </div>
          </div>
          {/* <!-- Footer Top --> */}

          {/* <!-- Footer Bottom --> */}
          <div className="flex flex-col flex-wrap items-center justify-center gap-5 border-t border-stroke py-7 dark:border-strokedark lg:flex-row lg:justify-between lg:gap-0">
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
              className="animate_top"
            >
              <ul className="flex items-center gap-8">
                {/* <li>
                  <a href="#" className="hover:text-primary">
                    Inicio
                  </a>
                </li> */}
                <li>
                  <a href="/policy" className="hover:text-primary">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/support" className="hover:text-primary">
                    Support
                  </a>
                </li>
              </ul>
            </motion.div>

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
              className="animate_top"
            >
              <p>
                &copy; {new Date().getFullYear()} Single Family Services
              </p>
            </motion.div>

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
              className="animate_top"
            >
              <ul className="flex items-center gap-5">
                <li>
                  <a href="https://www.facebook.com/people/Single-Family-Services/100087976694027/" aria-label="social icon">
                    <svg
                      className="fill-[#D1D8E0] transition-all duration-300 hover:fill-primary"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_48_1499)">
                        <path
                          d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z"
                          fill=""
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_48_1499">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/singlefamilyservices/?igsh=ZG5tbjY4aHgyZ2wz" aria-label="social icon">
                    <svg
                      className="fill-[#D1D8E0] transition-all duration-300 hover:fill-primary"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_48_1505)">
                        <path 
                          d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.312 3.608 1.287.975.975 1.225 2.241 1.287 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.312 2.633-1.287 3.608-.975.975-2.241 1.225-3.608 1.287-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.312-3.608-1.287-.975-.975-1.225-2.241-1.287-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.849C2.295 5.785 2.545 4.518 3.52 3.543 4.495 2.568 5.761 2.318 7.127 2.256c1.265-.058 1.645-.07 4.849-.07M12 0C8.741 0 8.332.015 7.053.072 5.775.129 4.574.36 3.558 1.376 2.543 2.391 2.312 3.592 2.255 4.871.015 5.745 0 8.241 0 12s.015 6.255.072 7.535c.057 1.28.288 2.481 1.303 3.496s2.216 1.246 3.496 1.303c1.28.057 2.781.072 7.535.072s6.255-.015 7.535-.072c1.28-.057 2.481-.288 3.496-1.303s1.246-2.216 1.303-3.496c.057-1.28.072-2.781.072-7.535s-.015-6.255-.072-7.535c-.057-1.28-.288-2.481-1.303-3.496S19.791.129 18.511.072C17.231.015 16.731 0 12 0zm0 5.838A6.162 6.162 0 0 0 5.838 12 6.162 6.162 0 0 0 12 18.162 6.162 6.162 0 0 0 18.162 12 6.162 6.162 0 0 0 12 5.838zm0 10.162A4.004 4.004 0 1 1 12 8a4.004 4.004 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 1 2.88 0 1.44 1.44 0 0 1-2.88 0z" 
                          fill=""
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_48_1505">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="https://www.tiktok.com/@sfcoservices?_t=8keKDgICBwE&_r=1" aria-label="social icon">
                    <svg
                      className="fill-[#D1D8E0] transition-all duration-300 hover:fill-primary"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_48_1505)">
                        <path 
                          d="M12.934 0h2.746c.13 1.226.701 2.236 1.681 2.958.708.531 1.519.844 2.392.942v2.72a7.905 7.905 0 0 1-3.89-.98v8.93c0 3.376-2.651 6.501-6.432 6.431-3.023-.051-5.367-2.527-5.387-5.511 0-.135-.002-.271 0-.406.033-3.036 2.285-5.52 5.296-5.873a5.787 5.787 0 0 1 1.36.014v2.745c-.446-.097-.908-.094-1.36.012-1.52.34-2.473 1.527-2.463 3.106.007.963.506 1.917 1.348 2.465 1.499.925 3.476-.068 3.475-1.832V3.277c0-.438.012-.875-.014-1.311-.022-.412-.014-.824-.014-1.236z"
                          fill=""
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_48_1505">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>
          {/* <!-- Footer Bottom --> */}
        </div>
      </footer>
    </div>
  );
};

export default Footer;
