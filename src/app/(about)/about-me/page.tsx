import React from "react";
import { Metadata } from "next";
import AboutMeMain from "@/app-pages/department-pages/about/about-me";

export const metadata: Metadata = {
  title: "INTERLOOMS - About us page",
};

const AboutMePage = () => {
  return (
    <AboutMeMain/>
  );
};

export default AboutMePage;
