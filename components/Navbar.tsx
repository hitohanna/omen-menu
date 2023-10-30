import { Navlinks } from "@/constants";
import Link from "next/link";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
const Navbar = () => {
  return (
    <header className="fixed w-full px-4 mx-auto mt-4">
      <nav className=" myborder-white">
        <div className="flex items-center justify-between px-4 py-2">
          <h3 className="font-bold text-xl font font-changa text-merah tracking-wide">
            ROMBONG OMEN
          </h3>

          <div className="flex gap-4">
            {Navlinks.map((link, i) => (
              <Link
                key={i}
                href="/"
                className="px-2 py-1 hover:bg-orange hover:text-white rounded-md hover:myborder transition-colors font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <span className="text-xl">
              <AiOutlineShoppingCart />
            </span>
            <span className="text-lg rounded-full bg-orange/25 p-2 flex">
              <AiOutlineUser />
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
