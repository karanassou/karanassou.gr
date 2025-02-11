"use client";
import dynamic from 'next/dynamic';
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });
import errorAnimtion from "./assets/error_website.json";
import Button from "@/components/button";
import Link from "next/link";
export default function Page() {
  return (
    <div className="h-screen grid place-items-center">
      <Lottie animationData={errorAnimtion} className="md:mx-24" loop={false} />
      <div className="fixed bottom-0 left-0 w-screen border-t bg-black border-white/30 flex items-center px-10 py-5">
        <h2 className="text-4xl font-light max-sm:text-2xl">Page not found</h2>
        <Link href={"/"} className="ml-auto">
          <Button>Homepage</Button>
        </Link>
      </div>
    </div>
  );
}
