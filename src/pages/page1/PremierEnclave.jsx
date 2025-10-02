import React from "react";
import { Link } from "react-router-dom";

const PremierEnclave = () => {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>Premier Enclave</h1>
      <p>Details about Premier Enclave...</p>
      <Link to="/">⬅ Back to Home</Link>
    </div>
  );
};

export default PremierEnclave;
