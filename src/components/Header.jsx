import React from "react";

import { useState, useEffect } from "react";
import { header } from "../data";
import { HiMenuAlt4, HiOutlineX } from "react-icons/hi";
import MobileNav from "../components/MobileNav";
import Nav from "../components/Nav";

const Header = () => {
  // mobile nav state
  const [mobileNav, setMobileNav] = useState(false);
  //header state
  const [isActive, setIsActive] = useState(false);
  const { logo, btnText } = header;

  //scroll event
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });
  return (
    <header
      className={`${
        isActive ? "lg:top-0 bg-white shadow-2xl" : "lg:top-0"
      } py-6 lg:py-4 transition-all fixed w-full z-10`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <a href="#">
          <img
            width={110}
            src={logo}
            alt=""
            data-aos="fade-down"
            data-aos-delay="1000"
          />
        </a>
        <div
          className="hidden lg:flex"
          data-aos="fade-down"
          data-aos-delay="1200"
        >
          <Nav />
        </div>
        <button
          className="btn btn-sm btn-outline hidden lg:flex hover:bg-secondary"
          data-aos="fade-down"
          data-aos-delay="1400"
        >
          {btnText}
        </button>
        <button className="lg:hidden" onClick={() => setMobileNav(!mobileNav)}>
          {mobileNav ? (
            <HiOutlineX className="text-3xl text-accent" />
          ) : (
            <HiMenuAlt4 className="text-3xl text-accent" />
          )}
        </button>
        {/* mobile nav */}
        <div
          className={`${
            mobileNav ? "left-0" : "-left-full"
          } fixed top-0 bottom-0 w-[60vh] lg:hidden transition-all]`}
        >
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
