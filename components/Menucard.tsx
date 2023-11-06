import Image from "next/image";
import ListMenu from "./element/listMenu";

const Menucard = async ({
  Menus,
  Kategories,
}: {
  Menus: Menus[];
  Kategories: Kategories;
}) => {
  return (
    <div className="flex flex-col p-4 overflow-hidden myborder-putih">
      <h3 className="text-3xl uppercase font-changa text-merah">
        MENU {Kategories.title}
      </h3>
      <div className="relative w-full h-auto mt-6 aspect-video">
        <span className="absolute z-0 w-full overflow-visible bg-black -bottom-1 -right-1 aspect-video rounded-xl" />

        <Image
          src={Kategories.gambar}
          width={720}
          height={720}
          blurDataURL="/menublur.png"
          placeholder="blur"
          alt="Gambar Kategori"
          className="absolute object-cover w-full border-2 border-black z-1 aspect-video rounded-xl"
        />
      </div>

      {Menus.filter((menu) =>
        menu.kategori.title.includes(Kategories.title)
      ).map((menu, i) => (
        <div key={i}>
          <ListMenu Menu={menu} />
        </div>
      ))}
      {/* {Menus.filter((menu) => menu.kategori.title.includes(Kategories[0].title)).map(
        (menu, i) => (
          <div key={i}>
            <ListMenu Menu={menu} />
          </div>
        )
      )} */}
    </div>
  );
};

export default Menucard;
