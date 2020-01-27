import React from "react";

const style = {
  root: {
    border: "1px solid rgba(41,182,246,1)",
    display: "flex",
    marginRight: "80px",
    height: "8vh",
    marginTop: "20px",
    textAlign: "center",
    justifyContent: "space-around",
    alignItems: "center",
    minWidth: "600px",
    background:
      "linear-gradient(to left,rgba(12,11,27,0.75), rgba(33,33,33,0.75)75%,90%,rgba(101,115,208,0.75))"
  },
  text: {
    color: "white",
    fontSize: "20px",
    lineHeight: "3em"
  }
};

const Localiter = () => {
  return (
    <div style={style.root}>
      <span style={style.text}>
        <b>Localiter :</b>
      </span>
      <span style={style.text}>Luzarches</span>
      <span style={style.text}>95270 France</span>
    </div>
  );
};
export default Localiter;
