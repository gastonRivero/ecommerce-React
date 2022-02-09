import React from "react";
import ImgCard from "./ImgCard";
import ImgCardDos from "./ImgCardDos";
import ImgCardTres from "./ImgCardTres";
import ItemCount from "../counter/ItemCount";

const Cards = () => {
  return (
    <>
      <div className="d-flex justify-content-around">
        <div className="card">
          <div className="card-body" style={{ width: "40vh" }}>
            <h4 className="card-title">TEQUILA PATRON 750ML</h4>
            <ImgCard />
            <p className="card-text">100% de agrave azul reposado.</p>
            <h5 className="card-title">
              $<span>12.000</span>
            </h5>
            <div className="row align-items-center">
              <ItemCount stock={14} initial={1}/>
            </div>
            <a href="#" className="btn btn-dark">
              Añadir
            </a>
          </div>
        </div>
        <div className="card">
          <div className="card-body" style={{ width: "40vh" }}>
            <h4 className="card-title">CHIVAS REGAL 750ML</h4>
            <ImgCardDos />
            <p className="card-text">Whisky de doble maduración.</p>
            <h5 className="card-title">
              $<span>6.000</span>
            </h5>
            <div className="row align-items-center">
              <ItemCount stock={8} initial={1}/>
            </div>
            <a href="#" className="btn btn-dark">
              Añadir
            </a>
          </div>
        </div>
        <div className="card">
          <div className="card-body" style={{ width: "40vh" }}>
            <h4 className="card-title">JACK DANIELS 750ML</h4>
            <ImgCardTres />
            <p className="card-text">Whisky 18 años.</p>
            <h5 className="card-title">
              $<span>13.000</span>
            </h5>
            <div className="row align-items-center">
              <ItemCount stock={13} initial={1}/>
            </div>
            <a href="#" className="btn btn-dark">
              Añadir
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
