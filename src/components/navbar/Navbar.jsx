import React from "react";
import CartWidget from "../cart/CartWidget";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const categoria = [
    { id: 0, category: "Tequila" },
    { id: 1, category: "Whisky" },
    { id: 2, category: "Ginebra" },
    { id: 3, category: "Cerveza" },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to={"/"}>
          DISTILLAR
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to={"/"}>
                Productos
              </Link>
            </li>
            {categoria.map((c) => (
              <li key={c.id} className="nav-item">
                <Link className="nav-link" to={`/category/${c.category}`}>
                  {c.category}
                </Link>
              </li>
            ))}
          </ul>
          <div className="d-flex justify-content-center">
            <CartWidget />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
