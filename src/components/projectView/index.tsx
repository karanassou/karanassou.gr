"use client";
import { PortableText } from "@portabletext/react";
import "./style.css";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import portableTextComponents from "./sanityComponents";
import { X } from "@phosphor-icons/react";

interface SanityProject {
  client: string;
  year: string;
  workTypes: string[];
  body?: any;
  mainImage: {
    asset: {
      _ref: string;
      _type: string;
    };
    _type: "image";
    alt?: string;
  };
  imageGrid?: {
    asset: {
      _ref: string;
      _type: string;
    };
    _type: "image";
    alt?: string;
  }[];
}

export default function Page({ params }: { params: { id: string } }) {
  const container: any = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"]);
  const bottom = useTransform(scrollYProgress, [0, 0.4], ["0", "-80vh"]);

  const [p, setP] = useState<null | SanityProject>(null);
  const [image, setImage] = useState<number | null>(null);
  useEffect(() => {
    client
      .fetch(
        `*[_type == "project" && slug.current == "${params.id}"]{
        client,
        year,
        workTypes,
        body,      
        mainImage,
        imageGrid
        }`
      )
      .then((res) => {
        const project = res[0];
        setP(project);
      });
  }, []);

  return (
    <div>
      {p && (
        <>
          <div className="min-h-screen">
            {" "}
            <div className="h-fit overflow-hidden -mt-16 mb-16" ref={container}>
              <motion.div style={{ y }} className="relative h-fit w-full">
                <img
                  src={urlFor(p.mainImage).url()}
                  alt={p.mainImage.alt ? p.mainImage.alt : ""}
                  className="max-md:h-[60vh] w-full max-md:object-cover"
                />
              </motion.div>
            </div>
            <motion.h1
              className={`font-light leading-none px-10 max-sm:px-5 pb-10 word-${p.client.length} fixed left-0`}
              style={{ bottom: bottom }}
            >
              {p.client}
            </motion.h1>
          </div>
          <div className="max-sm:px-5 px-10 max-w-screen-xl m-auto w-full text-4xl font-light flex flex-col pt-24">
            <div className="md:flex mb-2">
              <h4>{p.client}</h4>
              <h4 className="ml-auto text-right">{p.year}</h4>
            </div>
            {p.workTypes.map((i, key) => (
              <h5 className="opacity-50 text-2xl text-right" key={key}>
                {i}
              </h5>
            ))}
          </div>
          {p.body && (
            <div className="px-10 max-sm:px-5 text-xl font-light max-w-screen-xl m-auto pb-16 pt-24">
              <PortableText
                components={portableTextComponents}
                value={p.body}
              />
            </div>
          )}

          {p.imageGrid && (
            <>
              <div className="max-sm:columns-1 columns-2 gap-0 sm:columns-3 mt-16 w-full">
                {p.imageGrid.map((i, key) => (
                  <img
                    onClick={() => setImage(key + 1)}
                    key={key}
                    src={urlFor(i)
                      .width(
                        innerWidth <= 640
                          ? innerWidth + 300
                          : Math.ceil(innerWidth / 2) + 300
                      )
                      .url()}
                    alt={i.alt ? i.alt : ""}
                    className="w-full h-auto"
                  />
                ))}
              </div>
              <AnimatePresence>
                {image && (
                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 50, opacity: 0 }}
                    className="max-lg:hidden p-10 duration-200 bg-black z-50 fixed grid place-items-center top-0 left-0 w-full h-screen"
                  >
                    <button
                      className="absolute top-5 right-5"
                      onClick={() => setImage(null)}
                    >
                      <X size={32} />{" "}
                    </button>
                    <img
                      src={urlFor(p.imageGrid[image - 1]).url()}
                      alt={
                        p.imageGrid[image - 1].alt
                          ? p.imageGrid[image - 1].alt
                          : ""
                      }
                      className="w-full object-contain max-h-[80vh]"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </>
          )}
        </>
      )}
    </div>
  );
}
