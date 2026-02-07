import express from 'express';
import { prisma } from '../prisma.js';

const router = express.Router();

// POST /products
router.post('/', async (req, res) => {
  const { name, price, category } = req.body;

  const product = await prisma.product.create({
    data: {
      name,
      price,
      category
    }
  });

  res.status(201).json(product);
});

// GET /products
router.get('/', async (req, res) => {
  const products = await prisma.product.findMany();
  res.json(products);
});

export default router;
