import React from "react";

function Button({ type = "default", className, children, onClick }) {
  return (
    <button onClick={onClick} className={[`btn-${type}`, className].join(" ")}>
      {children}
    </button>
  );
}

export default Button;
