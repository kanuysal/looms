'use client';
import React from 'react';
import DepartmentDetailsArea from './department-details-area';

// images
import full_img from '../../assets/img/department/nonwoven/nonwoven_1.jpg';
import full_img_2 from '../../assets/img/department/nonwoven/nonwoven_2.jpg';
import port_1 from '../../assets/img/department/nonwoven/nonwoven_3.jpg';
import port_2 from '../../assets/img/department/nonwoven/nonwoven_4.jpg';
import port_3 from '../../assets/img/department/nonwoven/nonwoven_12.jpg';
import port_4 from '../../assets/img/department/nonwoven/nonwoven_6.jpg';
import port_5 from '../../assets/img/department/nonwoven/nonwoven_7.jpg';
import port_6 from '../../assets/img/department/nonwoven/nonwoven_9.jpg';

export default function NonwovenArea() {
  return (
    <DepartmentDetailsArea 
      title="Nonwoven (Spunlace)"
      subtitle="04"
      desc="High-quality nonwoven fabrics including specialized spunlaces for hostelry, industry, and sanitary usage. We provide PP spunlace solutions (50gr/m2 to 120gr/m2) for diverse industrial applications."
      client="Medical & Industrial Manufacturers"
      date="2014 - Present"
      services="Spunlace supply, PP nonwoven manufacturing, Industrial fabric sourcing"
      overview_title="Specialized Spunlace"
      overview_desc="Our nonwoven fabrics are engineered for specific performance metrics, including absorbency, strength, and GSM precision. We cater to the demanding standards of the medical and sanitary sectors, ensuring reliability and safety."
      solution_title="Industrial Applications"
      solution_desc="From eco-friendly bags to industrial filters, our PP spunlaces provide the versatility needed for modern manufacturing. We offer weights from 50 to 120gr/m2, customized to your technical requirements."
      full_img={full_img}
      full_img_2={full_img_2}
      slider_images={[port_1, port_2, port_3, port_4, port_5, port_6]}
      prev_link="/fabrics"
      next_link="/sanitary"
    />
  );
}
