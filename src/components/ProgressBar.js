import React, { useEffect, useState } from "react";
import "../App.css";
const ProgressBar = ({ value = 0 }) => {
  console.log(value);
  const [val, setval] = useState(value);
  useEffect(() => {
    if (val < 100) {
      setTimeout(() => {
        setval(val + 1);
      }, 200);
    }
  }, [val]);
  return (
    <div className="main">
      <div className="fill" style={{ width: `${val}%` }}>{`${val}%`}</div>
    </div>
  );
};

export default ProgressBar;
