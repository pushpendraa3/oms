import express, { type Request, type Response } from "express"
import { prisma } from "../prisma.js"
const orderRouter = express.Router()

type CreateOrderBody = {
    productId: number
    quantity: number
}

orderRouter.get("/", async (req: Request, res: Response) => {
    try {
        const orders = await prisma.order.findMany({
            include: {
                product: true
            }
        })
        res.status(200).json({ data: orders })
    } catch (error) {
        res.status(500).json({ msg: "fetch all orders failed" })
    }
})

orderRouter.post("/", async (req: Request, res: Response) => {
    const { productId, quantity } = req.body as CreateOrderBody

    if (productId === undefined || quantity === undefined) {
        return res.status(400).json({ msg: "productId and quantity required" })
    }

    try {
        const product = await prisma.product.findUnique({
            where: { id: productId }
        })

        if (!product) {
            return res.status(404).json({ msg: "product not found" })
        }
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