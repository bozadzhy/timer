import { useState, useEffect, useRef } from "react";
import "./App.css";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [minits, setMinits] = useState(0);
  let timeHandler = useRef();

  // если нужно что бы сразу был счетчик
  // useEffect(() => {
  //   // timeInc();
  //   return () => clearInterval(timeHandler.current);
  // },[]);

  function timeInc() {
    timeHandler.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timeHandler.current);
  }
  if (seconds === 59) {
    setSeconds(0);
    setMinits(minits + 1);
  }
  const date = new Date();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const today = date.toDateString();

  return (
    <div className="App">
      {minits > 29 && (
        <div className="rest">time to rest and do some exercise</div>
      )}

      <img
        className="photo"
        src="https://img.freepik.com/free-photo/bluish-plant-leaves-textured-background_53876-107989.jpg?w=996&t=st=1722338557~exp=1722339157~hmac=c083cf4aa445020574e861f69d0deef3e7e2db183e02f5d6fff0f249ff88e4dd"
        alt="foto"
      />

      <div className="container">
        <div>
          <div>Today {today}</div>
          {hour < 10 ? "0" + hour : hour}:{minute < 10 ? "0" + minute : minute}
        </div>
        <p>
          press <button className="btn">start</button> when you start working
        </p>
        <div>
          {minits < 10 ? "0" + minits : minits}:
          {seconds < 10 ? "0" + seconds : seconds}
        </div>
        <div>
          <button className="start" onClick={() => timeInc()}>
            start
          </button>
          <button
            className="reset"
            onClick={() => {
              setSeconds(0);
              setMinits(0);
              clearInterval(timeHandler.current);
            }}
          >
            reset
          </button>
          <button
            className="stop"
            onClick={() => clearInterval(timeHandler.current)}
          >
            stop
          </button>
        </div>
      </div>
    </div>
  );
};

export default Timer;
