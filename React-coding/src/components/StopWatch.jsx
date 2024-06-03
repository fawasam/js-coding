import React, { useEffect, useState } from "react";

const StopWatch = () => {
  const [isRunning, setisRunning] = useState(false);
  const [elapsedTime, setelapsedTime] = useState(0);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setelapsedTime((prev) => prev + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isRunning]);

  const start = () => {
    setisRunning(true);
  };

  const stop = () => {
    setisRunning(false);
  };

  const reset = () => {
    setisRunning(false);
    setelapsedTime(0);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = Math.floor((time % 1000) / 10);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}.${
      milliseconds < 10 ? "0" : ""
    }${milliseconds}`;
  };

  let value = 3 + "22";
  let value2 = 3 - "2";
  console.log(value);
  console.log(value2);
  console.log(typeof value2);

  // for (let i = 0; i <= 2; i++) {
  //   console.log(i);
  //   setTimeout(function () {
  //     console.log(i);
  //   }, 1000);
  // }

  return (
    <div>
      <h1>Stop Watch</h1>
      {formatTime(elapsedTime)}
      <div className="">
        <button onClick={start}>Start</button>
        <button onClick={stop}>Stop</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default StopWatch;
