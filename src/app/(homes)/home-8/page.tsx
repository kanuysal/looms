import React from 'react';
import { Metadata } from 'next';
import HomeEightMain from '@/app-pages/department-pages/homes/home-8';

export const metadata: Metadata = {
  title: "INTERLOOMS - Home Eight Page",
};

const HomePageEight = () => {
  return (
    <HomeEightMain/>
  );
};

export default HomePageEight;
