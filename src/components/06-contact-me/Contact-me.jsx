import React, { useState } from "react";
import AnimatedImage from "./AnimatedImage";
import "./contact-me.css";
import MessageForm from "./MessageForm";
import ContactViaEmail from "./Contact-Via-Email.json";
import MessageSent from "./MessageSent.json";

export default function ContactMe() {
  const [sentState, setSentState] = useState(false);

  return (
    <section className="contact-me" id="contact-me">
      <h2 className="title">Reach Out To Me</h2>

      <div className="container">

        {!sentState && (
          <>
            <MessageForm setSentState={setSentState} />

            <AnimatedImage animationData={ContactViaEmail} />
          </>
        )}

        {sentState && (
          <div className="success-sent">
            <h4>Thanks! I’ll Get Back To You Soon</h4>

            <AnimatedImage animationData={MessageSent} loop={false} />
          </div>
        )}
      </div>
    </section>
  );
}