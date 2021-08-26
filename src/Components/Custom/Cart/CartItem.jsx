import React from "react";
import ListItem from "../../UI/List/ListItem";
import ItemAmountAddAndRemove from "../Item/Amount/ItemAmountAddAndRemove";
import ItemPriceAndQuantity from "../Item/Price/ItemPriceAndQuantity";
import GridItem from "../../Layout/Grid/GridItem";
import ItemTitle from "../Item/Info/ItemTitle";
import HideOnPhone from "../../Hidden/HideOnPhone";
import HideOnLargerThanPhone from "../../Hidden/HideOnLargerThanPhone";

const CartItem = (props) => {
  return (
    <ListItem divider>
      <HideOnPhone>
        <GridItem xs={6}>
          <ItemTitle variant="body1" fontWeight="fontWeightBold">
            {props.title}
          </ItemTitle>
          <ItemPriceAndQuantity price={props.price} amount={props.amount} />
        </GridItem>
        <GridItem xs={6}>
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
        </GridItem>
      </HideOnPhone>
      <HideOnLargerThanPhone>
        <GridItem xs={12}>
          <ItemTitle variant="body1" fontWeight="fontWeightBold">
            {props.title}
          </ItemTitle>
        </GridItem>
        <GridItem xs={12}>
          <ItemPriceAndQuantity
            price={props.price}
            amount={props.amount}
            mt={1}
          />
        </GridItem>
        <GridItem xs={12}>
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
        </GridItem>
      </HideOnLargerThanPhone>
    </ListItem>
  );
};

export default CartItem;
