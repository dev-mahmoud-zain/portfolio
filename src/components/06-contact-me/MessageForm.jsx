import React, { useState } from "react";
import { useForm } from "@formspree/react";

export default function MessageForm({setSentState}) {


  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const [state, handleSubmit] = useForm("xreezkqz");

  function sendMessage(e) {
    e.preventDefault();

    let hasError = false;

    // reset warnings
    setEmailError(false);
    setMessageError(false);

    if (!email) {
      setEmailError(true);
      hasError = true;
    }

    if (!message) {
      setMessageError(true);
      hasError = true;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && !emailRegex.test(email)) {
      setEmailError(true);
      hasError = true;
    }

    if (hasError) return;

    handleSubmit(e);

    setEmail("");
    setMessage("");
  }

  if (state.succeeded) {
    setSentState(true)
  }

  return (
    <form onSubmit={sendMessage} noValidate>
      <h5>Your Email Address:</h5>
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          setEmailError(false);
        }}
        className={emailError ? "warning" : ""}
      />

      {emailError && <p>Please Enter A Valid Email Address</p>}

      <h5>Your Message:</h5>
      <textarea
        value={message}
        name="message"
        onChange={(e) => {
          setMessage(e.target.value);
          setMessageError(false);
        }}
        className={messageError ? "warning" : ""}
      ></textarea>

      {messageError && <p>Please Enter A Valid Message</p>}

      <button className="btn" type="submit">
        Send <i className="fa-regular fa-envelope"></i>
      </button>
    </form>
  );
}
