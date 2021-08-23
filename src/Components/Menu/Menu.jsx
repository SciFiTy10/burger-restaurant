import React, { useContext } from "react";
import { Card, CardContent, List } from "@material-ui/core";
import MenuItem from "./MenuItem";
import { AppContext } from "../../Context/app-context";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  list: {
    backgroundColor: theme.palette.background.paper,
  },
}));

const Menu = () => {
  const ctx = useContext(AppContext);
  const classes = useStyles();
  return (
    <Card>
      <CardContent>
        <List className={classes.list} component="nav" aria-label="menu">
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
      </CardContent>
    </Card>
  );
};

export default Menu;
