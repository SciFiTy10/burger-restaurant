//reducer function for managing the cart's state
export const cartReducer = (state, action) => {
  //determine which action the user is taking
  switch (action.type) {
    case "ADD_ITEM":
      //create a variable for the current state
      const currentCart = [...state];
      //determine whether the cart contains this item
      const existingItem = currentCart.filter(
        (item) => item.id === action.payload.id
      )[0];
      //check if the item exists
      if (existingItem !== undefined) {
        //get the existing amount
        const currentAmount = existingItem.amount;
        //determine the new amount
        const newAmount = currentAmount + action.payload.amount;
        //update the quantity on the existingItem
        existingItem.amount = newAmount;
        //update the currentCart with the updated object
        const newCart = currentCart.map((item) =>
          item.id === action.payload.id ? existingItem : item
        );
        //update the state of the cart
        return newCart;
      } else {
        //the item doesn't exist yet so we need to add it to the cart
        return [...state, action.payload];
      }
    case "REMOVE_ITEM":
      //create a variable for the current state
      const cart = [...state];
      //get the existing item in the cart
      const itemToBeRemoved = cart.find(
        (item) => item.id === action.payload.id
      );
      //if the itemToBeRemoved is on its last one
      if (itemToBeRemoved.amount === 1) {
        //set the item to be removed
        //open the confirmation dialog to ensure the user wants to remove this item from the cart
      } else {
        //deduct 1 from the item's amount
        itemToBeRemoved.amount -= 1;
        //update the cart with the updated item
        const updatedCart = cart.map((item) =>
          item.id === action.payload.id ? itemToBeRemoved : item
        );
        //update the state
        return updatedCart;
      }
    default:
      return state;
  }
};
