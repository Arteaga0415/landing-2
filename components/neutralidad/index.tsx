import neutralidadData from "./neutralidadData";
import Image from "next/image";

export default function Neutralidad () {
  return (
    <>
      <section id="services" className="py-20 lg:py-25 xl:py-30">
        <div className="flex flex-col gap-5">
          <h2 className="mb-5 mt-11 text-3xl font-semibold text-black dark:text-white 2xl:text-sectiontitle2">
            Neutralidad
          </h2>
          <p>{neutralidadData.ley1}</p>
          <p>{neutralidadData.ley2}</p>
          <p>{neutralidadData.ley3}</p>
          <p>{neutralidadData.ley4}</p>
          <p>{neutralidadData.ley5}</p>
        </div>
        <div className="flex flex-wrap gap-5">
          <Image 
            src={neutralidadData.img1}
            width={400}
            height={250}
            alt="Neutralidad imagen"
          />
          <Image 
            src={neutralidadData.img2}
            width={400}
            height={250}
            alt="Neutralidad imagen"
          />
        </div>
      </section>
    </>
  )
}