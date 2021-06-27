import React from "react";

const SquareComponent = ({ className, state, onClick }) => {
  const classes = className ? `${className} square` : "square";

  return (
    <div onClick={onClick} className={classes}>
      {state}
    </div>
  );
};

export default SquareComponent;
