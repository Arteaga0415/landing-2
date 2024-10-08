'use client'

import { useState, useEffect } from "react";
import Image from "next/image";
import ContactForm from "../Contact/contact-form";

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
            <source src="/videos/landing-1.mp4" type="video/mp4" />
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
        <div className="hidden md:flex md:flex-col absolute top-20 left-10 m-4 w-2/5 bg-opacity-50 md:px-2 md:py-8 rounded">
          <h2 className="text-lg md:text-6xl font-semi-bold text-white">
            Sell your house today
          </h2>
          <h2 className="font-semi-bold text-white">
            <strong>No</strong> commissions <strong>No</strong> fees
          </h2>
          <h2 className="font-semi-bold text-white">
            Get a Cash Offer from a trusted Home Buyer.
          </h2>
        </div>
        <div className="flex justify-end absolute top-20 right-0 md:right-40 m-4 w-full md:w-1/2 bg-opacity-50 md:py-4 rounded">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
