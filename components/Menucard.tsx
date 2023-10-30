import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const Menucard = ({ id }: { id: number }) => {
  return (
    <div className="flex flex-col myborder-putih p-2 sm:p-1 bg-white cursor-pointer">
      <div className="relative w-full">
        <span className="absolute top-2 right-2 text-2xl">
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
      <div className="flex justify-between mt-2 items-baseline sm:px-1 font-poppins">
        <h3 className="text-black/70 sm:text-sm">Lorem Ipsum {id}</h3>
        <p className="font-semibold text-2xl">15</p>
      </div>
    </div>
  );
};

export default Menucard;
