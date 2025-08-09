import React, { useEffect, useState } from "react";
import axios from "axios";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const fetchProducts = async () => {
  try {
    const res = await axios.get("http://localhost:5001/api/products");
    setProducts(res.data.products || []);
  } catch (err) {
    console.error("Error fetching products:", err);
    setProducts([]);
  } finally {
    setLoading(false);
  }
};


    fetchProducts();
  }, []);

  if (loading) {
    return <div className="p-4 text-center">Loading products...</div>;
  }

  if (!products || products.length === 0) {
    return <div className="p-4 text-center">No products available</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div
            key={product._id}
            className="border p-4 rounded shadow hover:shadow-lg transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover mb-2 rounded"
            />
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-gray-700">{product.description}</p>
            <p className="mt-2 font-bold">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
