import React from "react";
import { Products } from "./componentChildren/servProducts";

const Services = () => {
  return (
    <>
      <section id="Service">
        <div
          className=" md:h-screen  font-jah w-full bg-cover bg-center px-24 md:px-36 py-12 md:py-7 "
          style={{
            backgroundImage: 'url("IMAGES/service-background.jpg")',
          }}
        >
          <h1 className="text-center uppercase text-7xl md:text-9xl mb-9 text-[#FFB500]">
            Service
          </h1>

          <div className=" w-full grid grid-cols-1 md:grid-cols-3 gap-8">
            {Products.map((product) => (
              <div key={product.id}>
                <img
                  className="hidden md:block h-72 border-[10px] border-[#FFB500]  rounded-[100%] mb-5  "
                  src={product.img}
                  alt=""
                />
                <img
                  className=" md:hidden h-48   md:h-72 border-[10px] border-[#FFB500]  rounded-[100%] mb-5  "
                  src={product.img}
                  alt=""
                />
                <div className="w-full ">
                  <p className="  bg-[#FFB500] rounded-full  text-center py-2 font-semibold tracking-wider text-4xl">
                    {product.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
