import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer className="relative bg-[#393939] p-5 lg:py-10 lg:px-10">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4 sm:w-2/3 lg:w-3/12 ">
              <div className="w-full mb-10">
                <Link href="/" className="">
                  <Image
                    src="/images/icons/logo.png"
                    width={120}
                    height={120}
                    alt="logo"
                  />
                </Link>
                <p className="text-lightBlue text-lg my-3">
                  Got questions? Call us 24/7!
                </p>
                <p className="text-md text-white">+012 (345) 678 99</p>
                <p className="text-md text-white">+012 (345) 678 99</p>

                <p className="text-lg text-lightBlue pt-3">Contact info</p>
                <p className="text-md text-white">info@winstore.pk</p>
                <div className="flex items-center gap-5 mt-5">
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
            <div className="w-full px-4 sm:w-2/3 lg:w-3/12">
              <div className="w-full mb-10 text-white">
                <h4 className="text-xl font-semibold text-lightBlue mb-5">
                  Trending
                </h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="/" className="text-sm">
                      Installments
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="text-sm">
                      Electronics
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="text-sm">
                      Grocery
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="text-sm">
                      Health & Beauty
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="text-sm">
                      Home Appliances
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="text-sm">
                      Mobile Accessories
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full px-4 sm:w-2/3 lg:w-3/12">
              <div className="w-full mb-10 text-white">
                <h4 className="text-xl font-semibold text-lightBlue  mb-5">
                  Information
                </h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="/" className="text-sm">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="text-sm">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="text-sm">
                      FAQs
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="text-sm">
                      Shipping & Return
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="text-sm">
                      Privacy policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="text-sm">
                      Terms & Conditions
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full px-4 sm:w-2/3 lg:w-3/12">
              <div className="w-full mb-10 text-white">
                <h4 className="text-xl font-semibold text-lightBlue  mb-5">
                  Customer Care
                </h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="/" className="text-sm">
                      My Account
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="text-sm">
                      Track Your Order
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="text-sm">
                      Recently Viewed
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="text-sm">
                      Wishlist
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="text-sm">
                      Compare
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="text-sm">
                      Become a Vendor
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-9/12 mx-auto">
            <div className="flex gap-5 items-center justify-end">
              <Link href="/" className="">
                <Image
                  src="/images/icons/visa.svg"
                  width={90}
                  height={90}
                  alt=""
                />
              </Link>
              <Link href="/" className="">
                <Image
                  src="/images/icons/mastercard.svg"
                  width={90}
                  height={90}
                  alt=""
                />
              </Link>
              <Link href="/" className="">
                <Image
                  src="/images/icons/cash.svg"
                  width={90}
                  height={90}
                  alt=""
                />
              </Link>
              <Link href="/" className="">
                <Image
                  src="/images/icons/instalment.svg"
                  width={90}
                  height={90}
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>
      </footer>
      <div className="px-5 bg-[#161616] py-5">
        <div className="container mx-auto">
          <p className="text-white text-lg">
            © 2021 Winstore. All Rights Reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
