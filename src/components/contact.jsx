import React from "react";

const Contact = () => {
  return (
    <>
      <section id="Contact">
        <div
          className=" md:h-screen font-jah w-full bg-cover bg-center px-5 py-12 "
          style={{
            backgroundImage: 'url("IMAGES/contact-background.jpg")',
          }}
        >
          <h1 className="text-center uppercase font-semibold text-7xl mb-12 ">
            Contact
          </h1>

          <div className=" flex flex-col-reverse md:flex-row gap-5">
            <div className=" w-full md:w-[60%] pt-4">
              <form className="grid gap-11" action="">
                <div>
                  <label htmlFor=""></label>
                  <input
                    className=" w-full  h-16 border-[3px] p-3 text-gray-300 text-4xl uppercase border-[#FFB500] rounded-lg "
                    type="text"
                    placeholder="name"
                  />
                </div>
                <div>
                  <label htmlFor=""></label>
                  <input
                    className="w-full h-16 border-[3px] p-3 text-gray-300 text-4xl uppercase border-[#FFB500] rounded-lg"
                    type="text"
                    placeholder="email"
                  />
                </div>
                <div>
                  <label htmlFor=""></label>
                  <input
                    className="w-full h-16 border-[3px] p-3 text-gray-300 text-4xl uppercase border-[#FFB500] rounded-lg "
                    type="text"
                    placeholder="Password"
                  />
                </div>
                <div className="flex justify-center">
                  <button className=" text-5xl pt-2  font-medium  bg-[#FFB500] w-[90%] md:w-[70%] h-14 rounded-lg  text-center">
                    Send
                  </button>
                </div>
              </form>
            </div>
            <div className="bg-[#FFB500]  pt-4 pr-4 relative m-auto w-[80%] md:w-[40%] rounded-r-3xl rounded-xl   ">
              <img
                className="w-[100%] rounded-xl  h-72   md:h-96"
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
