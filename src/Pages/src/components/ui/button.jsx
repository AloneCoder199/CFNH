// src/components/ui/button.jsx
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

// ✅ Reusable Button component
export const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
  ...rest
}) => {
  const baseStyles =
    "px-6 py-2 rounded-2xl font-semibold transition duration-300 shadow-md";

  const variants = {
    primary: "bg-[#ff6f61] text-white hover:bg-[#e85c50]",
    secondary: "bg-white text-[#240046] border border-[#240046] hover:bg-[#f3f3f3]",
    ghost: "bg-transparent text-white border border-white hover:bg-white hover:text-[#240046]",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={classNames(baseStyles, variants[variant], className)}
      {...rest}
    >
      {children}
    </button>
  );
};

// 👇 Type check (optional but good practice)
Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
  variant: PropTypes.oneOf(["primary", "secondary", "ghost"]),
  className: PropTypes.string,
};
