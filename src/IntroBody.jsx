import React from "react";

const IntroBody = ({gamestart}) => {
  return (
    <section className="landing_page">
      <div>
        <h1>Rock Paper Scissors</h1>
        <p>5 game series</p>
      </div>
      <div className="btn" onClick={()=>gamestart(true)}>Start</div>
    </section>
  );
};

export default IntroBody;
