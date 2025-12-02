'use client';

import { useState } from "react";
import { NUMBER_WHATSAPP } from "../constants";

export default function BotButton() {
  const [showBot, setShowBot] = useState(false);
  const [showText, setShowText] = useState(false);
  const navigator = typeof window !== "undefined" ? window.navigator : {userAgent : ""};

  const defaultButtonStyle = {
    width: "50px",
    height: "50px",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url("/images/whatsapp.png")`,
    backgroundSize: "contain",
  };

  const [buttonStyle, setButtonStyle] = useState(defaultButtonStyle as React.CSSProperties);

  const removeBot = () => {
    setShowBot(false);
    setShowText(false);
    setButtonStyle(defaultButtonStyle)
  }


  const animationFrames: React.CSSProperties[] = [
    {
      backgroundImage: `url("/images/maisa_frame2.png")`,
      width: "308px",
      height: "250px",
      backgroundSize: "308px 250px",
    }
  ];


  const runAnimation = () => {
    setShowBot(true);

    for (let i = 0; i < animationFrames.length; i++) {
      setTimeout(() => {
        setButtonStyle({
          ...defaultButtonStyle,
          ...animationFrames[i]
        });
      }, i * 500); // Change frame every 500ms
    }

    setShowText(true);
    return;
  };

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const buttonAction = () => {
    if(isMobile && !showBot) {
      runAnimation();
      return;
    }
    removeBot();
    window.open(`${NUMBER_WHATSAPP} através da Maísa e gostaria de mais informações.`, "_blank");
  }

  return (
    <button
      onMouseEnter={() => runAnimation()}
      onMouseLeave={() => removeBot()}
      onClick={buttonAction}
      style={buttonStyle}
      className="fixed cursor-pointer bottom-6 right-6 transition-all duration-400 z-50"
    >
      {showText && <span className="block w-[150px] mt-9 ml-8 text-left text-[17px]">
        Olá sou a Maisa, como posso ajudar?
      </span>}
    </button>
  );
}
