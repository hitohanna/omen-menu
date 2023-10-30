import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import Image from "next/image";

const Menumodal = () => {
  return (
    <div className="flex flex-col myborder-putih p-4 sm:p-3 bg-white cursor-pointer mx-auto font-poppins">
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
      <div className="flex justify-between mt-2 items-baseline sm:px-1">
        <h3 className="text-black/70 text-lg font-bold">Lorem Ipsum</h3>
        <p className="font-semibold text-2xl">15</p>
      </div>
      <span className="h-[1px] border-t border-black mt-4" />
      <p className="my-4 sm:text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
        consectetur minus laudantium obcaecati doloremque similique excepturi
        deleniti quis sunt soluta aspernatur praesentium, sequi nemo sed,
        placeat architecto? Doloremque, voluptates cupiditate?
      </p>
    </div>
  );
};

export default Menumodal;
