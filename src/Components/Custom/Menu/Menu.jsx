import React, { useContext } from "react";
import Card from "../../UI/Card/Card";
import CardContent from "../../UI/Card/CardContent";
import MenuItem from "./MenuItem";
import { AppContext } from "../../../Context/app-context";
import List from "../../UI/List/List";
const Menu = () => {
  const ctx = useContext(AppContext);
  return (
    <Card>
      <CardContent>
        <List component="nav" ariaLabel="menu">
          {ctx.menu.length > 0
            ? ctx.menu.map((item, index) => {
                //get the item in the cart which matches the current menu item
                const cartItem = ctx.cart.find(
                  (cartItem) => cartItem.id === item.id
                );
                //get the amount
                const amount = cartItem === undefined ? 0 : cartItem.amount;
                return (
                  <MenuItem
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    description={item.description}
                    price={item.price}
                    amount={amount}
                    cartAddHandler={ctx.cartAddHandler}
                    cartRemoveHandler={ctx.cartRemoveHandler}
                    cartDialogHandler={ctx.cartDialogHandler}
                    confirmDialogHandler={ctx.confirmDialogHandler}
                    setItemToBeCompletelyRemovedFromCartHandler={
                      ctx.setItemToBeCompletelyRemovedFromCartHandler
                    }
                    snackbarHandler={ctx.snackbarHandler}
                    divider={index < ctx.menu.length - 1}
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
