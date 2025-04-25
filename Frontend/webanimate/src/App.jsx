import React, { useState } from "react";
import "./index.css";
import Animation from "./components/Animation";

const App = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleStartAnimation = () => {
    setIsAnimating(true); // Start animation
    setTimeout(() => {
      setIsAnimating(false); // Automatically stop animation after a delay
    }, 2000); // Total duration: 1 second for expansion + 2 seconds for shrinking
  };

  return (
    <div className="page-width">
      <div className="main-wrapper">
        <Animation isAnimating={isAnimating} />
        <div className="intelligence_btns_container">
          <button
            className="run_btn control_btns"
            onClick={handleStartAnimation}
          >
            Start Animation
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;