import { api } from './index'

export const userApi = api.injectEndpoints({
  endpoints: (build) => ({
    getUsers: build.query({
      query: (params) => ({
        url: '/users',
        params
      }),
      providesTags: ["User"]
    }),
    createUsers: build.mutation({
      query: (body) => ({
        url: "/users",
        method: "POST",
        body
      }),
      invalidatesTags: ["User"]
    }),
    deleteUsers: build.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["User"]
    }),
    editUsers: build.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: "PUT",
      }),
      invalidatesTags: ["User"]
    }),
  }),
})

export const {
  useGetUsersQuery,
  useCreateUsersMutation,
  useDeleteUsersMutation,
  useEditUsersMutation,
} = userApi