import express, { type Request, type Response } from 'express';
// import cors from 'cors';
import dotenv from 'dotenv';
import { prisma } from './prisma.js';
import productRouter from './routes/products.js';
import orderRouter from './routes/orders.js';

dotenv.config();

const app = express();
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  if (req.method === 'OPTIONS') res.sendStatus(200);
  else next();
});

app.use(express.json());

app.use('/products', productRouter);
app.use('/orders', orderRouter);

app.get("/health", async (req: Request, res: Response) => {
  try {
    await prisma.$queryRaw`SELECT 1`
    res.status(200).json({ status: "ok" })
  } catch (error) {
    res.status(500).json({ status: "db down" })
  }
})


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
