import { ProductProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { HiOutlineLink } from "react-icons/hi";

interface CategoryProps {
  products: ProductProps[];
  category: string;
}

const ProductCategory = ({ products, category }: CategoryProps) => {
  const filterData =
    category === "all"
      ? products
      : products?.filter((item: ProductProps) =>
          item.category.includes(category)
        );
  return (
    <div className="grid grid-cols-3 py-3 gap-6">
      {filterData.map((product: ProductProps) => (
        <div className="overflow-hidden relative group" key={product.id}>
          <Image
            width={664}
            height={443}
            className="object-contain block relative scale-110  
            group-hover:scale-100 transition-all duration-500 cursor-pointer"
            src={product.src}
            alt="Products"
          />
          <div
            className="w-full h-full bg-inherit absolute top-0  
             group-hover:bg-[#0000008b]
             right-0
            transition-all flex justify-center items-center z-50"
          >
            <div
              className="w-[200%] h-[50%] rotate-45 absolute translate-x-[280rem] 
            group-hover:duration-[2s] group-hover:-translate-x-[280rem] bg-[#d9d6d6d5]"
            />
            <div className=" hidden group-hover:flex gap-6">
              <button className="p-3 text-2xl rounded-md text-white bg-btn-color">
                {product.liked ? <AiFillHeart /> : <AiOutlineHeart />}
              </button>
              <Link
                className="p-3 text-2xl text-white rounded-md bg-btn-color"
                href={product.src}
              >
                <HiOutlineLink />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCategory;
