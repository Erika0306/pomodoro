import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  const [timeLeft, setTimeLeft] = useState(25*60); //Un hook de react crear una variable con estado dentro de un componente funcional.
  const [isRunning, setIsRunning] = useState(false); 
  const [isBreak, setIsBreak] = useState(false);
  const [encouragement,setEncouragement] = useState("");

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

  const fromatTime = (seconds: number): string => {
    const m = Math.floor(seconds / 60).toString().padStart(2,'0'); // padStart para que tenga 2 digitos 

    const s = (seconds % 60).toString().padStart(2,'0');
    return `${m}:${s}`; //Para devolver en terminos de reloj 
  };

  const switchMode = (breakMode: boolean) => {
    setIsBreak(breakMode); // True Break False Work 
    setIsRunning(false); // Para que el nuevo contador no corra de inmediato 
    setTimeLeft(breakMode ? 5* 60 : 25* 60 );

  }
  
  const handleClick = () => {
  setIsRunning(!isRunning); // Cambia entre iniciar y pausar
  };


  return(
    <div style={{position: 'relative'}}>
      <div>
        <button className="closeButton">
          Close
        </button>
      </div>

      <div className="home-content">
        <div className="home-controls">
          <button className="image-button" onClick={ () => switchMode(false)}>
            Work
          </button>
          <button className="imagene-button" onClick={ () => switchMode(true)}>
            Break
          </button>
        </div>

          <p className={`encouragement-text ${!isRunning ? "hidden" : "" }`}>
            {encouragement}
          </p>
          <h1 className="home-timer">{fromatTime(timeLeft)}</h1>
          <button className="home-button" onClick={handleClick}>
            Start
          </button>
      </div>
    </div>
    
  );
}

export default App;
