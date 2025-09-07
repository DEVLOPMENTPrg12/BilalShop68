// App.js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./footer";
import HeroSection from "./hero";
import Navbar from "./nav";
import SubscribeSection from "./Newsletter";
import ProductList from "./product";
import CartPage from "./CartPage"; // خصك تصايب هاد الصفحة أو placeholder

export default function App() {
  return (
    <div>
    <Navbar />
      <HeroSection />

      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>

      <SubscribeSection />
      <Footer /></div>
  );
}
