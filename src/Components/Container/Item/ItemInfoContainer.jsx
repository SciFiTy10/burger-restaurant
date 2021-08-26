import React from "react";
import ItemTitle from "../../Custom/Item/Info/ItemTitle";

const ItemInfoContainer = (props) => {
  return (
    <>
      <ItemTitle variant={props.titleVariant} fontWeight="fontWeightBold">
        {props.title}
      </ItemTitle>
      {props.children}
    </>
  );
};

export default ItemInfoContainer;
