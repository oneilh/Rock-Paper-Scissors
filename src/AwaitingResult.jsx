import { useContext, useEffect, useState } from "react";
import { AppContext } from "./context/AppContext";

import { Link } from "react-router";

const AwaitingResult = ({ pick, setShowResultBoard, showResultBoard }) => {
  const { appState, dispatch } = useContext(AppContext);
  const { roundResult, seriesScore } = appState;

  const { player, computer } = pick;
  // Map choices to their corresponding images
  const optionsMap = {
    rock: "✊",
    paper: "✋",
    scissors: "✌️",
  };

  useEffect(() => {
    if(seriesScore === 5){
      return
    }
    // Set a timer for 3 seconds
    const timer = setTimeout(() => {
      setShowResultBoard(!showResultBoard); // Update the message after 3 seconds
    }, 3000);

    // Cleanup function to clear the timer if the component unmounts
    return () => clearTimeout(timer);
  }, [player, computer]); // Empty dependency array ensures this runs only once

  const handleReset = ()=>{
    dispatch({type: "RESET"})
  }
  return (
    <main className="result-container">
      {/* selection-> player */}
      <section className="selection_container">
        <section className="selection">
          <h3>You Picked</h3>
          <div className={`option ${player}`}>
            {optionsMap[player]}
          </div>
        </section>

        {/* decision view for larger screen */}
        <section className="decision">
          <h2>{roundResult}</h2>
          {seriesScore === 5 ? (
            <div className="action-btn">PLAY AGAIN</div>
          ) : (
            <p>Next Round ⚔ in 3 seconds...</p>
          )}
        </section>

        {/* selection-> computer */}
        <section className="selection">
          <h3>Computer Picked</h3>
          <div className={`option ${computer}`}>
            {optionsMap[computer]}
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
          {seriesScore === 5 ? (
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
