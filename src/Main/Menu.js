import React, { useContext } from "react";
import List from "@material-ui/core/List";
import MenuItem from "./MenuItem";
import menuStyles from "../styles/menu.module.css";
import { AppContext } from "../Context/app-context";

const Menu = () => {
  const ctx = useContext(AppContext);
  return (
    <List className={menuStyles.list} component="nav" aria-label="menu">
      {ctx.menu.length > 0
        ? ctx.menu.map((item) => {
            return (
              <MenuItem
                key={item.id}
                id={item.id}
                title={item.title}
                description={item.description}
                price={item.price}
                cartAddHandler={ctx.cartAddHandler}
                snackbarHandler={ctx.snackbarHandler}
              />
            );
          })
        : null}
    </List>
  );
};

export default Menu;
