import React from "react";

function Alert({ type, Text }) {
  return <div className={`alert-data alert-${type}`}>{Text}</div>;
}

export default Alert;
