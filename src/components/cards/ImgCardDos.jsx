import React from "react";
import fotos from "../imagenes/w-ChivasRegal.jpg";

const ImgCardDos = () => {
  return (
    <img
      src={fotos}
      className="card-img-top"
      Style={{ width: "50px", heigth: "100px" }}
      alt="Whisky"
    />
  );
};

export default ImgCardDos;
