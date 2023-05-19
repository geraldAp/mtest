import React from "react";

const Showcase = () => {
  return (
    <>
      <section id="Showcase">
        <div
          className="w-full md:relative h-screen bg-no-repeat bg-cover bg-left-top flex justify-center items-center md:block md:bg-center "
          style={{
            backgroundImage: 'url("/IMAGES/showcase-background.jpg")',
          }}
        >
          <div className="md:absolute font-jah text-center text-[#FFFFFF] md:left-[147px]  md:top-[18%] ">
            <p className=" uppercase text-[7rem] md:text-[10rem]  ">
             <span className="block  h-32  md:h-40 ">  The best</span>
             <span className="block h-32 md:h-40">  Delicious</span>
             <span className="block h-32 text-[#FFB500]  md:h-36 ">  food</span>
            </p>
           
          </div>
        </div>
      </section>
    </>
  );
};

export default Showcase;
