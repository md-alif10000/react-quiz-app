import React, { useRef } from "react";

const Start = ({ setUsername }) => {
  const inputRef = useRef();
  const handleClick = (e) => {
    e.preventDefault();
    inputRef.current.value && setUsername(inputRef.current.value);
  };
  return (
    <div className="start">
      <input
        type="text"
        placeholder="enter your name"
        ref={inputRef}
        className="startInput"
      />
      <button className="startButton" onClick={handleClick}>
        Start
      </button>
    </div>
  );
};

export default Start;
