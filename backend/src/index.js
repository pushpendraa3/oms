import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { prisma } from './prisma.js';
import productRoutes from './routes/products.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/products', productRoutes);

app.get("/health", async (req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1`;
    res.status(200).json({ status: "ok" });
  } catch (err) {
    res.status(500).json({ status: "db down" });
  }
});


async function startServer() {
  try {
    await prisma.$connect();
    console.log('✅ Database connected');

    app.listen(3000, () => {
      console.log('🚀 Server running on port 3000');
    });
  } catch (err) {
    console.error('❌ DB connection failed', err);
    process.exit(1);
  }
}

startServer();
