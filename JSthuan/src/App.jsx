import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import { Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ShopPage from "./pages/ShopPage";
import { useEffect, useState } from "react";
import instance from "./axios";
import DetailProduct from "./pages/DetailProduct";
import ProductAdd from "./pages/admin/ProductAdd";
import ProductEdit from "./pages/admin/ProductEdit";
import ProductForm from "./pages/admin/ProductForm";
import Index from "./pages/admin/Index";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const { data } = await instance.get("/products");
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const handleSubmit = (data) => {
    (async () => {
      try {
        const res = await instance.post("/products", data);
        setProducts([...products, res.data]);
      } catch (error) {
        console.log(error);
      }
    })();
  };
  const handleSubmitEdit = (data) => {
    (async () => {
      try {
        await instance.patch(`/products/${data.id}`, data);
        const newData = await getProducts();
        // setProducts(products.map((p) => (p.id === data.id ? data : p)));
        setProducts(newData);
        if (confirm("Edit product successfully, redirect to admin page!")) {
          navigate("/admin");
          // window.location.href = "/admin"
        }
      } catch (error) {
        console.log(error);
      }
    })();
  };
  const handleSubmitForm = (data) => {
    (async () => {
      try {
        if (data.id) {
          // logic cho edit product
          await instance.patch(`/products/${data.id}`, data);
          const newData = await getProducts();
          setProducts(newData);
        } else {
          // logic cho add product
          const res = await instance.post("/products", data);
          setProducts([...products, res.data]);
        }
        if (confirm("Successfully, redirect to admin page!")) {
          navigate("/admin");
        }
      } catch (error) {
        console.log(error);
      }
    })();
  };
  return (
    <>
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<HomePage products={products} />} />
          <Route path="/product-detail/:id" element={<DetailProduct />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route
            path="/admin"
            element={<Index data={products} username="Nguyen Van Admin" />}
          />
          <Route
            path="/admin/product-add"
            element={<ProductAdd onAdd={handleSubmit} />}
          />
          <Route
            path="/admin/product-edit"
            element={<ProductEdit onAdd={handleSubmit} />}
          />
          <Route
            path="/admin/product-form"
            element={<ProductForm onProduct={handleSubmitForm} />}
          />
          <Route
            path="/admin/product-form/:id"
            element={<ProductForm onProduct={handleSubmitForm} />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
