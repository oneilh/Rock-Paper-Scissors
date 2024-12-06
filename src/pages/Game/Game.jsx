import { useContext, useEffect, useState } from "react";
import { AppContext } from "./../../context/AppContext";

import AwaitingResult from "../../AwaitingResult";
import GameSelection from "./GameSelection";
import ScoreBoard from "./ScoreBoard";

const Game = () => {
  const { dispatch } = useContext(AppContext);
  const [showResultBoard, setShowResultBoard] = useState(false);

  const [pick, setPick] = useState({
    player: "",
    computer: "",
  });

  const { player, computer } = pick;
  const options = ["rock", "paper", "scissors"];

  // Generate computer's pick whenever the player makes a selection
  const handlePlayerPick = (playerSelection) => {
    const computerSelection =
      options[Math.floor(Math.random() * options.length)];
    setPick((prevPick) => ({
      ...prevPick,
      player: playerSelection,
      computer: computerSelection,
    }));
  };

  // Check for results whenever the state changes
  useEffect(() => {
    if (player && computer) {
      if (player === computer) {
        console.log("Draw");
        dispatch({ type: "DRAW" });
      } else if (
        (player === "rock" && computer === "scissors") ||
        (player === "scissors" && computer === "paper") ||
        (player === "paper" && computer === "rock")
      ) {
        console.log("Player wins");
        dispatch({ type: "PLAYERWIN" });
      } else {
        console.log("Computer wins");
        dispatch({ type: "COMPUTERWIN" });
      }
      setShowResultBoard(!showResultBoard);
    }
  }, [player, computer]); // Runs when `player` or `computer` changes

  return (
    <>
      <ScoreBoard />
      {showResultBoard ? (
        <AwaitingResult pick={pick}/>
      ) : (
        <GameSelection playerPick={handlePlayerPick} />
      )}
    </>
  );
};

export default Game;
