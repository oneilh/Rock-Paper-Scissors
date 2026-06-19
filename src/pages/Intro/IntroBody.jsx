import { FaPlay } from "react-icons/fa";

const IntroBody = ({ onStart, hasActiveSession, series }) => {
  return (
    <section className="landing_page">
      <div>
        <h1 className="title-neon">Rock Paper Scissors</h1>
        <p className="subtitle">{hasActiveSession ? `Continuing Best of ${series || 5} Series` : 'Select your series'}</p>
      </div>
      <button onClick={onStart} className="start-btn" aria-label={hasActiveSession ? "Continue Game" : "Start Game"}>
        <FaPlay style={{ marginRight: "8px" }} aria-hidden="true" /> {hasActiveSession ? "Continue" : "Start"}
      </button>
    </section>
  );
};

export default IntroBody;
