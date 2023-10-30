import Menucard from "@/components/Menucard";
import Menumodal from "@/components/Menumodal";
import Modal from "@/components/modal/Modal";
import { Menuid } from "@/constants";
import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

const page = ({ searchParams }: Props) => {
  const showModal = searchParams?.modal;
  console.log(showModal);
  return (
    <>
      <div className="flex flex-col w-full max-w-[85rem] sm:max-w-[21rem] lg:max-w-[44rem] 2xl:max-w-[75rem] mx-auto">
        <div className="flex items-center justify-between w-full mt-8 sm:mt-4">
          <h3 className="font-changa text-6xl text-merah">MENU</h3>

          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="flex gap-2 items-center myborder-putih px-2 py-1 "
            >
              <div className="text-xl">
                <AiOutlineArrowLeft />
              </div>
              <h3 className="font-bold">Home</h3>
            </Link>

            <Link
              href="/admin"
              className="flex gap-2 items-center myborder px-2 py-1 bg-kuning hover:bg-kuning/70"
            >
              <h3 className="font-bold">Admin</h3>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-5 gap-4 mt-8 sm:grid-cols-2">
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
