"use client";
import gsap from "gsap";
import { useEffect } from "react";
import { MagnifyingGlass, Code, CurrencyDollar } from "@phosphor-icons/react";
import Button from "@/components/button";
import Link from "next/link";
import IconButton from "@/components/iconbutton";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
export default function Page() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      const lines = gsap.utils.toArray(".line-reveal");
      lines.forEach((element: any, key) => {
        gsap.to(element, {
          delay: 0.16 * key - 0.16,
          top: 0,
          ease: "0.76, 0, 0.24, 1",
          duration: 0.6,
        });
      });
      const sentencescroll = gsap.utils.toArray(".s-op");
      sentencescroll.forEach((element: any) => {
        gsap.to(element, {
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            end: "top 50%",
            toggleActions: "play reverse none reverse",
          },
          opacity: 100,
          duration: 0.5,
          ease: "0.76, 0, 0.24, 1",
        });
      });
    });
    return () => ctx.revert();
  }, []);
  const [isEshop, setIsEshop] = useState<null | boolean>(null);
  const [isDynamic, setIsDynamic] = useState<null | boolean>(null);
  const [isPopular, setIsPopular] = useState<null | boolean>(null);
  return (
    <>
      <div className="h-[70vh] grid place-items-center">
        <section className="w-full xl:max-w-[90vw] px-12 max-sm:px-5 grid place-items-center">
          <div className="w-full flex">
            <h1 className="xl:text-8xl text-7xl max-md:text-5xl max-sm:text-4xl font-light leading-2">
              <div className="mask relative">
                <span className="absolute top-[130%] line-reveal duration-300">
                  We are bridging
                </span>
                <span className="opacity-0"> We are bridging</span>
              </div>
              <div className="mask relative">
                <span className="absolute top-[130%] line-reveal duration-300">
                  the gap between good{" "}
                </span>
                <span className="opacity-0"> the gap between good </span>
              </div>
              <div className="mask relative">
                <span className="absolute top-[130%] line-reveal duration-300">
                  design and development.{" "}
                </span>
                <span className="opacity-0">design and development.</span>
              </div>
            </h1>
            <Link
              href={"/contact/website"}
              className="w-fit relative ml-auto lg:block hidden group"
            >
              <p className="absolute top-0 left-0 w-full text-center duration-500 group-hover:opacity-0 group-hover:translate-y-0 font-extralight ease-out -translate-y-6 opacity-50 tracking-wider text-sm ">
                starting 350€
              </p>
              <Button>Get a quote</Button>
            </Link>
            <Link
              href={"/contact/website"}
              className="w-fit ml-auto lg:hidden block"
            >
              <IconButton />
            </Link>
          </div>
        </section>
      </div>{" "}
      <section className="w-full xl:max-w-[90vw] mx-auto grid grid-cols-3 max-md:grid-cols-1 sm:px-5">
        <div className="md:border-r max-md:border-b font-light tracking-wide border-white/10 p-6 space-y-2">
          <h4 className="text-xl space-x-2">
            <MagnifyingGlass
              size={20}
              weight="bold"
              className="text-blue inline-block"
            />
            <span>Be on top of Google resluts.</span>
          </h4>
          <p className="opacity-50 text-sm">
            After studying the Google documentation on SEO we can confidently
            say that you will be the first result from day one. The same applies
            for e-shops. Our system already registers your products in the
            Google Search Console.
          </p>
        </div>
        <div className="md:border-r max-md:border-b font-light tracking-wide border-white/10 p-6 space-y-2">
          <h4 className="text-xl space-x-2 ">
            <Code size={20} weight="bold" className="text-blue inline-block" />
            <span>Best technologies in the market.</span>
          </h4>
          <p className="opacity-50 text-sm">
            We build your websites using Next.js and Vercel also used by Nike
            and ChatGPT. Animations are built using GSAP and Framer Motion used
            by Google and Microsoft.
          </p>
        </div>
        <div className="font-light tracking-wide border-white/10 p-6 space-y-2">
          <h4 className="text-xl space-x-2">
            <CurrencyDollar
              size={20}
              weight="bold"
              className="text-blue inline-block"
            />
            <span>Opimized cost.</span>
          </h4>
          <p className="opacity-50 text-sm">
            There is no standard pricing for everyone. After studying your
            company&apos;s needs we come up with a price that suits <i>you</i>. For
            example, a standard website can cost as low as 50€ a year, an eshop
            can go from 280€ a year.
          </p>
        </div>
      </section>
      <div className="grid place-items-center min-h-screen pb-12">
        <section className="w-full max-w-screen-lg sm:px-12 px-5">
          <h1 className="xl:text-6xl text-5xl max-sm:text-3xl font-light leading-relaxed mb-12 w-2/3 text-right ml-auto">
            Get a price for your new website.
          </h1>
          <h4 className="text-lg font-light mb-4 ml-3 tracking-wide">
            What type of website is it going to be?
          </h4>
          <div className="grid sm:grid-cols-2 sm:gap-4 gap-2 mb-8">
            <button
              onClick={() => setIsEshop(false)}
              className={`border ${isEshop === false && "bg-blue"} border-white/20 rounded-lg h-16 py-3 px-6 flex items-center font-light tracking-wide`}
            >
              Website
            </button>
            <button
              onClick={() => setIsEshop(true)}
              className={`border ${isEshop && "bg-blue"} border-white/20 rounded-lg h-16 py-3 px-6 flex items-center font-light tracking-wide`}
            >
              Eshop
            </button>
          </div>

          <AnimatePresence>
            {isEshop === false && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="duration-1000 mt-8"
              >
                <h4 className="text-lg font-light mb-4 ml-3 tracking-wide">
                  Will your website include dynamic content{" "}
                  <span className="opacity-50">
                    (a blog page or stuff you are goind to be changing through
                    an admin panel without contacting us)
                  </span>
                  ?
                </h4>
                <div className="grid sm:grid-cols-2 sm:gap-4 gap-2 mb-8">
                  <button
                    onClick={() => setIsDynamic(true)}
                    className={`border ${isDynamic && "bg-blue"} border-white/20 rounded-lg h-16 py-3 px-6 flex items-center font-light tracking-wide`}
                  >
                    Yes
                  </button>
                  <button
                    onClick={() => setIsDynamic(false)}
                    className={`border ${isDynamic === false && "bg-blue"} border-white/20 rounded-lg h-16 py-3 px-6 flex items-center font-light tracking-wide`}
                  >
                    No
                  </button>
                </div>
                <h4 className="text-lg font-light mb-4 ml-3 tracking-wide">
                  Do you expect more than 5000 monthly visits?
                </h4>
                <div className="grid sm:grid-cols-2 sm:gap-4 gap-2 mb-8">
                  <button
                    onClick={() => setIsPopular(true)}
                    className={`border ${isPopular && "bg-blue"} border-white/20 rounded-lg h-16 py-3 px-6 flex items-center font-light tracking-wide`}
                  >
                    Yes
                  </button>
                  <button
                    onClick={() => setIsPopular(false)}
                    className={`border ${isPopular === false && "bg-blue"} border-white/20 rounded-lg h-16 py-3 px-6 flex items-center font-light tracking-wide`}
                  >
                    No
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {!isEshop && isDynamic !== null && (
              <motion.div
                initial={{ opacity: 0, x: 5 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 5 }}
                className="duration-300 mt-8 font-light tracking-wide text-right"
              >
                <p>
                  <span className="mr-3 opacity-50 mb-2">
                    Design and development
                  </span>{" "}
                  {isDynamic ? "450€" : "350€"}
                </p>
                <p>
                  <span className="mr-3 opacity-50">Yearly costs</span>{" "}
                  {isPopular ? (isDynamic ? "~200€" : "100€") : "80€"}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {isEshop && (
              <motion.div
                initial={{ opacity: 0, x: 5 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 5 }}
                className="duration-300 mt-8 font-light tracking-wide text-right"
              >
                <p>
                  <span className="mr-3 opacity-50 mb-2">
                    Design and development
                  </span>{" "}
                  700€
                </p>
                <p>
                  <span className="mr-3 opacity-50">Yearly costs</span> 288€
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </section>
      </div>
    </>
  );
}
