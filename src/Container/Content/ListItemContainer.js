import React from "react";
import { Grid, ListItem } from "@material-ui/core";

const ListItemContainer = (props) => {
  return (
    <ListItem>
      <Grid container>{props.children}</Grid>
    </ListItem>
  );
};

export default ListItemContainer;
