import type { Metadata } from "next";
import {
  Syne,
  Aladin,
  Marcellus,
} from "next/font/google";
import { VideoProvider } from "@/provider/VideoProvider";
import localFont from "next/font/local";
import { ThemeProvider } from "next-themes";
import "swiper/css/bundle";
import "./globals.scss";

const prisma = localFont({
  src: [
    {
      path: "../../public/assets/fonts/Prisma.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/Prisma.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--tp-ff-prisma",
});

const gellery = localFont({
  src: [
    {
      path: "../../public/assets/fonts/gallerymodern-webfont.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/gallerymodern-webfont.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/gallerymodern-webfont.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--tp-ff-gallery",
});

const aladin = Aladin({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--tp-ff-aladin",
});
const syne_body = Syne({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--tp-ff-body",
});
const syne_heading = Syne({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--tp-ff-heading",
});
const syne_p = Syne({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--tp-ff-p",
});
const syne = Syne({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--tp-ff-syne",
});
// const big_shoulders = Big_Shoulders_Display({
//   weight: ["400", "500", "600", "700", "800"],
//   subsets: ["latin"],
//   variable: "--tp-ff-shoulders",
// });
const marcellus = Marcellus({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--tp-ff-marcellus",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://interlooms.com"),
  title: "INTERLOOMS - Sustainable Textile Solutions",
  description: "Interlooms develops, designs & delivers sustainable textile solutions that drive progress in the textile industry.",
  openGraph: {
    title: "INTERLOOMS - Sustainable Textile Solutions",
    description: "Interlooms develops, designs & delivers sustainable textile solutions that drive progress in the textile industry.",
    url: "https://interlooms.com",
    siteName: "INTERLOOMS",
    images: [
      {
        url: "/assets/img/main/main_2.jpg",
        width: 1200,
        height: 630,
        alt: "INTERLOOMS Textile Innovation",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

import { LanguageProvider } from "@/provider/LanguageProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        id="body"
        suppressHydrationWarning={true}
        className={`${gellery.variable} ${aladin.variable}
         ${syne_body.variable} ${syne_heading.variable} ${syne_p.variable}
          ${syne.variable} ${marcellus.variable} ${prisma.variable}`}
      >
        <ThemeProvider defaultTheme="light">
          <LanguageProvider>
            <VideoProvider>
              {children}
            </VideoProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

