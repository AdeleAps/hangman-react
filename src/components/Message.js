import classes from "./styles/Message.module.css";
import React, { useState, useEffect } from "react";
import { Fragment } from "react";

const Message = (props) => {
  const [highlight, setHighlight] = useState(false);

  useEffect(() => {
    if (props.lives < 5 && props.lives > 0) {
      setHighlight(true);
    }
    const timer = setTimeout(() => {
      setHighlight(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [props.lives]);

  const livesText = (
    <div className={classes["lives-text"]}>
      You have{" "}
      <span className={highlight ? classes.bump : ""}>{props.lives}</span>{" "}
      <span>{props.lives !== 1 ? "guesses" : "guess"}</span> left!!!
    </div>
  );

  const gameOverText = (
    <div className={classes["lives-text"]}>You lost! :(</div>
  );

  return props.lives > 0 ? livesText : gameOverText;
};

export default Message;
