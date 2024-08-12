import { Blogs, validateBlog } from "../models/blogSchema.js"
import { Products } from "../models/productsSchema.js"

class ProductsController {
    async get(req, res) {
        try {
            const products = await Products.find().populate([
                { path: "userId", select: ["fname", "username"] }
            ]).sort({ createdAt: -1 })

            if (!products.length) {
                return res.status(400).json({
                    msg: "Products are not defined",
                    variant: "error",
                    payload: null
                })
            }
            res.status(200).json({
                msg: "All Blogs",
                variant: "success",
                payload: products
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
            const existProduct = await Products.findById(id)
            if (!existProduct) {
                return res.status(400).json({
                    msg: "Blog is not found",
                    variant: "warning",
                    payload: null
                })
            }
            const users = await Products.findByIdAndDelete(id, { new: true })

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

export default new ProductsController()