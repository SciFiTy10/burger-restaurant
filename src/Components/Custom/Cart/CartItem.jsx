import React from "react";
import ListItem from "../../UI/List/ListItem";
import ItemInfoContainer from "../../Container/Item/ItemInfoContainer";
import ItemAmountAddAndRemove from "../Item/Amount/ItemAmountAddAndRemove";
import ItemPriceAndQuantity from "../Item/Price/ItemPriceAndQuantity";
import GridItem from "../../Layout/Grid/GridItem";

const CartItem = (props) => {
  return (
    <ListItem>
      <GridItem xs={6} sm={6}>
        <ItemInfoContainer title={props.title} titleVariant="body1">
          <ItemPriceAndQuantity price={props.price} amount={props.amount} />
        </ItemInfoContainer>
      </GridItem>
      <GridItem xs={6} sm={6}>
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
    </ListItem>
  );
};

export default CartItem;
