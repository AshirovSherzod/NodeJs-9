import { Blogs, validateBlog } from "../models/blogSchema.js"

class BlogsController {
    async get(req, res) {
        try {
            const blogs = await Blogs.find().populate([
                { path: "userId", select: ["fname", "username"] }
            ]).sort({ createdAt: -1 })
            if (!blogs.length) {
                return res.status(400).json({
                    msg: "Blog is not defined",
                    variant: "error",
                    payload: null
                })
            }
            res.status(200).json({
                msg: "All Blogs",
                variant: "success",
                payload: blogs
            })
        } catch {
            res.status(500).json({
                msg: "Server error",
                variant: "error",
                payload: null
            })
        }
    }
    async create(req, res) {
        try {
            const { error } = validateBlog(req.body)
            if (error) {
                return res.status(400).json({
                    msg: error.details[0].message,
                    variant: "warning",
                    payload: null
                })
            }
            const blog = await Blogs.create({ ...req.body, userId: req.user._id })
            res.status(201).json({
                msg: "Blog is created",
                variant: "success",
                payload: blog
            })
        } catch {
            res.status(500).json({
                msg: "Server error",
                variant: "error",
                payload: null
            })
        }
    }
    async delete(req, res) {
        try {
            const { id } = req.params
            const existBlog = await Blogs.findById(id)
            if (!existBlog) {
                return res.status(400).json({
                    msg: "Blog is not found",
                    variant: "warning",
                    payload: null
                })
            }
            const users = await Blogs.findByIdAndDelete(id, { new: true })

            res.status(200).json({
                msg: "Blog is deleted",
                variant: "success",
                payload: users
            })
        } catch {
            res.status(500).json({
                msg: "Server error",
                variant: "error",
                payload: null
            })
        }
    }
    async update(req, res) {
        try {
            const { id } = req.params
            const user = await Blogs.findByIdAndUpdate(id, req.body, { new: true }).select("-password")

            res.status(200).json({
                msg: "User is updated",
                variant: "success",
                payload: user
            })
        } catch {
            res.status(500).json({
                msg: "Server error",
                variant: "error",
                payload: null
            })
        }
    }
}

export default new BlogsController()