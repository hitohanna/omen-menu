import Menucard from "@/components/Menucard";

const Menu = ({ Menus }: { Menus: Menu[] }) => {
  const FilteredKat = Menus[0].kat;

  return (
    <div className="flex flex-col w-full mt-8">
      <div className="grid w-full grid-cols-3 gap-8 mt-3 sm:grid-cols-1 sm:gap-4 ">
        {FilteredKat.map((kat, i) => (
          <Menucard Menus={Menus} Kat={kat} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
