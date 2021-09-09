import React from "react";
import ListItem from "../../UI/List/ListItem";
import ItemAmount from "../Item/Amount/ItemAmount";
import ItemPriceAndQuantity from "../Item/Price/ItemPriceAndQuantity";
import MuiGrid from "@material-ui/core/Grid";
import ItemTitle from "../Item/Info/ItemTitle";

const CartItem = (props) => {
  return (
    <ListItem divider>
      <MuiGrid item xs={12} sm={6}>
        <ItemTitle variant="body1" fontWeight="fontWeightBold">
          {props.title}
        </ItemTitle>
        <ItemPriceAndQuantity price={props.price} amount={props.amount} />
      </MuiGrid>
      <MuiGrid item xs={12} sm={6}>
        <ItemAmount
          id={props.id}
          title={props.title}
          price={props.price}
          amount={props.amount}
          cartAddHandler={props.cartAddHandler}
          setItemToBeCompletelyRemovedFromCartHandler={
            props.setItemToBeCompletelyRemovedFromCartHandler
          }
          cartDialogHandler={props.cartDialogHandler}
          removeFromCartDialogHandler={props.removeFromCartDialogHandler}
          cartRemoveHandler={props.cartRemoveHandler}
          itemType="cart"
        />
      </MuiGrid>
    </ListItem>
  );
};

export default CartItem;
