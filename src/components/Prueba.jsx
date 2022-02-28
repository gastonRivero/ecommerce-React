import React, { useState } from "react";

const Select = ({ options, onSelect, defaultOption }) => {



  return (
    <select onChange={(e) => onSelect(e.target.value)}>
      {options.map((o) => (
        <option value={o.value}>{o.text}</option>
      ))}
    </select>
  );
};

const Prueba = () => {
  const [first, setfirst] = useState("");

  const opt = [
    { value: "1", text: "azul" },
    { value: "2", text: "rojo" },
    { value: "3", text: "blanco" },
  ];
  
  const handleChange = (value) => {
    setfirst(value);
  };
      //si la funcion va con parametro && en el onClick adelante hay que poner =>
      const conProps =({name}) => {

          alert(name)
      }
      const sinProps =() => {

        alert("sin props")
    }
    const hacerAlgo =(e) => {

      console.log(e.key)
  }
  const sinVocales =(e) => {

    if (e.key === "a" || e.key === "e" || e.key === "i" || e.key === "o" || e.key === "u"){
      return;
    }
    console.log(e.key)
  }

  return (
    <>
      <Select options={opt} onSelect={handleChange} defaultOption={1} />
  {/* Así deberíia ser el sintaxis en el caso que la funcion tome un prametro en react */}
<button onClick={() => conProps ({name: "jorge"})}>dame nombre</button>
{/* si tu funcion no recibe un parametro, entonces el () => no es necesario */}
<button onClick={sinProps}>dame nombre</button>
<input type="text" onKeyDown={sinVocales}/>
    </>
  );
};

export default Prueba;

