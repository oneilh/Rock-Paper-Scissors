import { useContext, useState } from "react";
import { AppContext } from "./../../context/AppContext";

import AwaitingResult from "../../AwaitingResult";
import GameSelection from "./GameSelection";
import ScoreBoard from "./ScoreBoard";
import { WEAPONS } from "../../utils/constants";
import { determineWinner } from "../../utils/gameLogic";

const Game = () => {
  const { dispatch } = useContext(AppContext);
  const [showResultBoard, setShowResultBoard] = useState(false);

  const [pick, setPick] = useState({
    player: "",
    computer: "",
  });

  const { player, computer } = pick;
  const options = Object.values(WEAPONS);

  const [resultAction, setResultAction] = useState("");

  // Generate computer's pick and determine winner
  const handlePlayerPick = (playerSelection) => {
    const computerSelection =
      options[Math.floor(Math.random() * options.length)];
    
    setPick({
      player: playerSelection,
      computer: computerSelection,
    });

    const action = determineWinner(playerSelection, computerSelection);
    setResultAction(action);
    setShowResultBoard(true);
  };

  return (
    <>
      <ScoreBoard />
      {showResultBoard ? (
        <AwaitingResult
          pick={pick}
          setShowResultBoard={setShowResultBoard}
          showResultBoard={showResultBoard}
          resultAction={resultAction}
        />
      ) : (
        <GameSelection playerPick={handlePlayerPick} />
      )}
    </>
  );
};

export default Game;
