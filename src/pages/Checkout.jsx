// src/pages/Checkout.jsx
import { useCart } from "../context/CartContext";

export default function Checkout() {
  const { cartItems, removeFromCart } = useCart();

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * 280, 0);

  return (
    <section className="px-8 py-16 bg-white text-black">
      <h2 className="text-3xl font-bold mb-8">Checkout</h2>

      {/* Cart Summary */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Your Items</h3>
        {cartItems.length === 0 ? (
          <p className="text-gray-500">Your bag is empty.</p>
        ) : (
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b pb-2"
              >
                <div className="flex items-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded mr-3"
                  />
                  <div>
                    <p className="text-sm font-medium">{item.title}</p>
                    <p className="text-xs text-gray-500">
                      Rs.{(item.price * 280).toFixed(0)}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 text-xs"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
        <div className="flex justify-between font-semibold mt-4">
          <span>Subtotal</span>
          <span>Rs.{subtotal.toFixed(0)}</span>
        </div>
      </div>

      {/* Shipping Info */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Shipping Information</h3>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border px-4 py-2"
          />
          <input
            type="text"
            placeholder="Address"
            className="w-full border px-4 py-2"
          />
          <input
            type="text"
            placeholder="City"
            className="w-full border px-4 py-2"
          />
          <input
            type="text"
            placeholder="Postal Code"
            className="w-full border px-4 py-2"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="w-full border px-4 py-2"
          />
        </form>
      </div>

      {/* Payment Info */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Payment Method</h3>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Card Number"
            className="w-full border px-4 py-2"
          />
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="Expiry Date"
              className="w-1/2 border px-4 py-2"
            />
            <input
              type="text"
              placeholder="CVV"
              className="w-1/2 border px-4 py-2"
            />
          </div>
        </form>
      </div>

      {/* Place Order */}
      <button className="w-full bg-black text-white py-3 font-semibold hover:bg-gray-800 transition">
        Place Order
      </button>
    </section>
  );
}
