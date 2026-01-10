import React from "react";

export default function SocialIcons() {
  return (
    <div className="social-icons">
      <a
        href="https://www.linkedin.com/in/dev-mahmoud-zain/"
        target="_blank"
        rel="noopener noreferrer"
        title="Visit My Linkedin Account"
        aria-label="My Linkedin Account"
      >
        <i className="fa-brands fa-linkedin"></i>
      </a>

      <a
        href="https://www.facebook.com/dev.mahmoud.zain"
        target="_blank"
        rel="noopener noreferrer"
        title="Visit My Facebook Account"
        aria-label="My Facebook Account"
      >
        <i className="fa-brands fa-facebook"></i>
      </a>

      <a
        href="https://wa.me/+201551975456"
        target="_blank"
        rel="noopener noreferrer"
        title="Text Me On Whatsapp"
        aria-label="My Whatsapp Contact Link"
      >
        <i className="fa-brands fa-whatsapp"></i>
      </a>

      <a
        href="https://github.com/dev-mahmoud-zain"
        target="_blank"
        rel="noopener noreferrer"
        title="Visit My GitHub Profile"
        aria-label="My GitHub profile"
      >
        <i className="fa-brands fa-github"></i>
      </a>
    </div>
  );
}
