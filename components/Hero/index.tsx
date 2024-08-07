"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="overflow-hidden pb-10 pt-15 md:pt-20 xl:pb-15 xl:pt-25">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex items-center justify-center lg:items-center lg:gap-8 xl:gap-32.5">
            <div className=" md:w-4/5">
              {/* <h4 className="mb-4.5 text-lg font-medium text-black dark:text-white">
                🔥 Solid - A Complete SaaS Web Template
              </h4> */}
              <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero ">
                Bienvenido a Ingeniería y Telecomunicaciones
              </h1>
              <p>
                Somos una empresa innovadora en el área de las telecomunicaciones y energías renovables, 
                solar y eólica. Siendo pionera en la región del llano, brindando una solución de 
                conectividad para el sector Empresarial.
              </p>

              <div className="mt-10">
                {/* <form onSubmit={handleSubmit}>
                  <div className="flex flex-wrap gap-5">
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="text"
                      placeholder="Enter your email address"
                      className="rounded-full border border-stroke px-6 py-2.5 shadow-solid-2 focus:border-primary focus:outline-none dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
                    />
                    <button
                      aria-label="get started button"
                      className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                    >
                      Get Started
                    </button>
                  </div>
                </form> */}
                <div className="flex flex-row gap-5">
                  <Link href={'/support'}>
                    <button
                      aria-label="get started button"
                      className="flex rounded-full bg-primary px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-primaryho dark:bg-primary dark:hover:bg-primaryho"
                    >
                      Contacto
                    </button>
                  </Link>
                  <Link href={'/services'}>
                  <button
                    aria-label="get started button"
                    className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-primaryho dark:bg-btndark dark:hover:bg-primaryho"
                  >
                    Nuestros Servicios
                  </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* <div className="animate_right hidden md:w-1/2 lg:block">
              <div className="relative 2xl:-mr-7.5">
                <Image
                  src="/images/shape/shape-01.png"
                  alt="shape"
                  width={46}
                  height={246}
                  className="absolute -left-11.5 top-0"
                />
                <Image
                  src="/images/shape/shape-02.svg"
                  alt="shape"
                  width={36.9}
                  height={36.7}
                  className="absolute bottom-0 right-0 z-10"
                />
                <Image
                  src="/images/shape/shape-03.svg"
                  alt="shape"
                  width={21.64}
                  height={21.66}
                  className="absolute -right-6.5 bottom-0 z-1"
                />
                <div className=" relative aspect-[700/444] w-full">
                  <Image
                    className="shadow-solid-l dark:hidden"
                    src="/images/hero/hero-light.svg"
                    alt="Hero"
                    fill
                  />
                  <Image
                    className="hidden shadow-solid-l dark:block"
                    src="/images/hero/hero-dark.svg"
                    alt="Hero"
                    fill
                  />
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
