import "./App.css";
import Intro from "./pages/Intro/Intro";
import Game from "./pages/Game/Game";
import Layout from "./components/Layout";

import { Route, Routes } from "react-router";
import { AppContext } from "./context/AppContext";

import { initialState, reducer } from "./utils/reducer";
import { useReducer } from "react";

function App() {
  const [appState, dispatch] = useReducer(reducer, initialState);
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
