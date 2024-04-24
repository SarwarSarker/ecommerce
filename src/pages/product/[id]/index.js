import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useProductByIdQuery } from "../../../GlobalRedux/service/product/productApi";

const ProductDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data } = useProductByIdQuery(id);

  return (
    <>
      <Header />
      <>
        <div className="min-w-screen min-h-screen bg-yellow-300 flex items-center p-5 lg:p-10 overflow-hidden relative">
          <div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
            <div className="md:flex items-center -mx-10">
              <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                <div className="relative flex justify-center">
                  <Image
                    className=""
                    src={data?.image}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{ width: "400px", height: "400px" }}
                    alt="er"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 px-10">
                <div className="mb-10">
                  <h1 className="font-bold uppercase text-2xl mb-5">
                    {data?.title}
                  </h1>
                  <p className="text-xs bg-gray-300 text-gray-600 px-5 py-2 mb-4 inline-block rounded-2xl capitalize">{data?.category}</p>
                  <p className="text-sm">{data?.description}</p>
                </div>
                <div className="flex items-center flex-col md:flex-row gap-5">
                  <div className="inline-block align-bottom">
                    <span className="text-2xl leading-none align-baseline">
                      RS
                    </span>
                    <span className="font-bold text-5xl leading-none align-baseline">
                      {data?.price}
                    </span>
                  </div>
                  <div className="flex w-full align-bottom">
                    <Link
                      href="/"
                      className="w-full text-center bg-yellow-300 opacity-75 hover:opacity-100 text-yellow-900 hover:text-gray-900 rounded-full px-10 py-2 font-semibold"
                    >
                      <i className="mdi mdi-cart -ml-2 mr-2"></i> BUY NOW
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
      <Footer />
    </>
  );
};

export default ProductDetails;
