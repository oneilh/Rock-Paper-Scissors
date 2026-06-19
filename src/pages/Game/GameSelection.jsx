import React, { useState } from "react";


const GameSelection = ({ playerPick }) => {
  const handleSelection = (e) => {
    playerPick(e.currentTarget.id);
  };

  return (
    <div className="game">
      <section className="rocknpaper">
        <button
          className="rock option"
          id="rock"
          tabIndex={1}
          onClick={handleSelection}
          style={{ fontSize: "5rem", background: "transparent", border: "none", cursor: "pointer" }}
        >
          ✊
        </button>

        <button
          className="paper option"
          id="paper"
          tabIndex={1}
          onClick={handleSelection}
          style={{ fontSize: "5rem", background: "transparent", border: "none", cursor: "pointer" }}
        >
          ✋
        </button>
      </section>

      <button
        className="scissors option"
        id="scissors"
        tabIndex={1}
        onClick={handleSelection}
        style={{ fontSize: "5rem", background: "transparent", border: "none", cursor: "pointer" }}
      >
        ✌️
      </button>
    </div>
  );
};

export default GameSelection;
