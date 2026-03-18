'use client';
import React from 'react';
import DepartmentDetailsArea from './department-details-area';

// images
import full_img from '../../assets/img/department/fibers/fibers_1.jpg';
import full_img_2 from '../../assets/img/department/fibers/fibers_2.jpg';
import port_1 from '../../assets/img/department/fibers/fibers_3.jpg';
import port_2 from '../../assets/img/department/fibers/fibers_4.jpg';
import port_3 from '../../assets/img/department/fibers/fibers_5.jpg';
import port_4 from '../../assets/img/department/fibers/fibers_6.jpg';
import port_5 from '../../assets/img/department/fibers/fibers_7.jpg';
import port_6 from '../../assets/img/department/fibers/fibers_8.jpg';

export default function FibersArea() {
  return (
    <DepartmentDetailsArea 
      title="Fibers"
      subtitle="01"
      desc="Recycled fiber sourcing and evaluation for a circular textile economy. We bridge the gap between waste and textile innovation, ensuring high-quality, sustainable production."
      client="Global Brands & Circular Producers"
      date="2014 - Present"
      services="Recycled fiber sourcing, evaluation, and sustainability documentation"
      overview_title="Fiber Evaluation"
      overview_desc="Our expertise goes beyond sourcing. We analyze fiber quality, recycled content percentage, and performance characteristics (length, strength, micronaire) to give you full control over your production results."
      solution_title="Sustainability Certified"
      solution_desc="We ensure your fibers meet global standards like GRS (Global Recycled Standard) and aid in optimizing production processes for eco-friendly, energy-efficient manufacturing."
      full_img={full_img}
      full_img_2={full_img_2}
      slider_images={[port_1, port_2, port_3, port_4, port_5, port_6]}
      prev_link="/department"
      next_link="/yarns"
    />
  );
}
