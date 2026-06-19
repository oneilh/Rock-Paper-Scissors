import { FaPlay } from "react-icons/fa";

const IntroBody = ({ onStart }) => {
  return (
    <section className="landing_page">
      <div>
        <h1 className="title-neon">Rock Paper Scissors</h1>
        <p className="subtitle">5 game series</p>
      </div>
      <button onClick={onStart} className="start-btn" aria-label="Start Game">
        <FaPlay style={{ marginRight: "8px" }} aria-hidden="true" /> Start
      </button>
    </section>
  );
};

export default IntroBody;
