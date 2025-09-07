import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "./redux/cartSlice";
import product1 from "./assets/product1.jpg";
import product2 from "./assets/product2.jpg";
import product3 from "./assets/product3.jpg";
import woman1 from "./women/product1 (1).jpg";

// المنتجات ديال الرجال
const menProducts = [
  {
    id: 1,
    name: "Men's T-Shirt",
    price: 29.99,
    description: "High-quality cotton t-shirt.",
    images: [product1, product2, product3],
    sizes: ["S", "M", "L", "XL"],
    colors: ["bg-black", "bg-blue-700", "bg-red-800"],
  },
  {
    id: 2,
    name: "Men's Jacket",
    price: 79.99,
    description: "Warm and durable jacket.",
    images: [product2, product3, product1],
    sizes: ["M", "L", "XL"],
    colors: ["bg-gray-700", "bg-black"],
  },
  {
    id: 3,
    name: "Men's Shoes",
    price: 99.99,
    description: "Comfortable shoes for daily wear.",
    images: [product3, product1, product2],
    sizes: ["42", "43", "44"],
    colors: ["bg-black", "bg-blue-700"],
  },
  {
    id: 4,
    name: "Men's Shoes",
    price: 99.99,
    description: "Comfortable shoes for daily wear.",
    images: [product3, product1, product2],
    sizes: ["42", "43", "44"],
    colors: ["bg-black", "bg-blue-700"],
  },
];

// المنتجات ديال النساء
const womenProducts = [
  {
    id: 6,
    name: "Women's Dress",
    price: 59.99,
    description: "Elegant evening dress.",
    images: [woman1, product2, product3],
    sizes: ["S", "M", "L"],
    colors: ["bg-red-600", "bg-pink-500"],
  },
  {
    id: 7,
    name: "Women's T-Shirt",
    price: 25.99,
    description: "Casual cotton t-shirt.",
    images: [woman1, product1, product2],
    sizes: ["S", "M", "L"],
    colors: ["bg-blue-700", "bg-green-600"],
  },
  {
    id: 8,
    name: "Women's Shoes",
    price: 89.99,
    description: "Stylish shoes.",
    images: [woman1, product3, product2],
    sizes: ["38", "39", "40"],
    colors: ["bg-black", "bg-red-800"],
  },
  {
    id: 9 ,
    name: "Women's Shoes",
    price: 89.99,
    description: "Stylish shoes.",
    images: [woman1, product3, product2],
    sizes: ["38", "39", "40"],
    colors: ["bg-black", "bg-red-800"],
  },
];

// 🟣 بطاقة المنتج
function ProductCard({ product, onViewDetail, onAddToCart }) {
  return (
    <div className="border rounded-lg m-2 w-72 shadow-lg p-3 bg-white">
      <img
        src={product.images[0]}
        alt={product.name}
        className="w-full h-52 object-cover rounded-md"
      />
      <div className="flex justify-between items-center mt-3">
        <h1 className="font-bold text-lg">{product.name}</h1>
        <span className="text-pink-600 font-semibold">${product.price}</span>
      </div>
      <div className="flex mt-2">
        {product.colors.map((color, index) => (
          <div
            key={index}
            className={`${color} rounded-full h-5 w-5 shadow-md mr-2`}
          ></div>
        ))}
      </div>
      <div className="flex flex-wrap mt-2">
        {product.sizes.map((size, index) => (
          <p
            key={index}
            className="border text-sm rounded-lg w-10 h-8 px-2 py-1 m-1 flex items-center justify-center"
          >
            {size}
          </p>
        ))}
      </div>
      <div className="flex mt-3">
        <button
          className="bg-gradient-to-r from-red-600 to-pink-500 rounded-full py-2 px-4 text-sm text-white hover:from-red-700 hover:to-pink-600 flex-1 mr-2"
          onClick={() => onViewDetail(product)}
        >
          View Details
        </button>
        <button
          className="bg-purple-600 rounded-full py-2 px-4 text-sm text-white hover:bg-purple-700 flex-1"
          onClick={() => onAddToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

// 🟣 Modal ديال التفاصيل
function ProductModal({ product, onClose, onAddToCart }) {
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-11/12 md:w-3/4 lg:w-2/3 p-6 relative">
        <button
          className="absolute top-4 right-4 text-gray-700 text-2xl font-bold"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2">
            <img
              src={selectedImage}
              alt={product.name}
              className="w-full h-80 object-cover rounded-md"
            />
            <div className="flex mt-2 space-x-2">
              {product.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`thumb-${index}`}
                  className="w-20 h-20 object-cover rounded-md cursor-pointer border-2"
                  onClick={() => setSelectedImage(img)}
                />
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 lg:pl-6 mt-4 lg:mt-0">
            <h2 className="text-2xl font-bold">{product.name}</h2>
            <p className="text-purple-700 font-bold text-xl mt-2">
              ${product.price}
            </p>
            <p className="mt-4 text-gray-700">{product.description}</p>

            {/* اختيار اللون */}
            <div className="mt-4">
              <p className="font-semibold mb-1">Color:</p>
              <div className="flex space-x-2">
                {product.colors.map((color, index) => (
                  <div
                    key={index}
                    className={`${color} w-8 h-8 rounded-full border-2 cursor-pointer ${
                      selectedColor === color ? "border-black" : ""
                    }`}
                    onClick={() => setSelectedColor(color)}
                  ></div>
                ))}
              </div>
            </div>

            {/* اختيار الحجم */}
            <div className="mt-4">
              <p className="font-semibold mb-1">Size:</p>
              <div className="flex space-x-2">
                {product.sizes.map((size, index) => (
                  <button
                    key={index}
                    className={`border px-3 py-1 rounded-md ${
                      selectedSize === size ? "bg-purple-600 text-white" : ""
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* الكمية */}
            <div className="mt-4 flex items-center space-x-2">
              <p className="font-semibold">Quantity:</p>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="border rounded-md w-16 px-2 py-1"
              />
            </div>

            <div className="mt-6 flex space-x-2">
              <button
                className="bg-gradient-to-r from-red-600 to-pink-500 text-white py-2 px-4 rounded-full hover:from-red-700 hover:to-pink-600"
                onClick={() =>
                  onAddToCart({
                    ...product,
                    quantity,
                    size: selectedSize,
                    color: selectedColor,
                  })
                }
              >
                Add to Cart
              </button>
              <button
                className="bg-gray-300 text-gray-700 py-2 px-4 rounded-full hover:bg-gray-400"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// 🟣 ProductList (الرئيسية)
export default function ProductList() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const dispatch = useDispatch();

  // ✅ التعديل هنا: نعطي قيم افتراضية للمنتج باش مانشوفوش NaN
  const handleAddToCart = (product) => {
    dispatch(
      addToCart({
        ...product,
        quantity: product.quantity && product.quantity > 0 ? product.quantity : 1,
        size: product.size || (product.sizes?.length ? product.sizes[0] : null),
        color: product.color || (product.colors?.length ? product.colors[0] : null),
      })
    );
  };

  return (
    <div className="m-12">
      <h1 className="text-2xl font-bold mb-4">Men's Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {menProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onViewDetail={setSelectedProduct}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>

      <h1 className="text-2xl font-bold mb-4 mt-12">Women's Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {womenProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onViewDetail={setSelectedProduct}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={handleAddToCart}
        />
      )}
    </div>
  );
}
