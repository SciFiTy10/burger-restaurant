import React from "react";
import CartItem from "./CartItem";
const Cart = (props) => {
  return (
    <>
      {props.cart.map((item) => {
        return (
          <CartItem
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            amount={item.amount}
            cartAddHandler={props.cartAddHandler}
            cartRemoveHandler={props.cartRemoveHandler}
            cartDialogHandler={props.cartDialogHandler}
            removeFromCartDialogHandler={props.removeFromCartDialogHandler}
            setItemToBeCompletelyRemovedFromCartHandler={
              props.setItemToBeCompletelyRemovedFromCartHandler
            }
          />
        );
      })}
    </>
  );
};

export default Cart;
