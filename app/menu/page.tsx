import { getMenus } from "@/lib/sanity-utils";
import Menucard from "@/components/Menucard";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Menu from "@/components/Menu";

const page = async () => {
  const Menus: Menu[] = await getMenus();

  return (
    <div className="relative flex flex-col w-full mb-8 font-poppins">
      <div className="flex items-center justify-between w-full mt-8 sm:mt-4">
        <h3 className="text-6xl font-changa text-merah">MENU</h3>

        <Link
          href={"/"}
          className="fixed z-50 flex items-center p-3 rounded-full bottom-4 right-4 bg-merah"
        >
          <div className="text-3xl text-white">
            <AiOutlineArrowLeft />
          </div>
        </Link>

        <div className="items-center hidden gap-2">
          <Link
            href="/admin"
            className="items-center gap-2 px-2 py-1 myborder bg-kuning hover:bg-kuning/70"
          >
            <h3 className="font-bold">Admin</h3>
          </Link>
        </div>
      </div>

      {/* -----menu-------*/}
      <Menu Menus={Menus} />
    </div>
  );
};

export default page;
