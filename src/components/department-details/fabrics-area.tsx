'use client';
import React from 'react';
import DepartmentDetailsArea from './department-details-area';

// images
import full_img from '../../assets/img/department/fabrics/fabrics_1.jpg';
import full_img_2 from '../../assets/img/department/fabrics/fabrics_2.jpg';
import port_1 from '../../assets/img/department/fabrics/fabrics_3.jpg';
import port_2 from '../../assets/img/department/fabrics/fabrics_4.jpg';
import port_3 from '../../assets/img/department/fabrics/fabrics_5.jpg';
import port_4 from '../../assets/img/department/fabrics/fabrics_6.jpg';
import port_5 from '../../assets/img/department/fabrics/fabrics_7.jpg';
import port_6 from '../../assets/img/department/fabrics/fabrics_8.jpg';

export default function FabricsArea() {
  return (
    <DepartmentDetailsArea 
      title="Fabrics"
      subtitle="03"
      desc="Custom fabric design and prototyping. From small-batch to large-scale production, we manage quality assurance and technical control for every weave."
      client="Luxury Fashion & Home Decor Brands"
      date="2014 - Present"
      services="Custom design, Prototyping, Production management, Quality assurance"
      overview_title="Custom Development"
      overview_desc="We turn your vision into reality with bespoke fabric design. Our process includes meticulous selection of yarns, finishes, and weaves, ensuring that every yard meets your specific durability and aesthetic standards."
      solution_title="Production Management"
      solution_desc="Interlooms provides end-to-end management for both startup collections and global productions. We maintain rigorous technical control to ensure color consistency and structural integrity across every batch."
      full_img={full_img}
      full_img_2={full_img_2}
      slider_images={[port_1, port_2, port_3, port_4, port_5, port_6]}
      prev_link="/yarns"
      next_link="/nonwoven"
    />
  );
}
