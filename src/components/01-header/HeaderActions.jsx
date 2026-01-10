import React, { useState } from "react";

export default function HeaderActions({isOpen,toggleMenu}) {


  return (
    <div>
      <a href="#home">
        {" "}
        <img src="./logo.svg" alt="Dev Mahmoud Zain logo" />
      </a>

      <button
        className={`menu-button ${isOpen ? "menu-open" : "menu-close"}`}
        onClick={toggleMenu}
      >
        <i className="fa-solid fa-bars"></i>
      </button>
    </div>
  );
}
