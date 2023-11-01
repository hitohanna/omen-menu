"use client";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { AiOutlineArrowLeft, AiOutlinePlus } from "react-icons/ai";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Radio from "@/components/Radio";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const Kats = [
  { name: "Makanan" },
  { name: "Minuman" },
  { name: "Tambahan" },
];

const page = () => {
  const [kat, setKat] = useState("");
  const [katOpen, setKatOpen] = useState(false);

  const handlekat = () => {
    setKatOpen(!katOpen);
    console.log(katOpen);
  };

  return (
    <div className="flex flex-col w-full max-w-[85rem] sm:max-w-[21rem] lg:max-w-[44rem] 2xl:max-w-[75rem] mx-auto">
      <div className="flex items-center justify-between w-full mt-8 sm:mt-4">
        <h3 className="text-6xl font-changa sm:text-3xl text-merah">
          MENU BARU
        </h3>

        <div className="flex items-center gap-4 sm:text-sm">
          <Link
            href="/admin"
            className="flex items-center gap-2 px-2 py-1 myborder-putih "
          >
            <div className="text-xl">
              <AiOutlineArrowLeft />
            </div>
            <h3 className="font-bold ">Admin</h3>
          </Link>

          <Link
            href="/admin/tambah"
            className="flex items-center gap-2 px-2 py-1 myborder bg-kuning hover:bg-kuning/70"
          >
            <h3 className="font-bold sm:text-sm">Tambah</h3>
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-4 myborder-putih px-4 py-8 max-w-[30rem] w-full mx-auto mt-16 font-poppins">
        <div className="flex items-center justify-between ">
          <h3 className="text-xl font-bold">Kategori</h3>
          <Button onClick={() => handlekat()} size="sm" variant={"omenputih"}>
            <AiOutlinePlus />
            <p className="ml-3">Kategori</p>
          </Button>
        </div>

        <div
          className={`${
            !katOpen ? "hidden" : "flex"
          } w-full gap-2 transition-all`}
        >
          <Input type="text" placeholder="Isi Kategori Baru . . ." />
          <Button variant={"omenijo"}>Simpan</Button>
        </div>

        <div className="flex flex-wrap items-center gap-2 mt-4">
          <Radio props={Kats} />
        </div>

        <Separator className="mt-4" />

        <div className="flex flex-col gap-3 mt-4">
          <Input type="text" placeholder="Nama Menu . . ." />
          <Input type="text" placeholder="Harga . . ." />
          <Textarea typeof="text" placeholder="Deskirpsi . . ." />
          <Input type="file" placeholder="Pilih File" />

          <div className="flex items-center justify-end w-full gap-2 mt-4">
            <Button variant={"omenputih"}>Reset</Button>
            <Button variant={"omenijo"}>Simpan</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
