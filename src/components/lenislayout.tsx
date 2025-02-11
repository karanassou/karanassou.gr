"use client";
import { ReactLenis } from "lenis/react";
import Header from "./header";
import Footer from "./footer";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactLenis
      options={{
        lerp: 0.3,
        wheelMultiplier: 0.8,
        smoothWheel: true,
      }}
      root
    >
      <Header />
      <div className="mt-16 min-h-screen mb-48 bg-black pb-10">{children}</div>
      <Footer />
    </ReactLenis>
  );
}
