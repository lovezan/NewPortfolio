import React from "react";

const Button = ({ name, isBeam = false, containerClass, onClick }) => {
  return (
    <button className={`btn ${containerClass}`} onClick={onClick}>
      {isBeam && (
        <span className="relative flex h-3 w-3">
          <span className="btn-ping"></span>
          <span className="btn-ping_bit"></span>
        </span>
      )}
      {name}
    </button>
  );
};

export default Button;
