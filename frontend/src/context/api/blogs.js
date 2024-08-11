import { api } from './index'

export const blogApi = api.injectEndpoints({
  endpoints: (build) => ({
    getBlogs: build.query({
      query: (params) => ({
        url: '/blogs',
        params
      }),
      providesTags: ["Blog"]
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
      invalidatesTags: ["Blog"]
    }),
    deleteBlogs: build.mutation({
      query: (id) => ({
        url: `/blogs/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Blog"]
    }),
    editBlog: build.mutation({
      query: (id) => ({
        url: `/blogs/${id}`,
        method: "PUT",
      }),
      invalidatesTags: ["Blog"]
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
} = blogApi