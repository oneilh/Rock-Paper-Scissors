import { useState, useContext } from "react";
import { useNavigate } from "react-router";
import { AppContext } from "../../context/AppContext";
import IntroBody from "./IntroBody";
import appImg from "./../../assets/rock_papper_scissors.png";
import FormModal from "./FormModal";

const Intro = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { appState } = useContext(AppContext);
  const navigate = useNavigate();

  const handleStart = () => {
    if (appState.playerName) {
      navigate("/game");
    } else {
      setIsModalOpen(true);
    }
  };

  return (
    <div className="intro">
      <img 
        src={appImg} 
        alt="Rock Paper Scissors Hero Image" 
        className="app_img" 
        fetchpriority="high"
        style={{ height: "80%" }} 
      />
      <IntroBody 
        onStart={handleStart} 
        hasActiveSession={!!appState.playerName}
        series={appState.series}
      />
      {isModalOpen && <FormModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default Intro;
