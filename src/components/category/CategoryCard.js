import React from "react";
import Image from "next/image";

const CategoryCard = () => {
  return (
    <>
      <div class="relative">
        <div class="relative">
          <Image
            src="/images/category.png"
            width={270}
            height={200}
            alt="category"
          />
          <div class="absolute bottom-4 -left-2 right-2 flex justify-between items-center py-2 px-2 bg-white  shadow-md shadow-gray-400">
            <p class="text-[25px] text-gray-900">Electronics</p>
            <p class="text-[21px] text-lightBlue ">Shop</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryCard;
