import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function InfoContent() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Express Js", "Nest Js"],
      typeSpeed: 80,
      backSpeed: 40,
      backDelay: 2000,
      loop: true,
      showCursor: true,
      cursorChar: "",
      startDelay: 500,
      smartBackspace: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <h2>
        Hello ,<br />
        My Name Is <span className="my-name">Mahmoud Zain</span>
      </h2>

      <h1>
        Backend Developer | <span className="typed-text" ref={el} />{" "}  
      </h1>



      <p className="info">
        Specialized in building scalable, secure, and high-performance backend systems using Node.js, Express.js, Nest.js, and MongoDB.
        I focus on clean architecture, robust authentication models, and efficient database designs to deliver reliable, production-ready APIs.
      </p>

      <p className="info">
        While I possess a solid background in front-end development (including React, HTML5, and CSS3) that allows me to ensure seamless integration and collaborate effectively, my absolute preference and focus are dedicated to backend engineering. I thrive on solving complex server-side challenges and designing the core logic that powers digital platforms.
      </p>

      <a href="https://drive.google.com/file/d/15x_aRPMZhRyvONeN62QQvivL7FkaYtkr/view" target="_blank" className="btn">
        Preview My CV
      </a>

    </>
  );
}