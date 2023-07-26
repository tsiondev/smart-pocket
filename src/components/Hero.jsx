import React from 'react';

import { hero } from '../data'
import { HiOutlineChevronDown } from 'react-icons/hi'
const Hero = () => {
  //destructuring data
  const { title, subtitle, btnText, compText, image } = hero
  return (
    <section className=" min-h-[500px] py-12 my-10" >
      <div className="container mx-auto min-h-[500px] flex justify-center items-center">
        <div className="flex flex-col lg:gap-x-[30px] gap-y-8 lg:gap-y-0 lg:flex-row items-center justify-center text-center lg:text-left">
          {/* text */}
          <div className="flex-1 mt-9 sm:mt-6">
            <h1 className="text-5xl  mx-auto  lg:text-7xl font-bold mb-2 lg:mb-5" data-aos='fade-down' data-aos-delay="500">{title}</h1>
            <p className="lead mb-5 lg:mb-10" data-aos='fade-down' data-aos-delay="600">{subtitle}</p>
            {/* btn and comp text */}
            <div className="flex items-center max-w-sm lg:max-w-full mx-auto lg:mx-0 gap-x-2 lg:gap-x-6" data-aos='fade-down' data-aos-delay="700">
              <button type="button" className="btn btn-md lg:btn-lg btn-accent  lg:gap-x-4">{btnText} <HiOutlineChevronDown /></button>
              <span className="text-light lg:lead lg:mb-0">{compText}</span>

            </div>
          </div>
          {/* image */}
          <div className="flex-1" data-aos='fade-up' data-aos-delay="800">
            <img src={image} width={500} alt="" srcset="" />
          </div>
        </div>
      </div>

    </section>)
};

export default Hero;
