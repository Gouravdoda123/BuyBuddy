import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRoutes from "./routes/auth.route.js";
import productRoutes from "./routes/product.route.js";
import cartRoutes from "./routes/cart.route.js";
import couponRoutes from "./routes/coupon.route.js";
import paymentRoutes from "./routes/payment.route.js";
import analyticsRoutes from "./routes/analytics.route.js";

import { connectDB } from "./lib/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json({ limit: "10mb" }));
app.use(cookieParser());

// CORS configuration for frontend + localhost during dev
const FRONTEND_URLS = [
  "http://localhost:5173",
  process.env.FRONTEND_URL // e.g., https://buy-buddy-neon.vercel.app
];

app.use(
  cors({
    origin: FRONTEND_URLS,
    credentials: true, // allow cookies
  })
);

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/coupons", couponRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/analytics", analyticsRoutes);

// Start server and connect to MongoDB
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  connectDB();
});
