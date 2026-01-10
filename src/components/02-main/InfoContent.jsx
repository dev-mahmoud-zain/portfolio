import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function InfoContent() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Node Js", "React Js"],
      typeSpeed: 80,
      backSpeed: 40,
      backDelay: 2000,
      loop: true,
      showCursor: true,
      cursorChar: "",
      startDelay:500,
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
        MERN Stack Developer | <span className="typed-text" ref={el} />{" "}
      </h2>

      <p className="info">
        With expertise in Node.js, Express.js, and MongoDB, I specialize in
        building clean and scalable backend systems and well-structured REST
        APIs. I focus on application logic, authentication, and database design
        to deliver reliable solutions. With a strong foundation in React, I
        ensure smooth integration between backend services and responsive user
        interfaces.
      </p>
    </>
  );
}