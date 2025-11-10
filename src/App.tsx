import React, { useState, useEffect } from 'react';
import './App.css';


import playImg from "./assets/play.png";
import resetImg from "./assets/reset.png";
import workBtnClicked from "./assets/work-clicked.png";
import workBtn from "./assets/work.png";
import breakBtnClicked from "./assets/break-clicked.png";
import breakBtn from "./assets/break.png";
import idleGif from "./assets/idle.gif";
import workGif from "./assets/work.gif";
import breakGif from "./assets/break.gif";
import meowSound from "./assets/meow.mp3";
import closeBtn from "./assets/close.png";

function App() {
  const [timeLeft, setTimeLeft] = useState(25*60); //Un hook de react crear una variable con estado dentro de un componente funcional.
  const [isRunning, setIsRunning] = useState(false);
  const [breakButtonImage, setBreakButtonImage] = useState(breakBtn);
  const [workButtonImage, setWorkButtonImage] = useState(workBtn); 
  const [gifImage, setGifImage] = useState(idleGif);
  const [isBreak, setIsBreak] = useState(false);
  const [encouragement,setEncouragement] = useState("");
  const [image, setImage] = useState(playImg);
  const meowAudio = new Audio (meowSound);


  const cheersMessages = [
    "You can do it",
    "Stay focus",
    "You are amazing"
  ];

  const breakMessages = [
    "Stay hydrated!",
    "Snack, maybe?"
  ];

  // Menasjes 
  useEffect(() =>{
    let messageInterval: NodeJS.Timeout;
    
    if (isRunning){
      const messages = isBreak ? breakMessages : cheersMessages;
      setEncouragement(messages [0]); // El mesaje inicial 
      let index = 1

      messageInterval = setInterval(() => {
        setEncouragement(messages[index]);
        index = (index + 1) % messages.length;
      }, 4000); //Cada cuatro segundos cabia el mensaje 
    }
    return () => clearInterval(messageInterval);
  }, [isRunning,isBreak]);

  // Cuenta regresiva 
  useEffect ( () => { //Hook 
    let timer: NodeJS.Timeout; //Almacenar el temporizador
    if (isRunning && timeLeft > 0){
      timer = setInterval( () => {
        setTimeLeft(prev => prev - 1);
      }, 1000); //Reduce los segundos 
    }
    return() => clearInterval(timer);
  },[isRunning, timeLeft]);

  //inicial falso 
  useEffect(() => {
    switchMode(false);
  },[])

  //Sonido 
  useEffect(() => {
    if (timeLeft === 0 && isRunning) {
        meowAudio.play().catch(err => {
            console.error("Audio play failed:", err);
        });
        setIsRunning(false); // Optional: auto-stop the timer
        setImage(playImg);   // Reset to play button
        setGifImage(idleGif); // Reset to idle gif
        setTimeLeft(isBreak ? 5 * 60 : 25 * 60);
    }
}, [timeLeft]);

  const fromatTime = (seconds: number): string => {
    const m = Math.floor(seconds / 60).toString().padStart(2,'0'); // padStart para que tenga 2 digitos 

    const s = (seconds % 60).toString().padStart(2,'0');
    return `${m}:${s}`; //Para devolver en terminos de reloj 
  };

  const switchMode = (breakMode: boolean) => {
    setIsBreak(breakMode); // True Break False Work 
    setIsRunning(false); // Para que el nuevo contador no corra de inmediato 
    setBreakButtonImage( breakMode ? breakBtnClicked : breakBtn);
    setWorkButtonImage(breakMode ? workBtn : workBtnClicked);
    setTimeLeft(breakMode ? 5* 60 : 25* 60 );
    setGifImage(idleGif)
  }
  
  const handleClick = () => {
    if (!isRunning) {
      setIsRunning(true);
      setGifImage (isBreak ? breakGif : workGif)
      setImage(resetImg);

    }else{
      setIsRunning(false);
      setTimeLeft(isBreak ? 5 * 60 : 25 * 60);
      setGifImage(idleGif);
      setImage(playImg);
    }
  };

  const handleCloseClick = () => {
    if (window.electronAPI?.closeApp) {
      window.electronAPI.closeApp();
    } else {
      console.warn("Electron API not available");
    }
  }

  const containerClass = `home-container ${isRunning? "background-green" : ""}`;
  return(
    <div className = {containerClass} style={{position: 'relative'}}>
      <div>
        <button className="close-button" onClick={handleCloseClick}>
          <img src={closeBtn} alt="Close" />
        </button>
      </div>

      <div className="home-content">
        <div className="home-controls">
          <button className="image-button" onClick={ () => switchMode(false)}>
            <img src={workButtonImage} alt="Work" />
          </button>
          <button className="image-button" onClick={ () => switchMode(true)}>
            <img src={breakButtonImage} alt="Break" />
          </button>
        </div>

          <p className={`encouragement-text ${!isRunning ? "hidden" : "" }`}>
            {encouragement}
          </p>
          <h1 className="home-timer">{fromatTime(timeLeft)}</h1>
          <img src={gifImage} alt="Timer Status" className="gif-image" />
          <button className="home-button" onClick={handleClick}>
            <img src={image} alt="Button Icon" />
          </button>
      </div>
    </div>
    
  );
}

export default App;
