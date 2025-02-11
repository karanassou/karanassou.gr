"use client";
import { useRef } from "react";
import graphicDesignAnimation from "@/app/assets/graphic-design-anim.json";
import socialMediaAnimation from "@/app/assets/social-anim.json";
import webDesignAnimation from "@/app/assets/web-design-anim.json";
import printAnimation from "@/app/assets/print-anim.json";
import brandIDAnimation from "@/app/assets/brand-id-anim.json";
import dynamic from 'next/dynamic';
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

const services = [
  {
    name: "Graphic design",
    lottie: graphicDesignAnimation,
  },
  {
    name: "Printing",
    lottie: printAnimation,
  },
  {
    name: "Brand identity",
    lottie: brandIDAnimation,
  },
  {
    name: "Social media management",
    lottie: socialMediaAnimation,
  },
  {
    name: "Website design",
    lottie: webDesignAnimation,
  },
  {
    name: "E-commerce",
    lottie: null,
  },
];

export default function Services() {
    const lottieRef = [
      useRef(null),
      useRef(null),
      useRef(null),
      useRef(null),
      useRef(null),
      useRef(null),
    ];
  function handleHover(index, enter) {
    if (enter) {
      lottieRef[index].current.play();
    } else {
      lottieRef[index].current.pause();
    }
  }
  return (
    <>
      <section className="sm:mx-10 mx-6 mt-32">
        <h2 className="font-light mb-12 leading-tight max-w-screen-lg">
          We offer six services to help out our clients expand
        </h2>
        <div className="grid gap-5 xl:grid-cols-3 grid-cols-2 max-md:grid-cols-1">
          {services.map((i, key) => (
            <div
              key={key}
              onMouseEnter={() => handleHover(key, true)}
              onMouseLeave={() => handleHover(key, false)}
              className="hover:border-white duration-150 border-2 border-transparent bg-grey w-full h-32 flex items-center py-3 px-6"
            >
              {i.lottie ? (
                <Lottie
                  autoplay={false}
                  lottieRef={lottieRef[key]}
                  className="max-w-16 aspect-square min-w-16 mr-10"
                  animationData={i.lottie}
                />
              ) : (
                <div className="bg-white/5 aspect-square min-w-16 mr-10"></div>
              )}
              <p className="font-light tracking-wider text-xl leading-tight">
                {i.name}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
