import React from "react";
import Image from "next/image";

const FeatureProductCard = ({ item, index }) => {
  const reducedPrice = item?.price * 0.9;

  return (
    <>
      <div
        className={`p-6 border border-gray-300 ${
          index === 1 ? "row-span-2 " : ""
        }`}
      >
        {index === 1 ? (
          <>
            <div className="flex gap-5 justify-between">
              <div className="relative">
                <div>
                  <Image
                    className=""
                    src={item?.image}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "370px", height: "460px" }}
                    alt=""
                  />
                </div>
                <div className="absolute top-0 right-0 flex flex-col justify-center items-center  rounded-full text-md md:text-xl px-3 lg:px-7 py-3 h-20 lg:h-30 w-20 lg:w-30 bg-gradient-to-r from-[#FF512F] to-[#DD2476] text-black">
                  <p className="">Save</p>
                  <p className="">10%</p>
                </div>
                <div className="absolute top-0 left-0 text-xl lg:text-2xl">
                  <p className="text-red-400">Special</p>
                  <p className="">Offer</p>
                </div>
              </div>
            </div>
            <div className="flex gap-5 justify-between">
              <div className="">
                <h2 className="text-md lg:text-xl mb-2">
                  {item?.title.slice(0, 15)}...
                </h2>
                <div className="flex gap-3 items-center">
                  <p className="text-md lg:text-xl mb-2 text-lightBlue">
                    RS.{item?.price}
                  </p>
                  <p className="text-sm lg:text-sm mb-2 line-through text-gray-300">
                    RS.{reducedPrice.toFixed(2)}
                  </p>
                </div>
              </div>
              <div></div>
            </div>

            <div className="mt-2 text-sm flex justify-between items-center text-red-400">
              <p className="">
                Already Sold: {Math.floor(Math.random() * 50) + 1}
              </p>
              <p className="">Available: {item?.rating?.count}</p>
            </div>
          </>
        ) : (
          <>
            <div className="flex gap-5 justify-between">
              <div className="">
                <h2 className="text-md lg:text-xl mb-2">
                  {item?.title.slice(0, 15)}...
                </h2>
                <p className="text-md lg:text-xl mb-2 text-lightBlue">
                  RS.{item?.price}
                </p>
                <p className="text-sm lg:text-sm mb-2 line-through text-gray-300">
                  RS.{reducedPrice.toFixed(2)}
                </p>
              </div>
              <div>
                <div className="inline-block text-xl lg:text-2xl">
                  <p className="text-lightBlue">Special</p>
                  <p className="">Offer</p>
                </div>
              </div>
            </div>

            <div className="flex gap-5 justify-between">
              <div>
                <div className=" flex flex-col justify-center items-center text-md md:text-xl px-3 lg:px-7 py-3 h-20 lg:h-30 w-20 lg:w-32 bg-gradient-to-r from-[#00C9FF] to-[#92FE9D] text-black">
                  <p className="">Save</p>
                  <p className="">10%</p>
                </div>
              </div>
              <Image
                className=""
                src={item?.image}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "140px", height: "120px" }}
                alt=""
              />
            </div>

            <div className="mt-4 text-sm flex justify-between items-center text-red-400">
              <p className="">
                Already Sold: {Math.floor(Math.random() * 50) + 1}
              </p>
              <p className="">Available: {item?.rating?.count}</p>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default FeatureProductCard;
