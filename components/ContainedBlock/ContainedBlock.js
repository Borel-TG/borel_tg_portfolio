import React from "react";

function ContainedBlock({ children, className = "" }) {
  return (
    <div className={`container mx-auto px-5 ${className}`}>{children}</div>
  );
}

export default ContainedBlock;
