import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import profileImage from "./../assets/profile_pic1.jpg";
import { FaCog } from "react-icons/fa";
import { AppContext } from "../context/AppContext";
import { ACTIONS } from "../utils/constants";

const NavBar = () => {
  const { appState, dispatch } = useContext(AppContext);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const navigate = useNavigate();

  const handleResetScore = () => {
    dispatch({ type: ACTIONS.RESET });
    setIsSettingsOpen(false);
  };

  const handleChangePlayer = () => {
    dispatch({ type: ACTIONS.RESET });
    setIsSettingsOpen(false);
    navigate("/");
  };

  return (
    <>
      <section className="nav_bar">
        <div className="nav-profile-group">
          <img src={profileImage} alt="Profile" className="profile" />
          <span className="nav-username">{appState?.playerName || "Guest"}</span>
        </div>

        <FaCog
          className="settings-icon"
          size={28}
          color="var(--accent-cyan)"
          style={{ cursor: "pointer" }}
          onClick={() => setIsSettingsOpen(true)}
        />
      </section>

      {isSettingsOpen && (
        <div className="modal-overlay">
          <div className="modal-content" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center' }}>
            <button className="close-btn" onClick={() => setIsSettingsOpen(false)}>X</button>
            <h2 className="title-neon" style={{ fontSize: '32px' }}>Settings</h2>
            <button
              style={{ width: '100%', padding: '0.8rem 0', backgroundColor: 'var(--accent-pink)', color: 'white', borderRadius: '0.4rem', cursor: 'pointer', fontSize: '18px', fontWeight: '700', border: 'none' }}
              onClick={handleResetScore}
            >
              Reset Score
            </button>
            <button
              style={{ width: '100%', padding: '0.8rem 0', backgroundColor: 'transparent', color: 'var(--accent-cyan)', border: '2px solid var(--accent-cyan)', borderRadius: '0.4rem', cursor: 'pointer', fontSize: '18px', fontWeight: '700' }}
              onClick={handleChangePlayer}
            >
              Change Player
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
