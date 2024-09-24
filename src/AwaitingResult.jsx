import React from "react";
import rock from "./assets/fist-svgrepo-com.svg";
import paper from "./assets/hand-svgrepo-com.svg";
import scissors from "./assets/two-fingers-svgrepo-com.svg";

const AwaitingResult = () => {
  return (
    <main className="selection_container">
      <section>
        <h2>You Picked</h2>
        <div className="option rock selection">
          <img src={rock} alt="" />
        </div>
      </section>

      {/* <section>
        <h1>You Lose</h1>
        <div>Play Again</div>
      </section> */} 
      <section>
        <h2>Computer Picked</h2>
        <div className="option paper selection">
          <img src={paper} alt="" />
        </div>
      </section>
    </main>
  );
};

export default AwaitingResult;
