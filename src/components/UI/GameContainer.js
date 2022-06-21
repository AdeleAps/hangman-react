import classes from "../styles/GameContainer.module.css"

const GameContainer = (props) => {
  return <div className={classes["game-wrapper"]}>{props.children}</div>;
};

export default GameContainer;
