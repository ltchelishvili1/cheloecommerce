import React from "react";
import "./Backdrop.styles.jsx";
import { BackDrop } from "./Backdrop.styles.jsx";

const Backdrop = (props) => {
  return (
    <BackDrop
      transparent={props.transparent}
      onClick={props.onClick}
    ></BackDrop>
  );
};

export default Backdrop;
