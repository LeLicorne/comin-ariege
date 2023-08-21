import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { NewsletterSub } from '../models/contact';
import { Category, Product } from '../models/shop';

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_SERVER_URL }),
  reducerPath: 'shopApi',
  tagTypes: ['Category', 'Product', 'Contact', 'Admin'],
  endpoints: (build) => ({
    subNewsletter: build.mutation<Response, Partial<NewsletterSub>>({
      query: (body) => ({
        url: `contact/newsletter/register`,
        method: 'POST',
        body,
      }),
    }),
    getCategories: build.query<Category[], void>({
      query: () => {
        return {
          url: 'shop/categories',
          method: 'GET',
        };
      },
      providesTags: ['Category'],
    }),
    getProductById: build.query<Product, { productId: string | undefined }>({
      query: ({ productId }) => {
        if (!productId) {
          throw new Error('Product ID is required');
        }
        return {
          url: `shop/product/${productId}`,
        };
      },
      providesTags: ['Product'],
    }),
    getProducts: build.query<
      { products: Product[]; count: number },
      { categoryId?: string; subcategoryId?: string; page: string }
    >({
      query: ({ categoryId, subcategoryId, page }) => {
        if (!page) {
          throw new Error('Page is required');
        }

        return {
          url: `shop/products/${categoryId}/${subcategoryId}/${page}`,
          method: 'GET',
        };
      },
      providesTags: ['Product'],
    }),
    addCategory: build.mutation<void, { name: string; imageUrl: string; subcategories: string[] }>({
      query: (body) => ({
        url: 'admin/categories/add',
        method: 'POST',
        body,
      }),
    }),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getAdminCategories: build.query<any[], void>({
      query: () => {
        return {
          url: 'admin/categories',
          method: 'GET',
        };
      },
      providesTags: ['Admin'],
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetProductByIdQuery,
  useGetProductsQuery,
  useGetAdminCategoriesQuery,
  useSubNewsletterMutation,
  useAddCategoryMutation,
} = api;
