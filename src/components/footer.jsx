import React from "react";

const Footer = () => {
  return (
    <>
      <footer className=" w-full bg-black">
        <div className=" ml-5 md:ml-32  flex items-center gap-3  md:gap-14 ">
          <img className=" w-14 md:w-24 lg:w-28  " src="IMAGES/logo.png" alt="logo" />

          <div className="text-white ">
            <p className="text-sm md:text-2xl lg:text-3xl  tracking-wide md:tracking-wider capitalize">  <em>  <span className="uppercase">Webina </span>  &copy; 2023 all rights reserved</em>  </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
