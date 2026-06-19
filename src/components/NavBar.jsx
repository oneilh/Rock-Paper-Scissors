import React from "react";
import profileImage from "./../assets/profile_pic1.jpg";
import { FaCog } from "react-icons/fa";

const NavBar = () => {
  return (
    <section className="nav_bar">
      <img src={profileImage} alt="Profile" className="profile" />
      <FaCog className="settings-icon" size={32} color="#0055ff" style={{ cursor: "pointer" }} />
    </section>
  );
};

export default NavBar;
