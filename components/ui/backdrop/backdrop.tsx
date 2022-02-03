import { NextPage } from "next";
import React from "react";

import classes from "./backdrop.module.css";

interface BackdropProps {
  clicked: () => void;
  show: boolean;
}

const Backdrop: NextPage<BackdropProps> = ({ clicked, show }) =>
  show ? <div className={classes.Backdrop} onClick={clicked}></div> : null;

export default Backdrop;
