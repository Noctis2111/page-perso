import React from "react";
import backgroundImg from "../galaxy.jpg";

const style = {
  root: {
    display: "flex",
    background: `url(${backgroundImg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    // minWidth: "100%",
    minHeight: "100vh",
    // justifyContent: "space-between"
    flexDirection: "column"
  }
};

const container = props => {
  const { children } = props;
  return (
    <div style={style.root}>
      {/* <img src={backgroundImg} style={{ minWidth: "100%" }} /> */}
      {children}
    </div>
  );
};
export default container;
