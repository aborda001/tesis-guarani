import React from "react";
import ProgressBar from "../../../ProgressBar/ProgressBar";
import "./Level15.css";
import Level15Icon from "./Level15.png";
import { Link } from "react-router-dom";

const Level15 = () => {
  return (
    <>
      <ProgressBar />
      <main className="mainLevel15">
        <img className="Level15Icon" src={Level15Icon} alt="logo-principal" />
        <h3 className="h3Level15">......... pekaru</h3>
        <Link to="/level/final" class="answers">
          <button type="button" class="answer btn btn-question">
            Ha’e
          </button>
        </Link>
        <Link to="/level/final" class="answers">
          <button type="button" class="answer btn btn-question">
            Peẽ
          </button>
        </Link>
        <Link to="/level/final" class="answers">
          <button type="button" class="answer btn btn-question">
            Há’ekuéra
          </button>
        </Link>
        <Link to="/level/final" class="answers">
          <button type="button" class="answer btn btn-question">
            Nde
          </button>
        </Link>
      </main>
    </>
  );
};

export default Level15;
