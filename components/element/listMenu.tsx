const ListMenu = ({ Menu }: { Menu: Menu }) => {
  return (
    <div className="flex flex-col w-full mt-8">
      <div className="flex items-baseline justify-between w-full text-lg font-bold">
        <h3 className="flex uppercase whitespace-nowrap">{Menu.nama}</h3>
        <span className="w-full mx-2 border border-black" />
        <p className="">{parseInt(Menu.harga) / 1000}</p>
      </div>
      <p className="text-sm text-black/70">{Menu.deskripsi}</p>
    </div>
  );
};

export default ListMenu;
