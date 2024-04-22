import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import ProductCard from "./ProductCard";

const ProductList = () => {
  return (
    <>
      <div className="lg:py-10 lg:px-10">
        <h3 className="text-[28px]">
          <span className="text-lightBlue">New</span> Arrivals
        </h3>
        <div className="flex gap-7">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </>
  );
};

export default ProductList;
