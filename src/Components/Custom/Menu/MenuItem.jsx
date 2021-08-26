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
      <GridItem xs={9} sm={8}>
        <ItemInfoContainer title={props.title} titleVariant="h6">
          <ItemDescription description={props.description} />
          <ItemPrice price={props.price} />
        </ItemInfoContainer>
      </GridItem>
      <GridItem xs={1} sm={3}></GridItem>
      <GridItem xs={2} sm={1}>
        <ItemAmountAdd
          id={props.id}
          title={props.title}
          price={props.price}
          cartAddHandler={props.cartAddHandler}
          snackbarHandler={props.snackbarHandler}
        />
      </GridItem>
    </ListItem>
  );
};

export default MenuItem;
