import classes from "../styles/Wrapper.module.css";

const Wrapper = (props) => {
  return <div className={`${classes.wrapper} ${props.className}`}>{props.children}</div>;
};

export default Wrapper;
