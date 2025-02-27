import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import "./style.css";

export default function Paragraph({
  par,
  className,
}: {
  par: string;
  className?: string;
}) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.75", "start 0.25"],
  });

  const words = par.split(" ");
  return (
    <p ref={container} className={`paragraph ${className}`}>
      {words.map((word: string, i: number) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </p>
  );
}

const Word = ({
  children,
  progress,
  range,
}: {
  children: any;
  progress: any;
  range: any;
}) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className={"word"}>
      <span className={"shadow"}>{children}</span>
      <motion.span style={{ opacity: opacity }}>{children}</motion.span>
    </span>
  );
};
