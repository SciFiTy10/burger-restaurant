import React from "react";
import GridItemContainer from "../Grid/GridItemContainer";
import ItemTitle from "../../Item/ItemTitle";
import ItemDescription from "../../Item/ItemDescription";
import ItemPrice from "../../Item/ItemPrice";
import ItemPriceQuantity from "../../Item/ItemPriceQuantity";

const ItemInfoContainer = (props) => {
  return (
    <GridItemContainer spacing={props.spacing}>
      <ItemTitle variant={props.titleVariant} title={props.title}></ItemTitle>
      {props.isCart ? (
        <ItemPriceQuantity price={props.price} amount={props.amount} />
      ) : (
        <>
          <ItemDescription description={props.description} />
          <ItemPrice price={props.price} />
        </>
      )}
    </GridItemContainer>
  );
};

export default ItemInfoContainer;
