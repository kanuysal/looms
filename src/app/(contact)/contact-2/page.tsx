import React from "react";
import { Metadata } from "next";
import ContactTwoMain from "@/app-pages/department-pages/contact/contact-2";

export const metadata: Metadata = {
  title: "INTERLOOMS - Contact 2 Page",
};

const ContactTwoPage = () => {
  return (
    <ContactTwoMain/>
  );
};

export default ContactTwoPage;
