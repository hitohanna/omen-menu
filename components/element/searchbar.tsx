import {
  AiOutlineSearch,
  AiOutlineInstagram,
  AiOutlineWhatsApp,
} from "react-icons/ai";

const Searchbar = () => {
  return (
    <div className="items-center align-middle mx-auto mt-16">
      <form action="" className="flex">
        <div className="flex myborder-white px-4 py-2 gap-6">
          <span className="text-2xl">
            <AiOutlineSearch />
          </span>
          <span className="border-l-2 border-black" />
          <input
            type="text"
            className="focus:outline-none w-[600px] placeholder:italic"
            placeholder="Cari makanan . . ."
          />
        </div>
      </form>
    </div>
  );
};

export default Searchbar;
