import React from "react";
import { motion } from "framer-motion";

const CircularProgress = ({
  size = 150,
  strokeWidth = 20,
  progress = 75,
  circleColor = "#EBC568",
  progressColor = "#EBC568",
  children,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="absolute top-0 left-0 -rotate-90">
        <circle
          stroke={circleColor}
          fill="transparent"
          strokeWidth={strokeWidth}
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        <motion.circle
          stroke={progressColor}
          fill="transparent"
          strokeWidth={strokeWidth}
          r={radius}
          cx={size / 2}
          cy={size / 2}
          strokeDasharray={circumference}
          strokeDashoffset={circumference} // Start fully unfilled
          strokeLinecap="round"
          initial={{ strokeDashoffset: circumference }} // Starting point (empty)
          animate={{ strokeDashoffset: offset }} // End point (progress)
          transition={{
            duration: 1, // Animation duration
            ease: "easeInOut",
          }}
        />
      </svg>
      <div
        className="absolute text-white  top-0 left-0 flex flex-col items-center justify-center"
        style={{ width: size, height: size }}
      >



      
        {children}
      </div>
    </div>
  );
};

export default CircularProgress;