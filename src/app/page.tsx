"use client";
import gsap from "gsap";
import { useEffect } from "react";
import Button from "@/components/button";
import Link from "next/link";
import IconButton from "@/components/iconbutton";
import Gallery from "@/components/home/gallery";
import Services from "@/components/home/services";

export default function Page() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const lines = gsap.utils.toArray(".line-reveal");
      lines.forEach((element: any, key) => {
        gsap.to(element, {
          delay: 0.16 * key - 0.16,
          top: 0,
          ease: "0.76, 0, 0.24, 1",
          duration: 0.6,
        });
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="h-screen grid place-items-center -mt-16">
        <section className="w-full xl:max-w-[90vw]">
          <div className="px-12 max-sm:px-5 h-[50dvh] max-md:h-[40dvh] grid place-items-center">
            <div className="w-full flex">
              <h1 className="xl:text-8xl text-7xl max-md:text-5xl max-sm:text-4xl font-light leading-2">
                <div className="mask relative">
                  <span className="absolute top-[130%] line-reveal duration-300">
                    We just help
                  </span>
                  <span className="opacity-0">We just help</span>
                </div>
                <div className="mask relative">
                  <span className="absolute top-[130%] line-reveal duration-300">
                    you communicate
                  </span>
                  <span className="opacity-0">you communicate</span>
                </div>
                <div className="mask relative">
                  <span className="absolute top-[130%] line-reveal duration-300">
                    your message.
                  </span>
                  <span className="opacity-0">your message.</span>
                </div>
              </h1>
              <Link
                aria-label="Get a quote"
                href={"/contact"}
                className="w-fit ml-auto lg:block hidden"
              >
                <Button label="Get a quote">Get a quote</Button>
              </Link>
              <Link
                aria-label="Get a quote"
                href={"/contact"}
                className="w-fit ml-auto lg:hidden block"
              >
                <IconButton label="Get a quote" />
              </Link>
            </div>
          </div>
          <div className="flex max-sm:text-right max-sm:w-[90vw] max-md:w-[70vw] max-md:flex-col md:w-[70vw] xl:w-[50vw] md:space-x-7 max-md:space-y-4 px-12 mr-0 ml-auto">
            <p>
              Ioanna Karanassou is an EVGE awarded graphic designer. Our clients
              include IANOS and the Kasandra Festival.
            </p>
            <p>
              We help businesses grow through their brand identites,{" "}
              <span className="whitespace-nowrap">e-commerce</span>, digital
              experiences and social media.
            </p>
          </div>
        </section>
      </div>{" "}
      <Gallery />
      <Services />
      <section className="sm:mx-10 mx-6 h-[80dvh] grid place-items-center">
        <div>
          <h1 className="xl:text-8xl text-7xl max-md:text-5xl font-light leading-2">
            You are in the right hands.
          </h1>
        </div>
      </section>
    </>
  );
}
