import AwaitingResult from "../../AwaitingResult";
import GameSelection from "./GameSelection";
import ScoreBoard from "./ScoreBoard";

const Game = () => {
  return (
    <>
      <ScoreBoard />
      {/* <GameSelection /> */}
      <AwaitingResult/>
    </>
  );
};

export default Game;
