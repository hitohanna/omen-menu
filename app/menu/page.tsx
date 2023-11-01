import Menucard from "@/components/Menucard";
import Menumodal from "@/components/Menumodal";
import Modal from "@/components/modal/Modal";
import { Separator } from "@/components/ui/separator";
import { Menuid } from "@/constants";
import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

const page = ({ searchParams }: Props) => {
  const showModal = searchParams?.modal;
  return (
    <>
      <div className="relative mb-8 width-global font-poppins">
        <div className="flex items-center justify-between w-full mt-8 sm:mt-4">
          <h3 className="text-6xl font-changa text-merah">MENU</h3>

          <Link
            href="/"
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

        {/* ----------------menu-------------------------- */}
        <h3 className="mt-8 text-3xl font-changa text-itam">MAKANAN</h3>
        <Separator className="my-2" />
        <div className="grid grid-cols-5 gap-4 mt-3 sm:grid-cols-2 sm:gap-2">
          {Menuid.map((menu, i) => (
            <Link href={`/menu/?modal=true&?id=${menu.id}`}>
              <Menucard id={menu.id} />
            </Link>
          ))}
        </div>

        {/* ----------------menu-------------------------- */}
        <h3 className="mt-8 text-3xl font-changa text-itam">MINUMAN</h3>
        <Separator className="my-2" />
        <div className="grid grid-cols-5 gap-4 mt-3 sm:grid-cols-2 sm:gap-2">
          {Menuid.map((menu, i) => (
            <Link href={`/menu/?modal=true&?id=${menu.id}`}>
              <Menucard id={menu.id} />
            </Link>
          ))}
        </div>
      </div>

      {showModal && (
        <Modal>
          <>
            <Menumodal />
          </>
        </Modal>
      )}
    </>
  );
};

export default page;
