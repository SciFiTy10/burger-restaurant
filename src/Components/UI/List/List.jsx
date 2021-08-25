import React from "react";
import MuiList from "@material-ui/core/List";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  list: {
    backgroundColor: theme.palette.background.paper,
  },
}));

const List = (props) => {
  const classes = useStyles();

  return (
    <MuiList
      className={classes.list}
      component={props.component}
      aria-label={props.ariaLabel}
    >
      {props.children}
    </MuiList>
  );
};

export default List;
