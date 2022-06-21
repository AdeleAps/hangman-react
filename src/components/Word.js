import classes from "./styles/Word.module.css";
import { useState } from "react";

const wordGenerator = () => {
  const namesArray = [
    "dog",
    "strawberry",
    "friday",
    "sunset",
    "forest",
    "protogenesis",
    "chaotic",
    "session",
    "picture",
    "interesting",
    "outside",
    "walk",
    "room",
  ];
  let wordRandom = namesArray[Math.floor(Math.random() * namesArray.length)];
  let wordSplit = wordRandom.split("");
  return wordSplit;
};

let wordSplit = wordGenerator();

const Word = (props) => {

  props.onWordGenerate(wordSplit);

  let arrayProgress = wordSplit.map((letter, index) => (
    <div className={classes["word-random"]} key={index} value={letter}>
      {props.letter.includes(letter) ? letter : "?"}
    </div>
  ));

  let arrayComplete = wordSplit.map((letter, index) => (
    <div className={classes["word-random"]} key={index} value={letter}>
      {letter}
    </div>
  ));

  return (
    <div className={classes.wordRandomContainer}>
      {props.lives === 0 ? arrayComplete : arrayProgress}
    </div>
  );
};

export default Word;
