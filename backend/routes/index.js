import express from "express"
import BlogsController from "../controller/blog.js";
import UsersController from "../controller/user.js"
import { auth } from "../middleware/auth.js";
import { adminMiddleware } from "../middleware/admin-middleware.js";
import { ownerMiddleware } from "../middleware/owner-middleware.js";
const router = express.Router()

router.get("/api/blogs", [auth], BlogsController.get)
router.post("/api/blogs", [auth], BlogsController.create)
router.delete("/api/blogs/:id", [auth], BlogsController.delete)
router.put("/api/blogs/:id", [auth], BlogsController.update)

router.get('/api/profile', [auth], UsersController.getProfile)
router.get('/api/users', UsersController.getAllUsers)
router.get('/api/users/search', UsersController.getUserSearch)
router.post('/api/users/sign-up', UsersController.registerUser)
router.post('/api/users/sign-in', UsersController.loginUser)
router.patch('/api/users/:id', UsersController.updateUser)
router.delete('/api/users/:id', UsersController.delete)

export default router

