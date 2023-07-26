import React from "react";
import { cta } from "../data";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";
const Cta = () => {
  const { title, subtitle, btnText, img2, img1 } = cta;
  return (
    <section className="section bg-cta bg-cover bg-left-top">
      <div className="max-w-[1340px] mx-auto px-[25px]">
        {/* text
         */}
        <div className="max-w-[920px] mx-auto text-center">
          <h2
            className="h2 text-white mb-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {title}
          </h2>
          <p className="text-2xl lg:text-4xl text-white">{subtitle}</p>
        </div>
        <div className="flex justify-between">
          <img
            className="hidden xl:flex"
            data-aos="zoom-out-right"
            data-aos-delay="700"
            src={img1}
            width={400}
            alt=""
          />
          <button
            className="btn btn-md btn-white mt-[40px] lg:text=[22px] gap-x-[10px] mx-auto"
            data-aos="zoom-up"
            data-aos-delay="400"
          >
            {btnText}
            <HiOutlineChevronDoubleDown />
          </button>
          <img
            className="hidden xl:flex"
            data-aos="zoom-out-left"
            data-aos-delay="700"
            src={img2}
            width={600}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Cta;
