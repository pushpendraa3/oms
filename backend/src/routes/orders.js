import express from "express"
import { prisma } from "../prisma.js"
const orderRouter = express.Router()

orderRouter.get("/", async (req, res) => {
    try {
        const orders = await prisma.order.findMany({
            include: {
                product: true
            }
        })
        res.status(200).json({ orders })
    } catch (error) {
        res.status(500).json({ msg: "fetch all orders failed" })
    }
})

orderRouter.post("/", async (req, res) => {
    const { productId, quantity } = req.body
    console.log(productId, quantity)
    try {
        await prisma.order.create({
            data: {
                productId,
                quantity
            }
        })
        res.status(201).json({ msg: "order created" })
    } catch (error) {
        res.status(500).json({ msg: "order creation error", error })
    }
})

export default orderRouter;