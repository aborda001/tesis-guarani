import React from "react";
import ProgressBar from "../../../ProgressBar/ProgressBar";
import "./Level13.css";
import Level13Icon from "./Level13.png";
import { Link } from "react-router-dom";

const Level13 = () => {
  return (
    <>
      <ProgressBar />
      <main className="mainLevel13">
        <img className="Level13Icon" src={Level13Icon} alt="logo-principal" />
        <h3 className="h3Level13">......... okaru</h3>
        <Link to="/level/1/4" class="answers">
          <button type="button" class="answer btn btn-question">
            Ha'e
          </button>
        </Link>
        <Link to="/level/1/4" class="answers">
          <button type="button" class="answer btn btn-question">
            Ñande
          </button>
        </Link>
        <Link to="/level/1/4" class="answers">
          <button type="button" class="answer btn btn-question">
            Che
          </button>
        </Link>
        <Link to="/level/1/4" class="answers">
          <button type="button" class="answer btn btn-question">
            Nde
          </button>
        </Link>
      </main>
    </>
  );
};

export default Level13;
