import React from "react";
import fotos from "../imagenes/w-JackDaniels.jpg";

const ImgCardTres = () => {
  return (
    <img
      src={fotos}
      className="card-img-top"
      Style={{ width: "50px", heigth: "100px" }}
      alt="Whisky"
    />
  );
};

export default ImgCardTres;
