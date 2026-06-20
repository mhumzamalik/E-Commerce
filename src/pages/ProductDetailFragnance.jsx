// src/components/ProductDetail.jsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";


export default function ProductDetailMen() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
  fetch(`https://dummyjson.com/products/${id}`)
    .then((res) => res.json())
    .then((data) => {
      setProduct(data);
      setLoading(false);
    });
}, [id]);

  if (loading) {
    return <p className="text-center py-16 text-gray-500">Loading product...</p>;
  }

  return (
    <section className="px-8 py-16 bg-white text-black grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Left: Product Image */}
      <div>
        <img src={product.thumbnail} alt={product.title} />
      </div>

      {/* Right: Product Info */}
      <div>
        <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
        <p className="text-lg mb-4">Rs.{(product.price * 280).toFixed(0)}</p>
        <p className="text-sm text-gray-500 mb-6">Category: {product.category}</p>

        <button 
        onClick={() => addToCart(product)}
        className="bg-black cursor-pointer text-white px-6 py-3 font-semibold hover:bg-gray-800 transition">
          ADD TO BAG
        </button>

        <div className="mt-8">
          <h3 className="font-semibold mb-2">DETAILS</h3>
          <p className="text-sm text-gray-700">{product.description}</p>
        </div>
      </div>
    </section>
  );
}
