import React from "react";
import footer from "../../assets/img/footer.png"
import "../../App.css"


const Footer = () => {
  return (
    <div>
    <div className="mFo bg-dark">
      <img src={footer} alt="" className=" img-fluid"/>
      <div className="footerH">
      <ul>
      <li><a href="https://www.instagram.com/gastonrivero1/"><i className="bi bi-instagram"></i></a></li>
      <li><a href="https://www.linkedin.com/in/gast%C3%B3n-emiliano-rivero-94b18b15a/"><i className="bi bi-linkedin"></i></a></li>
      <li><a href="https://www.facebook.com/Gaston.Emiliano.Rivero010/"><i className="bi bi-facebook"></i></a></li>
    </ul>
      </div>
      <p>
        Proyecto React 2022
      </p>
    </div>
    </div>
  );
};

export default Footer;
<footer>
    <h4 class="footerH">Brave Mate</h4>


    <p>Desarrollado por Gastón Rivero 04/08/2021 ©</p>
  </footer>