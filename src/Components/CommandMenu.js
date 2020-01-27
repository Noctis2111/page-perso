import React, { useState, Fragment } from "react";
import "../Button.css";
// import "../Commandmenu.css";

const style = {
  root: {
    border: "1px solid rgba(41,182,246,1)",
    display: "flex",
    marginRight: "100px",
    height: "60vh",
    marginTop: "80px",
    // marginBottom: "50px",
    paddingBottom: "70px",
    flexDirection: "column",
    justifyContent: "space-around",
    minWidth: "200px",

    background:
      "linear-gradient(to left,rgba(12,11,27,0.75), rgba(33,33,33,0.75)75%,90%,rgba(101,115,208,0.75))"
  }
  // button: {
  //   display: "block",
  //   margin: "20px",
  //   marginLeft: "15px",
  //   border: "none",
  //   backgroundColor: "transparent",
  //   fontSize: "20px",
  //   textAlign: "start",
  //   color: "white",
  //   "&:hover": {
  //     backgroundColor: "blueviolet",
  //     color: "chartreuse"
  //   }
  // }
};

const CommandMenu = () => {
  const [classe, setClasse] = useState("commandMenu");
  const [button, setButton] = useState({
    etat: "button",
    skill: "button",
    formation: "button",
    experience: "button",
    project: "button",
    contact: "button"
  });
  const [buttonEtat, setBoutonEtat] = useState("");

  const reductionMenu = event => {
    console.log(event.target);

    // if (button === "dispear") {
    //   setClasse("commandMenu");
    //   setBoutonEtat("");
    //   setButton("button");
    // } else {
    //   setClasse("commandMenu test");
    //   setButton("dispear");
    //   setBoutonEtat(bouton);
    // }
  };
  console.log("button", button);

  return (
    <Fragment>
      {button !== "dispear" ? (
        <div className={classe}>
          <button className={button} id="01" onClick={reductionMenu}>
            Etat
          </button>
          <button
            className={button}
            id="02"
            onClick={() => reductionMenu("Skill")}
          >
            Skill
          </button>
          <button
            className={button}
            id="03"
            onClick={() => reductionMenu("Formation")}
          >
            Formation
          </button>
          <button className={button}>Experience</button>
          <button className={button}>project</button>
          <button className={button}>Contact</button>
        </div>
      ) : (
        <div className={classe}>
          <button
            className={"activeButton"}
            onClick={() => reductionMenu(buttonEtat)}
          >
            {buttonEtat}
          </button>
        </div>
      )}
    </Fragment>
  );
};

export default CommandMenu;
