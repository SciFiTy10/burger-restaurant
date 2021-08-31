import React, { useContext } from "react";
import MenuItem from "./MenuItem";
import { AppContext } from "../../../Context/app-context";

const Menu = () => {
  //grab the context object
  const ctx = useContext(AppContext);
  return (
    <>
      {ctx.menu.length > 0
        ? ctx.menu.map((item, index) => {
            //get the item in the cart which matches the current menu item
            const cartItem = ctx.cart.find(
              (cartItem) => cartItem.id === item.id
            );
            //get the amount of the current menu item
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
                removeFromCartDialogHandler={ctx.removeFromCartDialogHandler}
                setItemToBeCompletelyRemovedFromCartHandler={
                  ctx.setItemToBeCompletelyRemovedFromCartHandler
                }
                snackbarHandler={ctx.snackbarHandler}
                divider={index < ctx.menu.length - 1}
              />
            );
          })
        : null}
    </>
  );
};

export default Menu;
