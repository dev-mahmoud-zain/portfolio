import React from "react";
import "./footer.css";
export default function Footer() {
  return (
    <div className="footer">

      <p>© 2026 Mahmoud Zain. All Rights Reserved.</p>

      <p>
        Email:{" "}
        <a href="mailto:dev.mahmoud.zain@gmail.com">
          dev.mahmoud.zain@gmail.com
        </a>
      </p>

      <div className="social-icons">
        <a
          href="https://www.linkedin.com/in/dev-mahmoud-zain/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a
          href="https://www.facebook.com/dev.mahmoud.zain"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-facebook"></i>
        </a>
        <a
          href="https://wa.me/+201551975456"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-whatsapp"></i>
        </a>
        <a
          href="https://github.com/dev-mahmoud-zain"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-github"></i>
        </a>
      </div>
    </div>
  );
}
