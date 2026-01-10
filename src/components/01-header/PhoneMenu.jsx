
export default function PhoneMenu({ isOpen, toggleMenu }) {
  return (
    <div
      className={`phone-menu ${isOpen ? "" : "hide-menu"}`}
    >
      <button onClick={toggleMenu} className="close-menu-button">
        {" "}
        <i className="fa-solid fa-x"></i>
      </button>

      <ul>
        <li>
          <a onClick={toggleMenu} href="#home">Home</a>
        </li>
        <span className="break"></span>
        <li>
          <a onClick={toggleMenu} href="#skills">My Skills</a>
        </li>
        <span className="break"></span>
        <li>
          <a onClick={toggleMenu} href="#projects">Projects</a>
        </li>
        <span className="break"></span>
        <li>
          <a onClick={toggleMenu} href="#contact-me">Contact Me</a>
        </li>
        <span className="break"></span>
      </ul>
    </div>
  );
}
