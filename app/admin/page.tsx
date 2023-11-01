import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const kategori = [
  { nama: "Makanan" },
  { nama: "Minuman" },
  { nama: "Tambahan" },
];

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

const page = () => {
  return (
    <div className="flex flex-col w-full max-w-[85rem] sm:max-w-[21rem] lg:max-w-[44rem] 2xl:max-w-[75rem] mx-auto">
      <div className="flex items-center justify-between w-full mt-8 sm:mt-4">
        <h3 className="text-6xl font-changa text-merah">MENU</h3>

        <div className="flex items-center gap-4">
          <Link
            href="/menu"
            className="flex items-center gap-2 px-2 py-1 myborder-putih "
          >
            <div className="text-xl">
              <AiOutlineArrowLeft />
            </div>
            <h3 className="font-bold">Menu</h3>
          </Link>

          <Link
            href="/admin/tambah"
            className="flex items-center gap-2 px-2 py-1 myborder bg-kuning hover:bg-kuning/70"
          >
            <h3 className="font-bold">Tambah</h3>
          </Link>
        </div>
      </div>

      <div className="flex flex-col w-full mt-8">
        <h3 className="text-xl font-bold font-poppins">KATEGORI</h3>
        <div className="bg-white border rounded-md">
          <Table className="font-poppins">
            <TableHeader className="font-bold text-black">
              <TableRow className="font-bold ">
                <TableHead className="w-[50px]">No</TableHead>
                <TableHead className="">Kategori</TableHead>
                <TableHead className="text-center ">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {kategori.map((kat, i) => (
                <TableRow key={i}>
                  <TableCell className="font-medium">{i + 1}</TableCell>
                  <TableCell className="font-medium">{kat.nama}</TableCell>
                  <TableCell className="font-medium text-center">
                    {kat.nama}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      <div className="flex flex-col w-full mt-8">
        <h3 className="text-xl font-bold font-poppins">LIST BARANG</h3>
        <div className="">
          <Table className="mt-4 font-poppins">
            <TableHeader className="font-bold text-black">
              <TableRow className="font-bold">
                <TableHead className="w-[100px]">Invoice</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Method</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoices.map((invoice) => (
                <TableRow key={invoice.invoice}>
                  <TableCell className="font-medium">
                    {invoice.invoice}
                  </TableCell>
                  <TableCell>{invoice.paymentStatus}</TableCell>
                  <TableCell>{invoice.paymentMethod}</TableCell>
                  <TableCell className="text-right">
                    {invoice.totalAmount}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default page;
