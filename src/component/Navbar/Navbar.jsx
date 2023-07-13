import React, { useState } from "react";

const Navbar = () => {
    
    const [show, setshow_modal_X] = useState(true);

    return (
      <>
        <div className="bg-gray-800/50">
          <div className="px-4 py-14">
            <div
              className={`${
                show ? "hidden" : "flex"
              } container mx-auto  items-center px-4 justify-center md:px-10 py-20`}
            >
              <div className="container mx-auto flex justify-center items-center px-4 md:px-10 py-20 relative">
                <button
                  onClick={() => setshow_modal_X(true)}
                  className="bg-white text-gray-800 py-5 px-10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white rounded"
                >
                  Open Modal
                </button>
              </div>
            </div>
            <div
              className={`${
                show ? "flex" : "hidden"
              } lg:max-w-[642px] md:max-w-[744px] max-w-[375px] mx-auto bg-white  md:px-6 px-4  lg:py-24 md:py-12 py-9`}
            >
              <div className="mx-auto relative">
                <svg
                  onClick={() => setshow_modal_X(false)}
                  className="cursor-pointer absolute right-4 -top-10 z-10"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.28033 6.21967C6.98744 5.92678 6.51256 5.92678 6.21967 6.21967C5.92678 6.51256 5.92678 6.98744 6.21967 7.28033L10.9393 12L6.21967 16.7197C5.92678 17.0126 5.92678 17.4874 6.21967 17.7803C6.51256 18.0732 6.98744 18.0732 7.28033 17.7803L12 13.0607L16.7197 17.7803C17.0126 18.0732 17.4874 18.0732 17.7803 17.7803C18.0732 17.4874 18.0732 17.0126 17.7803 16.7197L13.0607 12L17.7803 7.28033C18.0732 6.98744 18.0732 6.51256 17.7803 6.21967C17.4874 5.92678 17.0126 5.92678 16.7197 6.21967L12 10.9393L7.28033 6.21967Z"
                    fill="#373737"
                  />
                </svg>
                <p className=" lg:text-4xl md:text-3xl text-3xl font-semibold leading-9 text-gray-800">
                  Get 20% Discount
                </p>
                <p className="text-base leading-normal text-gray-600 lg:max-w-[512px] w-full mt-4">
                  Be first to hear about our special offers, new arrivals and much
                  more. Subscribe to our newsletter
                </p>
                <input
                  type="Email"
                  placeholder="Email Address"
                  className="w-full focus:outline-none border border-gray-300 py-2 mt-6 px-3 placeholder:text-gray-600"
                />
                <div>
                  <img
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/channnel.png"
                    alt="perfume"
                    className="mt-6 w-full lg:block md:hidden hidden"
                  />
                  <img
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/ch_md.png"
                    alt
                    className="lg:hidden md:block block mt-6 w-full"
                  />
                </div>
                <button className="bg-gray-800 text-white w-full py-3 mt-6 hover:bg-gray-700 duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
export default Navbar