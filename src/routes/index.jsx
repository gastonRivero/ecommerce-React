import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "../components/itemListContainer/ItemListContainer";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import ItemDetailContainer from "../components/itemDetailContainer/ItemDetailContainer";
import Cart from "../components/cart/Cart";
import Prueba from "../components/Prueba";

const Rutas = () => {
  return (
      <BrowserRouter>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<ItemListContainer/>} />
        {/* <Route path="/category/tequilas" element={<ItemDetailContainer/>} />
        <Route path="/category/whiskys" element={<ItemDetailContainer/>} /> */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
        <Route path="/desafiosAdeudados" element={<Prueba/>} />
      </Routes>
        <Footer />
    </BrowserRouter>
  );
};

export default Rutas;
