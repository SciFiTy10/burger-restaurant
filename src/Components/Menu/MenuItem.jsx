import React from "react";
import ListItem from "../List/ListItem";
import ItemInfoContainer from "../Container/Item/ItemInfoContainer";
import HideOnPhone from "../Hidden/HideOnPhone";
import GridItem from "../Grid/GridItem";
import ItemAmountAdd from "../Item/Amount/ItemAmountAdd";
import ItemDescription from "../Item/Info/ItemDescription";
import ItemPrice from "../Item/Price/ItemPrice";

const MenuItem = (props) => {
  return (
    <ListItem>
      <ItemInfoContainer xs={8} title={props.title} titleVariant="h6">
        <ItemDescription description={props.description} />
        <ItemPrice price={props.price} />
      </ItemInfoContainer>
      <HideOnPhone>
        <GridItem xs={3}></GridItem>
      </HideOnPhone>
      <ItemAmountAdd
        id={props.id}
        title={props.title}
        price={props.price}
        cartAddHandler={props.cartAddHandler}
        snackbarHandler={props.snackbarHandler}
      />
    </ListItem>
  );
};

export default MenuItem;
