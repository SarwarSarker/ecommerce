import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import CategoryCard from "./CategoryCard";

const CategoryList = () => {
  return (
    <div className=" py-5 bg-gradient-to-b from-[#F3EDC9] to-white lg:px-10 ">
      <div className="pb-10 border-b border-gray-400">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={true}
        pagination={{ clickable: true }} 
        slidesPerView={4.2}
        spaceBetween={30}
        className=" relative"
        breakpoints={{
          // Responsive breakpoints
          640: {
            slidesPerView: 1.2, 
          },
          768: {
            slidesPerView: 2.2, 
          },
          1024: {
            slidesPerView: 4.2,
          },
        }}
      >
        <SwiperSlide className="product-slider">
          <CategoryCard />
        </SwiperSlide>
        <SwiperSlide className="product-slider">
          <CategoryCard />
        </SwiperSlide>
        <SwiperSlide className="product-slider">
          <CategoryCard />
        </SwiperSlide>
        <SwiperSlide className="product-slider">
          <CategoryCard />
        </SwiperSlide>
        <SwiperSlide className="product-slider">
          <CategoryCard />
        </SwiperSlide>
        <SwiperSlide className="product-slider">
          <CategoryCard />
        </SwiperSlide>
      </Swiper>
      </div>
    </div>
  )
}

export default CategoryList