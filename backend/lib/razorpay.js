import Razorpay from "razorpay";
import dotenv from "dotenv";
dotenv.config();
export const razorpay = new Razorpay(process.env.RAZORPAY_SECRET_KEY);
