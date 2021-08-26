import React from "react";
import ListItem from "../../UI/List/ListItem";
import GridItem from "../../Layout/Grid/GridItem";
import ItemAmountAdd from "../Item/Amount/ItemAmountAdd";
import ItemTitle from "../Item/Info/ItemTitle";
import ItemDescription from "../Item/Info/ItemDescription";
import ItemPrice from "../Item/Price/ItemPrice";
import ItemAmountAddAndRemove from "../Item/Amount/ItemAmountAddAndRemove";

const MenuItem = (props) => {
  return (
    <ListItem divider={props.divider}>
      <GridItem xs={12} sm={9}>
        <ItemTitle titleVariant="h6">{props.title}</ItemTitle>
        <ItemDescription description={props.description} />
        <ItemPrice price={props.price} />
      </GridItem>
      <GridItem xs={12} sm={3}>
        <ItemAmountAddAndRemove />
      </GridItem>
    </ListItem>
  );
};

export default MenuItem;
