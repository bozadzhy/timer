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
        <header className="rest">time to rest and do some exercise</header>
      )}

      <div className="container">
        <div>
          <div>Today {today}</div>
          {hour < 10 ? "0" + hour : hour}:
          {minute < 10 ? "0" + minute : minute}
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
