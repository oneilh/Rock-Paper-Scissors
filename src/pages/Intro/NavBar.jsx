import React from "react";
import profileImage from "./../../assets/profile_pic1.jpg";
import settings from "./../../assets/settings-svgrepo-com.svg";


const NavBar = () => {
  return (
    <section className="nav_bar">
      <img src={profileImage} alt="" className="profile" />
      <img src={settings} alt="" />
    </section>
  );
};

export default NavBar;
