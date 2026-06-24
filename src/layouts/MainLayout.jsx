// src/layouts/MainLayout.jsx
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";

export default function MainLayout({ children }) {
  const location = useLocation();

  return (
    <div className="font-sans min-h-screen flex flex-col">
      <Navbar />
      <main className="pt-24 flex-grow">{children}</main>
      {/* Show footer on all pages except home */}
      {location.pathname !== "/" && <Footer />}
    </div>
  );
}
