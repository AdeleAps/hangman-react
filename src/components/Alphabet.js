import classes from "./styles/Alphabet.module.css";
import Letter from "./Letter";

const Alphabet = (props) => {
  
const letterHandler = (letter) => {
  props.onPress(letter);
}

  return (
    <div className={classes["alphabet-container"]}>
      <Letter onPress={letterHandler} value="A" />
      <Letter onPress={letterHandler} value="B" />
      <Letter onPress={letterHandler} value="C" />
      <Letter onPress={letterHandler} value="D" />
      <Letter onPress={letterHandler} value="E" />
      <Letter onPress={letterHandler} value="F" />
      <Letter onPress={letterHandler} value="G" />
      <Letter onPress={letterHandler} value="H" />
      <Letter onPress={letterHandler} value="I" />
      <Letter onPress={letterHandler} value="J" />
      <Letter onPress={letterHandler} value="K" />
      <Letter onPress={letterHandler} value="L" />
      <Letter onPress={letterHandler} value="M" />
      <Letter onPress={letterHandler} value="N" />
      <Letter onPress={letterHandler} value="O" />
      <Letter onPress={letterHandler} value="P" />
      <Letter onPress={letterHandler} value="Q" />
      <Letter onPress={letterHandler} value="R" />
      <Letter onPress={letterHandler} value="S" />
      <Letter onPress={letterHandler} value="T" />
      <Letter onPress={letterHandler} value="U" />
      <Letter onPress={letterHandler} value="V" />
      <Letter onPress={letterHandler} value="W" />
      <Letter onPress={letterHandler} value="X" />
      <Letter onPress={letterHandler} value="Y" />
      <Letter onPress={letterHandler} value="Z" />
    </div>
  );
};

export default Alphabet;
