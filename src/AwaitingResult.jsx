import { useContext, useEffect, useState } from "react";
import { AppContext } from "./context/AppContext";

import { Link } from "react-router";

const AwaitingResult = ({ pick, setShowResultBoard, showResultBoard }) => {
  const { appState, dispatch } = useContext(AppContext);
  const { roundResult, roundStatus, playerScore, computerScore } = appState;

  const isGameOver =
    playerScore === 5 ||
    computerScore === 5 ||
    Math.abs(playerScore - computerScore) >= 3;

  const { player, computer } = pick;
  // Map choices to their corresponding images
  const optionsMap = {
    rock: "✊",
    paper: "✋",
    scissors: "✌️",
  };

  useEffect(() => {
    if(isGameOver){
      return
    }
    // Set a timer for 3 seconds
    const timer = setTimeout(() => {
      setShowResultBoard(!showResultBoard); // Update the message after 3 seconds
    }, 3000);

    // Cleanup function to clear the timer if the component unmounts
    return () => clearTimeout(timer);
  }, [player, computer, isGameOver, setShowResultBoard, showResultBoard]); // Include missing dependencies

  const handleReset = ()=>{
    dispatch({type: "RESET"})
  }
  const isPlayerWin = roundStatus === "PLAYER_WIN";
  const isComputerWin = roundStatus === "COMPUTER_WIN";
  const isDraw = roundStatus === "DRAW";

  return (
    <main className="result-container">
      {/* selection-> player */}
      <section className="selection_container">
        <section className="selection">
          <h3>You Picked</h3>
          <div className={`glass-btn ${isPlayerWin ? 'winner-glow' : ''} ${isComputerWin ? 'loser-dim' : ''} ${isDraw ? 'draw-glow' : ''}`}>
            <div className={`option ${player}`}>
              {optionsMap[player]}
            </div>
          </div>
        </section>

        {/* decision view for larger screen */}
        <section className="decision">
          <h2>{roundResult}</h2>
          {isGameOver ? (
            <div className="action-btn" onClick={handleReset}>PLAY AGAIN</div>
          ) : (
            <p>Next Round ⚔ in 3 seconds...</p>
          )}
        </section>

        {/* selection-> computer */}
        <section className="selection">
          <h3>Computer Picked</h3>
          <div className={`glass-btn ${isComputerWin ? 'winner-glow' : ''} ${isPlayerWin ? 'loser-dim' : ''} ${isDraw ? 'draw-glow' : ''}`}>
            <div className={`option ${computer}`}>
              {optionsMap[computer]}
            </div>
          </div>
        </section>
      </section>

      <Link to='/' className="quit quit-lg selection_container" onClick={handleReset}>
        QUIT
      </Link>

      {/* decision view for mobile */}
      <section className="decision-mobile">
        <section className="decision">
          <h2>{roundResult}</h2>
          {isGameOver ? (
            <div className="action-btn" onClick={handleReset}>
              PLAY AGAIN
            </div>
          ) : (
            <div>
              <p>Next Round ⚔ in 3 seconds...</p>
            </div>
          )}
        </section>
        <Link to="/" className="quit">
          QUIT
        </Link>
      </section>
    </main>
  );
};

export default AwaitingResult;
