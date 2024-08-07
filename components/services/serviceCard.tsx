import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../carousel/components"
import { 
  Card,
  CardContent,

} from "../card"
import Image from "next/image"

type ServiceData = {
  title: string;
  desc: string;
  body: string;
  img: string;
}

const serviceData: ServiceData[] = [
  {
    title: 'Conectividad',
    desc: 'Conectividad Empresarial',
    body: 'Ofrecemos servicios de conectividad remota para empresas, permitiendo la interconexión de múltiples sedes a través de soluciones de red avanzadas.',
    img: '/imagenes/landing-4.jpg',
  },
  {
    title: 'Energía Solar',
    desc: 'Energía renovables',
    body: 'Ofrecemos servicios de suministro, instalación y mantenimiento de equipos para equipos de energía solar.',
    img: '/imagenes/landing-solar-2.jpg',
  },
  {
    title: 'Energía Eólica',
    desc: 'Energía renovables',
    body: 'Prestamos servicios de suministro, instalación y mantenimiento de equipos para equipos de energía eólica.',
    img: '/imagenes/landing-wind-2.jpeg',
  },

]

export default function ServiceCard () {
  return (
    <section className="overflow-hidden flex items-center justify-center pb-20 md:px-20 py-10 md:py-15 lg:py-20">
      <Carousel opts={{align: "start"}} orientation="vertical" className="w-full">
        <CarouselContent className="mt-1 h-[450px] md:h-[500px]">
          {serviceData.map((el, index) => (
            <CarouselItem className="pt-1" key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex items-center justify-center p-6">
                    <div className="flex flex-col">
                      <div className="flex justify-between py-5">
                        <h2 className="text-3xl font-semibold text-green1">{el.title}</h2>
                        <h6 className="text-lg font-normal w-2/5">{el.desc}</h6>
                      </div>
                      <div className="relative">
                        <Image
                          src={el.img}
                          width={700}  
                          height={600}
                          alt="imagen"  
                          className="rounded-md"                 
                        />
                        <h6 className="text-justify text-lg font-normal rounded-md pt-5 md:p-2 md:bg-gray-500 md:bg-opacity-80 md:w-2/5 md:absolute md:bottom-5 md:right-5">
                          {el.body}
                        </h6>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          )) }
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  )
}
