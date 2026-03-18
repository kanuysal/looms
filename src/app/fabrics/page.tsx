import React from "react";
import { Metadata } from "next";
import FabricsMain from "@/app-pages/department-pages/fabrics";

export const metadata: Metadata = {
  title: "INTERLOOMS - Fabrics Department",
};

const FabricsPage = () => {
  return (
    <FabricsMain/>
  );
};

export default FabricsPage;
