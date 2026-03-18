import React from 'react';
import { Metadata } from 'next';
import HomeFourMain from '@/app-pages/department-pages/main-index';

export const metadata: Metadata = {
  title: "INTERLOOMS - Home Four Page",
};

const HomePageFour = () => {
  return (
    <HomeFourMain/>
  );
};

export default HomePageFour;
