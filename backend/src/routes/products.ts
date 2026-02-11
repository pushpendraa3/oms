import express from 'express';
import { prisma } from '../prisma.js';

const productRouter = express.Router()

productRouter.get("/", async (req, res) => {
  try {
    const products = await prisma.product.findMany()
    res.status(200).json({ data: products })
  } catch (error) {
    res.status(500).json({ msg: "no product found" })
  }
})

productRouter.get("/:id", async (req, res) => {
  try {
    const id = Number(req.params.id)
    if (isNaN(id)) {
      return res.status(400).json({ msg: "invalid id" })
    }

    const productDetails = await prisma.product.findUnique({
      where: {
        id: id
      }
    })
    if (!productDetails) {
      return res.status(404).json({ msg: "product not found" })
    }
    res.status(200).json({ data: productDetails })
  } catch (error) {
    res.status(500).json({ msg: "error finding data" })
  }
})

productRouter.post("/", async (req, res) => {
  try {
    const { name, price, category } = req.body
    if (!name || price === undefined) {
      return res.status(400).json({ msg: "name and price required" })
    }

    const user = await prisma.product.create({
      data: {
        name,
        price,
        category
      }
    })

    res.status(201).json({ data: user })
  } catch (error) {
    res.status(500).json({ msg: "unable to post to the server" })
  }
})

productRouter.put("/:id", async (req, res) => {
  try {
    const id = Number(req.params.id)
    if (isNaN(id)) {
      return res.status(400).json({ msg: "invalid id" })
    }

    const existing = await prisma.product.findUnique({
      where: { id }
    })

    if (!existing) {
      return res.status(404).json({ msg: "product not found" })
    }

    const { name, price, category } = req.body

    const data = {}

    if (name !== undefined) data.name = name
    if (price !== undefined) data.price = price
    if (category !== undefined) data.category = category

    const updated = await prisma.product.update({
      where: { id },
      data
    })

    res.status(200).json({
      data: updated
    })
  } catch (error) {
    res.status(500).json({ msg: "cannot be updated" })
  }
})

productRouter.delete("/:id", async (req, res) => {
  try {
    const id = Number(req.params.id)
    if (isNaN(id)) {
      return res.status(400).json({ msg: "invalid id" })
    }
    const existing = await prisma.product.findUnique({
      where: { id }
    })

    if (!existing) {
      return res.status(404).json({ msg: "product not found" })
    }
    await prisma.product.delete({
      where: {
        id
      }
    })
    res.status(200).json({ data: null})
  } catch (error) {
    res.status(500).json({ msg: "error deleting data" })
  }
})

export default productRouter;
