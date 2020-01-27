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
};

const TestCommandMenu = () => {
  const [classe, setClasse] = useState("commandMenu");
  const [clickDetected, setClickDetected] = useState([false, ""]);

  const buttonList = [
    { id: "Etat", name: "Etat" },
    { id: "Skill", name: "Skill" },
    { id: "Formation", name: "Formation" },
    { id: "Experience", name: "Experience" },
    { id: "Project", name: "Project" },
    { id: "Contact", name: "Contact" }
  ];

  const launchAnimation = id => {
    if (classe === "test") {
      setClasse("commandMenu");
      setTimeout(() => setClickDetected([!clickDetected[0], id]), 2000);
      //setClickDetected([!clickDetected[0], id]);
    } else {
      setClasse("test");
      setClickDetected([!clickDetected[0], id]);
    }
  };
  console.log("clickDetected", clickDetected);

  return (
    <div className={classe}>
      {buttonList.map(button => {
        if (clickDetected[0] === true && clickDetected[1] !== button.id) {
          return (
            <button
              id={button.id}
              // onClick={() => launchAnimation(button.id)}
              className={"desactiveButton"}
            >
              {button.name}
            </button>
          );
        } else if (
          clickDetected[0] === true &&
          clickDetected[1] === button.id
        ) {
          return (
            <button
              id={button.id}
              className={"testactiveButton"}
              onClick={() => launchAnimation(button.id)}
            >
              {button.name}
            </button>
          );
        } else if (
          clickDetected[0] === false &&
          clickDetected[1] === button.id
        ) {
          return (
            <button
              id={button.id}
              className={"returnButton"}
              onClick={() => launchAnimation(button.id)}
            >
              {button.name}
            </button>
          );
        }
        // } else if (clickDetected[0] === false && clickDetected[1] !== '') {
        //   <button
        //       id={button.id}
        //       className={"retourActiveButton"}
        //       onClick={() => launchAnimation(button.id)}
        //     >
        //       {button.name}
        //     </button>
        // }
        else {
          return (
            <button
              id={button.id}
              className={"button"}
              onClick={() => launchAnimation(button.id)}
            >
              {button.name}
            </button>
          );
        }
      })}
    </div>
  );
};

export default TestCommandMenu;
