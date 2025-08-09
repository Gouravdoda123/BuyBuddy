import { create } from "zustand";
import toast from "react-hot-toast";
import axios from "../lib/axios";

export const useProductStore = create((set) => ({
	products: [],
	loading: false,
	isLoading: false,
	setProducts: (products) => set({ products }),
	createProduct: async (productData) => {
		set({ loading: true, isLoading: true });
		try {
			const res = await axios.post("/products", productData);
			set((prevState) => ({
				products: [...prevState.products, res.data],
				loading: false,
				isLoading: false,
			}));
		} catch (error) {
			toast.error(error.response?.data?.error || "Failed to create product");
			set({ loading: false, isLoading: false });
		}
	},
	fetchAllProducts: async () => {
		set({ loading: true, isLoading: true });
		try {
			const response = await axios.get("/products");
			set({ products: response.data.products, loading: false, isLoading: false });
		} catch (error) {
			set({ error: "Failed to fetch products", loading: false, isLoading: false });
			toast.error(error.response?.data?.error || "Failed to fetch products");
		}
	},
	fetchProductsByCategory: async (category) => {
		set({ loading: true, isLoading: true });
		try {
			const response = await axios.get(`/products/category/${category}`);
			set({ products: response.data.products, loading: false, isLoading: false });
		} catch (error) {
			set({ error: "Failed to fetch products", loading: false, isLoading: false });
			toast.error(error.response?.data?.error || "Failed to fetch products");
		}
	},
	deleteProduct: async (productId) => {
		set({ loading: true, isLoading: true });
		try {
			await axios.delete(`/products/${productId}`);
			set((prevState) => ({
				products: prevState.products.filter((product) => product._id !== productId),
				loading: false,
				isLoading: false,
			}));
		} catch (error) {
			set({ loading: false, isLoading: false });
			toast.error(error.response?.data?.error || "Failed to delete product");
		}
	},
	toggleFeaturedProduct: async (productId) => {
		set({ loading: true, isLoading: true });
		try {
			const response = await axios.patch(`/products/${productId}`);
			// this will update the isFeatured prop of the product
			set((prevState) => ({
				products: prevState.products.map((product) =>
					product._id === productId ? { ...product, isFeatured: response.data.isFeatured } : product
				),
				loading: false,
				isLoading: false,
			}));
		} catch (error) {
			set({ loading: false, isLoading: false });
			toast.error(error.response?.data?.error || "Failed to update product");
		}
	},
	fetchFeaturedProducts: async () => {
		set({ loading: true, isLoading: true });
		try {
			const response = await axios.get("/products/featured");
			// backend now returns { products: [...] }
			set({ products: response.data.products, loading: false, isLoading: false });
		} catch (error) {
			set({ error: "Failed to fetch products", loading: false, isLoading: false });
			console.log("Error fetching featured products:", error);
			toast.error(error.response?.data?.error || "Failed to fetch featured products");
		}
	},
}));
