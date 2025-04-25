import React, { useEffect, useState } from "react";

const Animation = ({ isAnimating }) => {
  const [gradientSize, setGradientSize] = useState("0% 0%");
  const [transitionDuration, setTransitionDuration] = useState("1s"); // Default to faster expansion

  useEffect(() => {
    if (isAnimating) {
      setTransitionDuration("1s"); // Faster expansion
      setGradientSize("100% 20%"); // Expand gradient
      setTimeout(() => {
        setTransitionDuration("2s"); // Slower shrinking
        setGradientSize("0% 0%"); // Shrink gradient
      }, 1000); // Switch to shrinking after 1 second
    }
  }, [isAnimating]);

  return (
    <div className="intelligence_gradient_container">
      <span
        style={{
          display: "block",
          width: "100%",
          maxWidth: "800px",
          height: "350px",
          backgroundImage:
            "linear-gradient(90deg, #89aaf8 20%, #b770fc 40%, #d24dc3 60%, #e85560 80%, #ee7b6b 100%)",
          backgroundSize: gradientSize,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top center",
          filter: "blur(35px)",
          position: "absolute",
          top: "-50px",
          transition: `all ${transitionDuration} ease-in-out`, // Dynamic transition duration
        }}
      ></span>
    </div>
  );
};

export default Animation;
