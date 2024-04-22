import React from "react";
import Image from "next/image";

const ProductCard = () => {
  return (
    <>
      <div className="block p-4 bg-white border">
        <div className="relative ">
          <p className="text-xs capitalize mb-1">men's clothing</p>
          <h5 className="text-[15px] text-[#034E53]">Samsung 40N53 S..</h5>
          <Image
            className=""
            src="/images/product.png"
            width={200}
            height={200}
            alt=""
          />
          <div className="flex justify-between">
            <p className="text-[13px] text-gray-300 line-through">RS 60.000</p>
            <p className="text-[13px] text-lightBlue">RS 60.000</p>
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
