import React from "react";
import Image from "next/image";

const ProductCard = ({ item }) => {
  const reducedPrice = item.price * 0.9;

  return (
    <>
      <div className="block p-4 bg-white border">
        <div className="relative ">
          <p className="text-xs capitalize mb-1">{item?.category}</p>
          <h5 className="text-[15px] text-[#034E53] mb-4">
            {item?.title.slice(0, 15)}...
          </h5>
          <div className="mx-auto">
            <Image
              className=""
              src={item?.image}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "200px", height: "200px" }}
              alt=""
            />
          </div>
          <div className="flex justify-between mt-3">
            <p className="text-[15px] text-gray-300 line-through">
              RS {reducedPrice.toFixed(2)}
            </p>
            <p className="text-[15px] text-lightBlue">RS {item?.price}</p>
          </div>
          <button className="inline-block w-full px-6 py-2 mt-3 text-[15px] font-normal leading-normal text-white bg-lightBlue transition duration-150 ease-in-out focus:outline-none">
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
