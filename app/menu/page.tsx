import { getKategori, getMenus } from "@/lib/sanity-utils";
import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai";

import Menucard from "@/components/Menucard";

export const revalidate = 0; //revalidate database

const page = async () => {
  // const Menus: Menus[] = await getMenus();
  const Kategories: Kategories[] = await getKategori();
  const Menus: Menus[] = await getMenus();

  console.log(Menus.length);

  return (
    <div className="relative flex flex-col w-full mb-8 font-poppins">
      <Link
        href="/api/auth/signout"
        className="flex px-4 py-2 mt-4 text-white border border-black rounded-xl bg-merah w-fit"
      >
        Logout
      </Link>
      <Link
        href={"/"}
        className="fixed z-50 flex items-center p-3 rounded-full bottom-4 right-4 bg-merah"
      >
        <div className="text-3xl text-white">
          <AiOutlineArrowLeft />
        </div>
      </Link>

      {/* -----menu-------*/}

      <div className="gap-4 mt-3 space-y-4 sm:columns-1 lg:columns-2 sm:gap-4 columns-4">
        {Kategories.map((kat, i) => (
          <Menucard Menus={Menus} Kategories={kat} key={i} />
        ))}
      </div>
    </div>
  );
};
export default page;
