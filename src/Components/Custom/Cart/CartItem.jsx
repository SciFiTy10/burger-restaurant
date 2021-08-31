import React from "react";
import ListItem from "../../UI/List/ListItem";
import ItemAmount from "../Item/Amount/ItemAmount";
import ItemPriceAndQuantity from "../Item/Price/ItemPriceAndQuantity";
import GridItem from "../../Spacing/Grid/GridItem";
import ItemTitle from "../Item/Info/ItemTitle";

const CartItem = (props) => {
  return (
    <ListItem divider>
      <GridItem xs={12} sm={6}>
        <ItemTitle variant="body1" fontWeight="fontWeightBold">
          {props.title}
        </ItemTitle>
        <ItemPriceAndQuantity price={props.price} amount={props.amount} />
      </GridItem>
      <GridItem xs={12} sm={6}>
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
        />
      </GridItem>
    </ListItem>
  );
};

export default CartItem;
