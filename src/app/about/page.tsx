"use client";
import Button from "@/components/button";
import Link from "next/link";
import "./style.css";
import Image from "next/image";
import Paragraph from "./word";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import image from "@/app/assets/ioanna.jpg";

export default function Page() {
  const container = useRef(null);
  const portraitImageRef = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const context = gsap.context(() => {
      gsap.to(portraitImageRef.current, {
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "center top",
          scrub: 2,
        },
        y: -50,
      });
    });

    return () => context.revert();
  }, []);

  return (
    <div ref={container}>
      <div className="mx-auto pt-16 max-w-screen-xl px-10 max-sm:px-5 w-full space-y-6">
        <Paragraph
          par={`1996 is the year we started working in graphic design. After years of experience in the field of book publications, working with IANOS Publications, we returned to our hometown to work and ultimately create something new. Now, we have our own design studio, always learning and evolving along the process.`}
        />
      </div>
      <div className="py-10 flex pr-16">
        <Image
          ref={portraitImageRef}
          src={image}
          width={1000}
          height={1000}
          alt="Ioanna Karanassou portrait."
          className="max-h-[60vh] w-auto"
        />
      </div>
      <div className="mx-auto max-w-screen-xl px-10 pb-6 max-sm:px-5 w-full space-y-6">
        <Paragraph
          par={`We are proud to say that over the years we have helped many businesses, especially in the competitive fields of tourist accommodation and dining.`}
        />
        <Paragraph className="opacity-50 !-mb-5" par={`Award`} />
        <Paragraph
          par={`1st award for Stavros Kougioumtzis' book "Hronia San Vrohi" (IANOS Publications) in the EVGE Awards, 2006.`}
        />
        <Paragraph className="opacity-50 !-mb-5" par={`Conferences`} />
        <Paragraph
          par={`1st & 2nd International Conference for Typography and Visual Communication.`}
        />
        <div className="pt-3" />
        <Link href={"/contact"}>
          <Button>Get in touch</Button>
        </Link>
      </div>
    </div>
  );
}
