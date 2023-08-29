import React from "react";

export const DarkMode = ({ darkMode, switchMode }) => {
  return (
    <i
      className={"fa-regular change-theme " + (darkMode ? "fa-sun" : "fa-moon")}
      id="theme-button"
      onClick={switchMode}
    />
  );
};