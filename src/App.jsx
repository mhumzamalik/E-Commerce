import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Women from "./pages/Women"
import Men from "./pages/Men"
import Fragnance from "./pages/Fragnance"
import Newin from "./pages/Newin"
import Readytowear from "./pages/Readytowear"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/women" element={<div className="pt-25"><Women /></div>} />
        <Route path="/men" element={<div className="pt-25"><Men /></div>} />
        <Route path="/fragnance" element={<div className="pt-25"><Fragnance /></div>} />
        <Route path="/newin" element={<div className="pt-25"><Newin /></div>} />
        <Route path="/readytowear" element={<div className="pt-25 disabled"><Readytowear /></div>} />

      </Routes>
    </>
  )
}

export default App