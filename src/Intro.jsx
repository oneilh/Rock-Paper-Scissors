import React from "react";
import IntroBody from "./IntroBody";
import appImg from "./assets/image-removebg-preview.png";
import NavBar from "./NavBar";

const Intro = ({gamestart}) => {
  return (
    <main className="intro">
      <NavBar />
      <img src={appImg} alt="" className="app_img" style={{height: '80%'}}/>
      <IntroBody gamestart={gamestart}/>
    </main>
  );
};

export default Intro;
