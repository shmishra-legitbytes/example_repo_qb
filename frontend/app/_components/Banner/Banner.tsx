import Image from "next/image";
import React from "react";

import homeBannerImage from "@/public/images/home/bannerImage.jpeg";
import { Search } from "@/components/Search/Search";

export function Banner() {
  return (
    <div className="w-full relative">
      <div className="absolute w-full z-10 h-full flex flex-col justify-center items-center gap-y-16 bg-[#00000]">
        <div className="flex flex-col justify-center items-center text-white p-4">
          <h1 className="font-bold text-5xl tracking-wider">
            SHARING KNOWLEDGE
          </h1>
          <h2 className="text-4xl tracking-wide">WITH OUR QUESTION BANK</h2>
        </div>

        {/* //Search  */}
        <div className="w-full sm:w-1/2">
          <Search />
        </div>
      </div>
      <div className="w-full">
        <Image
          src={homeBannerImage}
          alt="Home Banner"
          className="max-h-[500px] min-h-[478px] win-w-[100vw] filter contrast-50 shadow-inner shadow-background object-cover"
        />
      </div>
    </div>
  );
}
