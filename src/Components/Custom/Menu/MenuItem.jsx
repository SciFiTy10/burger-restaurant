import React from "react";
import ListItem from "../../UI/List/ListItem";
import GridItem from "../../Layout/Grid/GridItem";
import ItemTitle from "../Item/Info/ItemTitle";
import ItemDescription from "../Item/Info/ItemDescription";
import ItemPrice from "../Item/Price/ItemPrice";
import ItemAmountAddAndRemove from "../Item/Amount/ItemAmountAddAndRemove";

const MenuItem = (props) => {
  return (
    <ListItem divider={props.divider}>
      <GridItem xs={12} sm={9}>
        <ItemTitle variant="h6">{props.title}</ItemTitle>
        <ItemDescription description={props.description} />
        <ItemPrice price={props.price} />
      </GridItem>
      <GridItem xs={12} sm={3}>
        <ItemAmountAddAndRemove
          id={props.id}
          title={props.title}
          price={props.price}
          amount={props.amount}
          cartAddHandler={props.cartAddHandler}
          cartRemoveHandler={props.cartRemoveHandler}
          setItemToBeCompletelyRemovedFromCartHandler={
            props.setItemToBeCompletelyRemovedFromCartHandler
          }
          cartDialogHandler={props.cartDialogHandler}
          confirmDialogHandler={props.confirmDialogHandler}
          snackbarHandler={props.snackbarHandler}
          itemType="menu"
        />
      </GridItem>
    </ListItem>
  );
};

export default MenuItem;
