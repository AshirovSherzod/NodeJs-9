import { Schema, model } from "mongoose"
import Joi from "joi"

const productsSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    oldPrice: {
        type: Number,
        required: false,
        default: 0
    },
    desc: {
        type: String,
        required: true
    },
    info: {
        type: Array,
        required: false,
        default: []
    },
    category: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    urls: {
        type: Array,
        required: true
    },
    available: {
        type: Boolean,
        required: false,
        default: false
    },
    stock: {
        type: Number,
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
}, { timestamps: true })

export const Products = model("products", productsSchema)

export const validateBlog = (body) => {
    const schema = Joi.object({
        title: Joi.string().required(),
        price: Joi.number().required(),
        oldPrice: Joi.number().allow(0),
        desc: Joi.string().required(),
        info: Joi.array(),
        category: Joi.string().required(),
        rating: Joi.number().required(),
        urls: Joi.array(),
        available: Joi.boolean().allow(false),
        stock: Joi.number().required(),
        userId: Joi.string(),
    })
    return schema.validate(body)
}


