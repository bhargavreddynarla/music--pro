import React from "react";
import "./Loading.scss";

const Loading = () => {
  return (
    <div className="loading">
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default Loading;
