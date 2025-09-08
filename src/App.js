import { Routes, Route } from "react-router-dom";
import MainLayout from "./MainLayout";
import CheckoutLayout from "./CheckoutLayout";
import CheckoutPage from "./CheckoutPage";
import Home from "./Home";

function App() {
  return (
    <Routes>
      {/* الصفحات العادية */}
      <Route
        path="/"
        element={
          <MainLayout>
            <Home/>
          </MainLayout>
        }
      />

      {/* صفحة checkout */}
      <Route
        path="/checkout"
        element={
          <CheckoutLayout>
            <CheckoutPage />
          </CheckoutLayout>
        }
      />
    </Routes>
  );
}

export default App;
