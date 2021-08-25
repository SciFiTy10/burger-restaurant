import React from "react";
import GridItem from "../../Layout/Grid/GridItem";
import ItemTitle from "../../Custom/Item/Info/ItemTitle";

const ItemInfoContainer = (props) => {
  return (
    <GridItem xs={props.xs} sm={props.sm}>
      <ItemTitle variant={props.titleVariant} fontWeight="fontWeightBold">
        {props.title}
      </ItemTitle>
      {props.children}
    </GridItem>
  );
};

export default ItemInfoContainer;
