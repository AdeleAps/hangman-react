import classes from "./styles/Letter.module.css";

const Letter = (props) => {

  const verificationHandler = () => {
    console.log(props.value);
    props.onPress(props.value);
  };

  return (
    <button onClick={verificationHandler} type="button" className={classes.btn}>
      {props.value}
    </button>
  );
};

export default Letter;
