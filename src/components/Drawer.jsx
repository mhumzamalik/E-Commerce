// src/components/Drawer.jsx
export default function Drawer({ open, onClose, children }) {
  return (
    <>
      <div
        className={`fixed inset-0 bg-black z-40 transition-opacity duration-300 ${
          open ? "bg-opacity-40 opacity-70" : "bg-opacity-0 opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      ></div>

      <div
        className={`fixed top-0 right-0 h-full w-96 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-4 cursor-pointer text-gray-600 hover:text-black"
          onClick={onClose}
        >
          ✕
        </button>
        <div className="p-6">{children}</div>
      </div>
    </>
  );
}
