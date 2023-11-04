import { defineType, defineField } from "sanity";

export default defineType({
    name: "menu",
    title: "Menu",
    type: "document",
    fields: [
        defineField({
            name: "nama",
            title: "Nama",
            type: "string",
        }),
        defineField({
            name: "harga",
            title: "Harga",
            type: "string",
        }),
        defineField({
            name: "deskripsi",
            title: "Deskripsi",
            type: "string",
        }),
        defineField({
            name: "tersedia",
            title: "Tersedia",
            type: "boolean",
        }),
        defineField({
            name: "promo",
            title: "Promo",
            type: "boolean",
        }),
        defineField({
            name: "gambar",
            title: "Gambar",
            type: "image",
            options: {
                hotspot: true
            }
        }),
        defineField({
            name: "kategori",
            title: "Kategori",
            type: "reference",
            to: { type: "kategori" }
        }),
    ],
})