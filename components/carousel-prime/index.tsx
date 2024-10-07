'use client'

import { Carousel } from 'primereact/carousel';
import { useCallback } from 'react';
import successStories from './successStoriesData';
import { useState, useEffect } from 'react';
import MobileCarousel from './mobile-carousel';

type SuccessStories = {
    img: string,
    description: string,
    name: string,
    location: string,
}

export default function VerticalCarousel () {
    const [stories, setStories] = useState<SuccessStories[]>([]);

    const successStoriesTemplate = useCallback((successStories: SuccessStories) => {
        return (
            <div className='flex flex-row gap-5 md:gap-10 items-center m-5 p-10 justify-center rounded-lg'>
                <div className='w-[500px] h-[420px]'>
                    <img className='rounded-lg w-full h-full object-cover' src={successStories.img} alt='Success Stories Image'/>
                </div>
                <div className='flex flex-col md:gap-5'>
                    <div className='flex flex-row gap-5'>
                        <h3>{successStories.name}</h3>
                        <h3>|</h3>
                        <h3>{successStories.location}</h3>
                    </div>
                    <h4 className='w-80'>{successStories.description}</h4>
                </div>
            </div>
        )
    }, [])

    useEffect(() => {
        setStories(successStories.slice(0, 9));
    }, []);

    return (
        <div className='flex flex-col items-center text-center p-5 w-full bg-gradient-to-t from-transparent to-[#dee7ff47] dark:bg-gradient-to-t dark:to-[#252A42]'>
            <h1 className='mb-5'>Customer Testimonials</h1>
            <div className='flex justify-center mb-20 hidden md:flex'>
                <Carousel value={stories} numVisible={1} numScroll={1} orientation="vertical" verticalViewPortHeight="550px" itemTemplate={successStoriesTemplate} autoplayInterval={10000} />
            </div >
            <div className='my-20 md:hidden'>
                <MobileCarousel />
            </div >
        </div>
    )
}