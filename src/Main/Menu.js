import React, { useContext } from "react";
import List from "@material-ui/core/List";
import MenuItem from "./MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import menuStyles from "../styles/menu.module.css";
import { AppContext } from "../Context/app-context";

const useStyles = makeStyles((theme) => ({
  listBackground: {
    backgroundColor: theme.palette.background.paper,
  },
}));

const Menu = () => {
  const classes = useStyles();
  const ctx = useContext(AppContext);
  return (
    <List className={menuStyles.list} component="nav" aria-label="menu">
      {ctx.menuList.length > 0
        ? ctx.menuList.map((item) => {
            return (
              <MenuItem
                key={item.id}
                id={item.id}
                title={item.title}
                description={item.description}
                price={item.price}
                amount={1}
                onItemChange={ctx.onItemChange}
              />
            );
          })
        : null}
    </List>
  );
};

export default Menu;
