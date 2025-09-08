import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "./redux/cartSlice";
import { TrashIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

export default function CartModal({ isOpen, onClose }) {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (!isOpen) return null;

  const handleCheckout = () => {
    onClose(); // نسد المودال
    navigate("/checkout"); // نمشي للصفحة ديال Checkout
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex justify-end">
      <div className="bg-white w-80 md:w-96 h-full shadow-xl p-6 overflow-y-auto relative">
        <button
          className="absolute top-4 right-4 text-gray-700 text-2xl font-bold"
          onClick={onClose}
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>

        {cartItems.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          <>
            <div className="space-y-4">
              {cartItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center border p-3 rounded-lg shadow-sm bg-white"
                >
                  <img
                    src={item.images[0]}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-md mr-3"
                  />
                  <div className="flex-1">
                    <h3 className="font-bold text-lg">{item.name}</h3>
                    <p className="text-gray-600 text-sm">Size: {item.size}</p>
                    <p className="text-gray-600 text-sm">
                      Color:{" "}
                      <span
                        className={`inline-block w-4 h-4 rounded-full ${item.color}`}
                      ></span>
                    </p>
                    <p className="text-gray-600 text-sm">
                      Quantity: {item.quantity}
                    </p>
                    <p className="text-purple-700 font-bold text-sm">
                      Price: ${item.price}
                    </p>
                  </div>
                  <button
                    className="text-red-600 hover:text-red-800"
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    <TrashIcon className="w-6 h-6" />
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-col space-y-3">
              <h3 className="text-xl font-bold">
                Total: ${total.toFixed(2)}
              </h3>
              <button
                className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
                onClick={() => dispatch(clearCart())}
              >
                Clear Cart
              </button>
              <button
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                onClick={handleCheckout}
              >
                Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
