import React from "react";
import MuiListItem from "@material-ui/core/ListItem";
import GridContainer from "../../Grid/GridContainer";

const ListItem = (props) => {
  return (
    <MuiListItem>
      <GridContainer>{props.children}</GridContainer>
    </MuiListItem>
  );
};

export default ListItem;
