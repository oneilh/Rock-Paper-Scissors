import { useContext } from "react";
import { AppContext } from "./context/AppContext";
import rock from "./assets/fist-svgrepo-com.svg";
import paper from "./assets/hand-svgrepo-com.svg";
import scissors from "./assets/two-fingers-svgrepo-com.svg";
import { Link } from "react-router";

const AwaitingResult = ({ pick }) => {
  const { appState } = useContext(AppContext);
  const { roundResult, seriesScore } = appState;
  console.log(appState);

  const { player, computer } = pick;
  // Map choices to their corresponding images
  const optionsMap = {
    rock: rock,
    paper: paper,
    scissors: scissors,
  };
  console.log(player);
  return (
    <main className="result-container">
      {/* selection-> player */}
      <section className="selection_container">
        <section className="selection">
          <h3>You Picked</h3>
          <img src={optionsMap[player]} alt="" className={`option ${player}`} />
          {/*optionsMap Maps `player` to the correct image*/}
        </section>

        {/* decision view for larger screen */}
        <section className="decision">
          <h2>{roundResult}</h2>
          {seriesScore == 5 ? <div className="action-btn">PLAY AGAIN</div> : ""}
        </section>

        {/* selection-> computer */}
        <section className="selection">
          <h3>Computer Picked</h3>
          <img
            src={optionsMap[computer]}
            alt=""
            className={`option ${computer}`}
          />
          {/*optionsMap Maps `player` to the correct image*/}
        </section>
      </section>

      <Link to="/" className="quit quit-lg selection_container">
        QUIT
      </Link>

      {/* decision view for mobile */}
      <section className="decision-mobile">
        <section className="decision">
          <h2>{roundResult}</h2>
          {seriesScore == 5 ? (
            <Link to="/" className="action-btn">
              PLAY AGAIN
            </Link>
          ) : (
            ""
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
