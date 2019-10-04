import React from "react";

import Github from "./Github";
import Gmail from "./Gmail";
import Linkedin from "./Linkedin";
import Twitter from "./Twitter";

const Icon = props => {
  switch (props.name) {
    case "github":
      return <Github className="github" {...props} />;
    case "gmail":
      return <Gmail className="gmail" {...props} />;
    case "linkedin":
      return <Linkedin className="linkedin" {...props} />;
    case "twitter":
      return <Twitter className="twitter" {...props} />;
    default:
      return;
  }
};

export default Icon;
