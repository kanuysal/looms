'use client';
import React from 'react';
import DepartmentDetailsArea from './department-details-area';

// images
import full_img from '../../assets/img/department/yarns/yarns_1.jpg';
import full_img_2 from '../../assets/img/department/yarns/yarns_14.jpg';
import port_1 from '../../assets/img/department/yarns/yarns_3.jpg';
import port_2 from '../../assets/img/department/yarns/yarns_4.jpg';
import port_3 from '../../assets/img/department/yarns/yarns_5.jpg';
import port_4 from '../../assets/img/department/yarns/yarns_6.jpg';
import port_5 from '../../assets/img/department/yarns/yarns_8.jpg';
import port_6 from '../../assets/img/department/yarns/yarns_9.jpg';

export default function YarnsArea() {
  return (
    <DepartmentDetailsArea 
      title="Yarns"
      subtitle="02"
      desc="High-performance yarns for a sustainable future. We provide a wide range of GRS certified counts (Ne 3 to Ne 30) using recycled cotton and sustainable blends, meticulously engineered to meet technical standards and visual expectations."
      client="Global Manufacturers & Fashion Houses"
      date="2014 - Present"
      services="Yarn development, Recycled content optimization, GRS implementation"
      overview_title="Technical Engineering"
      overview_desc="Our yarns are optimized for both durability and softness. From coarse counts for heavy fabrics to fine counts for everyday apparel, we bridge high-end engineering with environmental responsibility."
      solution_title="Sustainable Performance"
      solution_desc="We specialize in recycled blends that achieve superior tensile strength and color consistency. Every batch is tracked to ensure full documentation of GRS-certified content and eco-friendly manufacturing processes."
      full_img={full_img}
      full_img_2={full_img_2}
      slider_images={[port_1, port_2, port_3, port_4, port_5, port_6]}
      prev_link="/fibers"
      next_link="/fabrics"
    />
  );
}
