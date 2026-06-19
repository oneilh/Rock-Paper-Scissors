import { useContext, useEffect, useState } from "react";
import { AppContext } from "./context/AppContext";

import { Link } from "react-router";

const AwaitingResult = ({ pick, setShowResultBoard, showResultBoard, resultAction, instantMode }) => {
  const { appState, dispatch } = useContext(AppContext);
  const { roundResult, roundStatus, playerScore, computerScore } = appState;

  const [countdown, setCountdown] = useState(instantMode ? 0 : 3);
  const [isRevealed, setIsRevealed] = useState(false);

  const targetWins = Math.ceil((appState.series || 5) / 2);
  const isGameOver = playerScore === targetWins || computerScore === targetWins;

  const { player, computer } = pick;
  // Map choices to their corresponding images
  const optionsMap = {
    rock: "✊",
    paper: "✋",
    scissors: "✌️",
  };

  useEffect(() => {
    if (instantMode && countdown > 0) {
      setCountdown(0);
    }
  }, [instantMode, countdown]);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else if (!isRevealed) {
      setIsRevealed(true);
      if (resultAction) {
        dispatch({ type: resultAction });
      }
    }
  }, [countdown, isRevealed, dispatch, resultAction]);

  useEffect(() => {
    if (isRevealed && !isGameOver) {
      const timer = setTimeout(() => {
        setShowResultBoard(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isRevealed, isGameOver, setShowResultBoard]);

  const handleReset = ()=>{
    dispatch({type: "RESET"})
  }
  
  const isPlayerWin = isRevealed && roundStatus === "PLAYER_WIN";
  const isComputerWin = isRevealed && roundStatus === "COMPUTER_WIN";
  const isDraw = isRevealed && roundStatus === "DRAW";

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
          <h2 style={{ fontSize: isRevealed ? '32px' : '48px' }}>
            {isRevealed ? roundResult : `${countdown}...`}
          </h2>
          {isRevealed && isGameOver ? (
            <div className="action-btn" onClick={handleReset}>PLAY AGAIN</div>
          ) : isRevealed ? (
            <p>Next Round ⚔ in 3 seconds...</p>
          ) : (
            <p>Wait for it...</p>
          )}
        </section>

        {/* selection-> computer */}
        <section className="selection">
          <h3>Computer Picked</h3>
          <div className={`glass-btn ${isComputerWin ? 'winner-glow' : ''} ${isPlayerWin ? 'loser-dim' : ''} ${isDraw ? 'draw-glow' : ''}`}>
            <div className={`option ${isRevealed ? computer : ''}`}>
              {isRevealed ? optionsMap[computer] : "❓"}
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
          <h2 style={{ fontSize: isRevealed ? '32px' : '48px' }}>
            {isRevealed ? roundResult : `${countdown}...`}
          </h2>
          {isRevealed && isGameOver ? (
            <div className="action-btn" onClick={handleReset}>
              PLAY AGAIN
            </div>
          ) : isRevealed ? (
            <div>
              <p>Next Round ⚔ in 3 seconds...</p>
            </div>
          ) : (
            <div>
              <p>Wait for it...</p>
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
