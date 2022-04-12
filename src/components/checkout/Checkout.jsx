import { useState, useContext } from "react";
import context from "../../context/context";
import useFireStore from "../../hooks/useFireStore";
import approved from "../../assets/img/approved.png";
import Spinner from "../utilities/Utilities";
import { Link } from "react-router-dom";

const Checkout = () => {
  const { carrito, value,setCarrito,setTot,setValue } = useContext(context);
  const [form, setForm] = useState({
    buyer: {
      name: "",
      phone: "",
      email: "",
    },
    items: carrito,
    total: value,
  });
  const vaciarCarrito = () => {
    setCarrito([]);
    setTot(0);
    setValue(0);
  };

  const { generateOrder, load, ordenOk, idOk } = useFireStore();

  const handleChange = (e) => {
    setForm({
      ...form,
      buyer: {
        ...form.buyer,
        [e.target.name]: e.target.value,
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    generateOrder({ datos: form });
  };

  return (
    <>
      <div className="container">
        {ordenOk === false ? (
          <form onSubmit={handleSubmit}>
            <h4>Completá tus datos para finalizar la compra:</h4>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Tu nombre:
              </label>
              <input
                onChange={handleChange}
                name="name"
                value={form.buyer.name}
                type="text"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Tu número de teléfono:
              </label>
              <input
                onChange={handleChange}
                name="phone"
                value={form.buyer.phone}
                type="number"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Tu email:
              </label>
              <input
                onChange={handleChange}
                name="email"
                value={form.buyer.email}
                type="email"
                className="form-control"
              />
            </div>

            {load ? (
              <button disabled={true} className="btn btn-warning">
                <Spinner />
              </button>
            ) : (
              <button
                disabled={
                  !form.buyer.name || !form.buyer.phone || !form.buyer.email
                }
                type="submit"
                className="btn btn-dark w-100"
              >
                Terminar compra
              </button>
            )}
          </form>
        ) : (
          <>
            <img src={approved} className=" img-fluid" alt="" />
            <div>
              <h1>Felicitaciones, tu compra fue exitosa😎</h1>
              <h4>Te enviamos todos los detalles al mail que registraste.</h4>
              <p>Tu código de orden es:</p>
              <h5>{idOk}</h5>
            </div>
            <div className="my-5">
            <Link className=" btn btn-danger" onClick={vaciarCarrito} to={"/"}>
              Volver a comprar
            </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Checkout;
