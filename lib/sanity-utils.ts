import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";

export async function getKategori() {
  const query = await client.fetch(groq`*[_type == "kategori"] | order(seri asc){
    _id,
    title,
    "gambar":gambar.asset->url
  }`)
  return query;
}
export async function getMenus() {
  const query = await client.fetch<Menus[]>(groq`*[_type == "menu"] | order(lower(nama) asc){
    _id,
    nama,
      harga,
      deskripsi,
      tersedia,
      kategori->{
        title,
      },
  }`);
  return query;
}


// export async function getMenus() {
//   const query = await client.fetch<Menus[]>(groq`*[_type == "menu"] | order(lower(nama) asc){
//     _id,
//     nama,
//       harga,
//       deskripsi,
//       tersedia,
//       kategori->{
//         title,
//       },
//       "kat":*[_type == "kategori"] | order(seri asc){
//       title,
//         "gambar":gambar.asset->url
//     }
//   }`, {
//     next: {
//       cache: "no-cache"
//     }
//   });
//   return query;
// }

export async function UpdateStok(_id: string, stok: boolean) {

  try {
    const result = await client.patch(_id).set({ tersedia: (stok) }).commit();
    return result
  } catch (error) {
    console.log(error)
    return error
  }

}