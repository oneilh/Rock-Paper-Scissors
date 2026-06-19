import { useState } from "react";
import IntroBody from "./IntroBody";
import appImg from "./../../assets/rock_papper_scissors.png";
import FormModal from "./FormModal";

const Intro = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="intro">
      <img 
        src={appImg} 
        alt="Rock Paper Scissors Hero Image" 
        className="app_img" 
        fetchpriority="high"
        style={{ height: "80%" }} 
      />
      <IntroBody onStart={() => setIsModalOpen(true)} />
      {isModalOpen && <FormModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default Intro;
