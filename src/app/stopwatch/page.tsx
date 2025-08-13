"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 10000);
      }, 10);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  const startWatch = () => {
    setIsRunning(true);
  };

  const stopWatch = () => {
    setIsRunning(false);
  };

  const resetWatch = () => {
    setIsRunning(false);
    setTime(0);
  };

  const formatTime = (time: number) => {
    const hours = Math.floor(time / 3600000);
    const minutes = Math.floor((time % 3600000) / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const miliseconds = Math.floor((time % 1000) / 10);
    const pad = (num: number) => num.toString().padStart(2, "0");
    return `${pad(hours)}: ${pad(minutes)} : ${pad(seconds)}: ${pad(
      miliseconds
    )}`;
  };

  return (
    <div>
      <h1>Stopwatch</h1>
      <h2>{formatTime(time)}</h2>
      <div>
        <button onClick={startWatch} disabled={isRunning}>
          Start
        </button>
        <button onClick={stopWatch} disabled={!isRunning}>
          Stop
        </button>
        <button onClick={resetWatch}>Reset</button>
      </div>
      <Link href={"/"}>Back to home</Link>
    </div>
  );
}

export default Stopwatch;
