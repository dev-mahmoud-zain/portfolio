import "./header.css";
import ThemeButton from "./ThemeButton";
import Navbar from "./navbar";
import HeaderActions from "./HeaderActions";
import PhoneMenu from "./PhoneMenu";
import {  useEffect, useState } from "react";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen((prev) => !prev);
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);


  return (
    <div className="header">
      <PhoneMenu isOpen={isOpen} toggleMenu={toggleMenu} />
      <HeaderActions isOpen={isOpen} toggleMenu={toggleMenu} />

      <Navbar />

      <ThemeButton />
    </div>
  );


}