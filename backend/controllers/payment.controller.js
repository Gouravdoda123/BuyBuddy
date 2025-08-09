import dotenv from "dotenv";
import Razorpay from "razorpay";

dotenv.config();

// Create Checkout Session
export const createCheckoutSession = async (req, res) => {
  try {
    const { amount } = req.body;

    // Validate amount
    if (!amount || isNaN(amount) || amount <= 0) {
      return res.status(400).json({
        success: false,
        message: "Invalid amount provided",
      });
    }

    // Ensure Razorpay keys exist
    if (!process.env.RAZORPAY_ID_KEY || !process.env.RAZORPAY_SECRET_KEY) {
      return res.status(500).json({
        success: false,
        message: "Razorpay API keys are missing in .env file",
      });
    }

    // Initialize Razorpay instance
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_ID_KEY,
      key_secret: process.env.RAZORPAY_SECRET_KEY,
    });

    // Order options
    const options = {
      amount: Number(amount) * 100, // convert to paise
      currency: "INR",
      receipt: `receipt_order_${Date.now()}`,
    };

    // Create order in Razorpay
    const order = await razorpay.orders.create(options);

    res.status(200).json({
      success: true,
      key: process.env.RAZORPAY_ID_KEY, // send key to frontend
      order,
    });
  } catch (error) {
    console.error("Error creating Razorpay order:", error);
    res.status(500).json({
      success: false,
      message: "Failed to create Razorpay order",
    });
  }
};

// Handle Checkout Success
export const checkoutSuccess = async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return res.status(400).json({
        success: false,
        message: "Payment details missing",
      });
    }

    // In real projects: verify payment signature here using crypto

    res.status(200).json({
      success: true,
      message: "Payment verified successfully",
      orderId: razorpay_order_id,
      paymentId: razorpay_payment_id,
    });
  } catch (error) {
    console.error("Error verifying payment:", error);
    res.status(500).json({
      success: false,
      message: "Payment verification failed",
    });
  }
};
