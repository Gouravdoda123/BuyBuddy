import axios from "axios";

const axiosInstance = axios.create({
  baseURL:
    import.meta.env.VITE_API_BASE_URL ||
    (import.meta.env.MODE === "development"
      ? "http://localhost:5001/api" // local backend
      : "https://buybuddy-270z.onrender.com/api"), // Render backend
  withCredentials: true, // send cookies to the server
});

export default axiosInstance;
