'use client'

import { Carousel } from 'primereact/carousel';
import { useCallback } from 'react';
import successStories from './successStoriesData';
import { useState, useEffect } from 'react';

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
            <div className='flex flex-row gap-10 items-center m-5 p-5 justify-center'>
                <div className='w-[420px] h-[420px] '>
                    <img className='rounded-lg w-full h-full object-cover' src={successStories.img} alt='Success Stories Image'/>
                </div>
                <div className='flex flex-col gap-5'>
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
        <div className='m-20'>
            <Carousel value={stories} numVisible={1} numScroll={1} orientation="vertical" verticalViewPortHeight="500px" itemTemplate={successStoriesTemplate} />
        </div >
    )
}