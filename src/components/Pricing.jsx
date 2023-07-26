import React, { useState } from "react";
import { pricing } from "../data";
import { HiCheck, HiOutlineArrowNarrowRight } from "react-icons/hi";

const Pricing = () => {
  const [index, setIndex] = useState(1);
  const { title, cards } = pricing;
  return (
    <section className=" section">
      <div className="container mx-auto">
        <h2  className="h2 mb-10 lg:mb-20 text-center" >{title}</h2>
        {/* cards */}
        <div className="flex flex-col justify-center items-center lg:flex-row lg:gap-x-[30px] gap-y-[30px] lg:gap-y-0 ">
          {cards.map((cardItem, cardIndex) => {
            const { icon, title, price, services, userAmount, btnText, delay } =
              cardItem;
            return (
              <div key={cardIndex} data-aos='fade-up' data-aos-delay={delay} data-aos-offset='300'>
                <div
                  onClick={() => setIndex(cardIndex)}
                  className={`${
                    cardIndex === index
                      ? "bg-white shadow-2xl"
                      : "border border-grey"
                  } w-[350px] h-[450px] rounded-[12px] p-[40px] cursor-pointer transition-all`}
                >
                  {/* card icon */}
                  <div className="mb-8">
                    <img src={icon} alt="" />
                  </div>
                  <div className=" text-[32px] font-semibold mb-8">{title}</div>
                  <div className="flex flex-col gap-y-2 mb-6">
                    {services.map((service, index) => {
                      const { name } = service;
                      return (
                        <div
                          className="flex items-center gap-x-[10px]"
                          key={index}
                        >
                          <HiCheck className="text-light" />
                          <div>{name}</div>
                        </div>
                      );
                    })}
                  </div>
                  <div className="mb-10">
                    <div >
                      <span className="text-2xl font-semibold">{price}</span>
                      <span className="text-xl text-light font-light">/year</span>
                    </div>
                    <div className="text-base text-light">{userAmount}</div>
                    {/* btn */}
                    <button className={`${cardIndex===index ?'bg-accent hover:bg-accentHover text-white':' border border-accent text-accent'} btn btn-sm space-x-[14px] mt-5`}>
                      <span>{btnText}</span>
                      <HiOutlineArrowNarrowRight />
                    </button>
                  </div>
                </div>
                {/* card title */}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
