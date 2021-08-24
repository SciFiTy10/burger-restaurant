import React from "react";
import GridItem from "../../Grid/GridItem";
import ItemTitle from "../../Item/Info/ItemTitle";

const ItemInfoContainer = (props) => {
  return (
    <GridItem xs={props.xs}>
      <ItemTitle variant={props.titleVariant} title={props.title}></ItemTitle>
      {props.children}
    </GridItem>
  );
};

export default ItemInfoContainer;
