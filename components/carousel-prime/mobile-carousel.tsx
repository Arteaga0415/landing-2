import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../carousel/components";
import { Card, CardContent } from "../card";
import Image from "next/image";
import successStories from "./successStoriesData";

export default function MobileCarousel () {
    return (
        <>
            <Carousel opts={{align: "start"}} orientation="vertical" className="w-full">
                <CarouselContent className="mt-1 h-[550px]">
                {successStories.map((el, index) => (
                    <CarouselItem className="pt-1" key={index}>
                    <div className="p-1">
                        <Card>
                            <CardContent className="flex items-center justify-center">
                                <div className="flex flex-col">
                                <div className="flex justify-between py-5">
                                    <h2 className="text-3xl font-semibold text-green1">{el.name}</h2>
                                    <h6 className="text-lg font-normal w-2/5">{el.location}</h6>
                                </div>
                                <div className="relative">
                                    <Image
                                    src={el.img}
                                    width={720}  
                                    height={720}
                                    alt="imagen"  
                                    className="w-[210px] h-[210px] rounded-md object-cover h-ful w-full"                 
                                    />
                                    <h6 className="text-justify text-lg font-normal rounded-md pt-5 md:p-2 md:bg-gray-500 md:bg-opacity-90 md:w-2/5 md:absolute md:bottom-5 md:right-5">
                                    {el.description}
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
        </>
    )
}