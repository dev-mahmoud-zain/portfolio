import { useState } from "react";

export default function Buttons({activeButton,setActiveButton}) {






  return (
    <div className="buttons">

      <button className={`btn ${activeButton === "all" && "active"}`}
        onClick={()=>{setActiveButton("all")}}
      >
        All Projects
      </button>

      <button className={`btn ${activeButton === "backend" && "active"}`}
        onClick={()=>{setActiveButton("backend")}}
      >
        Backend Projects
      </button>

      <button className={`btn ${activeButton === "frontend" && "active"}`}
        onClick={()=>{setActiveButton("frontend")}}
      >
        Frontend Projects
      </button>

      <button className={`btn ${activeButton === "full-stack" && "active"}`}
        onClick={()=>{setActiveButton("full-stack")}}
      >
        Full Stack Projects
      </button>

    </div>
  );
}
