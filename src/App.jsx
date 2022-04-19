import "./App.css";
import CarritoProv from "./context/CarritoProv";
import Rutas from "./routes/Rutas";
function App() {
  return (
    <div className="App">
      <CarritoProv>
        <Rutas />
      </CarritoProv>
    </div>
  );
}

export default App;
