import neutralidadData from "./neutralidadData";
import Image from "next/image";

export default function Neutralidad () {
  return (
    <>
      <section id="services" className="px-10 md:px-20 pb-20 lg:pb-25 xl:pb-30">
        <div className="flex flex-col gap-5 text-justify pb-5 md:pb-10 xl:pb-15 px-5 md:px-10 xl:px-15">
          <h2 className="mb-5 mt-11 text-3xl font-semibold text-black dark:text-white 2xl:text-sectiontitle2">
            Neutralidad
          </h2>
          <p>{neutralidadData.ley1}</p>
          <p>{neutralidadData.ley2}</p>
          <div className="flex flex-wrap justify-center gap-5">
            <Image 
              src={neutralidadData.img4}
              width={400}
              height={250}
              alt="Neutralidad imagen"
              className="rounded-md"
            />
            <Image 
              src={neutralidadData.img5}
              width={400}
              height={250}
              alt="Neutralidad imagen"
              className="rounded-md"
            />
          </div>
          <p>{neutralidadData.ley3}</p>
          <p>{neutralidadData.ley4}</p>
          <p>{neutralidadData.ley5}</p>
        </div>
        <div className="flex flex-wrap justify-center gap-5">
          <Image 
            src={neutralidadData.img1}
            width={400}
            height={250}
            alt="Neutralidad imagen"
            className="rounded-md"
          />
          <Image 
            src={neutralidadData.img2}
            width={400}
            height={250}
            alt="Neutralidad imagen"
            className="rounded-md"
          />
        </div>
      </section>
    </>
  )
}