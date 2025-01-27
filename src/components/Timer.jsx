import React, { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrementTimeLeft, switchMode } from "../store/slices/timerSlice";
import "../styles/timer.css";

const Timer = () => {
  const { timeLeft, isActive, isBreak } = useSelector((state) => state.timer);
  const dispatch = useDispatch();
  const sound = useMemo(() => new Audio(require("../sounds/timer.mp3")), []);
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  };

  useEffect(() => {
    let timer;
    if (isActive && timeLeft > 0) {
      timer = setInterval(() => {
        dispatch(decrementTimeLeft());
      }, 1000);
    } else if (isActive && timeLeft === 0) {
      sound.play();
      dispatch(switchMode());
    }
    return () => clearInterval(timer);
  }, [isActive, timeLeft, sound, dispatch]);
  return (
    <div className="timer">
      <div className="content">
        <h2>{isBreak ? "Break" : "Session"}</h2>
        <h1 className={timeLeft < 60 ? "less" : ""}>{formatTime(timeLeft)}</h1>
      </div>
    </div>
  );
};

export default Timer;
