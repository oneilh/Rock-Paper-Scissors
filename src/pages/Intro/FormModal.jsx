import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { AppContext } from "../../context/AppContext";

const FormModal = ({ onClose }) => {
  const { dispatch } = useContext(AppContext);
  const [playerName, setPlayerName] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [series, setSeries] = useState('5');
  const navigate = useNavigate();

  const handlePlayerName = (e) => {
    setPlayerName(e.target.value);
    if (e.target.value.trim() !== "") {
      setErrorMsg("");
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (playerName.trim() === "") {
      setErrorMsg("Please enter a valid player name to continue.");
      return;
    }
    dispatch({ type: "PLAYERNAME", payload: playerName });
    dispatch({ type: "SET_SERIES", payload: Number(series) });
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
            {errorMsg && <p style={{ color: 'var(--accent-pink)', marginTop: '10px', fontSize: '14px', textTransform: 'none' }}>{errorMsg}</p>}
          </fieldset>
          
          <fieldset style={{ marginTop: '1rem', border: 'none', padding: 0 }}>
            <legend style={{ padding: '0 0.5rem', color: '#fff', letterSpacing: '0.1ch', marginBottom: '0.5rem' }}>Game Series:</legend>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'space-between' }}>
              {[3, 5, 7].map(num => (
                <div 
                  key={num}
                  onClick={() => setSeries(num.toString())}
                  style={{
                    flex: 1,
                    padding: '0.8rem 0',
                    textAlign: 'center',
                    border: `1px solid ${series === num.toString() ? 'var(--accent-cyan)' : 'var(--accent-pink)'}`,
                    borderRadius: '0.4rem',
                    cursor: 'pointer',
                    backgroundColor: series === num.toString() ? 'rgba(0, 229, 255, 0.1)' : 'transparent',
                    color: series === num.toString() ? 'var(--accent-cyan)' : '#fff',
                    transition: 'all 0.3s ease',
                    fontWeight: series === num.toString() ? 'bold' : 'normal'
                  }}
                >
                  Best of {num}
                </div>
              ))}
            </div>
          </fieldset>

          <button type="submit" style={{ marginTop: '1.5rem' }}>Start Game</button>
        </form>
      </section>
    </div>
  );
};

export default FormModal;
