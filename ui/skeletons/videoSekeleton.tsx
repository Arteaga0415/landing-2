import Image from "next/image"

export default function VideoSkeleton () {
  return (
    <section className="flex justify-center pt-30 h-full">
      {/* <h6 className="text-lg font-semibold py-30">Cargando Video...</h6> */}
      <div className="relative overflow-hidden">
        <Image
          src={'/imagenes/landing-1.jpg'}
          width={1520}
          height={651}
          alt="Imagen"
        />
        <div className="absolute top-0 left-0 m-4 text-white w-2/5 bg-opacity-50 md:px-2 md:py-8 rounded">
          <h1 className="text-sm md:text-2xl font-semibold md:font-bold text-white">Con más de 20 años de experiencia en telecomunicaciones, tecnología educativa y energías renovables.</h1>
        </div>
        <div className="flex text-end absolute top-0 right-0 m-4 text-white w-1/2 bg-opacity-50 md:py-4 rounded">
          <h1 className="text-lg md:text-6xl font-bold text-white">Ingeniería y Telecomunicaciones</h1>
        </div>
      </div>
    </section>
  )
}