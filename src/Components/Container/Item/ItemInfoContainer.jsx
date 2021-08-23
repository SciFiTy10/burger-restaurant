import React from "react";
import GridItem from "../../Grid/GridItem";
import ItemTitle from "../../Item/ItemTitle";
import ItemDescription from "../../Item/ItemDescription";
import ItemPrice from "../../Item/ItemPrice";
import ItemPriceQuantity from "../../Item/ItemPriceQuantity";

const ItemInfoContainer = (props) => {
  return (
    <GridItem xs={props.xs}>
      <ItemTitle variant={props.titleVariant} title={props.title}></ItemTitle>
      {props.isCart ? (
        <ItemPriceQuantity price={props.price} amount={props.amount} />
      ) : (
        <>
          <ItemDescription description={props.description} />
          <ItemPrice price={props.price} />
        </>
      )}
    </GridItem>
  );
};

export default ItemInfoContainer;
