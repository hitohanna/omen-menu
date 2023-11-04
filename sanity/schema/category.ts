import { defineField, defineType } from "sanity";

export default defineType({
    name: "kategori",
    title: "Kategori",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
        }),
        defineField({
            name: "seri",
            title: "Seri",
            type: "string",
        }),
        defineField({
            name: "gambar",
            title: "Gambar",
            type: "image",
            options: {
                hotspot: true
            }
        }),
    ],
})