import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "../components/itemListContainer/ItemListContainer";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import ItemDetailContainer from "../components/itemDetailContainer/ItemDetailContainer.jsx"
import Cart from "../components/cart/Cart";
import Header from "../components/header/Header";
import Checkout from "../components/checkout/Checkout";

const Rutas = () => {
  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <Routes>

        <Route path="/" element={<ItemListContainer />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/item/:id" element={<ItemDetailContainer />} />

        <Route path="/category/:categoryId" element={<ItemListContainer />} />

        <Route path="/checkout" element={<Checkout />} />
        
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Rutas;
