import React from "react";
import { Metadata } from "next";
import AboutUsMain from "@/app-pages/department-pages/about/about-us";

export const metadata: Metadata = {
  title: "INTERLOOMS - About us page",
};

const AboutUsPage = () => {
  return (
    <AboutUsMain/>
  );
};

export default AboutUsPage;
