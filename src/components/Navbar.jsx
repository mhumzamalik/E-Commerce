// src/components/Navbar.jsx
import { useState } from "react";
import { FiMenu, FiSearch, FiUser, FiShoppingBag } from "react-icons/fi";
import Drawer from "./Drawer";
import { Link, useLocation } from "react-router-dom";
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const location = useLocation();
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const isDrawerOpen = menuOpen || searchOpen || userOpen || cartOpen;

  return (
    <>
      <nav
        className={`fixed top-0 w-full px-6 py-4 flex justify-between items-center transition-all duration-300 ${
          isDrawerOpen && location.pathname !== "/" ? "z-0" : "z-50"
        } ${
          location.pathname === "/"
            ? "bg-transparent text-white"
            : "bg-white text-black"
        }`}
      >
        <div className="flex items-center space-x-4">
          <FiMenu
            className="text-5xl cursor-pointer"
            onClick={() => setMenuOpen(true)}
          />
          <Link to="/">
            <h1 className="text-6xl font-bold uppercase tracking-widest">
              SAPPHIRE
            </h1>
          </Link>
          {location.pathname === "/" && (
            <div className="absolute top-20 left-30 text-xl">
              <ul className="flex cursor-pointer gap-7 uppercase">
                <li className="hover:underline">
                  <Link to="/women">Woman</Link>
                </li>
                <li className="hover:underline">
                  <Link to="/men">Man</Link>
                </li>
                <li className="hover:underline">
                  <Link to="/fragnance">Fragnance</Link>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-6">
          <FiSearch
            className="text-2xl cursor-pointer"
            onClick={() => setSearchOpen(true)}
          />
          <FiUser
            className="text-2xl cursor-pointer"
            onClick={() => setUserOpen(true)}
          />
          <div className="relative">
            <FiShoppingBag
              className="text-2xl cursor-pointer"
              onClick={() => setCartOpen(true)}
            />
          </div>
        </div>
      </nav>

      {/* Hamburger Drawer */}
      <Drawer open={menuOpen} onClose={() => setMenuOpen(false)}>
        <h2 className="text-5xl font-bold mb-4">SAPPHIRE</h2>
        <ul className="flex gap-6 text-2xl font-bold mb-3">
          <li className="hover:underline">
            <Link to="/women" onClick={() => setMenuOpen(false)}>Woman</Link>
          </li>
          <li className="hover:underline" >
            <Link to="/men" onClick={() => setMenuOpen(false)}>Man</Link>
          </li>
          <li className="hover:underline">
            <Link to="/fragnance" onClick={() => setMenuOpen(false)}>Fragnance</Link>
          </li>
        </ul>
        <ul className="space-y-4 text-lg">
          <li>
            <Link to="/newin" onClick={() => setMenuOpen(false)}>
              New In
            </Link>
          </li>
          <li>
            <Link to="/readytowear" onClick={() => setMenuOpen(false)}>
              Ready to wear
            </Link>
          </li>
          <li>
            <Link
              to=""
              onClick={(e) => e.preventDefault()}
              className="pointer-events-none opacity-50"
            >
              Unstiched
            </Link>
          </li>
          <li>
            <Link
              to=""
              onClick={(e) => e.preventDefault()}
              className="pointer-events-none opacity-50"
            >
              West
            </Link>
          </li>
          <li>
            <Link
              to=""
              onClick={(e) => e.preventDefault()}
              className="pointer-events-none opacity-50"
            >
              Sleep Wear
            </Link>
          </li>
          <li>
            <Link
              to=""
              onClick={(e) => e.preventDefault()}
              className="pointer-events-none opacity-50"
            >
              Modest Wear
            </Link>
          </li>
          <li>
            <Link
              to=""
              onClick={(e) => e.preventDefault()}
              className="pointer-events-none opacity-50"
            >
              Accessories
            </Link>
          </li>
          <li>
            <Link
              to=""
              onClick={(e) => e.preventDefault()}
              className="pointer-events-none opacity-50"
            >
              View All
            </Link>
          </li>
          <li>
            <Link
              to=""
              onClick={(e) => e.preventDefault()}
              className="pointer-events-none opacity-50"
            >
              Monochrome Must-Haves
            </Link>
          </li>
          <li>
            <Link
              to=""
              onClick={(e) => e.preventDefault()}
              className="pointer-events-none opacity-50"
            >
              Special Offers
            </Link>
          </li>
        </ul>
        <p className="mt-6 text-gray-600">
          Discover our latest monochrome must-haves.
        </p>
      </Drawer>

      {/* Search Drawer */}
      <Drawer open={searchOpen} onClose={() => setSearchOpen(false)}>
        <h2 className="text-xl font-bold mb-4">Search</h2>
        <input
          type="text"
          placeholder="Search products..."
          className="w-full border border-gray-300 px-4 py-2 mb-4"
        />
        <p className="text-gray-600">Suggestions:</p>
        <ul className="mt-2 space-y-2">
          <li>Monochrome Jackets</li>
          <li>Luxury Fragrances</li>
          <li>Minimalist Accessories</li>
        </ul>
      </Drawer>

      {/* User Drawer */}
      <Drawer open={userOpen} onClose={() => setUserOpen(false)}>
        <h2 className="text-xl font-bold mb-4">Sign In / Register</h2>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full border px-4 py-2"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border px-4 py-2"
          />
          <button className="w-full bg-black text-white py-2">
            Register / Login
          </button>
        </form>
        <button className="mt-4 w-full border py-2">
          Continue with Google
        </button>
      </Drawer>

      {/* Cart Drawer */}
      <Drawer open={cartOpen} onClose={() => setCartOpen(false)}>
        <h2 className="text-xl font-bold mb-4">Your Cart</h2>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span>Monochrome Jacket</span>
            <span>$120</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Luxury Perfume</span>
            <span>$80</span>
          </div>
        </div>
        <button className="mt-6 w-full bg-black text-white py-2">
          Checkout
        </button>
      </Drawer>
    </>
  );
}
