import express from 'express';
import { prisma } from '../prisma.js';

const pruductRouter = express.Router()

pruductRouter.get("/", async (req, res) => {
  try {
    const products = await prisma.product.findMany()
    res.status(200).json({ products })
  } catch (error) {
    res.status(500).json({ msg: "no product found" })
  }
})

pruductRouter.get("/:id", async (req, res) => {
  try {
    const id = Number(req.params.id)
    const productDetails = await prisma.product.findUnique({
      where: {
        id: id
      }
    })
    res.status(200).json({ product: productDetails })
  } catch (error) {
    res.status(500).json({ msg: "error finding data" })
  }
})

pruductRouter.post("/", async (req, res) => {
  try {
    const { name, price, category } = req.body

    await prisma.product.create({
      data: {
        name,
        price,
        category
      }
    })

    res.status(201).json({ msg: "user created" })
  } catch (error) {
    res.status(500).json({ msg: "unable to post to he server" })
  }
})

pruductRouter.put("/:id", async (req, res) => {
  try {
    const id = Number(req.params.id)
    const { name, price, category } = req.body

    const writeDB = {}
    if (name) writeDB.name = name
    if (price) writeDB.price = price
    if (category) writeDB.category = category

    await prisma.product.update({
      where: {
        id
      },
      data: {
        name: writeDB.name,
        price: writeDB.price,
        category: writeDB.category
      }
    })
    res.status(200).json({
      msg: "product updated",
      data: writeDB
    })
  } catch (error) {
    res.status(500).json({ msg: "cannot be updated" })
  }
})

pruductRouter.delete("/:id", async (req, res) => {
  try {
    const id = Number(req.params.id)
    await prisma.product.delete({
      where: {
        id: id
      }
    })
    res.status(200).json({ msg: "product deleted" })
  } catch (error) {
    res.status(500).json({ msg: "error deleting data" })
  }
})

export default pruductRouter;
