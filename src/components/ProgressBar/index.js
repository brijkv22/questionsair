import React from "react";

const ProgressBar = ({ currentStep, totalSteps }) => {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div style={{ width: "100%", background: "#ccc", borderRadius: "5px" }}>
      <div
        style={{
          width: `${progress}%`,
          height: "10px",
          background: "green",
          borderRadius: "5px",
        }}
      />
    </div>
  );
};

export default ProgressBar;
