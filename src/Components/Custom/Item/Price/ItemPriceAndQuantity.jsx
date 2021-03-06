import React from "react";
import ItemPriceContainer from "./Container/ItemPriceContainer";
const ItemPriceAndQuantity = (props) => {
  return (
    <ItemPriceContainer mt={props.mt}>
      ${props.price} x {props.amount}
    </ItemPriceContainer>
  );
};

export default ItemPriceAndQuantity;
