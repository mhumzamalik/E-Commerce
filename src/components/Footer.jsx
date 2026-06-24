// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-black text-white py-6 mt-12">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <p className="text-sm">&copy; 2026 MARIA. All rights reserved.</p>
        <ul className="flex space-x-6 text-sm">
          <li><a href="/about" className="hover:underline">About Us</a></li>
          <li><a href="/contact" className="hover:underline">Contact</a></li>
          <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
        </ul>
      </div>
    </footer>
  );
}
