import Menucard from "@/components/Menucard";

const Menu = ({ Menus }: { Menus: Menu[] }) => {
  const FilteredKat = Menus[0].kat;

  return (
    <div className="flex flex-col w-full mt-8">
      <div className="gap-4 mt-3 space-y-4 sm:columns-1 lg:columns-2 sm:gap-4 columns-4">
        {FilteredKat.map((kat, i) => (
          <Menucard Menus={Menus} Kat={kat} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
