import React from "react";

const IntroOverlay = (props) => {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <>
      <div className="intro-overlay">
        <div className="top">
          <div className="overlay-top" />
          <div className="overlay-top" />
          <div className="overlay-top" />
        </div>
        <div className="bottom">
          <div className="overlay-bottom"> </div>
          <div className="overlay-bottom"> </div>
          <div className="overlay-bottom"> </div>
        </div>
      </div>
    </>
  );
};

export default IntroOverlay;
