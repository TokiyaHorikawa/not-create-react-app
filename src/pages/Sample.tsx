import React from "react";
import { Link } from "react-router-dom";

const Sample: React.FC = () => {
  return (
    <div>
      <p>this is Sample Page</p>
      <Link to="/">Go Index</Link>
    </div>
  );
};

export default Sample;
