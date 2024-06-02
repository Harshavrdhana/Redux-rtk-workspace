import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: (builder) => ({
    //Get All Products
    getAllProduct: builder.query({
      query: () => "/products",
    }),

    // Get product by Id
    getProductById: builder.query({
      query: (id) => `/product/${id}`,
    }),

    //Add new Product
    addNewProduct: builder.mutation({
      query: (newProduct) => ({
        url: `/products/add`,
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: newProduct,
      }),
    }),

    //Update specific product
    updateProduct: builder.mutation({
      query: ({ id, updatedProduct }) => ({
        url: `/products/${id}`,
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: updatedProduct,
      }),
    }),

    //Delete Product
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

// `use${ GetAllProduct} Query`

export const {
  useGetAllProductQuery,
  useGetProductByIdQuery,
  useAddNewProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productsApi;
