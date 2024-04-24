import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import ProductCard from "./ProductCard";
import { motion, useScroll, inView } from "framer-motion";
import { useGetProductQuery } from "../../GlobalRedux/service/product/productApi";

const ProductList = () => {
  const { data } = useGetProductQuery();

  return (
    <>
      <motion.div
        className="relative home-slider "
        initial={{ opacity: 0, y: "50%" }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
            ease: "easeInOut",
          },
        }}
        viewport={{ once: true, margin: "100px 0px 0px 0px" }}
      >
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
      </motion.div>
    </>
  );
};

export default ProductList;
