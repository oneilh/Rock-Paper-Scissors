import React, { useContext } from "react";
import profileImage from "./../assets/profile_pic1.jpg";
import { FaCog } from "react-icons/fa";
import { AppContext } from "../context/AppContext";

const NavBar = () => {
  const { appState } = useContext(AppContext);
  
  return (
    <section className="nav_bar">
      <div className="nav-profile-group">
        <img src={profileImage} alt="Profile" className="profile" />
        <span className="nav-username">{appState?.playerName || "Guest"}</span>
      </div>

      <FaCog className="settings-icon" size={28} color="var(--accent-cyan)" style={{ cursor: "pointer" }} />
    </section>
  );
};

export default NavBar;
