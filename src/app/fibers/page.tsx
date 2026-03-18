import React from "react";
import { Metadata } from "next";
import FibersMain from "@/app-pages/department-pages/fibers";

export const metadata: Metadata = {
  title: "INTERLOOMS - Fibers Department",
};

const FibersPage = () => {
  return (
    <FibersMain/>
  );
};

export default FibersPage;
