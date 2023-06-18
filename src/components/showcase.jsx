import React from "react";

const Showcase = () => {
  return (
    <>
      <section id="Showcase">
        <div
          className="w-full md:relative h-[60vh] md:h-screen bg-no-repeat bg-cover bg-left-top flex justify-center items-center md:block md:bg-center  "
          style={{
            backgroundImage: 'url("/IMAGES/showcase-background.jpg")',
          }}
        >
          <div className="md:absolute font-jah text-center lg:text-left text-[#FFFFFF] lg:left-[90px] 2xl:left-[147px]  md:top-[18%] lg:top-[21%]">
            <p className=" uppercase tracking-wider text-[6rem] lg:text-[8rem] lg:font-medium 2xl:text-[12rem]  ">
             <span className="block  h-28  2xl:h-40 ">  The best</span>
             <span className="block h-28 2xl:h-40">  Delicious</span>
             <span className="block h-28 text-[#FFB500]  2xl:h-36 ">  food</span>
            </p>
           
          </div>
        </div>
      </section>
    </>
  );
};

export default Showcase;
