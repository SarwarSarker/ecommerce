import Link from "next/link";
import React from "react";

const SliderCard = () => {
  return (
    <>
      <div className="relative w-full">
        <div
          className="relative flex items-center bg-center bg-no-repeat bg-cover h-56 w-full overflow-hidden md:h-96"
          style={{ backgroundImage: `url('/images/banner.png')` }}
        >
          <div className="w-full flex justify-between px-10 lg:px-14">
            <div className="pl-3 pr-12 w-2/5">
              <h2 className="text-gray-900 text-[57px] leading-[53px] font-normal mb-2">
                Shop
                <span className="text-lightBlue">Computer & experience</span>
              </h2>
              <div className="w-5/6">
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
            <div className="mr-10">
              <p className="h-28 w-28 flex justify-center items-center p-6 text-[47px] font-normal text-white rounded-full bg-gradient-to-r from-[#FDC830] to-[#F37335]">40%</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SliderCard;
