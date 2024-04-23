import Link from "next/link";
import React from "react";

const SliderCard = () => {
  return (
    <>
      <div className="relative w-full">
        <div
          className="relative flex items-center bg-center bg-no-repeat bg-cover md:bg- min-h-[300px] md:h-56 w-full overflow-hidden lg:h-96"
          style={{ backgroundImage: `url('/images/banner.png')` }}
        >
          <div className="w-full flex justify-between items-center px-5 lg:px-14">
            <div className="pl-5 pr-5 lg:pr-12 w-full lg:w-2/5">
              <h2 className="text-gray-900 text-3xl leading-9 lg:text-[57px] lg:leading-[53px] font-normal mb-2">
                Shop
                <span className="text-lightBlue">Computer & experience</span>
              </h2>
              <div className="w-full lg:w-5/6">
                <p className="text-gray-900 text-[13px]">
                  You cannot inspect quality into the product; it is already
                  there.
                </p>
                <p className="text-gray-900 text-[13px]">
                  I am not a product of my circumstances. I am a product of my
                  decisions.
                </p>
              </div>

              <div className="pt-7">
                <Link
                  href="/"
                  className="px-7 py-2 rounded text-white bg-lightBlue"
                >
                  View More
                </Link>
              </div>
            </div>
            <div className="mr-3 lg:mr-10">
              <p className="h-14 w-14 md:h-20 md:w-20 lg:h-28 lg:w-28 flex justify-center items-center p-6 text-xl leading-7 lg:text-[47px] lg:leading-[50px] font-normal text-white rounded-full bg-gradient-to-r from-[#FDC830] to-[#F37335]">40%</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SliderCard;
