import Link from "next/link";
import React from "react";

const SliderCard = () => {
  return (
    <>
      <div className="relative w-full">
        <div
          className="relative flex items-center bg-center md:bg-right bg-no-repeat bg-cover md:bg- min-h-[300px] md:h-56 w-full overflow-hidden lg:h-96"
          style={{ backgroundImage: `url('/images/banner.png')` }}
        >
          <div className="container mx-auto">
            <div className="w-full flex justify-between items-center px-5 lg:px-14">
              <div className=" w-full lg:w-2/5">
                <h2 className="text-gray-900 text-3xl leading-9 lg:text-[57px] lg:leading-[53px] font-normal mb-2">
                  Shop
                  <span className="text-lightBlue ml-1 md:ml-2">Computer & experience</span>
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
              <div className="mr-3 lg:mr-10 -mt-12 lg:-mt-40">
                <p className="h-24 w-24 md:h-28 md:w-28 lg:h-28 lg:w-28 flex justify-center items-center p-6 text-3xl leading-7 lg:text-[47px] lg:leading-[50px] font-normal text-white rounded-full bg-gradient-to-r from-[#FDC830] to-[#F37335]">
                  40%
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SliderCard;
