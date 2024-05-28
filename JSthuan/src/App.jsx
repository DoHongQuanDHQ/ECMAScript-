import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ShopPage from "./pages/ShopPage";
import { products } from "../db";
import axios from "axios";
import { useEffect, useState } from "react";
import instance from "./axios";
import DetailProduct from "./pages/DetailProduct";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    // fetch("http://localhost:3000/products")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     setProducts(data);
    //   })
    //   .catch((err) => console.log(err));
    (async () => {
      try {
        const { data } = await instance.get("/products");
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    })();
    // IIFE = Invoke Immediately Function Expression (là hàm được gọi ngay lập tức sau khi khai báo)
  }, []);
  return (
    <>
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<HomePage products={products} />} />
          <Route
            path="/product-detail/:id"
            element={<DetailProduct data={products} />}
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/shop" element={<ShopPage products={products} />} />
          <Route path="*" element={<Login />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
