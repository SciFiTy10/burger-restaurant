import React from "react";
import ListItem from "../../UI/List/ListItem";
import MuiGrid from "@material-ui/core/Grid";
import ItemTitle from "../Item/Info/ItemTitle";
import ItemDescription from "../Item/Info/ItemDescription";
import ItemPrice from "../Item/Price/ItemPrice";
import ItemAmount from "../Item/Amount/ItemAmount";

const MenuItem = (props) => {
  return (
    <ListItem divider={props.divider}>
      <MuiGrid item xs={12} sm={7} md={8}>
        <ItemTitle variant="h6">{props.title}</ItemTitle>
        <ItemDescription description={props.description} />
        <ItemPrice price={props.price} />
      </MuiGrid>
      <MuiGrid item xs={12} sm={5} md={4}>
        <ItemAmount
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
          removeFromCartDialogHandler={props.removeFromCartDialogHandler}
          snackbarHandler={props.snackbarHandler}
          itemType="menu"
        />
      </MuiGrid>
    </ListItem>
  );
};

export default MenuItem;
