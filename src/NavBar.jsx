import React from "react";
import profileImage from "./assets/vecteezy_portrait-of-a-beautiful-girl-face-side-view-wearing-a-flat_16127643-1.jpg";
import settings from "./assets/settings-svgrepo-com.svg";


const NavBar = () => {
  return (
    <section className="nav_bar">
      <img src={profileImage} alt="" className="profile" />
      <img src={settings} alt="" />
    </section>
  );
};

export default NavBar;
