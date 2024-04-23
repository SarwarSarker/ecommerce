import React from "react";
import Image from "next/image";

const CategoryCard = ({ item }) => {
  return (
    <>
      <div className="relative">
        <div className="relative">
          <Image
            src="/images/category.png"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "200px" }}
            alt="category"
          />
          <div className="absolute bottom-4 -left-2 right-2 flex justify-between items-center py-2 px-2 bg-white  shadow-md shadow-gray-400">
            <p className="text-md lg:text-[25px] text-gray-900">{item}</p>
            <p className="text-md lg:text-[21px] text-lightBlue ">Shop</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryCard;
