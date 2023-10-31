import React from "react";
import "./Levels.css";
import { Link } from "react-router-dom";
const Levels = () => {
  return (
    <main className="mainLevels">
      <h3 className="h3Levels">Niveles</h3>
      <Link to="/level/1/1" class="answers">
        <button type="button" class="answer btn btn-question">
          Nivel 1
        </button>
      </Link>
      <Link to="/level/2/1" class="answers">
        <button type="button" class="answer btn btn-question">
          Nivel 2
        </button>
      </Link>
      <Link to="/level/3/1" class="answers">
        <button type="button" class="answer btn btn-question">
          Nivel 3
        </button>
      </Link>
      <Link to="/level/4/1" class="answers">
        <button type="button" class="answer btn btn-question">
          Nivel 4
        </button>
      </Link>
      <Link to="/level/5/1" class="answers">
        <button type="button" class="answer btn btn-question">
          Nivel 5
        </button>
      </Link>
    </main>
  );
};

export default Levels;
