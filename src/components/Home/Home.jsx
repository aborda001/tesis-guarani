import React from "react";
import "./Home.css";
import mainLogo from "../../assets/mainLogo.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main>
      <section>
        <img src={mainLogo} alt="logo-principal" />
        <h2>Guaraní</h2>
        <p>Aprende Guaraní ahora</p>
      </section>
      <footer>
        <Link to="/levels">
          <button type="button" className="btn btn-primary">
            Inicia ya
          </button>
        </Link>
      </footer>
    </main>
  );
};

export default Home;
