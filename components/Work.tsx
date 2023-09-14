"use client";
import { categoryProduct } from "@/constants";
import React, { useState } from "react";
import { ProductCategory } from ".";

const Work = () => {
  // console.log(categoryProduct);

  const { filtereds, products } = categoryProduct;
  const [category, setCategory] = useState("all");

  return (
    <div className="w-full h-auto text-center py-32">
      <h2 className="uppercase text-5xl font-bold font-josefin">the work</h2>
      <div className="flex justify-center gap-y-64 gap-6">
        {filtereds.map((filtered, ind) => (
          <div key={ind} className="flex justify-center py-12 items-center gap-6 ">
            <button
              onClick={() => setCategory(filtered)}
              className={`hover:text-[#5645ff] uppercase ${
                category === filtered ? "text-[#5645ff]" : "text-[#55565b]"
              }`}
            >
              {filtered}
            </button>
            {ind !== filtereds.length - 1 && "-"}
          </div>
        ))}
      </div>
      <ProductCategory products={products} category={category} />
    </div>
  );
};

export default Work;
