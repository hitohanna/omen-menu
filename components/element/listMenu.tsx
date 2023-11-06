"use client";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { UpdateStok } from "@/lib/sanity-utils";

const ListMenu = ({ Menu }: { Menu: Menus }) => {
  const handleStok = (id: string, stok: boolean) => {
    UpdateStok(id, stok);
  };

  return (
    <div className="flex flex-col w-full mt-8">
      <div className="flex items-baseline justify-between text-lg font-bold lg:text-sm sm:text-sm">
        <h3
          className={`flex uppercase whitespace-nowrap font-bold ${
            Menu.tersedia ? "text-black" : "line-through text-zinc-300"
          }`}
        >
          {Menu.nama}
        </h3>
        <span className="w-full mx-2 border border-black" />
        <p className="peer-target:stok">{parseInt(Menu.harga) / 1000}</p>
      </div>
      <p className="text-sm text-black/70 sm:mt-2">{Menu.deskripsi}</p>
      <div className="flex items-center justify-between mt-2 ">
        <Label>Tersedia :</Label>
        <Switch
          id="stok"
          defaultChecked={Menu.tersedia}
          onCheckedChange={(e) => handleStok(Menu._id, e)}
        />
      </div>
    </div>
  );
};

export default ListMenu;
