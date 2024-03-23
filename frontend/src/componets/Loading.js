import React from "react";
import loading from "../assets/loading.gif";
const Loading = () => {
  return (
    <div className="loading-con">
      <div className="loading-gif">
        <img src={loading} alt="Loading gif" />
      </div>
      <div className="loading-message">
        <p>Fetching data...</p>
      </div>
    </div>
  );
};

export default Loading;
