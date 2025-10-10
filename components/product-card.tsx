"use client";
import { useState } from "react";
import { Star, ShoppingCart } from "lucide-react";

export default function ProductCard() {
  const [selectedSize, setSelectedSize] = useState(35);

  const sizes = [34, 35, 36, 37];

  return (
    <div className="bg-black text-white rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)] p-4 space-y-4 font-sans">
      {/* Image */}
      <div className="relative bg-white rounded-xl overflow-hidden">
        <img
          src="https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/0d98cde5-2d38-4b67-b55f-38b147c9d7b6/sb-dunk-low-grateful-dead-bear-orange-release-date.jpg"
          alt="Nike SB Dunks Low Grateful Dead Bear Orange"
          className="w-full h-64 object-contain"
        />
        <div className="absolute left-2 top-1/2 -translate-y-1/2 text-3xl text-gray-500 cursor-pointer">
          ‹
        </div>
        <div className="absolute right-2 top-1/2 -translate-y-1/2 text-3xl text-gray-500 cursor-pointer">
          ›
        </div>
      </div>

      {/* Brand */}
      <span className="bg-white text-black px-2 py-1 rounded-full text-xs font-medium">
        Nike
      </span>

      {/* Title & Rating */}
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-lg font-semibold">
            SB Dunks Low Grateful Dead Bear Orange
          </h2>
          <p className="text-3xl font-bold mt-1">$ 3,400</p>
        </div>
        <div className="flex items-center gap-1 mt-1">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <p className="text-sm font-medium">4.56</p>
          <span className="text-xs text-gray-400">(125)</span>
        </div>
      </div>

      {/* Size Selector */}
      <div>
        <p className="text-sm text-gray-300 mb-2">What is your size ?</p>
        <div className="flex gap-2">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`w-10 h-10 rounded-md border ${
                selectedSize === size
                  ? "bg-white text-black border-white"
                  : "border-gray-600 text-gray-300"
              } hover:border-white transition`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-3 pt-2">
        <button className="flex-1 bg-white text-black py-3 rounded-xl font-semibold hover:bg-gray-200 transition">
          Buy Now
        </button>
        <button className="bg-white/10 border border-white/20 p-3 rounded-xl hover:bg-white/20 transition">
          <ShoppingCart className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
