import "./globals.css";
import type { Metadata } from "next";
import ClientLayout from "@/components/lenislayout";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "Ioanna Karanassou | Graphic Design",
  metadataBase: new URL("https://karanassou.gr"),
  description:
    "Ioanna Karanassou is an EVGE-awarded graphic designer with over 25 years of experience, collaborating with prestigious clients such as ΙΑΝΟS Publications and the Kasandra Festival.",
  abstract:
    "Ioanna Karanassou is a renowned EVGE-awarded graphic designer specializing in branding, editorial design, and visual communication.",
  category: "Graphic Design, Visual Communication, Branding",
  authors: [{ name: "Ioanna Karanassou", url: "https://karanassou.gr" }],
  openGraph: {
    type: "website",
    url: "https://karanassou.gr",
    title: "Ioanna Karanassou - Award-Winning Graphic Designer",
    description:
      "Explore the portfolio of Ioanna Karanassou, an EVGE-awarded graphic designer with 25+ years of experience, known for her collaborations with ΙΑΝΟS Publications and the Kasandra Festival.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ioanna Karanassou | Graphic Design",
      },
    ],
  },
};

const helveticeNeue = localFont({
  src: [
    {
      path: "./fonts/HelveticaNeueLight.woff",
      style: "normal",
      weight: "300",
    },
    {
      path: "./fonts/HelveticaNeue.woff",
      style: "normal",
      weight: "400",
    },
    {
      path: "./fonts/HelveticaNeueItalic.woff",
      style: "italic",
      weight: "400",
    },
  ],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={helveticeNeue.className}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
