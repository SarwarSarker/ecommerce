import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import CategoryCard from "./CategoryCard";
import { useGetProductCategoriesQuery } from "../../GlobalRedux/service/product/productApi";

const CategoryList = () => {
  const { data } = useGetProductCategoriesQuery();

  return (
    <div className="bg-gradient-to-b from-[#F3EDC9] to-white">
      <div className="container mx-auto px-5  pt-10  lg:px-10">
        <div className="border-b border-gray-400 pb-10">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={true}
          pagination={{ clickable: true }}
          slidesPerView={4.2}
          spaceBetween={30}
          className="relative "
          breakpoints={{
            // Responsive breakpoints
            0: {
              slidesPerView: 1.1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2.1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3.2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4.2,
              spaceBetween: 30,
            },
          }}
        >
          {data &&
            data.map((item) => (
              <SwiperSlide className="category-slider" key={item}>
                <CategoryCard item={item} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div></div>
  );
};

export default CategoryList;
