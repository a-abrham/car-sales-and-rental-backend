import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'cars',
  title: 'Cars',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Model',
      type: 'string',
    }),
    defineField({
      name: 'carID',
      title: 'CarID',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'made',
      title: 'Manufacturer',
      type: 'reference',
      to: {type: 'made'},
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image'
    }),
    defineField({
        name: 'image',
        title: 'Images',
        type: 'array',
        of: [{ type: 'image' }]
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'rentalPrice',
      title: 'Rental Price',
      type: 'number'
    }),
    defineField({
      name: 'people',
      title: 'People',
      type: 'number'
    }),
    defineField({
      name: 'cc',
      title: 'cc',
      type: 'number'
    }),
    defineField({
      name: 'salesPrice',
      title: 'Sales Price',
      type: 'number'
    }),
    defineField({
      name: 'fuleType',
      title: 'Fule Type',
      type: 'string'
    }),
    defineField({
      name: 'transmission',
      title: 'Transmission',
      type: 'string'
    }),
    defineField({
      name: 'year',  
      title: 'Year',
      type: 'number'
    }),
    defineField({
      name: 'TotalRentals',
      title: 'Total Rented days',
      type: 'number'
    })
  ],


  preview: {
    select: {
      title: 'title',
      made: 'made.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {made} = selection
      return {...selection, subtitle: made && `by ${made}`}
    },
  },
})
