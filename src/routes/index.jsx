import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "../components/itemListContainer/ItemListContainer";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import ItemDetailContainer from "../components/itemDetailContainer/ItemDetailContainer";
import Cart from "../components/cart/Cart";
import Tequila from "../components/itemListContainer/category/Tequila";
import Whisky from "../components/itemListContainer/category/Whisky";

const Rutas = () => {
  return (
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer/>} />
        <Route path="/category/tequilas" element={<Tequila/>} />
        <Route path="/category/whiskys" element={<Whisky/>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
      </Routes>
        <Footer />
    </BrowserRouter>
  );
};

export default Rutas;
