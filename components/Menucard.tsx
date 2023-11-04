import Image from "next/image";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import Menumodal from "./Menumodal";
import ListMenu from "./element/listMenu";

type KatProps = {
  title: string;
  gambar: string;
};

const Menucard = ({ Menus, Kat }: { Menus: Menu[]; Kat: KatProps }) => {
  return (
    <div className="flex flex-col p-4 myborder-putih">
      <h3 className="text-3xl uppercase font-changa text-merah">{Kat.title}</h3>
      <Image
        src={Kat.gambar}
        width={720}
        height={720}
        alt="Gambar Kategori"
        className="object-cover w-full mt-8 aspect-video rounded-xl"
      />
      {Menus.filter((menu) => menu.kategori.title.includes(Kat.title)).map(
        (menu, i) => (
          <div key={i}>
            <ListMenu Menu={menu} />
          </div>
        )
      )}
    </div>
  );
};

export default Menucard;
