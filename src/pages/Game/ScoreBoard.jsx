import { useContext} from "react";
import { AppContext } from "../../context/AppContext";

const ScoreBoard = () => {
  const { appState } = useContext(AppContext);
  const { playerName, playerScore, computerScore } = appState;
  return (
    <header>
      <h3>
        rock <br /> paper <br /> scissors
      </h3>
      <section>
        <div className="player">
          <p>{playerName}</p>
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
