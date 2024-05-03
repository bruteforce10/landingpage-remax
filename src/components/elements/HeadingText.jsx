import React from "react";

const HeadingText = ({ text, highlight }) => {
  return (
    <h3 className="font-bold text-5xl text-blue-remax">
      {text} <span className="text-stroke">{highlight}</span>
    </h3>
  );
};

export default HeadingText;
