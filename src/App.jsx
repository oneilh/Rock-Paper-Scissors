import "./App.css";
import Intro from "./pages/Intro/Intro";
import Form from "./pages/Form";
import Game from "./pages/Game/Game";

import AwaitingResult from "./AwaitingResult";
import { Route, Routes } from "react-router";
import { AppContext } from "./context/AppContext";

import { initialState, reducer } from "./utils/reducer";
import { useReducer } from "react";

function App() {
  const [appState, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <AppContext.Provider value={{ appState, dispatch }}>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="register" element={<Form />} />
          <Route path="game" element={<Game />} />
        </Routes>
      </AppContext.Provider>
      {/* {start ? (
        <>
          <ScoreBoard /> <Game />
        </>
      ) : (
        <Intro gamestart={setStart} />
      )} */}
      {/* <AwaitingResult/> */}
    </>
  );
}

export default App;
