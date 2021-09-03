import { cartReducer } from "../cartReducer";

describe("removing an item completely from the cartReducer", () => {
  //initialize an array
  const initialState = [];
  beforeEach(() => {
    //add an item to the array
    initialState.push({
      id: 1,
      title: "Royale With Cheese",
      price: 9.99,
      amount: 1,
    });
  });

  afterEach(() => {
    //reset the original array
    initialState.splice(0, initialState.length);
  });

  it("should remove an item completely from the cart", () => {
    const updateAction = {
      type: "REMOVE_ITEM_COMPLETELY_FROM_CART",
      payload: {
        id: 1,
        title: "Royale With Cheese",
        price: 9.99,
        amount: 1,
      },
    };
    const updatedState = cartReducer(initialState, updateAction);
    expect(updatedState).toEqual([]);
  });
});
