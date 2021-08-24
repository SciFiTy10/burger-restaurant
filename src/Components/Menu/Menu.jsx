import React, { useContext } from "react";
import MuiCard from "@material-ui/core/Card";
import MuiCardContent from "@material-ui/core/CardContent";
import MenuItem from "./MenuItem";
import { AppContext } from "../../Context/app-context";
import List from "../List/List";

const Menu = () => {
  const ctx = useContext(AppContext);
  return (
    <MuiCard>
      <MuiCardContent>
        <List component="nav" ariaLabel="menu">
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
      </MuiCardContent>
    </MuiCard>
  );
};

export default Menu;
