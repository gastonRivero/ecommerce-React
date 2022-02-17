import "./App.css";
import Navbar from "./components/navbar/Navbar.jsx";
import Footer from "./components/footer/Footer";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemDetailContainer/>
      <ItemListContainer nombre="Distillar"/>
      <Footer/>
    </div>
  );
}

export default App;
