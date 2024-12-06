import React, { useState } from "react";
import rock from "./../../assets/fist-svgrepo-com.svg";
import paper from "./../../assets/hand-svgrepo-com.svg";
import scissors from "./../../assets/two-fingers-svgrepo-com.svg";

const GameSelection = ({ playerPick }) => {
  const handleSelection = (e) => {
    playerPick(e.target.id);
  };

  return (
    <div className="game">
      <section className="rocknpaper">
        <img
          src={rock}
          alt=""
          className="rock option"
          id="rock"
          tabIndex={1}
          onClick={handleSelection}
        />

        <img
          src={paper}
          alt=""
          className="paper option"
          id="paper"
          tabIndex={1}
          onClick={handleSelection}
        />
      </section>

      <img
        src={scissors}
        alt=""
        className="scissors option"
        id="scissors"
        tabIndex={1}
        onClick={handleSelection}
      />
    </div>
  );
};

export default GameSelection;
