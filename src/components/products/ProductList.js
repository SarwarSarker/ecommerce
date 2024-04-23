import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import ProductCard from "./ProductCard";
import { useGetProductQuery } from "../../GlobalRedux/service/product/productApi";

const ProductList = () => {
  const { data } = useGetProductQuery();

  return (
    <>
      <div className="container mx-auto p-5 lg:py-10 lg:px-10">
        <h3 className="text-[28px] mb-5">
          <span className="text-lightBlue">New</span> Arrivals
        </h3>
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={true}
          slidesPerView={6}
          spaceBetween={30}
          className=" relative"
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 6,
              spaceBetween: 30,
            },
          }}
        >
          {data &&
            data.map((item) => (
              <SwiperSlide className="product-slider" key={item.id}>
                <ProductCard item={item} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </>
  );
};

export default ProductList;
