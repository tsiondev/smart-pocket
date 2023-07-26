import React from "react";
import { features } from "../data";

const Feature1 = () => {
  const { feature1 } = features;
  const { pretitle, title, subtitle, btnLink, btnIcon, image } = feature1;
  return (
    <section className="section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gapx-x-[30px] space-y-8">
          {/* text */}
          <div className="flex-1" data-aos="fade-right" data-aos-offset="400">
            <div className="pretitle text-secondary">{pretitle}</div>
            <div className="title text-7xl">{title}</div>
            <div className="lead">{subtitle}</div>
            <button className="btn-link flex items-center gap-x-3 hover:gap-x-5 transition-all">
              {btnLink} <img src={btnIcon} alt="" />
            </button>
          </div>
          {/* image */}
          <div className="flex-1" data-aos="fade-left" data-aos-offset="300">
            <img src={image} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature1;
