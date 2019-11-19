import React from "react";

import goodHarvey from "../../../resources/images/goodHarvey.jpg";
import badHarvey from "../../../resources/images/badHarvey.jpg";

const CoinImage = ({ coinSide }) => {
  const image = coinSide === 1 ? goodHarvey : badHarvey;
  const caption = coinSide === 1 ? "Doing good..." : "Doing evil...";
  return (
    <div>
      <img src={image} alt={caption} />
      <h2>{caption}</h2>
    </div>
  );
};

export default CoinImage;
