import React from "react";
import { Inputs } from "./componentChildren/contactInput";
const Contact = () => {
  return (
    <>
      <section id="Contact">
        <div
          className=" md:h-screen 2xl:h-[95vh] font-jah w-full bg-cover bg-center px-5 py-12 lg:py-10 2xl:px-32 "
          style={{
            backgroundImage: 'url("IMAGES/contact-background.jpg")',
          }}
        >
          <h1 className="text-center uppercase font-semibold lg:text-6xl 2xl:text-8xl mb-10 ">
            Contact
          </h1>

          <div className=" flex flex-col-reverse md:flex-row gap-5">
            <div className=" w-full md:w-[60%] 2xl:w-[58%] pt-4">
              <form className="grid gap-8 2xl:gap-16" action="">

                {
                  Inputs.map(input =>(
                    <div key={input.id}>
                    <label htmlFor={input.holder}></label>
                    <input
                      className=" w-full  h-14 2xl:h-24 border-[3px] p-3 text-gray-300 text-4xl 2xl:text-6xl uppercase border-[#FFB500] rounded-2xl  "
                      type={input.type}
                      placeholder={input.holder}
                    />
                  </div>
                  ))
                }
                <div className="flex justify-center">
                  <button className=" text-5xl pt-2  font-medium  bg-[#FFB500] w-[90%] md:w-[70%] 2xl:w-[80%] h-14 2xl:h-20 rounded-2xl   text-center">
                    Send
                  </button>
                </div>
              </form>
            </div>
            <div className="bg-[#FFB500]  pt-4  2xl:pt-6 pr-4  2xl:pr-6 relative m-auto w-[80%] md:w-[40%] 2xl:w-[42%] rounded-r-3xl rounded-3xl   ">
              <img
                className="w-[100%] rounded-xl  h-72   md:h-80  2xl:h-[35rem]"
                src="/IMAGES/salad.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
