import React from "react";
import ListItem from "../../UI/List/ListItem";
import ItemInfoContainer from "../../Container/Item/ItemInfoContainer";
import GridItem from "../../Layout/Grid/GridItem";
import ItemAmountAdd from "../Item/Amount/ItemAmountAdd";
import ItemDescription from "../Item/Info/ItemDescription";
import ItemPrice from "../Item/Price/ItemPrice";

const MenuItem = (props) => {
  return (
    <ListItem>
      <ItemInfoContainer xs={9} sm={8} title={props.title} titleVariant="h6">
        <ItemDescription description={props.description} />
        <ItemPrice price={props.price} />
      </ItemInfoContainer>
      <GridItem xs={1} sm={3}></GridItem>
      <ItemAmountAdd
        xs={2}
        sm={1}
        id={props.id}
        title={props.title}
        price={props.price}
        cartAddHandler={props.cartAddHandler}
        snackbarHandler={props.snackbarHandler}
      />
    </ListItem>
  );
};

export default MenuItem;
