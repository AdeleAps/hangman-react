import React, { useState } from "react";
import classes from "./index.module.css";
import ParticlesComponent from "./components/ParticlesComponent";
import StartScreen from "./components/screens/StartScreen";
import GameContainer from "./components/UI/GameContainer";
import GameScreen from "./components/screens/GameScreen";

let letterTrigger;
let letterTriggerArray = [];

function App() {
  let wordArray;

  const wordGenerateHandler = (word) => {
    wordArray = word;
  };

  const [stateTrigger, setStateTrigger] = useState(false);

  const [livesCounter, setLivesHandler] = useState(5);

  const letterHandler = (letter) => {
    letterTrigger = letter.toLowerCase();
    setStateTrigger({ ...stateTrigger });

    if (wordArray.includes(letterTrigger)) {
      letterTriggerArray.push(letterTrigger);
    } else {
      if (livesCounter >= 1) {
        setLivesHandler(livesCounter - 1);
      } 
    }
  };

  const [screenTrigger, setScreenTrigger] = useState(true);

  const screenTriggerHandler = () => {
    setScreenTrigger(false);
  };

  const resetHandler = () => {
    letterTriggerArray = [];
    setLivesHandler(5);
    setStateTrigger({ ...stateTrigger })
  }

  return (
    <div className={classes.container}>
      <GameContainer>
        {screenTrigger ? (
          <StartScreen onClick={screenTriggerHandler} />
        ) : (
          <GameScreen
            lives={livesCounter}
            letter={letterTriggerArray}
            onWordGenerate={wordGenerateHandler}
            onPress={letterHandler}
            onClick={resetHandler}
          />
        )}
      </GameContainer>
      <ParticlesComponent />
    </div>
  );
}

export default App;
