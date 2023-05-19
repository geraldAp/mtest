import React, {useState, useEffect} from "react";
import { NavBarLinks } from "./componentChildren/navBarlinks";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  const [changeNav, setChangeNav] = useState(false);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setChangeNav(true);
      } else {
        setChangeNav(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);



  return (
    <>
      <nav className={` fixed z-50 bg-transparent top-0  w-full
      ${
        changeNav
          ? "shadow-md ease-in duration-300 text-[#444]"
          : "text-[#FFFFFF]"
      }
      
      `}>
        <div className=" ml-5 md:ml-32  flex items-center gap-5 md:gap-36  ">
          <img className=" w-14 md:w-24 ml- " src="IMAGES/logo.png" alt="logo" />

          <ul className="flex items-center gap-3">
            {NavBarLinks.map((link) => (
              <li className=" hover:text-[#FFB500] uppercase tracking-wide md:tracking-widest text-base md:text-xl font-semibold " key={link.id}>
                <Link to={link.hash}>{link.link}</Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
