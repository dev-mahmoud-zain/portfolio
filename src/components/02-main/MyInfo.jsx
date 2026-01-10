import React from "react";
import MyImage from "./MyImage";
import InfoContent from "./InfoContent";
import SocialIcons from "./SocialIcons";

export default function MyInfo() {
  return (
    <div className="my-info">
      <MyImage />
      <InfoContent />
      <SocialIcons/>
    </div>
  );
}
