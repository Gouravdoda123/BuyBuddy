import Coupon from "../models/coupon.model.js";
import Order from "../models/order.model.js";
import razorpay from "../lib/razorpay.js";
import crypto from "crypto";

export const createCheckoutSession = async (req, res) => {
	try {
		const { products, couponCode } = req.body;

		if (!Array.isArray(products) || products.length === 0) {
			return res.status(400).json({ error: "Invalid or empty products array" });
		}

		let totalAmount = 0;

		products.forEach((product) => {
			const amount = Math.round(product.price * 100); // amount in paise
			totalAmount += amount * product.quantity;
		});

		let coupon = null;
		if (couponCode) {
			coupon = await Coupon.findOne({ code: couponCode, userId: req.user._id, isActive: true });
			if (coupon) {
				totalAmount -= Math.round((totalAmount * coupon.discountPercentage) / 100);
			}
		}

		// Create Razorpay order
		const options = {
			amount: totalAmount,
			currency: "INR",
			receipt: `receipt_${Date.now()}`,
			notes: {
				userId: req.user._id.toString(),
				couponCode: couponCode || "",
				products: JSON.stringify(
					products.map((p) => ({
						id: p._id,
						quantity: p.quantity,
						price: p.price,
					}))
				),
			},
		};

		const order = await razorpay.orders.create(options);

		if (totalAmount >= 20000) {
			await createNewCoupon(req.user._id);
		}

		// ✅ Return in the format frontend expects
		res.status(200).json({
			id: order.id,
			amount: order.amount,
			currency: order.currency,
		});
	} catch (error) {
		console.error("Error processing checkout:", error);
		res.status(500).json({ message: "Error processing checkout", error: error.message });
	}
};

export const checkoutSuccess = async (req, res) => {
	try {
		const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

		const sign = razorpay_order_id + "|" + razorpay_payment_id;
		const expectedSign = crypto
			.createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
			.update(sign.toString())
			.digest("hex");

		if (razorpay_signature !== expectedSign) {
			return res.status(400).json({ message: "Invalid signature, payment verification failed" });
		}

		const order = await razorpay.orders.fetch(razorpay_order_id);

		if (order.notes && order.notes.couponCode) {
			await Coupon.findOneAndUpdate(
				{
					code: order.notes.couponCode,
					userId: order.notes.userId,
				},
				{
					isActive: false,
				}
			);
		}

		const products = JSON.parse(order.notes.products);
		const newOrder = new Order({
			user: order.notes.userId,
			products: products.map((product) => ({
				product: product.id,
				quantity: product.quantity,
				price: product.price,
			})),
			totalAmount: order.amount / 100,
			razorpayOrderId: razorpay_order_id,
			razorpayPaymentId: razorpay_payment_id,
			razorpaySignature: razorpay_signature, // ✅ fix 500 error
		});

		await newOrder.save();

		res.status(200).json({
			success: true,
			message: "Payment verified, order created, and coupon deactivated if used.",
			orderId: newOrder._id,
		});
	} catch (error) {
		console.error("Error processing successful checkout:", error);
		res.status(500).json({ message: "Error processing successful checkout", error: error.message });
	}
};


async function createNewCoupon(userId) {
	await Coupon.findOneAndDelete({ userId });

	const newCoupon = new Coupon({
		code: "GIFT" + Math.random().toString(36).substring(2, 8).toUpperCase(),
		discountPercentage: 10,
		expirationDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
		userId: userId,
	});

	await newCoupon.save();

	return newCoupon;
}
