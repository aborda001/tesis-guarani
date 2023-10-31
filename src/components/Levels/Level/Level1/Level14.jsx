import React from "react";
import ProgressBar from "../../../ProgressBar/ProgressBar";
import "./Level14.css";
import Level14Icon from "./Level14.png";
import { Link } from "react-router-dom";

const Level14 = () => {
  return (
    <>
      <ProgressBar />
      <main className="mainLevel14">
        <img className="Level14Icon" src={Level14Icon} alt="logo-principal" />
        <h3 className="h3Level14">......... jakaru</h3>
        <Link to="/level/1/5" class="answers">
          <button type="button" class="answer btn btn-question">
            Há’ekuéra
          </button>
        </Link>
        <Link to="/level/1/5" class="answers">
          <button type="button" class="answer btn btn-question">
            Ore
          </button>
        </Link>
        <Link to="/level/1/5" class="answers">
          <button type="button" class="answer btn btn-question">
            Nde
          </button>
        </Link>
        <Link to="/level/1/5" class="answers">
          <button type="button" class="answer btn btn-question">
            Ñande
          </button>
        </Link>
      </main>
    </>
  );
};

export default Level14;
