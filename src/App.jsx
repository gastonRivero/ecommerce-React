import "./App.css";
import Navbar from "./components/navbar/Navbar.jsx";
import Cards from "./components/cards/Cards";
import Footer from "./components/footer/Footer";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer nombreEcommerce="Distillar"/>
      <Cards/>
      <Footer/>
    </div>
  );
}

export default App;
