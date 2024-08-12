import { api } from './index'

export const productsApi = api.injectEndpoints({
    endpoints: (build) => ({
        getProducts: build.query({
            query: (params) => ({
                url: '/products',
                params
            }),
            providesTags: ["Products"]
        }),
        createProducts: build.mutation({
            query: (body) => ({
                url: "/products",
                method: "POST",
                body
            }),
            invalidatesTags: ["Products"]
        }),
        deleteProducts: build.mutation({
            query: (id) => ({
                url: `/products/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Products"]
        }),

    }),
})

export const {
    useGetProductsQuery,
    useCreateProductsMutation,
    useDeleteProductsMutation,
} = productsApi