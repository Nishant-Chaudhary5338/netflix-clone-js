/** @format */

import React from "react";
import cn from "classnames";

function Button({ theme, children, ...rest }) {
  const themeClasses = cn(
    "px-4 py-2 cursor-pointer border text-white rounded-sm",
    {
      "bg-red-600  border-red-700": theme === "primary",
      "border-red-600 text-red-600 text-bold": theme === "secondary",
      "bg-white text-black border-black": theme === "white",
    }
  );
  return (
    <button className={themeClasses} {...rest}>
      {children}
    </button>
  );
}

export default Button;
