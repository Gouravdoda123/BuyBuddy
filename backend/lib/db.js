import mongoose from "mongoose";

export const connectDB = async () => {
	try {
		console.log("MONGO_URI from env:", process.env.MONGO_URI); // 👈 check the value
		const conn = await mongoose.connect(process.env.MONGO_URI);
		console.log(`MongoDB connected: ${conn.connection.host}`);
	} catch (error) {
		console.log("Error connecting to MONGODB", error.message);
		process.exit(1);
	}
};
