import React, { useState } from "react";
import ItemAmountAdd from "../../Item/Amount/ItemAmountAdd";
import ItemAmountAddAndRemove from "../../Item/Amount/ItemAmountAddAndRemove";

const ItemAmountContainer = (props) => {
  return (
    <>
      {props.isCart ? (
        <ItemAmountAddAndRemove />
      ) : (
        <ItemAmountAdd
          id={props.id}
          title={props.title}
          price={props.price}
          cartAddHandler={props.cartAddHandler}
          snackbarHandler={props.snackbarHandler}
        />
      )}
    </>
  );
};

export default ItemAmountContainer;
