import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const ScoreBoard = () => {
  const { appState } = useContext(AppContext);
  const { playerName, playerScore, computerScore, series } = appState;

  return (
    <header style={{ position: 'relative' }}>
      <div className="game-title">
        <span>ROCK</span>
        <span>PAPER</span>
        <span>SCISSORS</span>
        <div style={{ fontSize: '12px', marginTop: '5px', opacity: 0.8 }}>
          Best of {series}
        </div>
      </div>
      <section>
        <div className="player">
          <p>{playerName || "Guest"}</p>
          <h2>{playerScore}</h2>
        </div>
        <p className="colon">:</p>
        <div className="computer">
          <p>COMP.</p>
          <h2>{computerScore}</h2>
        </div>
      </section>
    </header>
  );
};

export default ScoreBoard;
