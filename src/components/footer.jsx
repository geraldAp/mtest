import React from "react";

const Footer = () => {
  return (
    <>
      <footer className=" w-full bg-black">
        <div className=" ml-5 md:ml-32  flex items-center gap-3  ">
          <img className=" w-14 md:w-24  " src="IMAGES/logo.png" alt="logo" />

          <div className="text-white ">
            <p className="text-lg  tracking-wide md:tracking-wider capitalize">  <em>  <span className="uppercase">Webina </span>  &copy; 2023 all rights reserved</em>  </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
