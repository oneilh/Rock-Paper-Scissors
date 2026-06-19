import "./App.css";
import Intro from "./pages/Intro/Intro";
import Game from "./pages/Game/Game";
import Layout from "./components/Layout";

import { Route, Routes } from "react-router";
import { AppContext } from "./context/AppContext";

import { initialState, reducer } from "./utils/reducer";
import { useReducer, useEffect } from "react";

const init = (initialValue) => {
  try {
    const stored = localStorage.getItem("rpsGameState");
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (e) {
    console.error("Failed to load state", e);
  }
  return initialValue;
};

function App() {
  const [appState, dispatch] = useReducer(reducer, initialState, init);

  useEffect(() => {
    localStorage.setItem("rpsGameState", JSON.stringify(appState));
  }, [appState]);

  return (
    <AppContext.Provider value={{ appState, dispatch }}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Intro />} />
          <Route path="game" element={<Game />} />
        </Route>
      </Routes>
    </AppContext.Provider>
  );
}

export default App;
