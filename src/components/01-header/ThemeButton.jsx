import React, { useEffect, useState } from "react";

export default function ThemeButton() {

  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  function toggleTheme() {
    setIsDark((prev) => !prev);
  }

  useEffect(() => {
    const body = document.body;
    if (isDark) {
      body.classList.add("dark");
      body.classList.remove("light");
    localStorage.setItem("theme", "dark");
    } else {
      body.classList.add("light");
      body.classList.remove("dark");
    localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <div className="theme-icons-container">
      <button className="theme-button" onClick={toggleTheme}>
        <i
          className={`fa-regular fa-moon dark-icon ${isDark ? "active" : ""}`}
        ></i>
        <i
          className={`fa-regular fa-sun light-icon ${!isDark ? "active" : ""}`}
        ></i>
      </button>
    </div>
  );
}
