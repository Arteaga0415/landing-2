'use client'

import { useState, useEffect } from "react";
import Image from "next/image";

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
          <video className="w-full object-cover" loop autoPlay playsInline muted>
            <source src="/videos/landing-2.mp4" type="video/mp4" />
            <track
              src="/path/to/captions.vtt"
              kind="subtitles"
              srcLang="en"
              label="English"
            />
            Your browser does not support Video.
          </video>
        : 
        <Image
          src={'/imagenes/video-fallback-1.jpg'}
          width={3175}
          height={932}
          alt="Imagen"
        /> 
        }
        <div className="absolute top-0 left-0 m-4 w-2/5 bg-opacity-50 md:px-2 md:py-8 rounded">
          <h1 className="text-sm md:text-2xl font-semibold md:font-bold text-white">
            We Buy Properties In ANY Condition! Receive a Quick, Simple, and Straightforward Offer Instantly!
          </h1>
        </div>
        <div className="flex justify-end absolute top-0 right-0 m-4 w-1/2 bg-opacity-50 md:py-4 rounded">
          <h1 className="text-lg md:text-6xl font-bold text-white">Single Family Services</h1>
        </div>
      </div>
    </section>
  )
}
