import React, { useContext } from "react";
import Card from "../../UI/Card/Card";
import CardContent from "../../UI/Card/CardContent";
import MenuItem from "./MenuItem";
import { AppContext } from "../../../Context/app-context";
import List from "../../UI/List/List";
import Divider from "../../UI/Divider/Divider";
const Menu = () => {
  const ctx = useContext(AppContext);
  return (
    <Card>
      <CardContent>
        <List component="nav" ariaLabel="menu">
          {ctx.menu.length > 0
            ? ctx.menu.map((item, index) => {
                return (
                  <>
                    <MenuItem
                      key={item.id}
                      id={item.id}
                      title={item.title}
                      description={item.description}
                      price={item.price}
                      cartAddHandler={ctx.cartAddHandler}
                      snackbarHandler={ctx.snackbarHandler}
                    />
                    {index < ctx.menu.length - 1 && <Divider />}
                  </>
                );
              })
            : null}
        </List>
      </CardContent>
    </Card>
  );
};

export default Menu;
