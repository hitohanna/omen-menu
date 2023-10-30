import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { AiOutlineArrowLeft, AiOutlinePlus } from "react-icons/ai";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Radio from "@/components/Radio";
import { Textarea } from "@/components/ui/textarea";

export const Kats = [
  { name: "Makanan" },
  { name: "Minuman" },
  { name: "Tambahan" },
];

const page = () => {
  return (
    <div className="flex flex-col w-full max-w-[85rem] sm:max-w-[21rem] lg:max-w-[44rem] 2xl:max-w-[75rem] mx-auto">
      <div className="flex items-center justify-between w-full mt-8 sm:mt-4">
        <h3 className="font-changa text-6xl sm:text-3xl text-merah">
          MENU BARU
        </h3>

        <div className="flex items-center gap-4 sm:text-sm">
          <Link
            href="/admin"
            className="flex gap-2 items-center myborder-putih px-2 py-1 "
          >
            <div className="text-xl">
              <AiOutlineArrowLeft />
            </div>
            <h3 className="font-bold ">Admin</h3>
          </Link>

          <Link
            href="/admin/tambah"
            className="flex gap-2 items-center myborder px-2 py-1 bg-kuning hover:bg-kuning/70"
          >
            <h3 className="font-bold sm:text-sm">Tambah</h3>
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-4 myborder-putih px-4 py-8 max-w-[30rem] w-full mx-auto mt-16 font-poppins">
        <div className="flex items-center justify-between ">
          <h3 className="font-bold text-xl">Kategori</h3>
          <button className="flex items-center gap-2 text-sm bg-merah px-2 py-1 text-white rounded-lg">
            <AiOutlinePlus />
            <p className="">Kategori</p>
          </button>
        </div>

        <div className="flex flex-wrap gap-2 mt-4 items-center">
          <Radio props={Kats} />
        </div>

        <Separator className="mt-4" />

        <div className="mt-4 flex gap-3 flex-col">
          <Input type="text" placeholder="Nama Menu . . ." />
          <Input type="text" placeholder="Harga . . ." />
          <Textarea typeof="text" placeholder="Deskirpsi . . ." />
          <Input type="file" placeholder="Pilih File" />

          <div className="flex gap-2 items-center w-full mt-4 justify-end">
            <button className="px-4 py-1 myborder-putih hover:bg-red-300">
              Reset
            </button>
            <button className="px-4 py-1 bg-kuning hover:bg-kuning/30 border-2 font-semibold border-black text-base rounded-xl text-black">
              Simpan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
