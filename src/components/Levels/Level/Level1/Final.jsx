import React from "react";
import "./Final.css";
import mainLogo from "./congratulation.png";
import { Link } from "react-router-dom";

const Final = () => {
  return (
    <main>
      <section>
        <img src={mainLogo} alt="logo-principal" />
        <h2>Felicidades</h2>
        <p>Haz conseguido 5 puntos</p>
      </section>
      <footer>
        <Link to="/levels">
          <button type="button" className="btn btn-primary">
            Ir al inicio
          </button>
        </Link>
      </footer>
    </main>
  );
};

export default Final;
