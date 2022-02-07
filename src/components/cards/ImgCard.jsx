import React from "react";
import fotos from "../imagenes/t-patron.jpg";

const ImgCard = () => {
  return (
    <img
      src={fotos}
      className="card-img-top"
      Style={{ width: "50%", heigth: "100%" }}
      alt="Tequila"
    />
  );
};

export default ImgCard;
