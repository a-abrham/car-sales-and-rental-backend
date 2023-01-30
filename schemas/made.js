import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'made',
  title: 'Manufacturer',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Manufacturer',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'manufacturerID',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'bio',
      title: 'Overall Description',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{title: 'Normal', value: 'normal'}],
          lists: [],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
