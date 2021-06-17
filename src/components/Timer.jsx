import React, { useState, useEffect } from "react";

const Timer = ({ setStop, questionNo }) => {
  const [timer, setTimer] = useState(30);
  useEffect(() => {
    if (timer === 0) {
      return setStop(true);
    }
    if (timer <= 0) {
      return;
    } else {
      const interval = setInterval(() => {
        setTimer((prev) => prev===0 ? prev:prev - 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, []);

  useEffect(() => {
    setTimer(30);
  }, [questionNo]);
  return <div>{timer}</div>;
};

export default Timer;
