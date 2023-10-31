import React from "react";
import ProgressBar from "../../../ProgressBar/ProgressBar";
import "./Level11.css";
import Level11Icon from "./Level11.png";
import { Link } from "react-router-dom";

const Level11 = () => {
  return (
    <>
      <ProgressBar />
      <main className="mainLevel11">
        <img className="Level11Icon" src={Level11Icon} alt="logo-principal" />
        <h3 className="h3Level11">......... akaru</h3>
        <Link to="/level/1/2" class="answers">
          <button type="button" class="answer btn btn-question">
            Nde
          </button>
        </Link>
        <Link to="/level/1/2" class="answers">
          <button type="button" class="answer btn btn-question">
            Ha'e
          </button>
        </Link>
        <Link to="/level/1/2" class="answers">
          <button type="button" class="answer btn btn-question">
            Ore
          </button>
        </Link>
        <Link to="/level/1/2" class="answers">
          <button type="button" class="answer btn btn-question">
            Che
          </button>
        </Link>
      </main>
    </>
  );
};

export default Level11;
