import React from "react";
import ItemPriceContainer from "../../../Container/Item/ItemPriceContainer";
const ItemPrice = (props) => {
  return <ItemPriceContainer>${props.price}</ItemPriceContainer>;
};

export default ItemPrice;
