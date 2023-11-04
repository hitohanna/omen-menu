import Link from "next/link";
import { motion } from "framer-motion";
import { AiOutlineInstagram, AiOutlineWhatsApp } from "react-icons/ai";
import { IoLogoTiktok } from "react-icons/io5";

function Footer() {
  return (
    <div className="flex flex-wrap justify-between w-full mb-8 mt-28 sm:gap-8 lg:gap-16 font-poppins">
      <div className="flex flex-col">
        <h4 className="text-4xl leading-10 text-merah">
          All-Day Breakfast <br /> Coffee & Good vibes
        </h4>
        <div className="flex flex-col">
          <span className="w-full mt-4 bg-black border border-merah" />
          <p className="mt-4 italic font-semibold text-merah">TAKEAWAY ONLY</p>
        </div>
      </div>

      <div className="flex flex-row gap-12 sm:text-sm xs:text-[0.8rem]">
        <div className="">
          <h4 className="font-bold text-merah">Alamat</h4>
          <p className="text-merah">
            Griya Kusuma Bangsa
            <br />
            Blok.C6 Lamongan
          </p>
        </div>
        <div className="">
          <h4 className="font-bold text-merah">Jam buka</h4>
          <p className="text-merah">senin - minggu</p>
          <p className="text-merah">0700 - capek</p>
        </div>
      </div>

      <div className="flex">
        <div className="flex gap-4 h-fit">
          <Link
            target="_blank"
            href="https://wa.me/6285852281819?text=Halo%20saya%20ingin%20order%20menu%20ROMBONG%20OMEN"
            className="p-3 text-3xl transition-colors sm:text-xl sm:p-2 myborder-merah hover:bg-kuning"
          >
            <AiOutlineWhatsApp />
          </Link>
          <Link
            target="_blank"
            href="/"
            className="p-3 text-3xl transition-colors sm:text-xl sm:p-2 myborder-merah hover:bg-kuning"
          >
            <AiOutlineInstagram />
          </Link>
          <Link
            href="/"
            className="p-3 text-3xl transition-colors sm:text-xl sm:p-2 myborder-merah hover:bg-kuning"
          >
            <IoLogoTiktok />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
