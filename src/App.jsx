import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Women from "./pages/Women"
import Men from "./pages/Men"
import Fragnance from "./pages/Fragnance"
import Newin from "./pages/Newin"
import Readytowear from "./pages/Readytowear"
import ProductDetail from "./pages/ProductDetail"
import ProductDetailMen from "./pages/ProductDetailMen";
import ProductDetailFragnance from "./pages/ProductDetailFragnance";
import ProductDetailReady from "./pages/ProductDetailReady";
import MainLayout from "./layouts/MainLayout";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/women" element={<div className="pt-25"><MainLayout><Women /></MainLayout></div>} />
        <Route path="/men" element={<div className="pt-25"><MainLayout><Men /></MainLayout></div>} />
        <Route path="/fragnance" element={<div className="pt-25"><MainLayout><Fragnance /></MainLayout></div>} />
        <Route path="/newin" element={<div className="pt-25"><MainLayout><Newin /></MainLayout></div>} />
        <Route path="/readytowear" element={<div className="pt-25 disabled"><MainLayout><Readytowear /></MainLayout></div>} />
        <Route path="/product/:id" element={<div className="pt-25"><MainLayout><ProductDetail /></MainLayout></div>} />
        <Route path="/product-men/:id" element={<div className="pt-25"><MainLayout><ProductDetailMen /></MainLayout></div>} />
        <Route path="/product-fragnance/:id" element={<div className="pt-25"><MainLayout><ProductDetailFragnance /></MainLayout></div>}/>
        <Route path="/readytowear/:id" element={<div className="pt-25"><MainLayout><ProductDetailReady /></MainLayout></div>}/>
        <Route path="/checkout" element={<div className="pt-10"><Checkout /></div>}/>
        

      </Routes>
    </>
  )
}

export default App