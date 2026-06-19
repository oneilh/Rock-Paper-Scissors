import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { AppContext } from "../../context/AppContext";

const FormModal = ({ onClose }) => {
  const { dispatch } = useContext(AppContext);
  const [playerName, setPlayerName] = useState("");
  const navigate = useNavigate();

  const handlePlayerName = (e) => {
    setPlayerName(e.target.value);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (playerName.trim() === "") return;
    dispatch({ type: "PLAYERNAME", payload: playerName });
    navigate("/game");
  };

  return (
    <div className="modal-overlay">
      <section className="register modal-content">
        <button className="close-btn" onClick={onClose}>X</button>
        <form className="userName" onSubmit={handleRegister}>
          <fieldset>
            <legend>PlayerName: </legend>
            <input
              type="text"
              maxLength={7}
              onChange={handlePlayerName}
              value={playerName}
              autoFocus
              required
            />
          </fieldset>
          <button type="submit">Enter</button>
        </form>
      </section>
    </div>
  );
};

export default FormModal;
