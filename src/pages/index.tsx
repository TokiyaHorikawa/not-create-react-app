import React from "react";
import { Link } from "react-router-dom";

const Index: React.FC = () => {
  return (
    <div>
      <p>this is Index</p>
      <Link to="/sample">sample</Link>
    </div>
  );
};

export default Index;
