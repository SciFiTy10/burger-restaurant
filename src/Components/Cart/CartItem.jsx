import React from "react";
import ListItem from "../List/ListItem";
import ItemInfoContainer from "../Container/Item/ItemInfoContainer";
import ItemAmountContainer from "../Container/Item/ItemAmountContainer";
import GridItem from "../Grid/GridItem";
import IconButton from "../Button/IconButton";

const CartItem = (props) => {
  return (
    <ListItem>
      <ItemInfoContainer
        isCart={true}
        xs={6}
        title={props.title}
        titleVariant="body1"
        description={props.description}
        price={props.price}
        amount={props.amount}
      ></ItemInfoContainer>
      <ItemAmountContainer props={props} />
    </ListItem>
  );
};

export default CartItem;
