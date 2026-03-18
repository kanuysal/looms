import React from 'react';
import { Metadata } from 'next';
import DepartmentMain from '@/app-pages/department-pages/department';

export const metadata: Metadata = {
  title: "INTERLOOMS - Department Page",
};

const DepartmentPage = () => {
  return (
    <DepartmentMain/>
  );
};

export default DepartmentPage;
