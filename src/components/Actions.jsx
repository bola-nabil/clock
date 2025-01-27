import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTimer, resetTimer } from "../store/slices/timerSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faPause } from "@fortawesome/free-solid-svg-icons";
import { faRepeat } from "@fortawesome/free-solid-svg-icons";
import "../styles/actions.css";

const Actions = () => {
  const { isActive } = useSelector((state) => state.timer);
  const dispatch = useDispatch();
  return (
    <div className="actions">
      <div onClick={() => dispatch(toggleTimer())}>
        {isActive ? (
          <FontAwesomeIcon icon={faPause} />
        ) : (
          <FontAwesomeIcon icon={faPlay} />
        )}
      </div>
      <div onClick={() => dispatch(resetTimer())}>
        <FontAwesomeIcon icon={faRepeat} />
      </div>
    </div>
  );
};

export default Actions;
