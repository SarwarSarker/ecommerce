
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_APP_BASE_URL }),
  keepUnusedDataFor: 30,
  endpoints: (builder) => ({
    getProduct: builder.query({
      query: () => "products?limit=10&sort=-id",
      keepUnusedDataFor: 5,
    }),
    getProductCategories: builder.query({
      query: () => "products/categories",
      keepUnusedDataFor: 5,
    }),
    productByCategory: builder.query({
      query: (name) => `products/category/${name}?limit=5`,
    }),
    productById: builder.query({
      query: (id) => `products/${id}`,
    }),
  }),
})

export const { useGetProductQuery , useGetProductCategoriesQuery, useProductByCategoryQuery, useProductByIdQuery } = productApi