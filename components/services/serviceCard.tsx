import { 
  Carousel,
  CarouselItem,
  CarouselContent,
} from "../carousel/components"

export default function ServiceCard () {
  return (
    <>
       <Carousel>
          <CarouselContent>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">Aloha 1</CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">Aloha 2</CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">Aloha 3</CarouselItem>
          </CarouselContent>
        </Carousel>
    </>
  )
}
