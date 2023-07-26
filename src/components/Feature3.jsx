import React from "react";
import { features } from "../data";
const Feature2 = () => {
  const { feature3 } = features;
  const { title, subtitle, pretitle, btnIcon, btnLink, image } = feature3;
  return (
    <section className="section">
      <div className="container mx-auto">
        <div className="flex  flex-col lg:flex-row lg:item-center lg:gapx-x-[30px] space-y-8">
          {/* text */}
          <div
            className="flex-1 order-1 lg:order-2"
            data-aos="fade-left"
            data-aos-offset="400"
          >
            <div className="pretitle text-secondary">{pretitle}</div>
            <div className="title text-7xl">{title}</div>
            <div className="lead">{subtitle}</div>
            <button className="btn-link flex gap-x-3 hover:gap-x-5 items-center">
              {btnLink} <img src={btnIcon} alt="" srcset="" />{" "}
            </button>
          </div>
          {/* image */}
          <div
            className="flex-1 order-2 lg:order-1"
            data-aos="fade-right"
            data-aos-offset="300"
          >
            <img src={image} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature2;
