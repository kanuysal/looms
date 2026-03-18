import React from "react";
import { Metadata } from "next";
import YarnsMain from "@/app-pages/department-pages/yarns";

export const metadata: Metadata = {
  title: "INTERLOOMS - Yarns Department",
};

const YarnsPage = () => {
  return (
    <YarnsMain/>
  );
};

export default YarnsPage;
