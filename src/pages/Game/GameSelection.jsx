import React from "react";
import rock from "./../../assets/fist-svgrepo-com.svg";
import paper from "./../../assets/hand-svgrepo-com.svg";
import scissors from "./../../assets/two-fingers-svgrepo-com.svg";

const GameSelection = () => {
  return (
    <div className="game">
      <section className="rocknpaper">
        <div className="rock option">
          <img src={rock} alt="" className="" />
        </div>
        <div className="paper option">
          <img src={paper} alt="" />
        </div>
      </section>

      <div className="scissors option">
        <img src={scissors} alt="" />
      </div>
    </div>
  );
};

export default GameSelection;
