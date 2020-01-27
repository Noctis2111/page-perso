import React, { useState } from "react";

const style = {
  root: {
    border: "1px solid rgba(41,182,246,1)",
    display: "flex",
    marginRight: "80px",
    height: "8vh",
    marginTop: "20px",
    textAlign: "center",
    justifyContent: "space-around",
    minWidth: "400px",
    alignItems: "center",
    // marginBottom: "50px",
    background:
      "linear-gradient(to left,rgba(12,11,27,0.75), rgba(33,33,33,0.75)75%,90%,rgba(101,115,208,0.75))"
  },
  text: {
    color: "white",
    fontSize: "20px",
    lineHeight: "3em"
  }
};

const Time = () => {
  // const birthdayDate = new Date("November 21, 1992 02:00:00");
  // const currentDate = new Date();
  const [time, setTime] = useState();

  let dateHMS = () => {
    const birthdayDate = new Date("November 21, 1992 00:00:00");
    const currentDate = new Date();
    let totalSeconde = (currentDate - birthdayDate) / 1000;

    let jours = Math.floor(totalSeconde / (60 * 60 * 24));

    let heure = Math.floor((totalSeconde - jours * 60 * 60 * 24) / (60 * 60));

    let minute = Math.floor(
      (totalSeconde - (jours * 60 * 60 * 24 + heure * 60 * 60)) / 60
    );

    let seconde = Math.floor(
      totalSeconde - (jours * 60 * 60 * 24 + heure * 60 * 60 + minute * 60)
    );

    if (minute < 10) {
      minute = "0" + minute;
    }
    if (seconde < 10) {
      seconde = "0" + seconde;
    }
    if (heure < 10) {
      heure = "0" + heure;
    }
    // let Actualisation = setTimeout("dateHMS()", 1000);

    setTime(`${jours} : ${heure} : ${minute} : ${seconde}`);
  };

  setInterval(dateHMS, 1000);

  return (
    <div style={style.root}>
      <span style={style.text}>
        <b>Temps &nbsp;: </b>
      </span>
      <span style={style.text}>
        <b>{time}</b>
      </span>
    </div>
  );
};

export default Time;
