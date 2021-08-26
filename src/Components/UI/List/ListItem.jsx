import React from "react";
import MuiListItem from "@material-ui/core/ListItem";
import GridContainer from "../../Layout/Grid/GridContainer";

const ListItem = (props) => {
  return (
    <MuiListItem divider={props.divider}>
      <GridContainer>{props.children}</GridContainer>
    </MuiListItem>
  );
};

export default ListItem;
