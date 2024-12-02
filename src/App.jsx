import "./App.css";
import Intro from "./Intro";
import ScoreBoard from "./ScoreBoard";

import Game from "./Game";
import AwaitingResult from "./AwaitingResult";
import { useState } from "react";

function App() {
  const [start, setStart] = useState(false);

  // if (start) {
  //   return (
  //     <>
  //       <ScoreBoard />
  //       <Game />
  //     </>
  //   );
  // }
  return (
    <>
      {start ? (
        <>
          {" "}
          <ScoreBoard /> <Game />
        </>
      ) : (
        <Intro gamestart={setStart} />
      )}
      {/* <AwaitingResult/> */}
    </>
  );
}

export default App;
