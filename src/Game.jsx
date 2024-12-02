import React from "react";
import rock from "./assets/fist-svgrepo-com.svg";
import paper from "./assets/hand-svgrepo-com.svg";
import scissors from "./assets/two-fingers-svgrepo-com.svg";


const Game = () => {
  return (
    <main className="game">
      <section>
        <div className="rock option">
          <img src={rock} alt="" />
        </div>
        <div className="paper option">
          <img src={paper} alt="" />
        </div>
      </section>

      <div className="scissors option">
        <img src={scissors} alt="" />
      </div>
    </main>
  );
};

export default Game;
