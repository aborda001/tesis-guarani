import React from "react";
import ProgressBar from "../../../ProgressBar/ProgressBar";
import "./Level12.css";
import Level12Icon from "./Level12.png";
import { Link } from "react-router-dom";

const Level12 = () => {
  return (
    <>
      <ProgressBar />
      <main className="mainLevel12">
        <img className="Level12Icon" src={Level12Icon} alt="logo-principal" />
        <h3 className="h3Level12">......... rekaru</h3>
        <Link to="/level/1/3" class="answers">
          <button type="button" class="answer btn btn-question">
            Peẽ
          </button>
        </Link>
        <Link to="/level/1/3" class="answers">
          <button type="button" class="answer btn btn-question">
            Nde
          </button>
        </Link>
        <Link to="/level/1/3" class="answers">
          <button type="button" class="answer btn btn-question">
            Che
          </button>
        </Link>
        <Link to="/level/1/3" class="answers">
          <button type="button" class="answer btn btn-question">
            Ore
          </button>
        </Link>
      </main>
    </>
  );
};

export default Level12;
