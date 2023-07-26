import React from "react";
import { copyright } from "../data";

const Copyright = () => {
  const { link1, link2, copyText, social } = copyright;
  return (
    <div
      data-aos-offset="0"
      data-aos-delay="200"
      className="flex flex-col items-center  lg:flex-row lg:justify-between gap-y-3 lg:gap-x-5"
    >
      {/* links */}
      <div className="flex gap-x-6">
        <a className="hover:text-accent trasition" href={link1.href}>
          {link1.name}
        </a>
        <a className="hover:text-accent trasition" href={link2.href}>
          {link2.name}
        </a>
      </div>
      {/* copy text */}
      <div>{copyText}</div>
      {/* socials */}
      <ul className="flex gap-x-[12px]">
        {social.map((item, index) => {
          const { icon, href } = item;
          return (
            <li key={index}>
              {" "}
              <a href={href}>
                <img src={icon} alt="" />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Copyright;
