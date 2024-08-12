import express from "express"
import BlogsController from "../controller/blog.js";
import UsersController from "../controller/user.js"
import ProductsController from "../controller/products.js"
import { auth } from "../middleware/auth.js";
import { adminMiddleware } from "../middleware/admin-middleware.js";
import { ownerMiddleware } from "../middleware/owner-middleware.js";
import { upload } from "../middleware/uploader.js";
import { Products, validateBlog } from "../models/productsSchema.js";
const router = express.Router()

//blogs
router.get("/api/blogs", [auth], BlogsController.get)
router.post("/api/blogs", [auth], BlogsController.create)
router.delete("/api/blogs/:id", [auth], BlogsController.delete)
router.put("/api/blogs/:id", [auth], BlogsController.update)

//users
router.get('/api/profile', [auth], UsersController.getProfile)
router.get('/api/users', UsersController.getAllUsers)
router.get('/api/users/search', UsersController.getUserSearch)
router.post('/api/users/sign-up', UsersController.registerUser)
router.post('/api/users/sign-in', UsersController.loginUser)
router.patch('/api/users/:id', UsersController.updateUser)
router.delete('/api/users/:id', UsersController.delete)

//products
router.get('/api/products', ProductsController.get)
router.post("/api/products", [auth, upload.array("rasm")], async (req, res) => {
    try {

        let urls = req.files.map(i => `${req.protocol}://${req.get("host")}/upload/${i.filename}`)
        let { title, price, oldPrice, desc, info, category, rating, available, stock } = req.body

        let newProduct = {
            title,
            price,
            oldPrice,
            desc,
            info,
            category,
            rating,
            urls,
            available,
            stock,
            userId: req.user._id
        }

        const { error } = validateBlog(newProduct)
        if (error) {
            return res.status(400).json({ msg: error.details[0].message })
        }

        const product = await Products.create(newProduct)
        // res.json(product)

        res.status(201).json({
            msg: "Blog is created",
            variant: "success",
            payload: product
        })
    } catch {
        res.status(500).json({
            msg: "Server error",
            variant: "error",
            payload: null
        })
    }
})
router.delete('/api/products/:id', ProductsController.delete)

export default router

