import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import Link from "next/link";
import { motion, useScroll, inView } from "framer-motion";
import SliderCard from "./SliderCard";

const HomeSlider = (props) => {
  const [areSlideVisible, setSlideVisible] = useState(false);

  useEffect(() => {
    const element = document.querySelector(".home-slider");
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            // console.log("in the viewport");
            setSlideVisible(true);
          } else {
            // console.log(" not in the viewport");
          }
        }
      },
      {
        root: null,
        threshold: 0.4, // need to change 0.5 after testing
      }
    );
    observer.observe(element);
  }, [areSlideVisible]);

  const handleClick = () => {
    router.push(
      `${process.env.NEXT_PUBLIC_NEXTJS_SITE_URL}attractions/#section1`
    );
  };

  return (
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

      <Swiper
        modules={[Navigation, Pagination]}
        navigation={true}
        pagination={{ clickable: true }}
        className=" relative"
      >
        <SwiperSlide className="home-swiper-slide">
          <SliderCard />
        </SwiperSlide>
        <SwiperSlide className="home-swiper-slide">
          <SliderCard />
        </SwiperSlide>
        <SwiperSlide className="home-swiper-slide">
          <SliderCard />
        </SwiperSlide>
      </Swiper>
    </motion.div>
  );
};

export default HomeSlider;
