import React from "react";
import { Products } from "./componentChildren/servProducts";

const Services = () => {
  return (
    <>
      <section id="Service">
        <div
          className=" md:h-screen lg:h-[100vh]  font-jah w-full bg-cover bg-center px-16 md:px-36 pt-12 pb-24 md:py-7 "
          style={{
            backgroundImage: 'url("IMAGES/service-background.jpg")',
          }}
        >
          <h1 className="text-center uppercase text-7xl md:text-9xl lg:text-[11rem] mb-9 text-[#FFB500]">
            Service
          </h1>

          <div className=" w-full grid grid-cols-1 md:grid-cols-3 gap-8">
            {Products.map((product) => (
              <div key={product.id}>
                <img
                  className="h-52 md:h-72 lg:h-96 border-[10px] border-[#FFB500]  rounded-[100%] mb-5  "
                  src={product.img}
                  alt=""
                />

                <div className="w-full ">
                  <p className="  bg-[#FFB500] rounded-full  text-center  py-3 lg:py-4 font-semibold tracking-wider text-4xl lg:text-[4rem] leading-none">
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
