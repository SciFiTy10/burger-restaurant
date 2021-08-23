import React, { useState } from "react";
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
        titleVariant="h6"
        title={props.title}
        description={props.description}
        price={props.price}
      />
      <HideOnPhone>
        <GridItem xs={3}></GridItem>
      </HideOnPhone>
      <ItemAmountContainer xs={1} />
    </ListItem>
  );
};

export default MenuItem;
