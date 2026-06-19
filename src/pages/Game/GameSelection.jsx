import React, { useState } from "react";

const GameSelection = ({ playerPick }) => {
  const [selected, setSelected] = useState(null);

  const handleSelection = (e) => {
    // Prevent multiple clicks
    if (selected) return;
    
    const id = e.currentTarget.id;
    setSelected(id);
    
    // Delay selection to allow the highlight animation to play
    setTimeout(() => {
      playerPick(id);
    }, 600);
  };

  return (
    <div className="game game-horizontal">
      <div className={`option-wrapper ${selected && selected !== "rock" ? "fade-out" : ""} ${selected === "rock" ? "selected-glow" : ""}`}>
        <button
          className="rock option glass-btn"
          id="rock"
          tabIndex={0}
          onClick={handleSelection}
        >
          ✊
        </button>
        <span className="option-label">ROCK</span>
      </div>

      <div className={`option-wrapper ${selected && selected !== "paper" ? "fade-out" : ""} ${selected === "paper" ? "selected-glow" : ""}`}>
        <button
          className="paper option glass-btn"
          id="paper"
          tabIndex={0}
          onClick={handleSelection}
        >
          ✋
        </button>
        <span className="option-label">PAPER</span>
      </div>

      <div className={`option-wrapper ${selected && selected !== "scissors" ? "fade-out" : ""} ${selected === "scissors" ? "selected-glow" : ""}`}>
        <button
          className="scissors option glass-btn"
          id="scissors"
          tabIndex={0}
          onClick={handleSelection}
        >
          ✌️
        </button>
        <span className="option-label">SCISSORS</span>
      </div>
    </div>
  );
};

export default GameSelection;
