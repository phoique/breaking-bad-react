import React from "react";

function Loading({ center = true }) {
  return (
    <div className={center ? "d-flex justify-content-center" : ""}>
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default Loading;
