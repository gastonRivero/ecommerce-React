import React from "react";
import footer from "../../assets/img/footer.png";
import distifoot from "../../assets/img/distifoot.png";
import "../../App.css";

const Footer = () => {
  return (
    <div>
      <div className="mFo bg-dark">
        <img src={footer} alt="" className=" img-fluid" />
        <div className="footerH container-fluid">
          <img src={distifoot} alt="" className=" img-fluid" />
          <ul>
            <li>
              <a href="https://www.instagram.com/gastonrivero1/">
                <i className="bi bi-instagram"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/gast%C3%B3n-emiliano-rivero-94b18b15a/">
                <i className="bi bi-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/Gaston.Emiliano.Rivero010/">
                <i className="bi bi-facebook"></i>
              </a>
            </li>
          </ul>
        </div>
        <p>Proyecto React 2022 - Desarrollado por Gastón Rivero 27/03/2022 ©</p>
      </div>
    </div>
  );
};

export default Footer;
