'use client'

import { useState, useEffect } from "react";
import Image from "next/image";
import VideoComponent from "./blob-video";

export function Video() {
  const [isAndroid, setIsAndroid] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent;
    if (/android/i.test(userAgent)) {
      setIsAndroid(true);
    }
  }, []);

  return (
    <section className="pt-30">
      <div className="relative overflow-hidden">
        {!isAndroid ? 
          <VideoComponent fileName={'landing-1.mp4'} />
        : 
        <VideoComponent fileName={'landing-1.mp4'} />
        }
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
