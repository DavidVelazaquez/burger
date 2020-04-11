import React from "react";

import Logo from "../../assets/images/logo.png";

import classes from "./Logo.css";

const logo = (props) => (
  <div style={{ height: props.height }} className={classes.Logo}>
    <img src={Logo} alt="burger-logo" />
  </div>
);

export default logo;
