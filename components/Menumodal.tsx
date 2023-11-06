import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import Image from "next/image";

const Menumodal = ({ Menu }: { Menu: Menus }) => {
  return (
    <div className="flex flex-col p-4 mx-auto bg-white cursor-pointer myborder-putih sm:p-3 font-poppins">
      <div className="relative min-w-full">
        <span className="absolute text-2xl top-2 right-2">
          <AiFillHeart className="fill-red-500" />
        </span>
        {/* <Image
          src={Menu.gambar}
          alt="menu"
          width={177}
          height={177}
          placeholder="blur"
          priority={true}
          blurDataURL={"/blur.png"}
          className="flex object-cover w-full rounded-lg"
        /> */}
      </div>
      <div className="flex items-baseline justify-between mt-2 sm:px-1">
        <h3 className="text-lg text-black">{Menu.nama}</h3>
        <p className="text-2xl font-semibold">{Menu.harga}</p>
      </div>
      <span className="h-[1px] border-t border-black mt-4" />
      <p className="my-4 sm:text-sm text-black/70">{Menu.deskripsi}</p>
    </div>
  );
};

export default Menumodal;
