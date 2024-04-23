import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion, useScroll, inView } from "framer-motion";
import Image from "next/image";

const Header = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [areTabsVisible, setTabsVisible] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setTabsVisible(true), 400);
    } else {
      // Reset visibility when closing the menu
      setTabsVisible(false);
    }
  }, [isOpen]);

  return (
    <>
      <header className={`hidden  lg:flex flex-col w-full `}>
        <div className="flex items-center justify-between bg-lightGreen py-2 md:pt-2 lg:pt-2  md:pb-1 lg:pb-1 lg:px-10">
          <div className="flex items-center justify-between gap-10">
            <Link
              href="/"
              className="logo-fade cursor-pointer inline-block text-white uppercase font-500 text-sm md:text-base leading-[18px]"
            >
              <Image
                src="/images/icons/logo.png"
                width={120}
                height={120}
                alt="logo"
              />
            </Link>
            <div className="max-w-xl">
              <div className="flex bg-white rounded-md border border-white">
                <button className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-[#ABA3A3] rounded-s-lg hover:bg-gray-200  focus:outline-none ">
                  All categories
                  <svg
                    className="w-2.5 h-2.5 ms-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                <div className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
                  <ul className="py-2 text-sm text-gray-700">
                    <li>
                      <button className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                        Mockups
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="relative w-full">
                  <input
                    type="search"
                    className="block p-2.5 w-full z-20 text-sm text-gray-500 bg-white rounded-e-lg border-l-[1px] border-gray-300 focus:outline-none"
                    placeholder="Search for products"
                  />
                  <button
                    type="submit"
                    className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-[#B6B6B6] rounded-e-lg focus:outline-none focus:ring-blue-300 "
                  >
                    <Image
                      src="/images/icons/search.svg"
                      width={20}
                      height={20}
                      alt="search"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-14 text-white mr-10">
            <div className="flex flex-col items-center">
              <p className="text-[9px] cursor-pointer hover:underline">
                Call Us Now
              </p>
              <div className="flex items-center text-[13px]">
                <Image
                  src="/images/icons/headphone.svg"
                  width={15}
                  height={15}
                  alt="headphone"
                  className="mr-2"
                />
                <span className="cursor-pointer">+011 5827918</span>
              </div>
              <p className="text-[13px] hover:underline cursor-pointer">
                Sign In
              </p>
            </div>
            <div className="flex gap-5">
              <Image
                src="/images/icons/user.svg"
                width={24}
                height={24}
                alt="user"
                className="cursor-pointer"
              />
              <Image
                src="/images/icons/favoraite.svg"
                width={24}
                height={24}
                alt="favoraite"
                className="cursor-pointer"
              />
              <div className="flex items-center relative">
                <Image
                  src="/images/icons/cart.svg"
                  width={24}
                  height={24}
                  alt="cart"
                  className="cursor-pointer"
                />
                <span className="absolute top-0 left-3 text-[15px] text-lightyellow">
                  3
                </span>
                <span className="text-[15px]">Cart</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center gap-5 text-white  bg-darkGreen md:py-3 lg:py-3 lg:px-10">
          <div className="flex basis-1/6 items-center gap-2">
            <Image
              src="/images/icons/hambarger.svg"
              width={20}
              height={20}
              alt="logo"
            />
            <p className="inline-block text-[17px]">Browse By Category</p>
          </div>
          <div className="w-full flex basis-5/6 items-center justify-between gap-5">
            <div className="flex gap-6">
              <Link href="/" className="text-[13px] hover:underline">
                Home
              </Link>
              <Link href="/" className="text-[13px] hover:underline">
                Easy Monthly Installments
              </Link>
              <Link href="/" className="text-[13px] hover:underline">
                Shop by Brands
              </Link>
              <Link href="/" className="text-[13px] hover:underline">
                Become a Vendor
              </Link>
            </div>
            <div className="flex items-center gap-5">
              <Link href="">
                <Image
                  src="/images/icons/facebook.svg"
                  width={11}
                  height={22}
                  alt="facebook"
                  className="cursor-pointer"
                />
              </Link>
              <Link href="">
                <Image
                  src="/images/icons/twiter.svg"
                  width={22}
                  height={20}
                  alt="twiter"
                  className="cursor-pointer"
                />
              </Link>
              <Link href="">
                <Image
                  src="/images/icons/linkedin.svg"
                  width={22}
                  height={22}
                  alt="linkedin"
                  className="cursor-pointer"
                />
              </Link>
              <Link href="">
                <Image
                  src="/images/icons/instragram.svg"
                  width={22}
                  height={22}
                  alt="instragram"
                  className="cursor-pointer"
                />
              </Link>
            </div>
          </div>
        </div>
      </header>

      <header
        className={`flex  flex-col min-h-[60px] py-4 px-4 md:px-10 md:py-6 lg:py-8  lg:hidden  bg-lightGreen w-full`}
      >
        <div className="flex items-center justify-between mb-[18px] md:mb-6">
          <Link
            href="/"
            className="logo-fade cursor-pointer inline-block text-white uppercase font-500 text-sm md:text-base leading-[18px]"
          >
            <Image
              src="/images/icons/logo.png"
              width={120}
              height={120}
              alt="logo"
            />
          </Link>
        </div>
        <div className="w-full flex items-center justify-between  text-white z-20 ">
          <a
            href={process.env.NEXT_PUBLIC_NEXTJS_SITE_URL}
            className=" logo-fade w-full max-w-[60.27%] md:max-w-[52.25%]"
          >
            {/* <img
              src="/images/mlogo.svg"
              alt=""
              className="max-w-[88.73%] min-h-[8px] w-full md:min-h-[15px] md:max-w-[67.3%] header-logo-mob"
            /> */}
          </a>
          <button
            onClick={handleClick}
            // className="flex flex-col justify-center items-center ml-3 md:ml-[32px] z-20 h-4 cta-fade"
            className={`flex flex-col justify-center items-center ml-3 md:ml-[32px] z-20 h-4 cta-fade ${
              isOpen
                ? "absolute top-[30px] right-4 md:top-10 md:right-10"
                : "relative"
            }`}
          >
            <span
              className={`bg-white block transition-all duration-300 ease-out 
                    h-0.5 w-5 rounded-sm ${
                      isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
                    }`}
            ></span>
            <span
              className={`bg-white block transition-all duration-300 ease-out 
                    h-0.5 w-5 rounded-sm my-0.5 ${
                      isOpen ? "opacity-0" : "opacity-100"
                    }`}
            ></span>
            <span
              className={`bg-white block transition-all duration-300 ease-out 
                    h-0.5 w-5 rounded-sm ${
                      isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
                    }`}
            ></span>
          </button>
          <div
            onClick={handleClick}
            className={`text-white fixed w-full h-full top-0 left-0 z-10 ${
              isOpen ? "flex" : "hidden"
            }`}
          >
            <div
              className="flex flex-col w-full h-full bg-[#070F24] px-4 pt-[29px] md:px-10 md:pt-[42px] gap-[30px]
            md:gap-10 uppercase font-roboC text-base leading-[16.41px] tracking-[1px] md:text-[24px] md:leading-[28px]"
            >
              {/* <a href="/" className=" mb-5  md:pb-[30px] logo-fade">
                <img
                  src="/images/mlogo.svg"
                  alt=""
                  className="max-w-[53.2%] min-h-[8px] w-full md:min-h-[15px] md:max-w-[35%]"
                />
              </a> */}

              <Link
                href="/"
                className={areTabsVisible ? "tab-fade-mobile" : ""}
              >
                itemname
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
