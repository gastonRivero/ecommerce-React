import React from 'react'

const Prueba = () => {

    //si la funcion va con parametro && en el onClick adelante hay que poner =>
    const getName =(name) => {

        alert(name)
    }


  return (
      <>
      {/* Así deberíia ser el sintaxis en el caso que la funcion tome un prametro en react */}
    <button onClick={() => ({name: "jorge"})}>dame nombre</button>
    {/* si tu funcion no recibe un parametro, entonces el () => no es necesario */}
    <button onClick={getName}>dame nombre</button>
      </>
  )
}

export default Prueba