import React from 'react';
import { overview } from '../data';

const Overview = () => {
  const { productImg } = overview
  return <section className='bg-overview bg-cover bg-left-top pt-[30px] lg:pt-[87px]' >
    <div className="container mx-auto flex justify-end items-end">
      <img src={productImg} alt="" data-aos='fade-up' data-aos-offset='300' />
    </div>
  </section>;
};

export default Overview;
