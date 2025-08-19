import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { checkoutSuccess, createCheckoutSession } from "../controllers/payment.controller.js";

const router = express.Router();

// Create Razorpay order (frontend expects /payments/create-order)
router.post("/create-order", protectRoute, createCheckoutSession);

// Verify Razorpay payment (frontend expects /payments/verify-payment)
router.post("/verify-payment", protectRoute, checkoutSuccess);

export default router;
