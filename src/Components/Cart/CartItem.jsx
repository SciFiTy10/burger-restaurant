import React from "react";
import ListItem from "../List/ListItem";
import ItemInfoContainer from "../Container/Item/ItemInfoContainer";
import ItemAmountAddAndRemove from "../Item/Amount/ItemAmountAddAndRemove";
import ItemPriceAndQuantity from "../Item/Price/ItemPriceAndQuantity";

const CartItem = (props) => {
  return (
    <ListItem>
      <ItemInfoContainer xs={6} title={props.title} titleVariant="body1">
        <ItemPriceAndQuantity price={props.price} amount={props.amount} />
      </ItemInfoContainer>
      <ItemAmountAddAndRemove
        id={props.id}
        title={props.title}
        price={props.price}
        amount={props.amount}
        cartAddHandler={props.cartAddHandler}
        setItemToBeCompletelyRemovedFromCartHandler={
          props.setItemToBeCompletelyRemovedFromCartHandler
        }
        cartDialogHandler={props.cartDialogHandler}
        confirmDialogHandler={props.confirmDialogHandler}
        cartRemoveHandler={props.cartRemoveHandler}
      />
    </ListItem>
  );
};

export default CartItem;
