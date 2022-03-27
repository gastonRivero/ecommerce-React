import { useState, useContext } from "react";
import context from "../../context/context";
import useFireStore from "../../hooks/useFireStore";
import Spinner, { VolverAC } from "../utilities/Utilities";
import approved from "../../assets/img/approved.png";
const Checkout = () => {
  const { carrito, value } = useContext(context);
  const [form, setForm] = useState({
    buyer: {
      name: "",
      phone: "",
      email: "",
    },
    items: carrito,
    total: value,
  });

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
      <form onSubmit={handleSubmit}>
        <h4>Completá tus datos para finalizar la compra:</h4>
        <div className="mb-3">
          <label for="exampleInputEmail1" class="form-label">
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
          <label for="exampleInputEmail1" className="form-label">
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
          <label for="exampleInputEmail1" className="form-label">
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
            className="btn btn-primary w-100"
          >
            Terminar compra
          </button>
        )}
      </form>
      {ordenOk && (
        <div className="alert alert-success" role={alert}>
          <img src={approved} className=" img-fluid" />
          <div>
            <h1>Felicitaciones, tu compra fue exitosa😎</h1>
            <h4>Te enviamos todos los detalles al mail que registraste.</h4>
            <p>Tu código de orden es:</p>
            <h5>{idOk}</h5>
          </div>
          <VolverAC />
        </div>
      )}
    </>
  );
};

export default Checkout;
