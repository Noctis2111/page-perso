import React, { useState, useEffect } from "react";
import image from "../LA CAPSULE_05-07-2019-103web.jpg";
import "../App.css";

const style = {
  root: {
    border: "1px solid rgba(41,182,246,1)",
    width: "1300px",
    marginTop: "80px",
    marginLeft: "80px",
    height: "150px",
    display: "flex",
    background:
      "linear-gradient(to left, rgba(33,33,33,0.50), rgba(33,33,33,0.50)60%,75%,rgba(255,255,255,0.50))"
  },
  name: {
    display: "block",
    margin: "15px",
    width: "50%"
  },
  lvl: {
    display: "flex",
    margin: "0px 20px",
    width: "25%"
  },
  nextLvl: {
    display: "flex",
    width: "20%",
    alignSelf: "center",
    color: "white",
    flexDirection: "column"
  },
  progressBar: {
    margin: "10px",
    width: "150px",
    height: "15px",
    background: "#212121"
    // backgroundImage:
    //   "linear-gradient(to left, rgba(33,33,33,0.50), rgba(33,33,33,0.50)60%,75%,rgba(255,255,255,0.50))"
    // backgroundColor: "#aaa"
    // background: "progress::-moz-progress-bar { background: red; }"
  }
};

const Card = () => {
  const [age, setAge] = useState();
  const [completed, setCompleted] = useState(0);

  const niveau = () => {
    let birthdayYear = new Date("November 21, 1992 02:00:00").getFullYear();
    let todayMonth = new Date().getMonth() + 1;
    let todayDay = new Date().getDate();
    const todayYear = new Date().getFullYear();
    let age = 0;
    for (birthdayYear; birthdayYear < todayYear - 1; birthdayYear++) {
      age++;
    }
    if (todayMonth >= 11 && todayDay >= 21) {
      age++;
    }
    setAge(age);
  };

  const progress = () => {
    let todayMonth = new Date().getMonth() + 1;
    switch (todayMonth) {
      case 1:
        setCompleted(16.66);
        break;
      case 2:
        setCompleted(24.99);
        break;
      case 3:
        setCompleted(33.32);
        break;
      case 4:
        setCompleted(41.65);
        break;
      case 5:
        setCompleted(49.98);
        break;
      case 6:
        setCompleted(58.31);
        break;
      case 7:
        setCompleted(66.64);
        break;
      case 8:
        setCompleted(74.97);
        break;
      case 9:
        setCompleted(83.3);
        break;
      case 10:
        setCompleted(91.63);
        break;
      case 11:
        setCompleted(100);
        break;
      case 12:
        setCompleted(8.33);
        break;
      default:
        setCompleted(0);
        break;
    }
  };

  useEffect(() => {
    niveau();
  }, []);
  useEffect(() => {
    progress();
  }, []);
  console.log("age", age);
  console.log("completed", completed);

  return (
    <div style={style.root}>
      <img
        src={image}
        style={{
          maxWidth: "90px",
          margin: "15px"
        }}
      ></img>
      <div style={style.name}>
        <span
          style={{
            color: "white",
            display: "flex",
            marginBottom: "30px",
            fontSize: "30px"
          }}
        >
          Romain d'agate
        </span>

        <span style={{ color: "white", marginLeft: "60px" }}>
          Devellopeur web fullstack javascript junior
        </span>
      </div>
      <div style={style.lvl}>
        <p
          style={{
            color: "white",
            marginTop: "35px"
          }}
        >
          <span style={{ color: "green" }}>NIV :&nbsp;</span>
          {age}
        </p>
      </div>
      <div style={style.nextLvl}>
        <span>NV Suivant</span>

        {/* <LinearProgress
          variant="determinate"
          value={completed}
          //   style={style.progressBar}
          className={clsx(classes.progressBar, className)}
        /> */}
        <progress
          id="file"
          max="100"
          value={completed}
          style={style.progressBar}
        />
      </div>
    </div>
  );
};
export default Card;
