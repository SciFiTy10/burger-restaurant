import React from "react";
import MuiBadge from "@material-ui/core/Badge";
const Badge = (props) => {
  return (
    <MuiBadge badgeContent={props.badgeContent} color={props.color}>
      {props.children}
    </MuiBadge>
  );
};

export default Badge;
