import {useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AppContext } from "../context/AppContext";


const Form = () => {
  const { dispatch} = useContext(AppContext);
  const [playerName, setPlayerName] = useState("");
  const navigate = useNavigate();

  const handlePlayerName = (e) => {
    setPlayerName(e.target.value);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch({ type: "PLAYERNAME", payload: playerName });
    navigate("/game");
  };

  return (
    <section className="register">
      <Link to="/">back</Link>
      <form className="userName" onSubmit={handleRegister}>
        <fieldset>
          <legend>PlayerName: </legend>
          <input
            type="text"
            maxLength={7}
            onChange={handlePlayerName}
            value={playerName}
          />
        </fieldset>
        <button>Enter</button>
      </form>
    </section>
  );
};

export default Form;
