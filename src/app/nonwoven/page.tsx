import React from "react";
import { Metadata } from "next";
import NonwovenMain from "@/app-pages/department-pages/nonwoven";

export const metadata: Metadata = {
  title: "INTERLOOMS - Nonwoven Department",
};

const NonwovenPage = () => {
  return (
    <NonwovenMain/>
  );
};

export default NonwovenPage;
