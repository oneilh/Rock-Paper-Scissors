import React from "react";

const ScoreBoard = () => {
  return (
    <header>
      <h3>
        rock <br /> paper <br /> scissors
      </h3>
      <section>
        <div className="player">
          <p>Player</p>
          <h2>4</h2>
        </div>
        <p className="colon">:</p>
        <div className="computer">
          <p>Computer</p>
          <h2>1</h2>
        </div>
      </section>
    </header>
  );
};

export default ScoreBoard;
