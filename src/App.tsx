import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles.scss";
import Contact from "./pages/Contact/Contact";
import Homepage from "./pages/HomePage/Homepage";
import Navigation from "./components/Navigation/Navigation";
import Admin from "./pages/Admin/Admin";
import Footer from "./components/Footer/Footer";
import Categories from "./pages/Categories/Categories";
import CategoryPage from "./pages/Category/CategoryPage";
import Product from "./pages/Product/Product";
import Banner from "./components/Banner/Banner";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="contact" element={<Contact />} />
          <Route path="admin" element={<Admin />} />
          {/* <Route path="categories/:param/:paramtwo" element={<Categories />} /> */}
          <Route path="categories" element={<Categories />} />
          <Route path="category/:categoryId" element={<CategoryPage />} />
          <Route path="product/:categoryId/:productId" element={<Product />} />
        </Routes>
        <Navigation />
        <Footer />
        <Banner />
      </BrowserRouter>
    </div>
  );
}

export default App;
