import React, { useState } from "react";
import { useSelector } from "react-redux";
import CartModal from "./CartPage"; // modal li drt lik

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <span className="text-purple-800">Bilal</span> Shop
        </h1>

        {/* Menu toggle for mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-700 md:hidden focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Links */}
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:items-center md:space-x-6 mt-4 md:mt-0`}
        >
          <li className="hover:text-purple-800 font-sans">Home</li>
          <li className="hover:text-purple-800 font-sans">Shop</li>
          <li className="hover:text-purple-800 font-sans">Blog</li>
          <li className="hover:text-purple-800 font-sans">Contact</li>

          {/* Cart button */}
          <li>
            <button
              className="bg-purple-600 text-white hover:bg-purple-700 py-2 px-4 rounded-full flex items-center"
              onClick={() => setIsOpen(true)} // فتح modal
            >
              🛒 Cart ({cartCount})
            </button>
          </li>
        </ul>
      </div>

      {/* Cart Modal */}
      <CartModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </nav>
  );
}
