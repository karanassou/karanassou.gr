"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { useCallback, useEffect, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar, A11y } from "swiper/modules";
import { ArrowRight, ArrowLeft } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { useRouter } from "next/navigation";

export default function Gallery() {
  const router = useRouter();
  const sliderRef = useRef(null);
  const [gallery, setGallery] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);
 
  useEffect(() => {
    client
      .fetch(
        `*[_type == "gallery"]|order(order asc)[]{
        "project_ref": project_ref->{  
          client,
          "slug":slug.current,
          mainImage,
          workTypes,
          year
        }
      }`
      )
      .then((res) => {
        setGallery(res);
      });
  }, []);
  return (
    <>
      {gallery && gallery.length && (
        <section>
          <Swiper
            ref={sliderRef}
            autoplay={{
              delay: 30,
              reverseDirection: true,
              stopOnLastSlide: false,
            }}
            spaceBetween={0}
            slidesPerView={1}
            autoHeight
            onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
            modules={[Scrollbar, A11y]}
            scrollbar={{ draggable: true }}
          >
            {gallery.map((i, index) => (
              <SwiperSlide key={index} className="relative w-full h-auto">
                <img
                  onClick={() => router.push(`/projects/${i.project_ref.slug}`)}
                  src={urlFor(i.project_ref.mainImage).url()}
                  className="w-full h-full cursor-pointer"
                  alt={
                    i.project_ref.mainImage.alt
                      ? i.project_ref.mainImage.alt
                      : ""
                  }
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="sm:px-10 px-6 max-md:flex-col flex max-md:space-y-3 mt-3">
            <motion.div
              key={currentSlide}
              variants={variants}
              animate={"show"}
              initial="hide"
            >
              <p className="text-3xl tracking-wide">
                {gallery[currentSlide].project_ref.client}
              </p>
              <p className="opacity-50 italic">
                {gallery[currentSlide].project_ref.year},{" "}
                {gallery[currentSlide].project_ref.workTypes[0]}
              </p>
            </motion.div>
            <div className="ml-auto mt-2 flex space-x-2">
              <div onClick={handlePrev}>
                <ArrowLeft size={32} weight="light" />
              </div>
              <p className="italic text-2xl tracking-tighter ">
                {currentSlide + 1} of {gallery.length}
              </p>
              <div onClick={handleNext}>
                <ArrowRight size={32} weight="light" />
              </div>
            </div>
          </div>
        </section>
      )}
      
    </>
  );
}
const variants = {
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeOut",
      duration: 1,
    },
  },
  hide: {
    y: -10,
    opacity: 0,
  },
};
