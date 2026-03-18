import React from "react";
import { Metadata } from "next";
import SanitaryMain from "@/app-pages/department-pages/sanitary";

export const metadata: Metadata = {
  title: "INTERLOOMS - Sanitary Department",
};

const SanitaryPage = () => {
  return (
    <SanitaryMain/>
  );
};

export default SanitaryPage;
