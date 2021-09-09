import React from "react";
import MuiListItem from "@material-ui/core/ListItem";
import MuiGrid from "@material-ui/core/Grid";

const ListItem = (props) => {
  return (
    <MuiListItem divider={props.divider}>
      <MuiGrid container>{props.children}</MuiGrid>
    </MuiListItem>
  );
};

export default ListItem;
