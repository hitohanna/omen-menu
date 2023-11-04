import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";

export async function getMenus() {
  const query = await client.fetch(groq`*[_type == "menu"] | order(lower(nama) asc){
    nama,
      harga,
      deskripsi,
      kategori->{
        title,
      },
      "kat":*[_type == "kategori"]{
      title,
        "gambar":gambar.asset->url
    }
  }`);
  return query;
}