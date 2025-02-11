"use client";
import Image from "next/image";
import logo from "@/app/assets/logo128.png";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const menu = {
  open: {
    bottom: "0",
    transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    bottom: "-300px",
    transition: {
      duration: 1,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export default function Header() {
  const menuitems = [
    {
      text: "Projects",
      href: "/projects",
    },
    {
      text: "About",
      href: "/about",
    },
    {
      text: "Contact",
      href: "/contact",
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="h-16 flex z-20 fixed glassmorphism top-0 right-0 left-0 px-10 max-sm:px-5 items-center">
        <Link href="/">
          <Image alt="logo" src={logo} width={52} height={52} />
        </Link>
        <ul className="flex w-fit space-x-6 mr-0 ml-auto pl-4 py-4 max-sm:hidden">
          {menuitems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className="text-lg font-light tracking-wide opacity-100 hover:opacity-80 focus:opacity-80 duration-300"
              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
        <div
          onClick={() => setOpen(!open)}
          className="cursor-pointer mr-0 ml-auto pl-4 py-4 sm:hidden"
        >
          <div
            className={
              "bg-white w-7 h-[2px] duration-300 " +
              (open ? "-rotate-45 " : "-translate-y-1")
            }
          ></div>
          <div
            className={
              "bg-white w-7 h-[2px] duration-300 " +
              (open ? "rotate-45 -translate-y-[1px]" : "translate-y-1")
            }
          ></div>
        </div>
      </header>
      <motion.div
        variants={menu}
        animate={open ? "open" : "closed"}
        initial="closed"
        className={`fixed z-[99] p-10 glassmorphism-lg w-full left-0 h-[300px] border-t border-white/20`}
      >
        <div className="relative flex flex-col space-y-5 h-full font-light">
          {menuitems.map((i, key) => (
            <Link
              key={key}
              className="text-6xl ml-5"
              onClick={() => setOpen(false)}
              href={i.href}
            >
              {i.text}
            </Link>
          ))}
        </div>
      </motion.div>
    </>
  );
}
