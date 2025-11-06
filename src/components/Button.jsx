import React from "react";

export default function Button({ onClick, children, className = "", ...props }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200 disabled:opacity-50 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

