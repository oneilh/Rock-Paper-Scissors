import React from "react";
import rock from "./assets/fist-svgrepo-com.svg";
import paper from "./assets/hand-svgrepo-com.svg";
import scissors from "./assets/two-fingers-svgrepo-com.svg";
import { Link } from "react-router";

const AwaitingResult = () => {
  return (
    <main className="result-container">
      
      {/* selection */}
      <section className="selection_container">
        <section className="selection">
          <h3>You Picked</h3>
          <div className="option rock">
            <img src={rock} alt="" />
          </div>
        </section>
        <section className="decision">
          <h2>You Win</h2>
          <div className="action-btn">PLAY AGAIN</div>
        </section>
        <section className="selection">
          <h3>Computer Picked</h3>
          <div className="option"></div>
        </section>
      </section>

      <Link to="/" className="quit quit-lg selection_container">
        QUIT
      </Link>

      {/* decision mobile */}
      <section className="decision-mobile">
        <section className="decision">
          <h2>YOU WIN</h2>
          <Link to="/" className="action-btn">
            PLAY AGAIN
          </Link>
        </section>
        <Link to="/" className="quit">
          QUIT
        </Link>
      </section>
    </main>
  );
};

export default AwaitingResult;
