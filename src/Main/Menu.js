import React from "react";
import List from "@material-ui/core/List";
import MenuItem from "./MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import menuStyles from "../styles/menu.module.css";

const useStyles = makeStyles((theme) => ({
  listBackground: {
    backgroundColor: theme.palette.background.paper,
  },
}));

const Menu = (props) => {
  const classes = useStyles();

  return (
    <List className={menuStyles.list} component="nav" aria-label="menu">
      {props.menuItems.length > 0
        ? props.menuItems.map((item) => {
            return <MenuItem />;
          })
        : null}
    </List>
  );
};

export default Menu;
