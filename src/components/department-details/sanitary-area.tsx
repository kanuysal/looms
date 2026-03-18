'use client';
import React from 'react';
import DepartmentDetailsArea from './department-details-area';

// images
import full_img from '../../assets/img/department/sanitary/sanitary_1.jpg';
import full_img_2 from '../../assets/img/department/sanitary/sanitary_2.jpg';
import port_1 from '../../assets/img/department/sanitary/sanitary_3.jpg';
import port_2 from '../../assets/img/department/sanitary/sanitary_4.jpg';
import port_3 from '../../assets/img/department/sanitary/sanitary_5.jpg';
import port_4 from '../../assets/img/department/sanitary/sanitary_6.jpg';
import port_5 from '../../assets/img/department/sanitary/sanitary_7.jpg';
import port_6 from '../../assets/img/department/sanitary/sanitary_3.jpg';

export default function SanitaryArea() {
  return (
    <DepartmentDetailsArea 
      title="Sanitary (Diapers)"
      subtitle="05"
      desc="Comprehensive solutions for hygiene products including diapers for babies, adults, and pets. Our sanitary department ensures the highest standards of safety, comfort, and absorbency for diverse consumer needs."
      client="Health Care Retailers & Global Distributors"
      date="2014 - Present"
      services="Sanitary product supply, Hygiene material sourcing, Custom diaper production"
      overview_title="Hygiene Innovation"
      overview_desc="We provide materials and finished products that prioritize skin health and moisture management. Our supply chain includes everything from soft top-sheets to super-absorbent cores, tailored for baby-care and adult-care sectors."
      solution_title="Full Care Solutions"
      solution_desc="Interlooms ensures that every sanitary product meets strict international health and safety certifications. We offer scalable production for private labels and global brands, focusing on pet care and medical-grade hygiene."
      full_img={full_img}
      full_img_2={full_img_2}
      slider_images={[port_1, port_2, port_3, port_4, port_5, port_6]}
      prev_link="/nonwoven"
      next_link="/contact"
    />
  );
}
