import React from "react";
import { Metadata } from "next";
import ContactMain from "@/app-pages/department-pages/contact/contact";

export const metadata: Metadata = {
  title: "INTERLOOMS - Contact page",
};

const ContactPage = () => {
  return (
    <ContactMain/>
  );
};

export default ContactPage;
