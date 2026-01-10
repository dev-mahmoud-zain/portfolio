import React, { useState } from "react";
import  "./preview-cv.css"

export default function PreviewCV() {

  const [isHidden ,setIsHidden] = useState(true);

  function toggleHowCv(){
    setIsHidden((prev)=>!prev)
  }

  return (
    <div className="cv-preview">
      <h2 className="title">Preview My CV</h2>
      <button className={`preview-button btn ${!isHidden&&"active"}`} onClick={toggleHowCv}>{isHidden?"Show CV":"Hide CV"}</button>
      <iframe className={`${!isHidden && "visible"}`}
        src="./Backend-Cv.pdf"
        width="100%"
        height="600px"
        title="Mahmoud Zain CV"
      ></iframe>
    </div>
  );
}