import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const Menucard = ({ id }: { id: number }) => {
  return (
    <div className="flex flex-col p-2 bg-white cursor-pointer myborder-putih sm:p-1">
      <div className="relative w-full">
        <span className="absolute text-2xl top-2 right-2">
          <AiFillHeart className="fill-red-500" />
        </span>
        <Image
          src="/menu.png"
          alt="menu"
          width={200}
          height={200}
          className="object-cover w-full rounded-lg"
        />
      </div>
      <div className="flex items-baseline justify-between mt-2 sm:px-1 font-poppins">
        <h3 className="text-black/70 sm:text-sm line-clamp-1">
          Lorem Ipsum {id}
        </h3>
        <p className="text-2xl font-semibold">15</p>
      </div>
    </div>
  );
};

export default Menucard;
