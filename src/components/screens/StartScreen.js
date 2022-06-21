import Wrapper from "../UI/Wrapper";
import classes from "../styles/Wrapper.module.css";
import classes2 from "../styles/Button.module.css";
import classes3 from "../styles/StartScreen.module.css";
import Button from "../UI/Button";

const StartScreen = (props) => {
  return (
    <div className={classes3["start-container"]}>
      <Wrapper className={classes.title}>HANGMAN</Wrapper>
      <Button onClick={props.onClick} className={classes2.start}>start</Button>
    </div>
  );
};

export default StartScreen;
