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
      <h1>
        Hello ,<br />
        My Name Is <span className="my-name">Mahmoud Zain</span>
      </h1>

      <h2>
        Backend Developer | <span className="typed-text" ref={el} />{" "}  
      </h2>



      <p className="info">
        Specialized in building scalable backend systems using Node.js, Express.js, Nest Js, and MongoDB.
        I focus on designing clean architecture, secure authentication systems, and efficient database structures
        to deliver reliable and production-ready APIs.

        With solid experience in React, I ensure seamless integration between backend services
        and modern, responsive user interfaces when needed.
      </p>

      <a href="https://drive.google.com/file/d/15x_aRPMZhRyvONeN62QQvivL7FkaYtkr/view" target="_blank" className="btn">
        Preview My CV
      </a>

    </>
  );
}