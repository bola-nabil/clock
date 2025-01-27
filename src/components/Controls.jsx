import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementSessionTime,
  decrementSessionTime,
  incrementBreakTime,
  decrementBreakTime,
} from "../store/slices/timerSlice";
import "../styles/controls.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const Controls = () => {
  const { sessionTime, breakTime, isActive } = useSelector(
    (state) => state.timer
  );
  const dispatch = useDispatch();
  return (
    <div className="controls">
      <div className="break">
        <h3>Break Length</h3>
        <div className="icons">
          <div
            onClick={() => dispatch(incrementBreakTime())}
            disabled={isActive}
          >
            <FontAwesomeIcon icon={faArrowUp} />
          </div>
          <span>{breakTime}</span>
          <div
            onClick={() => dispatch(decrementBreakTime())}
            disabled={isActive}
          >
            <FontAwesomeIcon icon={faArrowDown} />
          </div>
        </div>
      </div>

      <div className="session">
        <h3>Session Length</h3>
        <div className="icons">
          <div
            onClick={() => dispatch(incrementSessionTime())}
            disabled={isActive}
          >
            <FontAwesomeIcon icon={faArrowUp} />
          </div>
          <span>{sessionTime}</span>
          <div
            onClick={() => dispatch(decrementSessionTime())}
            disabled={isActive}
          >
            <FontAwesomeIcon icon={faArrowDown} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Controls;
