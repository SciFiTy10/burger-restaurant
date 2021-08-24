import React from "react";
import ListItem from "../List/ListItem";
import ItemInfoContainer from "../Container/Item/ItemInfoContainer";
import HideOnPhone from "../Hidden/HideOnPhone";
import GridItem from "../Grid/GridItem";
import ItemAmountContainer from "../Container/Item/ItemAmountContainer";

const MenuItem = (props) => {
  return (
    <ListItem>
      <ItemInfoContainer
        isCart={false}
        xs={8}
        title={props.title}
        titleVariant="h6"
        description={props.description}
        price={props.price}
      />
      <HideOnPhone>
        <GridItem xs={3}></GridItem>
      </HideOnPhone>
      <ItemAmountContainer
        isCart={false}
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
