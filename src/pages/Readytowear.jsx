// src/pages/ReadyToWear.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ReadyToWear() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Example API endpoint — replace with your own backend
    fetch("https://fakestoreapi.com/products/category/men's clothing")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  if (loading) {
    return <p className="text-center py-16 text-gray-500">Loading Ready to Wear...</p>;
  }

  return (
    <section className="px-8 py-16 bg-white text-black">
      <h2 className="text-3xl font-bold mb-8 text-center">READY TO WEAR</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {products.map((item) => (
          <Link to={`/readytowear/${item.id}`} key={item.id}>
            <div className="text-center cursor-pointer hover:opacity-90 transition">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-80 object-cover rounded-md"
              />
              <div className="mt-4">
                <h3 className="font-semibold text-sm tracking-wide">{item.title}</h3>
                <p className="text-gray-500 text-xs mt-1">Category: {item.category}</p>
                <p className="mt-2 font-medium">Rs.{(item.price * 280).toFixed(0)}</p>
                <span className="inline-block mt-2 text-xs font-semibold border border-gray-300 px-2 py-1">
                  NEW IN
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
