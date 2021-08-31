import React from "react";
import ItemPriceContainer from "../../../Container/Item/ItemPriceContainer";
const ItemPrice = (props) => {
  return <ItemPriceContainer mt={props.mt}>${props.price}</ItemPriceContainer>;
};

export default ItemPrice;
