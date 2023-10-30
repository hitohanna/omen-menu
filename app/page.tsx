"use client";
import Link from "next/link";
import { IconContext } from "react-icons";
import {
  AiOutlineSearch,
  AiOutlineInstagram,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { IoLogoTiktok } from "react-icons/io5";
import { GrFormNextLink } from "react-icons/gr";
import { FiArrowUpRight } from "react-icons/fi";

export default function Home() {
  return (
    <main className="w-full max-w-[85rem] sm:max-w-[21rem] lg:max-w-[44rem] 2xl:max-w-[75rem] mx-auto">
      <section className="flex flex-col w-full h-full">
        <div className="flex mt-24 sm:mt-32 mx-auto">
          {/* <span className="text-[19rem] leading-[15rem] text-start items-center font-changa text-merah">
            ROMBONG OMEN
          </span> */}
          <svg
            className="w-[85rem] sm:w-[21rem] lg:w-[44rem] 2xl:w-[75rem]"
            viewBox="0 0 2167 683"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M287.5 320H177.5L136.5 227H115V320H15V7.5H172.5C244.167 7.5 280 44 280 117C280 167 264.5 200 233.5 216L287.5 320ZM115 87.5V150H138C150 150 158.667 148.833 164 146.5C169.667 143.833 172.5 138 172.5 129V108.5C172.5 99.5 169.667 93.8333 164 91.5C158.667 88.8333 150 87.5 138 87.5H115ZM295.904 164C295.904 107 306.571 65.5 327.904 39.5C349.238 13.1666 387.738 -2.26498e-05 443.404 -2.26498e-05C499.071 -2.26498e-05 537.571 13.1666 558.904 39.5C580.238 65.5 590.904 107 590.904 164C590.904 192.333 588.571 216.167 583.904 235.5C579.571 254.833 571.904 271.667 560.904 286C549.904 300.333 534.738 310.833 515.404 317.5C496.071 324.167 472.071 327.5 443.404 327.5C414.738 327.5 390.738 324.167 371.404 317.5C352.071 310.833 336.904 300.333 325.904 286C314.904 271.667 307.071 254.833 302.404 235.5C298.071 216.167 295.904 192.333 295.904 164ZM403.404 112V242H444.904C458.571 242 468.404 240.5 474.404 237.5C480.738 234.167 483.904 226.833 483.904 215.5V85.5H441.904C428.571 85.5 418.738 87.1667 412.404 90.5C406.404 93.5 403.404 100.667 403.404 112ZM706.133 320H601.633L620.633 7.5H751.133L790.133 166.5H793.633L832.633 7.5H963.133L982.133 320H877.633L871.633 168.5H868.133L830.133 320H753.633L715.133 168.5H712.133L706.133 320ZM1007.69 320V7.5H1169.69C1199.69 7.5 1221.03 13.3333 1233.69 25C1246.69 36.6667 1253.19 53.6667 1253.19 76C1253.19 98.3333 1249.03 115.667 1240.69 128C1232.69 140 1221.86 147.833 1208.19 151.5V154.5C1248.53 161.5 1268.69 189 1268.69 237C1268.69 262 1262.03 282.167 1248.69 297.5C1235.36 312.5 1214.86 320 1187.19 320H1007.69ZM1146.69 195.5H1107.69V246.5H1146.19C1160.19 246.5 1167.19 238 1167.19 221C1167.19 204 1160.36 195.5 1146.69 195.5ZM1139.19 76H1107.69V122.5H1138.69C1151.36 122.5 1157.69 114.833 1157.69 99.5C1157.69 83.8333 1151.53 76 1139.19 76ZM1276.88 164C1276.88 107 1287.55 65.5 1308.88 39.5C1330.21 13.1666 1368.71 -2.26498e-05 1424.38 -2.26498e-05C1480.05 -2.26498e-05 1518.55 13.1666 1539.88 39.5C1561.21 65.5 1571.88 107 1571.88 164C1571.88 192.333 1569.55 216.167 1564.88 235.5C1560.55 254.833 1552.88 271.667 1541.88 286C1530.88 300.333 1515.71 310.833 1496.38 317.5C1477.05 324.167 1453.05 327.5 1424.38 327.5C1395.71 327.5 1371.71 324.167 1352.38 317.5C1333.05 310.833 1317.88 300.333 1306.88 286C1295.88 271.667 1288.05 254.833 1283.38 235.5C1279.05 216.167 1276.88 192.333 1276.88 164ZM1384.38 112V242H1425.88C1439.55 242 1449.38 240.5 1455.38 237.5C1461.71 234.167 1464.88 226.833 1464.88 215.5V85.5H1422.88C1409.55 85.5 1399.71 87.1667 1393.38 90.5C1387.38 93.5 1384.38 100.667 1384.38 112ZM1778.61 320L1702.11 209C1699.44 205.333 1697.77 197.333 1697.11 185H1695.11V320H1595.11V7.5H1689.11L1765.61 118.5C1768.27 122.167 1769.94 130.167 1770.61 142.5H1772.61V7.5H1872.61V320H1778.61ZM2071.03 228V214.5H2045.53V138H2166.03V305C2126.36 320 2085.36 327.5 2043.03 327.5C1986.03 327.5 1946.86 313.667 1925.53 286C1914.53 271.667 1906.86 254.833 1902.53 235.5C1898.2 216.167 1896.03 192.333 1896.03 164C1896.03 135.333 1898.2 111.5 1902.53 92.5C1907.2 73.1667 1915.36 56.3333 1927.03 42C1949.03 14 1991.53 -2.26498e-05 2054.53 -2.26498e-05C2067.53 -2.26498e-05 2084.36 1.33331 2105.03 3.99999C2126.03 6.66666 2141.36 9.66666 2151.03 13L2136.03 89.5C2109.03 84.8333 2084.53 82.5 2062.53 82.5C2040.86 82.5 2025.53 84.1667 2016.53 87.5C2007.86 90.8333 2003.53 97.5 2003.53 107.5V249H2036.53C2048.53 249 2057.2 247.833 2062.53 245.5C2068.2 242.833 2071.03 237 2071.03 228ZM7.07805e-07 519C7.07805e-07 462 10.6667 420.5 32 394.5C53.3333 368.167 91.8333 355 147.5 355C203.167 355 241.667 368.167 263 394.5C284.333 420.5 295 462 295 519C295 547.333 292.667 571.167 288 590.5C283.667 609.833 276 626.667 265 641C254 655.333 238.833 665.833 219.5 672.5C200.167 679.167 176.167 682.5 147.5 682.5C118.833 682.5 94.8333 679.167 75.5 672.5C56.1667 665.833 41 655.333 30 641C19 626.667 11.1667 609.833 6.5 590.5C2.16667 571.167 7.07805e-07 547.333 7.07805e-07 519ZM107.5 467V597H149C162.667 597 172.5 595.5 178.5 592.5C184.833 589.167 188 581.833 188 570.5V440.5H146C132.667 440.5 122.833 442.167 116.5 445.5C110.5 448.5 107.5 455.667 107.5 467ZM410.228 675H305.728L324.728 362.5H455.228L494.228 521.5H497.728L536.728 362.5H667.228L686.228 675H581.728L575.728 523.5H572.228L534.228 675H457.728L419.228 523.5H416.228L410.228 675ZM911.789 557H811.789V595H934.289V675H711.789V362.5H931.789L919.289 442.5H811.789V484.5H911.789V557ZM1148.71 675L1072.21 564C1069.55 560.333 1067.88 552.333 1067.21 540H1065.21V675H965.213V362.5H1059.21L1135.71 473.5C1138.38 477.167 1140.05 485.167 1140.71 497.5H1142.71V362.5H1242.71V675H1148.71Z"
              fill="#EB191D"
            />
          </svg>
        </div>

        <Link
          href="/menu"
          className="flex items-center flex-shrink gap-4 px-5 py-2.5 w-fit mt-16 transition-colors myborder  "
        >
          <h3 className=" text-itam font-extrabold text-3xl sm:text-lg font-poppins tracking-wider">
            MENU
          </h3>
          <span className="flex items-center text-4xl text-merah rounded-md">
            <FiArrowUpRight />
          </span>
        </Link>

        <div className="flex flex-wrap justify-between mb-8 mt-28 sm:gap-8 lg:gap-16 font-poppins">
          <div className="flex flex-col ">
            <h4 className="text-merah text-4xl leading-10">
              All-Day Breakfast <br /> Coffee & Good vibes
            </h4>
            <div className="flex flex-col">
              <span className="border border-merah bg-black w-full mt-4" />
              <p className="mt-4 italic font-semibold text-merah">
                TAKEAWAY ONLY
              </p>
            </div>
          </div>

          <div className="flex flex-row gap-12">
            <div className="sm:text-sm">
              <h4 className="font-bold  text-merah">Alamat</h4>
              <p className="text-merah">
                Griya Kusuma Bangsa C6
                <br />
                Lamongan
              </p>
            </div>
            <div className="sm:text-sm">
              <h4 className="font-bold  text-merah">Jam buka</h4>
              <p className="text-merah">senin - minggu</p>
              <p className="text-merah">0700 - 2100</p>
            </div>
          </div>

          <div className="flex">
            <div className="flex h-fit gap-4">
              <Link
                href="/"
                className="p-3 text-3xl sm:text-xl sm:p-2 transition-colors myborder-merah hover:bg-kuning"
              >
                <AiOutlineWhatsApp />
              </Link>
              <Link
                href="/"
                className="p-3 text-3xl sm:text-xl sm:p-2 transition-colors myborder-merah hover:bg-kuning"
              >
                <AiOutlineInstagram />
              </Link>
              <Link
                href="/"
                className="p-3 text-3xl sm:text-xl sm:p-2 transition-colors myborder-merah hover:bg-kuning"
              >
                <IoLogoTiktok />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
