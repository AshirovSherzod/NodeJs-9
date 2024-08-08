import { api } from './index'

export const userApi = api.injectEndpoints({
  endpoints: (build) => ({
    getBlogs: build.query({
      query: (params) => ({
        url: '/blogs',
        params
      }),
      providesTags: ["User"]
    }),
    getProfile: build.query({
      query: () => ({
        url: "/profile"
      }),
      providesTags: ["Profile"]
    }),
    signIn: build.mutation({
      query: (body) => ({
        url: "/users/sign-in",
        method: "POST",
        body
      }),
      invalidatesTags: ["User"]
    }),
    createBlogs: build.mutation({
      query: (body) => ({
        url: "/blogs",
        method: "POST",
        body
      }),
      invalidatesTags: ["User"]
    }),
    deleteBlogs: build.mutation({
      query: (id) => ({
        url: `/blogs/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["User"]
    }),
    editBlog: build.mutation({
      query: (id) => ({
        url: `/blogs/${id}`,
        method: "PUT",
      }),
      invalidatesTags: ["User"]
    }),
  }),
})

export const {
  useGetBlogsQuery,
  useDeleteBlogsMutation,
  useSignInMutation,
  useGetProfileQuery,
  useCreateBlogsMutation,
  useEditBlogMutation
} = userApi