import React from "react";

function Button({ type, variant = "primary", children, ...rest }) {
  return (
    <button
      type={type === "submit" ? "submit" : "button"}
      {...rest}
      className="select-btn"
    >
      {children}
    </button>
  );
}

function SelectButton({ children, id, ...rest }) {
  return (
    <select id={id} className={"select-btn"} {...rest}>
      {children}
    </select>
  );
}

export { SelectButton };
export default Button;
