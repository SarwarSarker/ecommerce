import React, { useState, useEffect } from "react";
import Image from "next/image";
import FeatureProductCard from "./FeatureProductCard";
import {
  useGetProductCategoriesQuery,
  useProductByCategoryQuery,
} from "../../GlobalRedux/service/product/productApi";
import Link from "next/link";

const FeatureProducts = () => {
  const [name, setName] = useState("");
  const { data } = useGetProductCategoriesQuery();
  const { data: product } = useProductByCategoryQuery(name);

  // Set first category as default value when data is available
  useEffect(() => {
    if (data && data.length > 0) {
      setName(data[0]);
    }
  }, [data]);

  const handleClick = (item) => {
    setName(item);
  };

  return (
    <>
      <div className="container mx-auto p-5 lg:py-16 lg:px-10">
        <div className="flex flex-col lg:flex-row justify-between items-center mb-10">
          <h4 className="text-lg md:text-2xl">
            <span className="text-lightBlue">Best</span> Deals
          </h4>
          <div className="flex flex-wrap gap-2 md:gap-3 lg:gap-7 items-center">
            {data &&
              data.map((item) => (
                <a
                  onClick={() => handleClick(item)}
                  className={`uppercase text-xs md:text-md lg:text-[19px] py-3 lg:mt-0 cursor-pointer ${
                    name === item
                      ? "text-lightBlue border-b-2 border-lightBlue"
                      : "hover:text-lightBlue hover:border-b-2 hover:border-lightBlue"
                  }`}
                  key={item}
                >
                  {item}
                </a>
              ))}
            <div className="hidden md:flex gap-4">
              <Image
                src="/images/icons/prevbold.svg"
                width={10}
                height={10}
                alt="category"
              />
              <Image
                src="/images/icons/nextbold.svg"
                width={10}
                height={10}
                sizes="100vw"
                alt="category"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {product &&
            product?.map((item, index) => (
              <FeatureProductCard key={index} item={item} index={index} />
            ))}
        </div>
      </div>
    </>
  );
};

export default FeatureProducts;
