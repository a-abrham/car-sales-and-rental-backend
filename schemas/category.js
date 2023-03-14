import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'category',
  title: 'Status',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Status',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
  ],
})