import React from "react";
import Spinner from "react-spinkit";

export default () => (
  <Spinner
    style={{
      position: "absolute",
      top: "50%",
      left: "50%",
      textAlign: "center",
      transform: "translate(-50%,-50%)"
    }}
    name="line-scale-pulse-out"
    color="purple"
    fadeIn={"none"}
  />
);
