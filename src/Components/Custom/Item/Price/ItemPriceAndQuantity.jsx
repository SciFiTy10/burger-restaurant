import React from "react";
import ItemPriceContainer from "../../../Container/Item/ItemPriceContainer";
const ItemPriceAndQuantity = (props) => {
  return (
    <ItemPriceContainer>
      ${props.price} x {props.amount}
    </ItemPriceContainer>
  );
};

export default ItemPriceAndQuantity;
