import React from "react";
import { Link } from "react-router-dom";

const ReactRouterLink = ({ children, ...props }) => {
  return <Link {...props}>{children}</Link>;
};

export default ReactRouterLink;
