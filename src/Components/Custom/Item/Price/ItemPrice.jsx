import React from "react";
import ItemPriceContainer from "./Container/ItemPriceContainer";
const ItemPrice = (props) => {
  return <ItemPriceContainer mt={props.mt}>${props.price}</ItemPriceContainer>;
};

export default ItemPrice;
